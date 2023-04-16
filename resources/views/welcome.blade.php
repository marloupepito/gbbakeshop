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
body{
	background-color: #ff6666;
}
.card{
	border: none;
	border-top: 5px solid  red;
	background: white;
	color: #57557A;
}
p{
	font-weight: 600;
	font-size: 15px;
}
.fab{
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background: #ff4d4d;
	height: 40px;
	width: 90px;
}
.fab:hover{
	cursor: pointer;
}
.fa-twitter{
	color:white;
}
.fa-facebook{
	color: white;
}
.fa-google{
	color: white;
}
.division{
	float: none;
	position: relative;
	margin: 30px auto 20px;
	text-align: center;
	width: 100%;
	box-sizing: border-box;
}
.division .line{
	border-top: 1.5px solid #57557A;;
	position: absolute;
	top: 13px;
	width: 85%;
}
.line.l{
	left: 52px;
}
.line.r{
	right: 45px;

}
.division span{
	font-weight: 600;
	font-size: 14px;
}
.myform{
	padding: 0 25px 0 33px;
}
.form-control{
	border: 1px solid #57557A;
	border-radius: 3px;
	background: #212042;
	margin-bottom: 20px;
	letter-spacing: 1px;
	
}
.form-control:focus{
	border: 1px solid #57557A;
	border-radius: 3px;
	box-shadow: none;
	background: #212042;
	color: #fff;
	letter-spacing: 1px;
}
.bn{
	text-decoration: underline;
}
.bn:hover{
	cursor: pointer;
}
.form-check-input {
    margin-top: 8px!important;
    }
.btn-primary{
background: red;
border: none;
border-radius: 50px;
}
.btn-primary:focus{
	box-shadow: none;
	border: none;
}
small{
	color: #F2CEFF;
}
.far.fa-user{
	font-size: 13px;
}

@media(min-width: 767px){
	.bn{
		text-align: right;
	}
}
@media(max-width: 767px){
	.form-check{
		text-align: center;
	}
	.bn{
		text-align: center;
		align-items: center;
	}
}
@media(max-width: 300px){
	.fab{
		width: 100%;
		height: 100%;
	}
	.division .line{
		width: 50%;
	}
}
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
            .ant-form-item.css-dev-only-do-not-override-htwhyh{
              margin:3px !important;
            }


        /* body {
            background: #007bff;
            background: linear-gradient(to right, gray,white);
          } */

          .btn-login {
            font-size: 0.9rem;
            letter-spacing: 0.05rem;
            padding: 0.75rem 1rem;
          }

          .btn-google {
            color: white !important;
            background-color: #ea4335;
          }

          .btn-facebook {
            color: white !important;
            background-color: #3b5998;
          }


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
