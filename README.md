# 晋江文学城 编程辅助预览工具
## Preview
[预览直通车](https://xiaomingtang.github.io/jjwxc-assistant/)
## Introduction
晋江抽风，众所周知，应某同学邀，制作了该**编程辅助预览工具**。该工具能帮助你预览代码在晋江上的显示效果，**并稍微加了点处理，以便修正 晋江会在行末加&lt;br&gt; 的bug(feature?)**。
## Install
整个项目全部下载下去就可以了，基本没什么多余的
## Documentation
* 使用方法：双击index.html在默认浏览器中打开，然后输入代码就可以了。输入框输入代码后，点击其他任何地方就能看到预览效果。

* 晋江测试 按钮相当于更严格的模拟代码在晋江的效果，现在还添加了全屏功能哦。

* 点击 输出代码 按钮，提示成功后，你就可以去晋江粘贴了。（你自己选中复制的没用的，不能保证效果的，点击 输出代码 按钮，我将代码**模拟晋江**处理了的。）

* cutjj.exe 是一个处理工具，一般来说用不到。当你用上面的方法提示失败时，你可以使用这个。使用方法是：复制 输入框 中的所有代码，然后打开 cutjj.exe ，然后就可以去晋江粘贴了。(cutjj.py是cutjj.ext的python源码，我**猜测**python的windows api比前端api稳定、兼容度高，所以作为备选方案，然而不一定啊。。。)

* 理论上来说这样是可以的。处理成功的标志是：你粘贴出来的代码只有一行。如果不是这样的话，说明还是失败了，如果真是这样，你call我吧。。。
## Preview
![预览](https://github.com/xiaomingTang/image-yqy/blob/master/2.png?raw=true)
![预览](https://github.com/xiaomingTang/image-yqy/blob/master/3.png?raw=true)
