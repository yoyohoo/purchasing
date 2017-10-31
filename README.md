# purchasing
代购网站模板

ionic build --prod --release

http://www.jianshu.com/p/f9191dcd238a


  watchBackButton() {
    if (window.history.length == 1) {
      pushHistory();
    }
    setTimeout(() => {
      window.addEventListener("popstate", function (e) {
        if (confirm('确定退出？')) {
          window['WeixinJSBridge'].call('closeWindow');
        } else {
          pushHistory();
        }
      });
    }, 300)
    function pushHistory() {
      var state = {
        title: "title",
        url: "#"
      };
      window.history.pushState(state, "title", "#");
    }
  }
