!function(e){"use strict";if(mediacommander_notice_globals){const n=mediacommander_notice_globals;e(document).on("click","#mediacommander-first-use-notification .notice-dismiss",()=>{e.ajax({url:n.api.url+"/noticeoff",type:"POST",dataType:"json",contentType:"application/json",headers:{"X-WP-Nonce":n.api.nonce}})})}}(jQuery);