var sessionId = false;
var userData = null;

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
    s.setAttribute(
      "src",
      "https://fulmineinmano--devshared.my.salesforce.com/embeddedservice/5.0/esw.min.js"
    );
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
  embedded_svc.settings.language = "it-IT"; //For example, enter 'en' or 'en-US'
  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  if (userData !== null && typeof userData !== "undefined") {
    // User Logged In
    console.log("User Logged In");
    // Prepopulate details
    embedded_svc.settings.extraPrechatFormDetails = [
      {
        label: "First Name",
        name: "FirstName",
        value: userData.firstName,
        displayToAgent: true,
      },
      {
        label: "Last Name",
        name: "LastName",
        value: userData.lastName,
        displayToAgent: true,
      },
      {
        label: "Email",
        name: "Email",
        value: userData.email,
        displayToAgent: true,
      },
    ];
    // Website_FIM_LoggedIn_User
    embedded_svc.init(
      "https://fulmineinmano--devshared.my.salesforce.com",
      "https://devshared-sf-liveagent.cs101.force.com/liveAgentSetupFlow",
      gslbBaseURL,
      "00D1X0000000Npj",
      "Website_FIM_LoggedIn_User",
      {
        baseLiveAgentContentURL:
          "https://c.la1-c1cs-fra.salesforceliveagent.com/content",
        deploymentId: "5721X0000004ECE",
        buttonId: "5731X0000004DHg",
        baseLiveAgentURL: "https://d.la1-c1cs-fra.salesforceliveagent.com/chat",
        eswLiveAgentDevName:
          "EmbeddedServiceLiveAgent_Parent04I1X0000008PPgUAM_17d757bf263",
        isOfflineSupportEnabled: true,
      }
    );
  } else {
    // Guest user
    console.log("Guest User");
    // Website_Prospect_FIM
    embedded_svc.init(
      "https://fulmineinmano--devshared.my.salesforce.com",
      "https://devshared-sf-liveagent.cs101.force.com/liveAgentSetupFlow",
      gslbBaseURL,
      "00D1X0000000Npj",
      "Website_Prospect_FIM",
      {
        baseLiveAgentContentURL:
          "https://c.la1-c1cs-fra.salesforceliveagent.com/content",
        deploymentId: "5721X0000004ECE",
        buttonId: "5731X0000004DHg",
        baseLiveAgentURL: "https://d.la1-c1cs-fra.salesforceliveagent.com/chat",
        eswLiveAgentDevName: "Website_Prospect_FIM",
        isOfflineSupportEnabled: true,
      }
    );
  }
}
