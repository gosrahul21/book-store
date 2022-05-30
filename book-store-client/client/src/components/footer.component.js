import React from 'react'

function Footer() {
  return (
    <footer class="pt-5 pb-1">
<div class="container">
<div class="row">
<div class="col-sm-7 pl-0">
<div class="row">
<div class="col-sm-3">
<h4>Company</h4>
<ul class="list-unstyled">
  <li class="list-inline-item"><a href="https://www.bookswagon.com/aboutus">About Us</a></li>
<li><a href="https://www.bookswagon.com/career">Career</a></li>
<li><a href="https://blog.bookswagon.com" target="_blank">Blog</a></li>
<li><a href="https://www.bookswagon.com/contactus">Contact Us</a></li>
</ul>
</div>
<div class="col-sm-3">
<h4>Policies</h4>
<ul class="list-unstyled">
<li><a href="https://www.bookswagon.com/privacypolicy">Privacy Policies</a></li>
<li><a href="https://www.bookswagon.com/termsofuse">Terms of Use</a></li>
<li><a href="https://www.bookswagon.com/safesecurehelp">Secure Shopping</a></li>
<li><a href="https://www.bookswagon.com/copyright">Copyright Policy</a></li>
</ul>
</div>
<div class="col-sm-3">
<h4>Help</h4>
<ul class="list-unstyled">
<li><a href="https://www.bookswagon.com/paymenthelp">Payment</a></li>
<li><a href="https://www.bookswagon.com/termsofuse?#shipping">Shipping</a></li>
<li><a href="https://www.bookswagon.com/returnhelp">Return</a></li>
<li><a href="https://www.bookswagon.com/faq">FAQ</a></li>
</ul>
</div>
<div class="col-sm-3">
<h4>Misc</h4>
<ul class="list-unstyled">
<li><a href="https://www.bookswagon.com/affiliate/login">Affiliate</a></li>
<li><a href="https://www.bookswagon.com/sitemap">Sitemap</a></li>
    <li><a href="https://www.bookswagon.com/googlesitemap/HtmlSitemap.html">HTML Sitemap</a></li>
</ul>
</div>
</div>
<ul class="list-unstyled icons list-inline">
<li class="list-inline-item"><a href="https://www.facebook.com/bookswagoneducationalfacts/" target="_blank"><img src="https://www.bookswagon.com/images/facebook.png" alt="Facebook"></a></li>
<li class="list-inline-item"><a href="https://twitter.com/bookswagon_in" target="_blank"><img src="https://www.bookswagon.com/images/twitter.png" alt="Twitter"></a></li>
<li class="list-inline-item"><a href="https://www.linkedin.com/company/bookswagon/" target="_blank"><img src="https://www.bookswagon.com/images/linkedin.png" alt="Linkedin"></a></li>
<li class="list-inline-item"><a href="https://www.pinterest.co.uk/bookswagon/" target="_blank"><img src="https://www.bookswagon.com/images/pinterest.png" alt="Pinterest"></a></li>

<li class="list-inline-item"><a target="_blank" href="https://www.youtube.com/channel/UCrJ4T5_wqMb_eZWtC-staVQ"><img src="https://www.bookswagon.com/images/youtube.png" alt="Youtube"></a></li>
<li class="list-inline-item"><a href="https://www.instagram.com/bookswagon_official/" target="_blank"><img src="https://www.bookswagon.com/images/instagram.png" alt="Instagram"></a></li></ul>
</div>

<div class="col-sm-5 text-light pr-0">
 

    <h4>REQUEST A BOOK</h4>
    <div class="row">
        <div class="col-sm-12">
            Please fill up the form below to Request a Book. We will inform you as soon as the book is available.
        </div>
    </div>

    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputEmail4">ISBN13:  * <a class="tooltip12 position-relative" href="javascript:void(0)"><span class="position-absolute tooltipisbn">What is an ISBN used for? An ISBN is essentially a product identifier used by publishers, booksellers, libraries, internet retailers and other supply chain participants for ordering, listing, sales records and stock control purposes. The ISBN identifies the registrant as well as the specific title, edition and format.</span><i class="fas fa-info-circle" aria-hidden="true"></i></a></label>
            <input name="ctl00$Footer$RequestBook$txtISBN" type="text" maxlength="50" id="ctl00_Footer_RequestBook_txtISBN" class="form-control">
            <span id="ctl00_Footer_RequestBook_rfvISBN" class="error" style="vertical-align:top;display:none;">Please enter ISBN Name</span>
            <div class="error" id="errisbnname"></div>
        </div>
        <div class="form-group col-md-6">
            <label for="booktitle">Book Title:  *</label>
            <input name="ctl00$Footer$RequestBook$txtTitle" type="text" maxlength="250" id="ctl00_Footer_RequestBook_txtTitle" class="form-control">
            <span id="ctl00_Footer_RequestBook_rfvTitle" class="error" style="vertical-align:top;display:none;">Please enter Book Title</span>
            <div class="error" id="errbooktitle"></div>
        </div>
    </div>

    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="Author">Author:  </label>
             <input name="ctl00$Footer$RequestBook$txtAuthor" type="text" maxlength="250" id="ctl00_Footer_RequestBook_txtAuthor" class="form-control">
            <div class="error" id="errauthor"></div>
        </div>
        <div class="form-group col-md-6">
            <label for="Quantity">Quantity:  </label>
             <input name="ctl00$Footer$RequestBook$txtQty" type="text" value="1" maxlength="3" id="ctl00_Footer_RequestBook_txtQty" class="form-control" onkeypress="validate(event)">
             <span id="ctl00_Footer_RequestBook_rvQty" class="error" style="visibility:hidden;">Quantity should be integer value</span>
            <div class="error" id="errquantity"></div>

        </div>
    </div>

    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="Email Id">Email Id:  *</label><br>
            <input name="ctl00$Footer$RequestBook$txtEmailReq" type="text" maxlength="100" id="ctl00_Footer_RequestBook_txtEmailReq" class="form-control float-left">
            <div class="error" id="erremail"></div>
            <span id="ctl00_Footer_RequestBook_rfvEmail" class="error" style="vertical-align:top;display:none;">Please enter valid Email</span>
            <span id="ctl00_Footer_RequestBook_revEmal" class="error" style="display:none;">Invalid Email.</span>
             <input type="hidden" name="ctl00$Footer$RequestBook$hdnVerify" id="ctl00_Footer_RequestBook_hdnVerify">
           

        </div>
        <div class="form-group col-md-6">
            <label for="Phone/Mobile">Phone/Mobile:  </label>
            <input name="ctl00$Footer$RequestBook$txtPhone" type="text" maxlength="15" id="ctl00_Footer_RequestBook_txtPhone" class="form-control">
           
        </div>
    </div>
    <div class="form-row mt-4">
         <label id="ctl00_Footer_RequestBook_lblmsg" class="success-msg">
                </label>
        <div class="form-group col-md-12">
            
                <input type="submit" name="ctl00$Footer$RequestBook$imgbtnSave" value="Submit" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$Footer$RequestBook$imgbtnSave&quot;, &quot;&quot;, true, &quot;valRequestBook&quot;, &quot;&quot;, false, false))" id="ctl00_Footer_RequestBook_imgbtnSave" class="bg-light float-right addbtn pt-1 pb-1 pl-3 pr-3 font-weight-bold">
            
        </div>
    </div>



</div>

</div>
<div class="row">
 <div class="col-md-12  text-center text-light copyrighttext mb-3">
Copyright © 2022 . Bookswagon.com. <span class="allrightreserve">All Rights Reserved</span>
</div>
</div>
    </div>
</footer>
  )
}

export default Footer