
/* 

    Ranking System v2.0, by Wolfje (Tyler W.), 2013.

    This is a ranking script for the AliasCmd plugin in Javascript.  Install it by putting it in your Tshock\SEconomy" directory and starting the Terraria server.
    If the server is already running AliasCmd just type "/aliascmd reload" in the console to cause the script to load.

    Released under Wolfje's Don't-be-a-dick license.  You didn't write this, I did, so if you modify it don't claim the work as yours; it isn't.


	** THIS VERSION OF THE RANKING SCRIPT REQUIRES JIST AND SECONOMY UPDATE 15 OR LATER. **


    --- rankingList Object ---

    There's really nothing to it. :)

    * the first parameter is the rank key.
    * "name" must match the rank key.  Avoid spaces
    * "cost" is a SEconomy string representation of how much money it costs to be that rank, "0c" is free
    * "group" is the TShock group this rank is

    * "parentgroup" is used for hierarchy.  set it to the group of the rank that comes before it to establish a ladder
        You can specify multiple ranks with the same parent.  Doing this is going to create a tree of choices called a class trunk.
        Once a user arrives at a class trunk they cannot /rank up, they will be asked to pick a "class", but you can modify that text to whatever you like.

        You can specify as many trunks as you want.  You can have rank choices inside rank choices up to an infinite depth, the sky (or rather, your heap size) is the limit. :)

		
		"levelupcommands": [
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/i goldfish",
            "/time noon",
            "/spawnmob \"skeletron head\"",
        ],
		
*/

/*
 * Please see the forums at http://plugins.tw.id.au/ for tutorials on how 
 * to make a ranking list. 
 */
var rankingList = {
	
	    "LV0": {
        "name": "LV0",
        "parentgroup": undefined,
        "group": "LV0",
        "cost": "0"},
		
		"LV1": {
        "name": "LV1",
        "parentgroup": "LV0",
        "group": "LV1",
        "cost": "10000"},
		
		"LV2": {
        "name": "LV2",
        "parentgroup": "LV1",
        "group": "LV2",
        "cost": "25000"},
		
		"LV3": {
        "name": "LV3",
        "parentgroup": "LV2",
        "group": "LV3",
        "cost": "62500"},
		
		"LV4": {
        "name": "LV4",
        "parentgroup": "LV3",
        "group": "LV4",
        "cost": "156250"},
		
		"LV5": {
        "name": "LV5",
        "parentgroup": "LV4",
        "group": "LV5",
        "cost": "390625"},
		
		"LV6": {
        "name": "LV6",
        "parentgroup": "LV5",
        "group": "LV6",
        "cost": "976562.5"},
		
		"LV7": {
        "name": "LV7",
        "parentgroup": "LV6",
        "group": "LV7",
        "cost": "2441406.25"},
		
		"LV8": {
        "name": "LV8",
        "parentgroup": "LV7",
        "group": "LV8",
        "cost": "6,103,515.625"},
		
		"LV9": {
        "name": "L9",
        "parentgroup": "LV8",
        "group": "LV9",
        "cost": "15,258,789.0625"},
		
		"LV10": {
        "name": "LV10",
        "parentgroup": "LV9",
        "group": "LV10",
        "cost": "38,146,972.6563"}
		
}



 /*
  * change this variable to false to disable the broadcast
  * messages when people rank up.
  */
var rank_enable_broadcast = true;

 /*
  * This is a permission for groups to be EXCLUDED from the ranking system.
  * Give this permission to your moderators or special elevated ranks
  * to stop them from being able to /rank up and screw their account up.
  */
var rank_excluded_permission = "seconomy.rank.excluded";

/*
 ------------------------------------------------------------------------------------------------------------------------------------------------------
 */

/**
 * Iterates over all items pointed to by @a enumerable and executes
 * @a func with a pointer to the item inside it.
 *
 * This function acts as a fast-enumerator, with built-in prototype
 * checking.
 *
 * @param	enumerable:Array	An Array or other enumerable to iterate over
 * @param	func:function		A function pointer to execute once for each item
 * 								in the enumerable.  The function prototype must
 * 								contain one parameter which points to the item
 * 								in the enumerable.
 */
function rank_for_each_item(enumerable, func)
{
	if (enumerable == undefined || func == undefined) {
		return;
	}

	for (var item in enumerable) {
		if (item == undefined || enumerable.hasOwnProperty(item) == false) {
			continue;
		}
		
		func(enumerable[item]);
	}
}


/**
 * Finds all the parent groups for the specified group.
 *
 * @param	group:string	A string containing the group to look up
 *
 * @returns	Array with the group objects if the operation was successful,
 * 			Array with no objects if none was found, or @a undefined 
 * 			 if there was an error.
 */
