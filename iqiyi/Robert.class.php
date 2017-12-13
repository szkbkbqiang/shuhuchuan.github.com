<?php
require("Jssdk.class.php"); 

class Robert
{
  static public function getwechatsign(){
		$jssdk = new Jssdk("wxd4ab30e658af3b4e", "f7f8001b416a312c9bdd6c8dc16c387c");
		$signPackage = $jssdk->GetSignPackage();
		return $signPackage;
  }
}
//appId = "wxd4ab30e658af3b4e"
//secret = "f7f8001b416a312c9bdd6c8dc16c387c"