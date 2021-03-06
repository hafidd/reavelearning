<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>E - Learning</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Styles -->
    <!--
    <link href="{{ secure_asset('/css/custom.css') }}" rel="stylesheet">
    <link href="{{ secure_asset('/css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/custom.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
    -->
    <link href="{{ mix('/css/custom.css') }}" rel="stylesheet">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <!-- fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
</head>
<body>
<div id="app"></div>
<!--
<script src="{{ secure_asset('/js/app.js') }}"></script>
<script src="{{ asset('/js/app.js') }}"></script>
-->
<script src="{{ mix('/js/app.js') }}"></script>
<!--<script src="http://192.168.43.65:8000/js/app.js"></script>
-->
</body>
</html>
