function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nsTMG998x9":
        Script1();
        break;
      case "64IfvjtMMAb":
        Script2();
        break;
      case "5d29E4INv9Q":
        Script3();
        break;
      case "6omkPXGbjC0":
        Script4();
        break;
      case "5WCYgI5Bist":
        Script5();
        break;
      case "6ar1Yz3HXKF":
        Script6();
        break;
      case "5pbDxXBzSHg":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

