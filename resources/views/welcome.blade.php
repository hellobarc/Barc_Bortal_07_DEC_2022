<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>BARC Portal - eLearning Portal of British American Resource Center</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="shortcut icon" type="image/x-icon" href="{{asset('front_asset/assets/images/favicon.ico')}}">
        <link rel="stylesheet" href="{{asset('front_asset/assets/css/vendor/plugins.min.css')}}">
        <link rel="stylesheet" href="{{asset('front_asset/assets/css/style.min.css')}}">
        <link rel="stylesheet" href="{{asset('front_asset/assets/css/custom_style.css')}}">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">

        <meta name="csrf-token" content="{{ csrf_token() }}" />

    </head>
    <body class="antialiased d-flex flex-column h-100">
        <main class="flex-shrink-0">
            <div id="app">
            <!-- <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center py-4 sm:pt-0">-->
                    <app-component/>
            <!-- </div>-->
            </div>
        </main>
    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{asset('front_asset/assets/js/vendor/modernizr-3.11.2.min.js')}}"></script>
    <script src="{{asset('front_asset/assets/js/vendor/jquery-3.5.1.min.js')}}"></script>
    <script src="{{asset('front_asset/assets/js/plugins.min.js')}}"></script>
    <script src="{{asset('front_asset/assets/js/main.js')}}"></script>
</body>
</html>
