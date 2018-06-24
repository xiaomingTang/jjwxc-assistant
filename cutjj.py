# -*- coding:utf-8 -*-
# 注意，以下适用版本为python 3.6.5，其他版本可能会出现语法兼容问题

__author__ = "1038761793@qq.com"

import re
import time

import re
import win32clipboard as w
import win32con


def get_clipboard():
  w.OpenClipboard()
  t = w.GetClipboardData(win32con.CF_UNICODETEXT)
  w.CloseClipboard()
  return t


def set_clipboard(s):
  w.OpenClipboard()
  w.EmptyClipboard()
  w.SetClipboardData(win32con.CF_UNICODETEXT, s)
  w.CloseClipboard()


def say_hi_to_yqy():
  # t是时间元组
  t = time.localtime(time.time())
  # n是当前钟点的小数表示
  n = t.tm_hour + (t.tm_min / 60)
  if 0 <= n < 6:
    return "你疯了，这么晚了，你是还没睡吗？"
  elif 6 <= n < 8:
    return "小伙子，你是真早啊。。。"
  elif 8 <= n < 11:
    return "早上好，又是美好的一天！Y酱今天也要元气满满哦！"
  elif 11 <= n < 13:
    return "Y酱中午好(*^_^*)"
  elif 13 <= n < 18:
    return "主淫下午好└(^o^)┘，想好晚上吃什么了吗？"
  elif 18 <= n < 22:
    return "吾日三省吾身：早上吃的什么？中午吃的什么？晚上吃的什么？"
  else:
    return "好晚了，早点睡吧，有这时间还不如想想明天吃什么呢，good dream..."


if __name__ == "__main__":
  normal_style =  "<style>body{font-size:14px}*{margin:0;padding:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}p{margin:1em 0}h1{font-size:2em;margin:.67em 0}hr{margin:.5em auto;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{color:#2d8cf0;text-decoration:none;background-color:transparent;outline:0}a:hover{color:#3d9cfe;text-decoration:underline}ul{margin:1em 0}li{margin-left:2em;list-style-position:outside;list-style-type:disc}b,strong{font-weight:bolder}small{font-size:80%}button{border:0;border-radius:3px;color:white;background-color:#18e;cursor:pointer}button:hover{background-color:#4aa4f1}.text-center{text-align:center}</style>"
  s = get_clipboard()
  set_clipboard(normal_style + re.sub(r'\s+', ' ', s))
  print(say_hi_to_yqy())
  print('')
  s = input('其实我也不知道完成了没，要是粘贴下来只有一行，那就是成功了。。。')