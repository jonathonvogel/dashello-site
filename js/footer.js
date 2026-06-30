(function(){
  var f = document.getElementById('footer-container');
  if (!f) return;
  f.innerHTML =
    '<footer>'+
      '<div class="footer-inner">'+
        '<div>'+
          '<a href="/" style="text-decoration:none">'+
            '<div class="footer-logo-wrap">'+
              '<img src="/images/Beta Dark.png" alt="Dashello" style="height:96px;width:auto;display:block;margin-bottom:6px">'+
            '</div>'+
          '</a>'+
          '<div class="footer-copy" id="footer-copy"></div>'+
        '</div>'+
        '<div class="footer-links">'+
          '<h4>Company</h4>'+
          '<ul>'+
            '<li><a href="/about.html">About</a></li>'+
            '<li><a href="/blog/">Blog</a></li>'+
            '<li><a href="/contact.html">Contact</a></li>'+
            '<li><a href="/jobs.html">Jobs</a></li>'+
            '<li><a href="/pricing/">Pricing</a></li>'+
            '<li><a href="https://app.dashello.co/dev">Documentation</a></li>'+
            '<li><a href="/privacy.html">Privacy &amp; Security</a></li>'+
          '</ul>'+
        '</div>'+
        '<div class="footer-links">'+
          '<h4>Integrations</h4>'+
          '<ul>'+
            '<li><a href="/blog/google-sheets-integration/">Google Sheets</a></li>'+
            '<li><a href="/blog/jobtread-integration/">JobTread</a></li>'+
            '<li><a href="/blog/make-integration/">Make</a></li>'+
            '<li><a href="/blog/quickbooks-integration/">QuickBooks</a></li>'+
            '<li><a href="/blog/stripe-integration/">Stripe</a></li>'+
            '<li><a href="/blog/zapier-integration/">Zapier</a></li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
    '</footer>';
  document.getElementById('footer-copy').textContent =
    '\u00A9' + new Date().getFullYear() + ' Trinitatis Licensing Inc. All Rights Reserved.';
})();
