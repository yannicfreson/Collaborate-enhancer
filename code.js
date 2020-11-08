// ==UserScript==
// @name     Collaborate enhancer
// @version  1
// @grant    none
// @author   Storm
// @include  https://eu.bbcollab.com/collab/ui/session/join/*
// ==/UserScript==

window.addEventListener("load", (event) => {
  let loaded = false;
  if (!loaded) {
    console.log("Collaborate enhancer loaded (●_●)");
    loaded = true;
  }

  function enhance() {
    //color variables
    const bgcChat = "#36393f";
    const bgcMenu = "#2f3136";
    const bgcMenuSecondary = "#292b2f";
    const bgcMain = "#202225";
    const textColor = "#dcdddd";

    //chat variables
    let chat_history__header_ng_scope = document.getElementsByClassName(
      "chat-history__header ng-scope"
    )[0];
    let chat_history__empty_ng_scope = document.getElementsByClassName(
      "chat-history__empty ng-scope"
    )[0];
    let chat_history_container = document.getElementById(
      "chat-history-container"
    );
    let chat_input = document.getElementsByClassName("chat-input")[0];
    let chat_input_container = document.getElementById("chat-input-container");

    //bottom menu variables
    let panel_controls = document.getElementById("panel-controls");
    let panel_control_activity = document.getElementById(
      "panel-control-activity"
    );
    let panel_control_participants = document.getElementById(
      "panel-control-participants"
    );
    let panel_control_sharing = document.getElementById(
      "panel-control-sharing"
    );
    let panel_control_settings = document.getElementById(
      "panel-control-settings"
    );

    //background variables
    let session_content = document.getElementById("session-content");
    let controls_container_ng_scope = document.getElementsByClassName(
      "controls-container ng-scope"
    )[0];

    function changeChat() {
      chat_history__header_ng_scope.style.backgroundColor = bgcMenuSecondary;
      chat_history__header_ng_scope.style.color = textColor;
      chat_history__header_ng_scope.style.border = "none";

      chat_history__empty_ng_scope.style.backgroundColor = bgcChat;
      chat_history__empty_ng_scope.style.color = textColor;

      chat_history_container.style.backgroundColor = bgcChat;
      chat_history_container.style.color = textColor;
      chat_history_container.style.border = "none";

      chat_input.style.backgroundColor = bgcMenu;
      chat_input.style.border = "none";

      chat_input_container.style.backgroundColor = bgcChat;
    }

    function changeBottomMenu() {
      panel_controls.style.border = "none";

      panel_control_activity.style.backgroundColor = bgcChat;
      panel_control_participants.style.backgroundColor = bgcChat;
      panel_control_sharing.style.backgroundColor = bgcChat;
      panel_control_settings.style.backgroundColor = bgcChat;
    }

    function changeMain() {
      session_content.style.backgroundColor = bgcMain;
      controls_container_ng_scope.style.backgroundColor = bgcMain;
    }

    try {
      changeChat();
    } catch {}
    try {
      changeBottomMenu();
    } catch {}
    try {
      changeMain();
    } catch {}
  }

  //try to execute for the first time
  let i = 0;
  let intervalID = setInterval(function () {
    try {
      enhance();
    } catch {}
    i++;
    if (i > 10) {
      window.clearInterval(intervalID);
      console.log(
        "Automatic execution timed out, script will still execute on click"
      );
    }
    if (loaded) {
      window.clearInterval(intervalID);
    }
  }, 2000);

  window.addEventListener("click", (event) => {
    try {
      enhance();
    } catch {}
  });
});
