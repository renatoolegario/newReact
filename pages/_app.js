// pages/_app.js
import React from 'react';
import { Helmet } from 'react-helmet';
import '../tailwind.css'; // Importe seu arquivo CSS global aqui

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Helmet>

      <link rel="icon" href="/images/favicons/favicon.ico" type="image/x-icon" />

    {/* Outros favicons para diferentes dispositivos */}
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/images/favicons/site.webmanifest" />




        <script>{`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KS9CSFTL');
        `}</script>
      </Helmet>
      <Component {...pageProps} />
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KS9CSFTL"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
        </iframe>
      </noscript>
    </div>
  );
}

export default MyApp;