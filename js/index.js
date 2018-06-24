var $page = $('#page')
var $input = $('#input')
var $output = $('#output')
var $test = $('#test')
var defaultText = '注意：<br><br>1. 换行用&lt;br&gt;，小于号 \'&lt;\' 大于号 \'&gt;\' 不能直接输入，小于号的代号是\'&amp;lt;\'，大于号的代号是\'&amp;gt;\'，注意哦，后面的分号也要的。<br><br>2. 不用写html什么的，直接写body或者&lt;style&gt;<br><br>3. 万一代码输出失败，就用里面附带的那个工具，操作方法是，将输入框中的文字（目标代码）复制下来，打开那个工具，然后——然后就没了，去晋江粘贴去吧。'
var normalStyle = '<style>body{font-size:14px}*{margin:0;padding:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}p{margin:1em 0}h1{font-size:2em;margin:.67em 0}hr{margin:.5em auto;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{color:#2d8cf0;text-decoration:none;background-color:transparent;outline:0}a:hover{color:#3d9cfe;text-decoration:underline}ul{margin:1em 0}li{margin-left:2em;list-style-position:outside;list-style-type:disc}b,strong{font-weight:bolder}small{font-size:80%}button{border:0;border-radius:3px;color:white;background-color:#18e;cursor:pointer}button:hover{background-color:#4aa4f1}.text-center{text-align:center}</style>'
$output.html(defaultText)

function requestFullscreen(elem) {
  if(elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen()
  } else if (elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen()
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen()
  } else {
    return false
  }
  return true
}

;(function() {
  document.addEventListener('fullscreenchange', function(e) {
    $page.toggleClass('preview')
  });
  document.addEventListener('mozfullscreenchange', function(e) {
    $page.toggleClass('preview')
  });
  document.addEventListener('webkitfullscreenchange', function(e) {
    $page.toggleClass('preview')
  });
  document.addEventListener('MSFullscreenChange', function(e) {
    $page.toggleClass('preview')
  });
})()

function getOriginCode() {
  return $input.val().trim()
}

function getEncodedCode() {
  return normalStyle + $input.val().trim().replace(/\s+/g, ' ')
}

function Message() {}
Message.prototype = {
  constructor: Message,
  info: function(str) {
    var start = 3
    var $elem = $('<div class=\'message\'></div>').text(start + ' ' + str)
    $('body').append($elem)
    this.$elem = $elem

    var interval = setInterval(function() {
      start--
      if(start < 0) {
        clearInterval(interval)
        $elem.remove()
      } else {
        $elem.text(start + ' ' + str)
      }
    }, 1000)
  }
}
var message = new Message()

$input.on('change', function() {
  var val = getOriginCode()
  if(val.length > 0) {
    $output.html(val)
  } else {
    $input.val('')
    $output.html(defaultText)
  }
})

// 晋江测试
$test.on('click', function() {
  var val = getEncodedCode()
  if(!!val) {
    $output.html(val)
  }
  if(!requestFullscreen($output[0])) {
    message.info('您的浏览器不支持全屏')
  }
})

// initial clipboard.js
var clipboard = new ClipboardJS('#trigger', {
  text: function(trigger) {
    var val =  getEncodedCode()
    return val
  }
})

clipboard.on('success', function(e) {
  message.info('成功了！去晋江粘贴去吧！')
})
clipboard.on('error', function(e) {
  message.info('失败了，重试 或者 用那个工具来处理吧。')
})
