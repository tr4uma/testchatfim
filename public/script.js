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

  embedded_svc.settings.displayHelpButton = true;
  embedded_svc.settings.language = "it-IT"; //For example, enter 'en' or 'en-US'
  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  if (userData !== null && typeof userData !== "undefined") {
    // User Logged In
    console.log("User Logged In");

    embedded_svc.settings.extraPrechatFormDetails = [
      {
        "label": "issue",
        "value": "Overriding your setup",
        "displayToAgent": true
      }
    ];

    // Prepopulate fields
    embedded_svc.settings.prepopulatedPrechatFields = {
      FirstName: userData.firstName,
      LastName: userData.lastName,
      Email: userData.email,
    };
    // Disable creation of a contact and a case
    embedded_svc.snippetSettingsFile.extraPrechatInfo = [
      {
        entityName: "Contact",
        entityFieldMaps: [
          {
            doCreate: false,
            doFind: true,
            fieldName: "LastName",
            isExactMatch: true,
            label: "Last Name",
          },
          {
            doCreate: false,
            doFind: true,
            fieldName: "FirstName",
            isExactMatch: true,
            label: "First Name",
          },
          {
            doCreate: false,
            doFind: true,
            fieldName: "Email",
            isExactMatch: true,
            label: "Email",
          },
        ],
      },
      {
        entityName: "Case",
        entityFieldMaps: [
          {
            doCreate: false,
            doFind: false,
            fieldName: "Subject",
            isExactMatch: false,
            label: "Subject",
          },
        ],
      },
    ];
  } else {
    // User Logged In
    console.log("Guest User");
  }

  //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
  //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

  //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
  //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

  // Settings for Chat
  //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
  // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
  // Returns a valid button ID.
  //};
  //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
  //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
  //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

  var x = document.getElementsByClassName("fieldList");
  for (var i = 0; i < 3; i++) {
    x.childNodes[i].style.visibility = "hidden";
  }

}
