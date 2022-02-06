<?php
/* router by ackit - 2020 */
namespace ackit;

class ackit_router {

    private $url;
    private $pos;
    private $params = [];
    private $ackit_callback = [];

    public function __construct($uri) {
      $this->pos = stripos($this->url = stristr(htmlentities($uri),"/page?p="),"=");
      $this->params = explode('/',substr($this->url,$this->pos + 1));
    }

    public function setroute($path,$callback){
      $this->ackit_callback[$path] = $callback;
    }

    public function startrouter(){
      if(array_key_exists($this->params[0],$this->ackit_callback) === FALSE){
        die("stop being stupid");
      }
      call_user_func_array($this->ackit_callback[$this->params[0]],$this->params);
    }

}

?>

<?php
/************************************ index.php example **************************************/
/* ackit - 2020 */
//
//http://127.0.0.1/page?p=login

require_once('router.php');

use ackit\ackit_router;

//Another class in future, this just small demo

function stupid(){
  echo "stupid <br/>";
}

$route = new ackit_router($_SERVER['REQUEST_URI']);
$route->setroute('login','stupid');
$route->startrouter();
?>





