# node 的安装与环境变量的配置 #

----------
### 1、安装 ###

>在官网下载安装程序按步骤next 安装完成即可。  
>打开cmd命令行分别输入命令  
>node -v   和npm -v
>看看是否有版本号输出，有输出则安装成功。  


### 2、npm的环境变量设置 ###
>设置环境变量是因为默认的安装的模块数据是存放在C盘的，将会占据大量的C盘空间。  
>在你的安装目录下分别创建两个文件夹node_global and node_cache  
>大开命令行分别输入一下命令行，来改变npm包的默认下载存放位置  
>
	npm config set prefix "你的node_gloal文件夹的路径"  
	npm config set cache "你的node_cache文件夹路径"

>在我的电脑右键选择管理项目，在高级选项卡找到环境变量 进入。  
>在系统变量中添加NODE_PATH  值为：你的安装路径../node_module  
>在用户变量中找到Path变量修改其值为:你的安装路径../node_global  
>然后在cmd命令行运行一下代码  
>`npm install koa -g`  
>然后查看node_global文件夹，即可看到下面有个node_module文件夹，里面已经安装好了一个koa的模块文件了

