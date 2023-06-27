@extends('layouts/main')


@section('head')
    @vite('resources/css/peopleofinterest.scss')
    @viteReactRefresh
    @vite('resources/js/peopleofinterest/people_of_interest.jsx')
@endsection

@section('content')
    <div class="content">
        <div id="react_render"></div>
    </div>
@endsection