function rank_find_parent(group)
{
	var parentList = undefined;

	if (rankingList == undefined || group == undefined) {
		return;
	}

	if ((parentList = new Array()) == undefined) {
		return;
	}
	
	rank_for_each_item(rankingList, function(item) {
		if (item.parentgroup == group) {
			parentList.push(item);
		}
	});

	return parentList;
}

/**
 * Finds a rank in the rank tree by the name provided by group.
 *
 * @param	group:string	A string containing the group name in it
 * 
 * @returns		The group object if it was found, or undefined if it
 * 				doesn't exist or there was an error.
 */
function rank_find(group)
{
	var rank;

	if (group == undefined || rankingList == undefined) {
		return;
	}

	rank_for_each_item(rankingList, function(item) {
		if (item.group == group) {
			rank = item;
		}
	});

	return rank;
}

/**
 * Finds a rank in the rank tree by the specified name.
 *
 * @param	rankName:string		A string containing a valid rank name as
 * 								specified by the "rank" property in the
 * 								rankingList
 *
 * @returns	The rank item if it was found, or undefined if the rank does
 * 			not exist in the tree, or an error occured.
 */
function rank_find_by_name(rankName)
{
	var rank;

	if (rankName == undefined || rankingList == undefined) {
		return;
	}

	rank_for_each_item(rankingList, function(item) {
		if (item.name.toLowerCase() == rankName.toLowerCase()) {
			rank = item;
		}
	});
	return rank;
}

/**
 * Finds the first rank in the rankingList where the parent group isn't defined,
 * which is by definition the starting rank.
 *
 * There should not be more than one rank in the ranking list with an undefined parent.
 *
 * @returns	The starting rank if one exists, or undefined if it was not found.
 */
function rank_starting_rank()
{
	var startingRank;

	if (rankingList === undefined) {
		return;
	}

	rank_for_each_item(rankingList, function(item) {
		if (item.parentgroup === undefined) {
			startingRank = item;
		}
	});

	return startingRank;
}

/**
 * Returns a human-readable error message based on a provided 
 * hard-coded error level.
 *
 * @param	msgLevel	The return-code for functions that return
 * 						an error code.
 *
 * @returns		A string containing the error message for the provided
 * 				error code.
 */
function rank_error_message(msgLevel) 
{
	if (msgLevel == undefined) {
		return "Unknown Error";
	}

	switch (msgLevel) {
		case 0:
				return "The operation completed successfully.";
		case -1:
				return "Internal error: the operation failed.";
		case -2:
				return "Internal error: Parsing money failed";
		case -3:
				return "Player does not have a bank account or the account cannot be found";
		case -4:
				return "Transfer failed.  Perhaps you don't have enough money.";
		default:
				return "Unknown error.";
	}
}

/**
 * Moves a player to a new rank specified by newRank.
 *
 * @param	player:Player	The player to move the rank
 * @param	rank:object		The rank to move the player to
 *
 * @returns		0 on success,
 * 				-1 on input parameter failure
 * 				-2 on ranking cost parse failure
 * 				-3 on bank account not found
 * 				-4 on transfer failed, too poor
 */
function rank_move(player, rank) 
{
	var rankCost;
	var seconomyAccount;

	if (player == undefined && rank == undefined) {
		return -1;
	}

	if ((rankCost = seconomy_parse_money(rank.cost)) == undefined) {
		return -2;
	}

	if (rankCost.Value == 0) {
		change_group(player, rank.group);
		rank_for_each_item(rank.levelupcommands, function(command) {
			execute_command(player, command);
		});

		return 0;
	}
	
	if ((seconomyAccount = seconomy_get_account(player)) == undefined) {
		return -3;
	}

	seconomy_pay_async(seconomyAccount, seconomy_world_account(), rankCost, 
					"rank " + rank.name, function(payResult) {
		if (payResult.TransferSucceeded == false) {
			msg(player, "You don't have enough money to become a " + rank.name);
			return -4;
		}
			
		change_group(player, rank.group);
		rank_for_each_item(rank.levelupcommands, function(command) {
			execute_command(player, command);
		});
	
		if (rank_enable_broadcast) { 
			broadcast_colour("#00AAFF", player.Name + " has become a " + rank.name.replace(/s$/i, '') + "!");
			execute_command(tshock_server(), "/firework \"" + player.Name + "\"" );
		}

		return 0;
	});
}


/**
 * Simple wrapper around moving a player to the specified rank.
 *
 * Does the move, and informs the player if the move failed,
 * and optionally does the broadcast when a player ranks up
 * successfully if rank_enable_broadcast is set to true.
 */
function rank_move_wrapper(player, rank)
{
	if (player == undefined || rank == undefined) {
		return -1;
	}
	
	if ((moveResult = rank_move(player, rank)) < 0) {
		msg(player, "Moving ranks failed: " + rank_error_message(moveResult));
		return -1;
	}


	return 0;
}


