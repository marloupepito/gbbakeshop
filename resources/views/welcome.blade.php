<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>GB Bakeshop</title>
        <link rel="icon" href="/images/logo.png">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
     <script src="{{ asset('js/app.js') }}" defer></script>
      
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
        <!-- Styles -->
        <!-- <link rel="manifest" href="manifest.json" /> -->
        <!-- <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-status-bar" content="#db4938" />
        <meta name="theme-color" content="#db4938" /> -->
      <style>

/* .ant-menu-item-selected {
    background-color:#ff4d4d !important;
    color:white !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
   color:#ff4d4d !important; 
   
} */
.ant-tabs-ink-bar {
   position: absolute;
   background: #000000;
   pointer-events: none;
}
      @media only screen and (max-width: 600px) {
                .ant-layout.css-dev-only-do-not-override-1i536d8 {
                    margin:0px !important;
                }
            }
            .ant-layout-sider.ant-layout-sider-dark.ant-layout-sider-below.border.border-right{
                z-index:5 !important;
            }
            .ant-form-item.css-dev-only-do-not-override-1i536d8{
                margin:0px;
            }
            .ant-modal-footer{
                display:none !important
            }
            td.ant-table-cell{
                padding:10px !important
            }
            .ant-form-item.css-dev-only-do-not-override-sk7ap8{
                margin:0px !important
            }
            .ant-form-item.css-dev-only-do-not-override-1me4733{
              margin:3px !important;
            }
            .ant-form-item.css-dev-only-do-not-override-htwhyh{
              margin:3px !important;
            }

        /* body {
            background: #007bff;
            background: linear-gradient(to right, gray,white);
          } */

    

      </style>
    </head>
    <body class="antialiased">
       <div id="app"></div>
    </body>
</html>


<script>
//     if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function() {
//     navigator.serviceWorker
//       .register("/serviceWorker.js")
//       .then(res => console.log("service worker registered"))
//       .catch(err => console.log("service worker not registered", err))
//   })
// }
    </script>
