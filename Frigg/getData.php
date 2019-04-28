<?php

#Each event is defined by an array:
$event1 = array("id"=>1, "start"=>"2019-05-02T12:30:00", "end"=>"2019-05-02T14:00:00", "allDay"=>false, "title"=>"Event1");
$event2 = array("id"=>2, "start"=>"2019-05-03", "end"=>"2019-05-03", "allDay"=>true, "title"=>"Event1");

#Add everything into and array and encode in JSON format
$events = array($event1, $event2);
$json = json_encode($events);

echo $json;

?>