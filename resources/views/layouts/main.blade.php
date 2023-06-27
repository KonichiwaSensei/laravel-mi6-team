<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>MI6 Agent's Interface</title>
    @vite('resources/css/global.scss')
    @yield('head')
</head>

<body>
    @include('common/sidepanel')

    @yield('content')
</body>

</html>
