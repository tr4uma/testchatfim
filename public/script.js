var sessionId = false;
var userData = null;

var options = {
  "org.id": "00D7Y000000BErs",
  "chat.src":
    "https://fulmineinmano--devshared.my.salesforce.com/embeddedservice/5.0/esw.min.js",
  "chat.base.url": "https://fulmineinmano--devshared.my.salesforce.com",
  "chat.agent.url":
    "https://devshared-sf-liveagent.cs101.force.com/liveAgentSetupFlow",
  "chat.logged.username": "Website_FIM_LoggedIn_User",
  "chat.logged.agentname":
    "EmbeddedServiceLiveAgent_Parent04I1X0000008PPgUAM_17d757bf263",
  "chat.guest.username": "Website_Prospect_FIM",
  "chat.guest.agentname": "Website_Prospect_FIM",
  "chat.base.liveagent.content.url":
    "https://c.la1-c1cs-fra.salesforceliveagent.com/content",
  "chat.deployment.id": "5727Y000000GmeL",
  "chat.button.id": "5737Y000000Kyqz",
  "chat.base.liveagent.url":
    "https://d.la1-c1cs-fra.salesforceliveagent.com/chat",
};

function init() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var sessionId = url.searchParams.get("sessionId");
  if (sessionId == "true") {
    //let userData = $.fim.private.accountDetails;
    userData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@salesforce.com",
    };
  } else {
    userData = null;
  }
  document.getElementById("sessionId").checked = sessionId == "true";

  if (!window.embedded_svc) {
    var s = document.createElement("script");
    s.setAttribute("src", options["chat.src"]);
    s.onload = function () {
      initESW(null);
    };
    document.body.appendChild(s);
  } else {
    initESW("https://service.force.com");
  }
}

function setIdPressed(checkbox) {
  sessionId = checkbox.checked;
  var url = window.location.href.split("?")[0];
  if (url.indexOf("?") > -1) {
    url += "&";
  } else {
    url += "?";
  }
  url += "sessionId=" + sessionId;
  window.location.href = url;
}

function initESW(gslbBaseURL) {
  embedded_svc.settings.displayHelpButton = true;
  embedded_svc.settings.language = "it"; //For example, enter 'en' or 'en-US'
  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  if (userData !== null && typeof userData !== "undefined") {
    // User Logged In
    console.log("User Logged In");
    // Prepopulate details
    embedded_svc.settings.extraPrechatFormDetails = [
      {
        name: "FirstName",
        label: "First Name",
        value: userData.firstName,
        displayToAgent: true,
      },
      {
        name: "LastName",
        label: "Last Name",
        value: userData.lastName,
        displayToAgent: true,
      },
      {
        name: "Email",
        label: "Email",
        value: userData.email,
        displayToAgent: true,
      },
    ];
    // Link Contact and Account
    embedded_svc.settings.extraPrechatInfo = [
      {
        entityName: "Contact",
        saveToTranscript: "ContactId",
        entityFieldMaps: [
          {
            fieldName: "Email",
            label: "Email",
            doCreate: false,
            doFind: true,
            isExactMatch: true,
          },
        ],
      },
      {
        entityName: "Account",
        saveToTranscript: "AccountId",
        entityFieldMaps: [
          {
            fieldName: "PersonEmail",
            label: "Email",
            doCreate: false,
            doFind: true,
            isExactMatch: true,
          },
        ],
      },
    ];
    // Website_FIM_LoggedIn_User
    embedded_svc.init(
      options["chat.base.url"],
      options["chat.agent.url"],
      gslbBaseURL,
      options["org.id"],
      options["chat.logged.username"],
      {
        baseLiveAgentContentURL: options["chat.base.liveagent.content.url"],
        deploymentId: options["chat.deployment.id"],
        buttonId: options["chat.button.id"],
        baseLiveAgentURL: options["chat.base.liveagent.url"],
        eswLiveAgentDevName: options["chat.logged.agentname"],
        isOfflineSupportEnabled: true,
      }
    );
  } else {
    // Guest user
    console.log("Guest User");
    // Website_Prospect_FIM
    embedded_svc.init(
      options["chat.base.url"],
      options["chat.agent.url"],
      gslbBaseURL,
      options["org.id"],
      options["chat.guest.username"],
      {
        baseLiveAgentContentURL: options["chat.base.liveagent.content.url"],
        deploymentId: options["chat.deployment.id"],
        buttonId: options["chat.button.id"],
        baseLiveAgentURL: options["chat.base.liveagent.url"],
        eswLiveAgentDevName: options["chat.guest.agentname"],
        isOfflineSupportEnabled: true,
      }
    );
  }
}
