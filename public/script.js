var sessionId = false;
var orgId = -1;
var userData = null;

let options_dev = {
  "org.id": "00D7Y000000BErs",
  "chat.src":
    "https://fulmineinmano--dev.my.salesforce.com/embeddedservice/5.0/esw.min.js",
  "chat.base.url": "https://fulmineinmano--dev.my.salesforce.com",
  "chat.agent.url":
    "https://dev-fulmineinmano--dev.cs173.force.com/liveAgentSetupFlow",
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
let options_devshared = {
  "org.id": "00D1X0000000Npj",
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
  "chat.deployment.id": "5721X0000004ECE",
  "chat.button.id": "5731X0000004DHg",
  "chat.base.liveagent.url":
    "https://d.la1-c1cs-fra.salesforceliveagent.com/chat",
};
let options_uat = {
  "org.id": "00D7Y000000BENn",
  "chat.src":
    "https://fulmineinmano--uat.my.salesforce.com/embeddedservice/5.0/esw.min.js",
  "chat.base.url": "https://fulmineinmano--uat.my.salesforce.com",
  "chat.agent.url":
    "https://uat-sf-liveagent.cs173.force.com/liveAgentSetupFlow",
  "chat.logged.username": "Website_FIM_LoggedIn_User",
  "chat.logged.agentname":
    "EmbeddedServiceLiveAgent_Parent04I1X0000008PPgUAM_17d757bf263",
  "chat.guest.username": "Website_Prospect_FIM",
  "chat.guest.agentname": "Website_Prospect_FIM",
  "chat.base.liveagent.content.url":
    "https://c.la1-c1cs-fra.salesforceliveagent.com/content",
  "chat.deployment.id": "5727Y000000Kyl7",
  "chat.button.id": "5737Y000000Kyr4",
  "chat.base.liveagent.url":
    "https://d.la1-c1cs-fra.salesforceliveagent.com/chat",
};

var options = {};

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

  var orgId = Number(url.searchParams.get("orgId"));
  if (orgId == 0 || orgId == -1) {
    orgId = 1;
  }
  console.log(orgId);
  document.getElementById("orgId").value = orgId;
  switch (orgId) {
    case 1:
      options = options_dev;
    case 2:
      options = options_devshared;
    case 3:
      options = options_uat;
  }

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

function getUrl(name, value) {
  _url = location.href.toString();
  var re = new RegExp("([?&])" + name + "=.*?(&|#|$)", "i");
  if (_url.match(re)) {
    return _url.replace(re, "$1" + name + "=" + value + "$2");
  } else {
    var hash = "";
    if (_url.indexOf("#") !== -1) {
      hash = _url.replace(/.*#/, "#");
      _url = _url.replace(/#.*/, "");
    }
    var separator = _url.indexOf("?") !== -1 ? "&" : "?";
    return _url + separator + name + "=" + value + hash;
  }
}

function setSessionIdPressed(checkbox) {
  sessionId = checkbox.checked;
  var url = getUrl("sessionId", sessionId);
  window.location.href = url;
}

function setOrgIdPressed(combobox) {
  orgId = combobox.value;
  var url = getUrl("orgId", orgId);
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