/**
 * Moves a player up the ranking tree.
 *
 * Will halt if the player is at a trunk in the tree, forcing them to make
 * a decision.  The decision is chosen with the /rank <rank name> command.
 *
 * @param	player	The player object to move up the rank tree.
 */
function rank_move_next(player, aliasRef)
{
	var rank;
	var nextrankingList;
	var moveResult;
	var nextRank;
	var rankCost;
	var rankString;

	if (player == undefined || rankingList == undefined) {
		return;
	}

	if ((nextRank = rank_starting_rank()) === undefined) {
		msg(player, "There has been an error in the ranking script, and you can't move ranks.");
		return;
	}

	if ((rank = rank_find(player.Group.Name)) === undefined) {
		rank_move_wrapper(player, rank_starting_rank());
		return;
	}

	if ((nextrankingList = rank_find_parent(rank.group)) == undefined) {
		msg(player, "There has been an error in the ranking script, and you can't move ranks.");
		return;
	}
	if (nextrankingList.length == 0) {
		msg(player, "You are already the maximum rank!");
		return;
	}
	if (nextrankingList.length == 1 && (nextRank = nextrankingList[0]) != undefined) {
		rank_move_wrapper(player, nextRank);
		return;
	}
	if (nextrankingList.length > 1) {
		msg(player, "You are a " + rank.name + ". Now you must pick a class:");
		
		rank_for_each_item(nextrankingList, function(item) {
			rankCost = seconomy_parse_money(item.cost);
			rankString = " * /rank " + item.name;
			
			if (rankCost.Value == 0) {
				rankString += " (free)";
			} else {
				rankString += " (costs " + rankCost.ToString() + ")";
			}

			msg(player, rankString);
		});

		acmd_cooldown_reset(player, aliasRef);
	}
}

/**
 * Prints a help message to the player depending on where they are in the rank
 * tree.
 *
 * @param	player	The player to print the message to, and about.
 *
 */
function rank_player_help(player) 
{
	var rank;
	var nextRank;
	var playerText;
	var rankCost;
	var rankString;

	if (player == undefined || rankingList == undefined) {
		return;
	}
	
	if ((rank = rank_find(player.Group.Name)) == undefined) {
		var startingRank;
		if ((startingRank = rank_starting_rank()) === undefined) {
			msg(player, "There is no starting rank, and you cannot rank up.");
			return;
		}

		msg(player, "You aren't a rank yet.  Your next rank is " + startingRank.name);
		return;
	}
	

	playerText = "You are a " + rank.name + ".";
	if ((nextRank = rank_find_parent(rank.group)) === undefined) {
		msg(player, "There has been an internal error in the ranking system.");
		return;
	}
	
	
	if (nextRank.length == 0) {
		playerText += " You are the maximum rank!";
		msg(player, playerText);
		return;
	} else if (nextRank.length == 1 && (rank = nextRank[0]) != undefined) {
		playerText += " Your next rank is " + rank.name;

		if ((rankCost = seconomy_parse_money(rank.cost)) == undefined) {
			playerText += ".";
		} else {
			if (rankCost.Value > 0) {
				playerText += " and costs " + rankCost.ToString() + ". To rank up, type \"/rank up\".";
			} else {
				playerText += ".";
			}
		}
	} else {
		playerText += " Type /rank up to pick a class";
	}
	msg(player, playerText);

}

/**
 The main /rank aliascommand
 
 The command itself costs nothing, that's because
 the handlers will charge if need be.

 */
acmd_alias_create( /*alias name */ "rank", /* cost */ "0c", /* Cool down seconds */0, /* permission needed */ "", /* function to execute */ function (player, parameters) {
	var command;
	var chosenClass;
	
	if (rankingList == undefined
		|| player.Group == undefined) {
		return;
	}
	
	if (tshock_has_permission(player, rank_excluded_permission)) {
		msg_colour("#FFDD00", player, "You can't rank up on this account.");
		return;
	}
	
	if (parameters.Count == 0
		|| (command = parameters[0]) == "help") {
		rank_player_help(player);
		/*
		 * Cooldown gets reset if the
		 * player is just querying what
		 * rank they are
		 */
		acmd_cooldown_reset(player, this);
		return;
	}

	if (command == "up") {
		rank_move_next(player, this);
		return;
	}

	if (!(chosenClass = rank_find_by_name(command.toString().toLowerCase()))) {
		msg_colour("#FFDD00", player, "Cannot find a rank by the name " + command + ".");
		return;
	}

	
	
	if (chosenClass.parentgroup.toLowerCase() != rank_find(player.Group.Name).name.toLowerCase()) {
		rank_player_help(player);
		return;
	}


	rank_move_wrapper(player, chosenClass);
});
