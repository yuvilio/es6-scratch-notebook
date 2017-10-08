---
title: react-comp - 002 events
collection: posts
layout: pages/react-comp/03/002-events.nunj
excerpt:
---

React events
-------
tests

<div id="ex001Form"></div>

<div id="ex002Form"></div>


<!-- styles for the tictactoe board-->
<style>
	ol, ul {
	  padding-left: 30px;
	}

	.board-row:after {
	  clear: both;
	  content: "";
	  display: table;
	}

	.status {
	  margin-bottom: 10px;
	}

	.square {
	  background: #fff;
	  border: 1px solid #999;
	  float: left;
	  font-size: 24px;
	  font-weight: bold;
	  line-height: 34px;
	  height: 34px;
	  margin-right: -1px;
	  margin-top: -1px;
	  padding: 0;
	  text-align: center;
	  width: 34px;
	}

	.square:focus {
	  outline: none;
	}

	.kbd-navigation .square:focus {
	  background: #ddd;
	}

	.game {
	  display: flex;
	  flex-direction: row;
	}

	.game-info {
	  margin-left: 20px;
	}

</style>



lets look at the react tutorial [tic tac toe board example](https://reactjs.org/tutorial/tutorial.html#getting-started)

We'll use a board component that will manage the state of square components in a state, and communicate that state change to the squares via their props.

These are all components so they all have [props and context](https://github.com/facebook/react/blob/master/src/isomorphic/modern/class/ReactBaseClasses.js#L21-L28) and manages state using [setState](https://github.com/facebook/react/blob/master/src/isomorphic/modern/class/ReactBaseClasses.js#L57) 


<div id="tictactoe"></div>
