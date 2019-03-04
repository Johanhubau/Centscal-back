<?php
//  $c->domain_name = "mydavicalsite.dyndns.org";
//  $c->sysabbr     = 'rscds';
  $c->admin_email = 'admin@example.net';
  $c->system_name = "Really Simple CalDAV Store";
//  $c->collections_always_exist = true;
//  $c->enable_row_linking = true;
  $c->default_locale = en_US.UTF-8;
  $c->pg_connect[] = 'dbname=davical port=5432 user=davical_app';
