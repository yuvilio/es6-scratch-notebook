<?php
// Ex001Starcon/Officer.php
 
namespace Ex001Starcon;

class Officer {
  private $name;
  public function __construct($name)
  {
      $this->name = $name;
  }

  public function greet(){
    return $this->name . " reporting for duty!";
  }
}
