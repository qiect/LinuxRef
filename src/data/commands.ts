export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Example {
  description: string;
  code: string;
  output?: string;
}

export interface Command {
  name: string;
  categoryId: string;
  syntax: string;
  simpleExplain: string;
  detailExplain: string;
  examples: Example[];
  relatedCommands: string[];
  dangerLevel?: "warning" | "danger";
}

export const categories: Category[] = [
  { id: "file", name: "文件操作", icon: "FolderOpen", description: "文件和目录的创建、查看、复制、移动与删除等基础操作" },
  { id: "text", name: "文本处理", icon: "FileText", description: "文本内容的查看、搜索、替换、排序与格式化等操作" },
  { id: "process", name: "进程管理", icon: "Activity", description: "系统进程的查看、控制、调度与管理" },
  { id: "network", name: "网络工具", icon: "Wifi", description: "网络连接测试、配置、数据传输与诊断工具" },
  { id: "permission", name: "权限管理", icon: "Shield", description: "文件权限、用户身份切换与访问控制" },
  { id: "system", name: "系统信息", icon: "Monitor", description: "查看系统硬件、运行状态与环境信息" },
  { id: "disk", name: "磁盘管理", icon: "HardDrive", description: "磁盘分区、格式化、挂载与存储空间管理" },
  { id: "compress", name: "压缩解压", icon: "Archive", description: "文件压缩打包与解压还原操作" },
  { id: "user", name: "用户管理", icon: "Users", description: "用户账号、用户组与登录会话管理" },
  { id: "package", name: "软件包管理", icon: "Package", description: "软件安装、卸载、更新与依赖管理" }
];

export const commands: Command[] = [
  // ==================== 文件操作 ====================
  {
    name: "ls",
    categoryId: "file",
    syntax: "ls [选项] [目录/文件]",
    simpleExplain: "列出文件夹里的东西，就像打开抽屉看看里面有什么",
    detailExplain: "就像你打开一个抽屉或书架，把里面的所有物品名称列出来让你看清楚。默认只显示文件名，加上参数后还能看到文件大小、修改时间、权限等详细信息，就像给每件物品贴上标签。",
    examples: [
      { description: "列出当前目录下的所有文件和文件夹", code: "ls", output: "Documents  Downloads  Pictures  README.md" },
      { description: "以详细列表形式显示（含权限、大小、时间）", code: "ls -l", output: "drwxr-xr-x 2 user user 4096 Jan 15 10:30 Documents\n-rw-r--r-- 1 user user 1234 Jan 14 09:00 README.md" },
      { description: "显示隐藏文件（以点开头的文件）", code: "ls -la" },
      { description: "按文件大小从大到小排序显示", code: "ls -lhS" }
    ],
    relatedCommands: ["cd", "pwd", "tree", "find"]
  },
  {
    name: "cd",
    categoryId: "file",
    syntax: "cd [目录路径]",
    simpleExplain: "换一个目录去工作，就像走进不同的房间",
    detailExplain: "就像你在家里从一个房间走到另一个房间——你在卧室时只能看到卧室的东西，走到书房就只能看到书房的东西。cd 就是让你在电脑的「目录房间」之间来回走动。",
    examples: [
      { description: "进入 Documents 目录", code: "cd ~/Documents" },
      { description: "回到上一级目录", code: "cd .." },
      { description: "直接回到家目录", code: "cd ~" },
      { description: "回到上次所在的目录", code: "cd -" }
    ],
    relatedCommands: ["ls", "pwd", "mkdir", "pushd"]
  },
  {
    name: "cp",
    categoryId: "file",
    syntax: "cp [选项] 源文件 目标位置",
    simpleExplain: "复制文件，就像用复印机复印一份文档",
    detailExplain: "就像你拿一份重要文件去复印店复印一份副本——原件还在原处不动，多了一份一模一样的复印件放在你指定的地方。可以复制单个文件，也可以整个文件夹一起复制。",
    examples: [
      { description: "复制一个文件到指定目录", code: "cp report.txt /home/user/backup/" },
      { description: "复制并重命名新文件", code: "cp old_config.txt new_config.txt" },
      { description: "递归复制整个文件夹", code: "cp -r project_folder/ /home/user/backup/" },
      { description: "复制时保留文件属性", code: "cp -a important_data /backup/" }
    ],
    relatedCommands: ["mv", "rsync", "scp", "ln"]
  },
  {
    name: "mv",
    categoryId: "file",
    syntax: "mv [选项] 源文件 目标位置",
    simpleExplain: "移动或重命名文件，就像把文件搬到另一个抽屉或换个名字",
    detailExplain: "就像你把一本书从书架的左边移到右边，或者给它重新贴个书名标签。注意：mv 不是复印，是真正的「搬家」，原来的地方就没有了。所以它既可以用来移动文件，也可以用来改名。",
    examples: [
      { description: "将文件移动到另一个目录", code: "mv download.pdf ~/Documents/" },
      { description: "给文件改个名字", code: "mv old_name.txt new_name.txt" },
      { description: "移动前先询问确认", code: "mv -i important_file /tmp/" },
      { description: "批量移动所有 txt 文件", code: "mv *.txt ~/text_files/" }
    ],
    relatedCommands: ["cp", "rm", "rename", "ln"]
  },
  {
    name: "rm",
    categoryId: "file",
    syntax: "rm [选项] 文件/目录",
    simpleExplain: "删除文件，就像把废纸扔进碎纸机",
    detailExplain: "就像你把不要的文件扔进碎纸机——文件会被彻底销毁，而且通常无法恢复！所以用 rm 要特别小心，尤其是加 -rf 参数时，就像拿到了一把大铁锤，敲什么碎什么，没有回收站可以捡回来。",
    examples: [
      { description: "删除一个普通文件", code: "rm temp_file.txt" },
      { description: "删除前逐一询问确认", code: "rm -i *.log" },
      { description: "强制删除且递归删除整个目录（慎用！）", code: "rm -rf old_project/" },
      { description: "删除空目录", code: "rmdir empty_folder/" }
    ],
    relatedCommands: ["cp", "mv", "trash", "shred"],
    dangerLevel: "danger",
  },
  {
    name: "mkdir",
    categoryId: "file",
    syntax: "mkdir [选项] 目录名",
    simpleExplain: "创建新文件夹，就像买个新收纳盒来装东西",
    detailExplain: "就像你想整理桌面，买了一个新的收纳盒（文件夹），用来分类存放各种文件。可以一次建一个，也可以一次性建好多层嵌套的文件夹，就像买了一套俄罗斯套娃。",
    examples: [
      { description: "创建一个名为 photos 的目录", code: "mkdir photos" },
      { description: "同时创建多层嵌套目录", code: "mkdir -p project/src/components/utils" },
      { description: "创建目录并设置权限", code: "mkdir -m 755 public_html" },
      { description: "一次创建多个目录", code: "mkdir dir1 dir2 dir3" }
    ],
    relatedCommands: ["ls", "cd", "rmdir", "tree"]
  },
  {
    name: "touch",
    categoryId: "file",
    syntax: "touch [选项] 文件名",
    simpleExplain: "创建空文件或更新文件时间戳，就像新建一张白纸或盖个时间章",
    detailExplain: "就像你拿出一张全新的空白纸准备写字（创建空文件）；如果文件已经存在，touch 就像在上面盖一个新的时间印章——内容不变，但「最后修改时间」变成现在这个时刻。",
    examples: [
      { description: "创建一个空的 notes.txt 文件", code: "touch notes.txt" },
      { description: "同时创建多个空文件", code: "touch file1.log file2.log file3.log" },
      { description: "更新已有文件的时间戳", code: "touch existing_file.md" },
      { description: "将文件时间戳设为指定时间", code: "touch -t 202501011200.00 archive.txt" }
    ],
    relatedCommands: ["ls", "stat", "mkdir", "cat"]
  },
  {
    name: "find",
    categoryId: "file",
    syntax: "find [路径] [表达式]",
    simpleExplain: "全盘搜索文件，就像请侦探在整个房子里找某样东西",
    detailExplain: "就像你丢了钥匙，请一位超级侦探帮你把整个屋子翻个底朝天找出来。你可以告诉他：「我要找名字带 log 的」「我要找超过 100MB 的文件」「我要找昨天修改过的文件」。find 就是这样一位全能搜索侦探。",
    examples: [
      { description: "在当前目录下查找所有 txt 文件", code: "find . -name \"*.txt\"", output: "./notes.txt\n./report.txt\n./data/summary.txt" },
      { description: "查找大于 100MB 的文件", code: "find /home -size +100M" },
      { description: "查找 7 天内被修改过的文件", code: "find ./project -mtime -7" },
      { description: "找到后执行删除操作（慎用）", code: "find /tmp -name \"*.tmp\" -delete" }
    ],
    relatedCommands: ["locate", "grep", "which", "whereis"]
  },
  {
    name: "ln",
    categoryId: "file",
    syntax: "ln [选项] 目标 链接名",
    simpleExplain: "创建快捷方式，就像在桌面上放一个指向文件的快捷图标",
    detailExplain: "就像你在电脑桌面上创建一个快捷方式图标——点击它就能打开真实存在的程序。软链接就像 Windows 的快捷方式，是一个「指路牌」；硬链接则更像给同一个人取了两个名字，删掉任何一个另一个还在。",
    examples: [
      { description: "创建软链接（类似快捷方式）", code: "ln -s /opt/app/config.yml ~/config_link" },
      { description: "创建硬链接", code: "ln original.txt hardlink.txt" },
      { description: "覆盖已存在的链接", code: "ln -sf /new/path target_link" },
      { description: "在当前目录为远程文件创建链接", code: "ln -s /var/log/syslog ./syslog_link" }
    ],
    relatedCommands: ["cp", "mv", "readlink", "stat"]
  },
  {
    name: "pwd",
    categoryId: "file",
    syntax: "pwd",
    simpleExplain: "告诉你现在站在哪个目录里，就像抬头看门牌号",
    detailExplain: "就像你走进一栋大楼迷路了，看看墙上的门牌号就知道自己目前在几楼几号房间。pwd 会打印出你当前所在目录的完整路径，让你不会在层层嵌套的文件夹中迷失方向。",
    examples: [
      { description: "显示当前工作目录的完整路径", code: "pwd", output: "/home/user/Documents/project" },
      { description: "显示物理路径（解析掉符号链接）", code: "pwd -P" }
    ],
    relatedCommands: ["cd", "ls", "dirname", "basename"]
  },
  {
    name: "tree",
    categoryId: "file",
    syntax: "tree [选项] [目录]",
    simpleExplain: "以树形图展示目录结构，就像画一张家族族谱图",
    detailExplain: "就像给你画一张家族族谱图，一目了然地展示哪个文件夹下面有哪些子文件夹和文件，层级关系清清楚楚。比单纯的 ls 更直观，一眼就能看懂项目的整体结构。",
    examples: [
      { description: "以树形结构展示当前目录", code: "tree", output: ".\n├── src/\n│   ├── main.ts\n│   └── utils.ts\n├── package.json\n└── README.md" },
      { description: "只显示目录，不显示文件", code: "tree -d" },
      { description: "限制显示深度为 2 层", code: "tree -L 2" },
      { description: "显示每个文件的大小", code: "tree -h" }
    ],
    relatedCommands: ["ls", "find", "pwd", "du"]
  },
  {
    name: "rmdir",
    categoryId: "file",
    syntax: "rmdir [选项] 目录名",
    simpleExplain: "删除空文件夹，就像扔掉一个空的收纳盒",
    detailExplain: "就像你要扔掉一个空的收纳盒子——但如果盒子里还有东西就扔不掉，必须先把东西拿出来。rmdir 只能删除空目录，这其实是一种安全机制，防止你误删还有文件的文件夹。",
    examples: [
      { description: "删除空目录", code: "rmdir empty_folder" },
      { description: "连同空的父目录一起删除", code: "rmdir -p a/b/c/empty_dir" },
      { description: "忽略非空目录的错误提示", code: "rmdir --ignore-fail-on-non-empty folder*" }
    ],
    relatedCommands: ["rm", "mkdir", "ls", "tree"]
  },
  {
    name: "stat",
    categoryId: "file",
    syntax: "stat [选项] 文件/目录",
    simpleExplain: "查看文件的详细身份证信息",
    detailExplain: "就像你去派出所查一个人的详细户籍信息——不只是名字，还包括出生日期（创建时间）、最近什么时候来过（访问时间）、最后一次修改是什么时候、文件有多大、占用了多少磁盘块等等。比 ls -l 给的信息更全面。",
    examples: [
      { description: "查看文件的完整元信息", code: "stat report.pdf", output: "  File: report.pdf\n  Size: 1048576\tBlocks: 2048\nModify: 2025-01-15 10:30:00" },
      { description: "只显示文件系统信息", code: "stat -f /dev/sda1" },
      { description: "以简洁格式显示", code: "stat -c '%n %s %y' *.txt" }
    ],
    relatedCommands: ["ls", "file", "touch", "wc"]
  },
  {
    name: "file",
    categoryId: "file",
    syntax: "file [选项] 文件名",
    simpleExplain: "识别文件的真实类型，就像验钞机识别钞票真伪",
    detailExplain: "就像一个经验丰富的鉴定专家，不用看文件扩展名，而是通过分析文件内部的「指纹」（魔术数字/头部字节）来判断它到底是什么类型的文件。有时候文件名叫 photo.jpg 但其实是可执行程序，file 一眼就能识破。",
    examples: [
      { description: "识别文件的类型", code: "file mystery_file", output: "mystery_file: PNG image data, 1920 x 1080" },
      { description: "批量识别多个文件类型", code: "file *" },
      { description: "显示 MIME 类型", code: "file --mime document.pdf", output: "document.pdf: application/pdf; charset=binary" },
      { description: "不解压直接识别压缩包内文件类型", code: "file -z backup.tar.gz" }
    ],
    relatedCommands: ["stat", "ls", "xdg-mime", "mimetype"]
  },
  {
    name: "rename",
    categoryId: "file",
    syntax: "rename [选项] 表达式 文件名...",
    simpleExplain: "批量给文件改名，就像流水线上统一更换产品标签",
    detailExplain: "就像工厂流水线上的工人，按照统一的规则给一批产品换标签——比如把所有的 .htm 后缀改成 .html，或者在所有文件名前面加上日期前缀。一条命令搞定几十个文件的改名，效率极高。",
    examples: [
      { description: "把所有 .htm 文件后缀改为 .html", code: "rename 's/.htm$/.html/' *.htm" },
      { description: "在所有文件名前加上日期前缀", code: "rename 's/^/2025-01-15-/' *.jpg" },
      { description: "把文件名中的空格替换为下划线", code: "rename 's/ /_/g' *\\ *" },
      { description: "预览改名效果（不实际执行）", code: "rename -n 's/.JPG$/.jpg/' *" }
    ],
    relatedCommands: ["mv", "mmv", "ln", "basename"]
  },
  {
    name: "locate",
    categoryId: "file",
    syntax: "locate [选项] 关键词",
    simpleExplain: "快速查找文件位置，就像查字典索引而不是逐页翻",
    detailExplain: "就像你查字典时先看索引页而不是从头翻到尾。locate 维护了一份所有文件的索引数据库，搜起来飞快，秒出结果。缺点是数据库不是实时的，刚创建的文件可能搜不到，需要先 updatedb 更新一下索引。",
    examples: [
      { description: "快速查找所有包含 config 的文件", code: "locate config", output: "/etc/config.conf\n/home/user/.config\n/usr/local/etc/nginx/config" },
      { description: "统计匹配到的文件数量", code: "locate -c nginx" },
      { description: "使用正则表达式搜索", code: "locate -r '\\.log$'" },
      { description: "忽略大小写搜索", code: "locate -i README" }
    ],
    relatedCommands: ["find", "updatedb", "which", "whereis"]
  },
  {
    name: "which",
    categoryId: "file",
    syntax: "which 命令名",
    simpleExplain: "找出命令程序的安装位置，就像查某个工具放在哪个工具箱里",
    detailExplain: "就像你问同事「那个锤子放在哪？」，他告诉你「在三号工具箱」。which 告诉你当你输入一个命令时，系统到底是从哪个路径找到这个可执行程序的。这对排查「为什么我的命令找不到」这类问题特别有用。",
    examples: [
      { description: "查找 python3 的安装路径", code: "which python3", output: "/usr/bin/python3" },
      { description: "查找所有匹配的位置", code: "which -a node", output: "/usr/local/bin/node\n/home/user/.nvm/versions/node/bin/node" },
      { description: "查找 git 的位置", code: "which git", output: "/usr/bin/git" }
    ],
    relatedCommands: ["whereis", "type", "locate", "find"]
  },
  {
    name: "whereis",
    categoryId: "file",
    syntax: "whereis [选项] 命令名",
    simpleExplain: "查找命令相关的所有文件（程序、手册、源码）",
    detailExplain: "就像 which 的升级版——不但告诉你程序本体在哪，还顺便告诉你它的使用说明书（man 手册页）在哪、源代码在哪。相当于一次查询就把跟这个命令有关的所有线索都找到了。",
    examples: [
      { description: "查找 gcc 相关的所有文件", code: "whereis gcc", output: "gcc: /usr/bin/gcc /usr/lib/gcc /usr/share/man/man1/gcc.1.gz" },
      { description: "只查找二进制程序", code: "whereis -b python" },
      { description: "只查找帮助手册", code: "whereis -m curl" },
      { description: "只查找源代码文件", code: "whereis -s apache2" }
    ],
    relatedCommands: ["which", "type", "find", "locate"]
  },
  {
    name: "basename",
    categoryId: "file",
    syntax: "basename 路径 [后缀]",
    simpleExplain: "提取文件路径中的文件名部分",
    detailExplain: "就像从完整地址中只取出门牌号一样——给你一个长长的路径，basename 只把最后那个文件名挑出来给你，还能顺便去掉后缀。",
    examples: [
      { description: "提取路径中的文件名", code: "basename /home/user/docs/report.txt", output: "report.txt" },
      { description: "提取文件名并去掉后缀", code: "basename /home/user/docs/report.txt .txt", output: "report" },
      { description: "提取目录路径的最后一级", code: "basename /var/log/nginx/", output: "nginx" },
      { description: "处理多个路径", code: "basename -a /usr/bin/python3 /usr/bin/git", output: "python3\ngit" }
    ],
    relatedCommands: ["dirname", "realpath", "readlink", "pwd"]
  },
  {
    name: "dirname",
    categoryId: "file",
    syntax: "dirname 路径",
    simpleExplain: "提取文件路径中的目录部分",
    detailExplain: "就像从完整地址中只取出街道名——给你一个完整的文件路径，dirname 把文件名去掉，只留下它所在的目录路径。",
    examples: [
      { description: "提取路径中的目录部分", code: "dirname /home/user/docs/report.txt", output: "/home/user/docs" },
      { description: "处理当前目录下的文件", code: "dirname config.yaml", output: "." },
      { description: "处理多级路径", code: "dirname /var/log/nginx/access.log", output: "/var/log/nginx" },
      { description: "处理末尾有斜杠的路径", code: "dirname /home/user/", output: "/home" }
    ],
    relatedCommands: ["basename", "realpath", "pwd", "cd"]
  },
  {
    name: "realpath",
    categoryId: "file",
    syntax: "realpath 文件路径",
    simpleExplain: "显示文件的真实绝对路径",
    detailExplain: "就像GPS定位到你的真实位置，不管你怎么绕路——即使路径中包含符号链接或 .. 这样的相对引用，realpath 也会帮你解析出最终的绝对路径。",
    examples: [
      { description: "显示文件的真实绝对路径", code: "realpath ../neighbor/config.ini", output: "/home/user/project/config.ini" },
      { description: "解析符号链接的真实路径", code: "realpath /usr/bin/python3", output: "/usr/bin/python3.10" },
      { description: "去除路径中的 . 和 ..", code: "realpath ./src/../lib/./utils.js", output: "/home/user/project/lib/utils.js" },
      { description: "检查多个文件的真实路径", code: "realpath file1.txt file2.txt" }
    ],
    relatedCommands: ["readlink", "basename", "dirname", "pwd"]
  },
  {
    name: "readlink",
    categoryId: "file",
    syntax: "readlink 链接文件",
    simpleExplain: "查看符号链接指向的真实目标",
    detailExplain: "就像追踪快递的最终目的地——符号链接就像一个转发地址，readlink 帮你看到它到底指向哪里，而不是停留在转发点。",
    examples: [
      { description: "查看符号链接指向的目标", code: "readlink /usr/bin/python", output: "/usr/bin/python3" },
      { description: "递归解析多层符号链接", code: "readlink -f /usr/bin/python", output: "/usr/bin/python3.10" },
      { description: "查看多个链接的目标", code: "readlink link1 link2 link3" },
      { description: "显示链接的详细信息", code: "readlink -e /usr/bin/python3" }
    ],
    relatedCommands: ["ln", "realpath", "ls", "stat"]
  },
  {
    name: "install",
    categoryId: "file",
    syntax: "install [选项] 源文件 目标",
    simpleExplain: "复制文件并设置权限",
    detailExplain: "就像搬家时不仅搬东西还顺便换了门锁——install 不仅能复制文件，还能同时设置文件权限、所有者等属性，一步到位。",
    examples: [
      { description: "复制文件并设置权限为755", code: "install -m 755 myapp /usr/local/bin/" },
      { description: "复制文件并设置所有者", code: "install -o root -g root script.sh /usr/local/bin/" },
      { description: "创建目录并设置权限", code: "install -d -m 750 /etc/myapp/config" },
      { description: "备份目标文件后再复制", code: "install -b -m 644 config.ini /etc/myapp/" }
    ],
    relatedCommands: ["cp", "chmod", "chown", "mkdir"]
  },
  {
    name: "shred",
    categoryId: "file",
    syntax: "shred [选项] 文件",
    simpleExplain: "安全删除文件使其无法恢复",
    detailExplain: "就像用碎纸机把文件碎成粉末——普通的 rm 删除只是把目录标记删了，数据还在磁盘上；shred 会反复覆写文件内容，让数据恢复工具也无力回天。",
    examples: [
      { description: "安全删除文件（覆写3次后删除）", code: "shred -u secret.txt" },
      { description: "覆写25次后删除", code: "shred -v -n 25 -u secret.txt" },
      { description: "只覆写不删除文件", code: "shred -n 5 important.dat" },
      { description: "安全删除整个分区数据", code: "shred -vfz /dev/sdb1" }
    ],
    relatedCommands: ["rm", "dd", "wipe", "cp"],
    dangerLevel: "danger"
  },
  {
    name: "chroot",
    categoryId: "file",
    syntax: "chroot 新根目录 [命令]",
    simpleExplain: "切换根目录运行程序",
    detailExplain: "就像在一个平行世界里工作——chroot 把指定的目录当作根目录 /，程序在这个新世界里运行，看不到外面的真实文件系统。常用于系统修复、测试环境搭建等场景。",
    examples: [
      { description: "切换到新根目录并运行shell", code: "chroot /mnt/sysroot /bin/bash" },
      { description: "在新根目录中执行指定命令", code: "chroot /mnt/sysroot apt update" },
      { description: "指定用户和组运行", code: "chroot --userspec=user:group /mnt/newroot /bin/sh" },
      { description: "切换根目录进行系统修复", code: "chroot /mnt/recovery /bin/bash" }
    ],
    relatedCommands: ["mount", "su", "docker", "ssh"],
    dangerLevel: "warning"
  },
  {
    name: "pushd",
    categoryId: "file",
    syntax: "pushd 目录",
    simpleExplain: "切换目录并保存当前目录到栈中",
    detailExplain: "就像在迷宫里留下面包屑标记来时的路——pushd 不仅切换到新目录，还会把当前目录记住，方便你之后用 popd 原路返回。",
    examples: [
      { description: "切换到新目录并保存当前目录", code: "pushd /var/log", output: "/var/log ~" },
      { description: "与当前目录交换", code: "pushd +1" },
      { description: "切换到项目目录", code: "pushd ~/projects/myapp" },
      { description: "在多个目录间快速切换", code: "pushd /etc/nginx" }
    ],
    relatedCommands: ["popd", "dirs", "cd", "pwd"]
  },
  {
    name: "popd",
    categoryId: "file",
    syntax: "popd",
    simpleExplain: "返回到之前pushd保存的目录",
    detailExplain: "就像沿着面包屑回到迷宫的起点——popd 会从目录栈中取出上次 pushd 保存的目录，让你轻松回到之前的工作位置。",
    examples: [
      { description: "返回上一个pushd保存的目录", code: "popd", output: "~" },
      { description: "跳转到栈中第2个目录", code: "popd +1" },
      { description: "删除栈顶目录但不切换", code: "popd -n" },
      { description: "与pushd配合在多个目录间跳转", code: "popd" }
    ],
    relatedCommands: ["pushd", "dirs", "cd", "pwd"]
  },
  {
    name: "dirs",
    categoryId: "file",
    syntax: "dirs",
    simpleExplain: "显示目录栈的内容",
    detailExplain: "就像查看你在迷宫里留下的所有面包屑标记——dirs 会列出所有用 pushd 保存过的目录，让你清楚自己可以在哪些目录之间快速跳转。",
    examples: [
      { description: "显示目录栈", code: "dirs", output: "~ /var/log /etc/nginx" },
      { description: "每行显示一个目录", code: "dirs -p", output: "~\n/var/log\n/etc/nginx" },
      { description: "显示目录栈中的索引号", code: "dirs -v", output: "0  ~\n1  /var/log\n2  /etc/nginx" },
      { description: "只显示第N个目录", code: "dirs +1" }
    ],
    relatedCommands: ["pushd", "popd", "cd", "pwd"]
  },
  {
    name: "md5sum",
    categoryId: "file",
    syntax: "md5sum 文件",
    simpleExplain: "计算文件的MD5校验和",
    detailExplain: "就像给文件拍一个指纹来验证身份——md5sum 会根据文件内容生成一串唯一的字符，只要文件内容有一丁点变化，这串字符就会完全不同。常用来验证文件下载是否完整。",
    examples: [
      { description: "计算文件的MD5值", code: "md5sum ubuntu-22.04.iso", output: "a4acf81002b7c7ce2e2e5f1b2c5c5c5c  ubuntu-22.04.iso" },
      { description: "校验文件与MD5值是否匹配", code: "md5sum -c checksum.md5", output: "ubuntu-22.04.iso: OK" },
      { description: "计算多个文件的MD5", code: "md5sum file1.txt file2.txt > checksums.md5" },
      { description: "从标准输入计算MD5", code: "echo \"hello\" | md5sum", output: "b1946ac92492d2347c6235b4d2611184  -" }
    ],
    relatedCommands: ["sha256sum", "cksum", "sha1sum", "file"]
  },
  {
    name: "sha256sum",
    categoryId: "file",
    syntax: "sha256sum 文件",
    simpleExplain: "计算文件的SHA256校验和",
    detailExplain: "就像给文件做DNA鉴定，比MD5更精确——SHA256 生成的校验和更长更安全，几乎不可能出现两个不同文件产生相同校验和的情况，是当前最推荐的文件校验方式。",
    examples: [
      { description: "计算文件的SHA256值", code: "sha256sum ubuntu-22.04.iso", output: "ab4acf81002b7c7ce2e2e5f1b2c5c5c5c...  ubuntu-22.04.iso" },
      { description: "校验文件完整性", code: "sha256sum -c SHA256SUMS", output: "ubuntu-22.04.iso: OK" },
      { description: "计算多个文件的SHA256", code: "sha256sum *.tar.gz > checksums.sha256" },
      { description: "从标准输入计算SHA256", code: "echo \"hello\" | sha256sum" }
    ],
    relatedCommands: ["md5sum", "cksum", "sha1sum", "gpg"]
  },
  {
    name: "xargs",
    categoryId: "file",
    syntax: "xargs [选项] [命令]",
    simpleExplain: "将标准输入转换为命令参数",
    detailExplain: "就像流水线工人把传送带上的零件一个个递给下一道工序——xargs 把前一个命令的输出变成后一个命令的参数，让两个命令能够无缝协作。",
    examples: [
      { description: "查找并删除所有.log文件", code: "find . -name \"*.log\" | xargs rm" },
      { description: "每行一个参数执行命令", code: "find . -name \"*.txt\" | xargs -I {} cp {} /backup/" },
      { description: "限制每次传递的参数数量", code: "echo \"a b c d e\" | xargs -n 2 echo", output: "a b\nc d\ne" },
      { description: "并行执行任务", code: "find . -name \"*.jpg\" | xargs -P 4 -I {} convert {} {}.png" }
    ],
    relatedCommands: ["find", "grep", "exec", "parallel"]
  },

  // ==================== 文本处理 ====================
  {
    name: "cat",
    categoryId: "text",
    syntax: "cat [选项] 文件名...",
    simpleExplain: "查看文件全部内容，就像一口气读完一本小册子",
    detailExplain: "就像你拿起一本薄薄的笔记本，一页一页从头看到尾，把所有内容都显示在屏幕上。适合查看小型文件的内容，如果文件很大，屏幕上内容会飞速滚动根本看不清——这时候就该用 less 或 more 了。",
    examples: [
      { description: "显示文件的全部内容", code: "cat config.json" },
      { description: "显示多个文件并合并输出", code: "cat header.txt body.txt footer.txt > full_doc.txt" },
      { description: "带行号显示文件内容", code: "cat -n main.py" },
      { description: "压缩连续空行为一行", code: "cat -s messy_text.txt" }
    ],
    relatedCommands: ["less", "more", "head", "tail"]
  },
  {
    name: "grep",
    categoryId: "text",
    syntax: "grep [选项] 模式 文件...",
    simpleExplain: "在文本中搜索关键词，就像用荧光笔在书中标记所有关键词出现的地方",
    detailExplain: "就像你拿着一本书和一个荧光笔，把书中所有包含「错误」这个词的行都标记高亮出来。grep 是 Linux 中最常用的文本搜索工具，支持正则表达式，能在海量日志中瞬间定位到你想要的那一行。",
    examples: [
      { description: "在文件中搜索 error 关键词", code: "grep \"error\" app.log" },
      { description: "忽略大小写搜索", code: "grep -i \"warning\" system.log" },
      { description: "显示匹配行的行号", code: "grep -n \"TODO\" src/*.ts" },
      { description: "递归搜索目录下所有文件", code: "grep -r \"function\" ./src/" },
      { description: "反向匹配：显示不包含该词的行", code: "grep -v \"^#\" config.ini" }
    ],
    relatedCommands: ["egrep", "fgrep", "sed", "awk"]
  },
  {
    name: "sed",
    categoryId: "text",
    syntax: "sed [选项] '脚本' 文件...",
    simpleExplain: "流编辑器，就像文字处理的流水线自动替换机器",
    detailExplain: "就像一台自动化文字处理流水线——文件内容像水流一样经过 sed 这台机器，机器按你的指令对每一行进行替换、删除、插入等操作，然后输出处理后的结果。最常用的功能就是批量替换文本中的字符串。",
    examples: [
      { description: "将文件中的 foo 替换为 bar 并输出", code: "sed 's/foo/bar/g' input.txt" },
      { description: "直接修改文件内容（原地替换）", code: "sed -i 's/old_domain.com/new_domain.com/g' *.html" },
      { description: "删除第 2 到第 5 行", code: "sed '2,5d' data.csv" },
      { description: "只显示匹配的行", code: "sed -n '/error/p' logfile" }
    ],
    relatedCommands: ["grep", "awk", "tr", "perl"]
  },
  {
    name: "awk",
    categoryId: "text",
    syntax: "awk [选项] '模式{动作}' 文件...",
    simpleExplain: "强大的文本数据处理工具，就像 Excel 的命令行版本",
    detailExplain: "就像 Excel 的命令行版——可以把文本按列拆分、筛选、计算、格式化输出。比如有一张逗号分隔的成绩表，awk 可以轻松算出平均分、过滤不及格的学生、按成绩排序输出。它是文本处理的瑞士军刀。",
    examples: [
      { description: "打印文件的第 1 列和第 3 列", code: "awk '{print $1, $3}' data.txt" },
      { description: "以冒号为分隔符，打印用户名", code: "awk -F: '{print $1}' /etc/passwd", output: "root\ndaemon\nbin\nsys\nuser" },
      { description: "计算第二列数值的总和", code: "awk '{sum+=$2} END {print sum}' numbers.txt" },
      { description: "过滤第三列大于 50 的行", code: "awk '$3 > 50' scores.csv" }
    ],
    relatedCommands: ["sed", "grep", "cut", "sort"]
  },
  {
    name: "head",
    categoryId: "text",
    syntax: "head [选项] 文件...",
    simpleExplain: "查看文件开头几行，就像看书先看前言部分",
    detailExplain: "就像你拿到一本新书，先翻开前几页看看大概讲什么内容。head 默认显示文件的前 10 行，也可以指定显示多少行。当你面对一个巨大的日志文件时，head 可以让你快速了解文件的格式和开头内容。",
    examples: [
      { description: "显示文件前 10 行（默认）", code: "head server.log" },
      { description: "只显示前 5 行", code: "head -n 5 config.yaml" },
      { description: "显示前 20 个字节", code: "head -c 20 binary.dat" },
      { description: "同时显示多个文件的开头", code: "head -n 3 *.txt" }
    ],
    relatedCommands: ["tail", "cat", "less", "tac"]
  },
  {
    name: "tail",
    categoryId: "text",
    syntax: "tail [选项] 文件...",
    simpleExplain: "查看文件末尾几行，就像看书先看结局",
    detailExplain: "就像你追剧忍不住先看最后一集的大结局，tail 让你直接跳到文件的末尾看最后几行。最实用的场景是用 tail -f 实时跟踪日志文件——就像坐在监控室看着屏幕上不断滚动的最新消息。",
    examples: [
      { description: "显示文件末尾 10 行（默认）", code: "tail access.log" },
      { description: "实时跟踪日志文件的新增内容", code: "tail -f /var/log/syslog" },
      { description: "显示最后 20 行", code: "tail -n 20 debug.log" },
      { description: "从第 100 行开始显示到末尾", code: "tail -n +100 bigfile.txt" }
    ],
    relatedCommands: ["head", "less", "tailf", "multitail"]
  },
  {
    name: "sort",
    categoryId: "text",
    syntax: "sort [选项] 文件...",
    simpleExplain: "对文本行进行排序，就像把一副扑克牌按顺序理好",
    detailExplain: "就像你手里有一堆乱序的扑克牌，sort 帮你把它们按从小到大（或 A 到 Z）的顺序排得整整齐齐。可以按数字大小排序、按字母顺序排序、倒序排列，甚至按某一列来排序——就像图书管理员整理乱糟糟的书架。",
    examples: [
      { description: "按字母顺序对文件内容排序", code: "sort names.txt", output: "Alice\nBob\nCharlie\nDavid" },
      { description: "按数字大小排序", code: "sort -n scores.txt" },
      { description: "倒序排列（从大到小）", code: "sort -r dates.txt" },
      { description: "按第 2 列排序", code: "sort -k2 -n data.csv" },
      { description: "去除重复行后排序", code: "sort -u list.txt" }
    ],
    relatedCommands: ["uniq", "awk", "cut", "wc"]
  },
  {
    name: "uniq",
    categoryId: "text",
    syntax: "uniq [选项] 文件...",
    simpleExplain: "去除重复的相邻行，就像把连在一起的相同答案合并成一条",
    detailExplain: "就像你在批改试卷时发现好几个同学连续写了完全相同的答案，uniq 把这些重复的答案合并成一条只保留一个。注意：它只会去掉相邻的重复行，所以通常配合 sort 先排序再去重才能去掉所有重复。",
    examples: [
      { description: "去除相邻重复行", code: "uniq raw_log.txt" },
      { description: "显示重复出现的行及出现次数", code: "uniq -c access.log", output: "   3  192.168.1.1\n   7  10.0.0.5\n   1  172.16.0.1" },
      { description: "只显示重复的行", code: "uniq -d users.txt" },
      { description: "只显示不重复的唯一行", code: "uniq -u items.txt" }
    ],
    relatedCommands: ["sort", "awk", "tr", "wc"]
  },
  {
    name: "wc",
    categoryId: "text",
    syntax: "wc [选项] 文件...",
    simpleExplain: "统计文件的字数、行数、字符数，就像作文老师统计作文字数",
    detailExplain: "就像语文老师批改作文时要数一数这篇文章有多少行、多少个字、多少个字符。wc 能同时告诉你这三个统计数据，对于快速了解一个大文件的基本情况非常有用——比如「这个日志文件居然有 10 万行！」",
    examples: [
      { description: "统计文件的行数、单词数和字符数", code: "wc essay.txt", output: "  25  180  1056 essay.txt" },
      { description: "只统计行数", code: "wc -l large_file.csv", output: "10000 large_file.csv" },
      { description: "只统计字符数", code: "wc -m message.txt" },
      { description: "统计多个文件并显示总计", code: "wc *.py" }
    ],
    relatedCommands: ["cat", "nl", "sort", "uniq"]
  },
  {
    name: "cut",
    categoryId: "text",
    syntax: "cut [选项] 文件...",
    simpleExplain: "按列切割文本，就像切蛋糕一样只取想要的切片",
    detailExplain: "就像一块长条蛋糕，上面有不同的配料，你只想吃其中几种——cut 帮你精确地「切开」你想要的那些列。比如 CSV 文件中每行有很多字段，但你只需要第 1 列和第 3 列，cut 一刀下去就给你提取出来了。",
    examples: [
      { description: "提取每行的第 1-3 个字符", code: "cut -c1-3 codes.txt" },
      { description: "以冒号为分隔符，提取第 1 和第 6 列", code: "cut -d: -f1,6 /etc/passwd", output: "root:/root\nbin:/bin\ndaemon:/sbin" },
      { description: "以逗号分隔，提取第 2 列", code: "cut -d',' -f2 data.csv" },
      { description: "提取除第 1 列外的所有列", code: "cut -d'\t' -f2- tabbed.tsv" }
    ],
    relatedCommands: ["awk", "paste", "sort", "join"]
  },
  {
    name: "tr",
    categoryId: "text",
    syntax: "tr [选项] 字符集1 字符集2",
    simpleExplain: "字符替换和删除工具，就像打字员把文中的某些字母统一换成别的",
    detailExplain: "就像一个专职的文字校对员，按照你的要求把文章中的某些字符批量替换成别的字符——比如把所有小写字母变大写、把空格换成制表符、或者干脆把某些字符全部删掉。它是一个纯粹的字符转换器。",
    examples: [
      { description: "把小写字母转换为大写", code: "echo \"hello world\" | tr 'a-z' 'A-Z'", output: "HELLO WORLD" },
      { description: "删除所有数字字符", code: "echo \"abc123def456\" | tr -d '0-9'", output: "abcdef" },
      { description: "把连续的空格压缩为一个", code: "echo \"hello    world\" | tr -s ' '", output: "hello world" },
      { description: "把换行符替换为空格", code: "tr '\\n' ' ' < multiline.txt" }
    ],
    relatedCommands: ["sed", "awk", "fold", "expand"]
  },
  {
    name: "diff",
    categoryId: "text",
    syntax: "diff [选项] 文件1 文件2",
    simpleExplain: "比较两个文件的差异，就像老师对比两份作业找出不同之处",
    detailExplain: "就像老师拿来两份作业放在一起逐行对比，用红笔圈出哪些地方不一样。diff 会精确地告诉你：哪一行被删除了、哪一行新增了、哪一行被修改了。这是程序员日常必备工具——用来查看代码改了什么地方。",
    examples: [
      { description: "比较两个文件的差异", code: "diff file_v1.txt file_v2.txt" },
      { description: "以统一的 diff 格式显示差异", code: "diff -u original.py modified.py" },
      { description: "递归比较两个目录的差异", code: "diff -r dir_a/ dir_b/" },
      { description: "忽略空格差异进行比较", code: "diff -w config_old.ini config_new.ini" }
    ],
    relatedCommands: ["cmp", "vimdiff", "patch", "sdiff"]
  },
  {
    name: "tee",
    categoryId: "text",
    syntax: "tee [选项] 文件...",
    simpleExplain: "分流输出，就像水管的三通接头同时向两个方向供水",
    detailExplain: "就像水管的 T 型三通接头——水流进来后，一边继续往下流（显示在屏幕上），另一边分出去存到一个文件里。tee 最经典的用法是在管道中间「偷」一份输出存档，同时不影响后续处理流程。",
    examples: [
      { description: "保存输出到文件的同时显示在屏幕", code: "echo \"important log\" | tee logfile.txt", output: "important log" },
      { description: "追加写入而非覆盖", code: "ping google.com | tee -a ping_result.txt" },
      { description: "同时写入多个文件", code: "cat data.csv | tee backup1.csv backup2.csv | sort" },
      { description: "配合 sudo 写入需要权限的文件", code: "echo \"setting\" | sudo tee /etc/config.d/new.conf" }
    ],
    relatedCommands: ["cat", "redirect", "pipe", "script"]
  },
  {
    name: "less",
    categoryId: "text",
    syntax: "less [选项] 文件...",
    simpleExplain: "分页阅读大文件，就像用电子书阅读器看书可以上下翻页",
    detailExplain: "就像用电子书阅读器看一本厚厚的小说——你可以一页一页往前翻、往后翻、跳到任意页、搜索关键词。比 cat 好用太多了，因为 cat 会把整本书一下子全倒出来，而 less 让你从容地阅读。",
    examples: [
      { description: "分页浏览大日志文件", code: "less /var/log/syslog" },
      { description: "打开时直接跳到文件末尾", code: "less +G huge_log.txt" },
      { description: "显示行号", code: "less -N source_code.c" },
      { description: "打开后直接搜索关键词", code: "less +/error app.log" }
    ],
    relatedCommands: ["more", "cat", "head", "tail"]
  },
  {
    name: "more",
    categoryId: "text",
    syntax: "more [选项] 文件...",
    simpleExplain: "简单的分页查看器，就像 less 的简化版翻书工具",
    detailExplain: "就像 less 的老前辈——也能分页显示文件内容，按空格翻下一页。但功能比较简单，不能往回翻页，也不能搜索。现在大家一般都用 less 替代它（因为 less is more，少即是多嘛，这是个程序员笑话）。",
    examples: [
      { description: "分页显示文件内容", code: "more readme.txt" },
      { description: "每屏显示 15 行", code: "more -15 long_text.txt" },
      { description: "从第 20 行开始显示", code: "more +20 document.txt" },
      { description: "清除屏幕后显示", code: "more -c file.txt" }
    ],
    relatedCommands: ["less", "cat", "pg", "most"]
  },
  {
    name: "paste",
    categoryId: "text",
    syntax: "paste [选项] 文件...",
    simpleExplain: "把多个文件按行合并，就像把两张纸左右拼接在一起",
    detailExplain: "就像你有两张名单纸，想把它们左右拼成一张——第一个人的左边是名单A的名字，右边是名单B的名字。paste 把多个文件的对应行横向拼接在一起，默认用制表符分隔。",
    examples: [
      { description: "将两个文件按行合并", code: "paste names.txt ages.txt", output: "Alice\t25\nBob\t30\nCharlie\t28" },
      { description: "用逗号作为分隔符合并", code: "paste -d',' ids.txt cities.txt" },
      { description: "合并多个文件", code: "paste -d'|' col1.txt col2.txt col3.txt" },
      { description: "将标准输入的行转为单行", code: "ls | paste -d' ' -s" }
    ],
    relatedCommands: ["cut", "join", "pr", "awk"]
  },
  {
    name: "fmt",
    categoryId: "text",
    syntax: "fmt [选项] 文件...",
    simpleExplain: "格式化文本段落，就像排版工人调整文字让它整齐美观",
    detailExplain: "就像专业的文字排版工人——把一段参差不齐的文字重新排版，让每行的宽度基本一致（默认 75 个字符），看起来整齐舒服。特别适合处理那些行长度乱七八糟的文本文件。",
    examples: [
      { description: "格式化段落（默认宽度 75 字符）", code: "fmt paragraph.txt" },
      { description: "设置每行宽度为 50 字符", code: "fmt -w 50 long_line.txt" },
      { description: "缩进每行 4 个空格", code: "fmt -p '    ' indented.txt" },
      { description: "合并短行并均匀分割", code: "fmt -s short_lines.txt" }
    ],
    relatedCommands: ["fold", "par", "pr", "nl"]
  },
  {
    name: "nl",
    categoryId: "text",
    syntax: "nl [选项] 文件...",
    simpleExplain: "给文本添加行号，就像给书的每一页印上页码",
    detailExplain: "就像出版社给书籍的每一页印上页码——nl 给文件的每一行前面加上行号。比 cat -n 更灵活，可以自定义行号的格式、起始值、步进值等，还可以选择性地给空行或不空行编号。",
    examples: [
      { description: "给文件添加行号", code: "nl source.py" },
      { description: "自定义行号格式", code: "nl -nrz -w3 data.txt" },
      { description: "行号从 10 开始，每次加 5", code: "nl -v10 -i5 list.txt" },
      { description: "不给空行编号", code: "nl -bt mixed.txt" }
    ],
    relatedCommands: ["cat", "wc", "pr", "fmt"]
  },
  {
    name: "tac",
    categoryId: "text",
    syntax: "tac [选项] 文件...",
    simpleExplain: "倒序显示文件内容，就像从最后一页往前看书",
    detailExplain: "cat 是从头读到尾，tac 恰恰反过来——从最后一行读到第一行。名字就是把 cat 倒过来拼写，很好记。当你想看日志文件的最新内容在最上面时，tac 特别好用。",
    examples: [
      { description: "倒序显示文件内容", code: "tac access.log" },
      { description: "倒序显示并用分隔符连接", code: "tac -s ',' csv_data.txt" }
    ],
    relatedCommands: ["cat", "tail", "rev", "sort -r"]
  },
  {
    name: "rev",
    categoryId: "text",
    syntax: "rev [选项] 文件...",
    simpleExplain: "反转每行中的字符顺序，就像镜面反射每个字",
    detailExplain: "就像照镜子——每个字符的顺序都被反转了。「hello」变成「olleh」，每一行都独立地进行字符级反转。这个命令在日常工作中用得不太多，但在做某些文字游戏或密码学相关的事情时会派上用场。",
    examples: [
      { description: "反转每行中的字符顺序", code: "echo \"hello world\" | rev", output: "dlrow olleh" },
      { description: "反转文件中每一行", code: "rev palindrome_test.txt" },
      { description: "检查是否为回文字符串", code: "echo \"level\" | rev", output: "level" }
    ],
    relatedCommands: ["tac", "tr", "sed", "perl"]
  },
  {
    name: "rg",
    categoryId: "text",
    syntax: "rg [选项] 模式 [文件]",
    simpleExplain: "更快更强的搜索工具，就像给grep装上了涡轮增压引擎",
    detailExplain: "就像给grep装上了涡轮增压引擎——ripgrep (rg) 用Rust编写，搜索速度极快，自动忽略 .gitignore 中的文件，默认递归搜索，是现代开发者替代 grep 的首选工具。",
    examples: [
      { description: "在当前目录递归搜索关键词", code: "rg \"TODO\" .", output: "src/main.rs:10:// TODO: refactor this" },
      { description: "只搜索特定类型的文件", code: "rg -t py \"import os\" ." },
      { description: "显示匹配行的上下文", code: "rg -C 3 \"error\" app.log" },
      { description: "只显示匹配的文件名", code: "rg -l \"function\" src/" }
    ],
    relatedCommands: ["grep", "ag", "find", "sed"]
  },
  {
    name: "ag",
    categoryId: "text",
    syntax: "ag [选项] 模式 [路径]",
    simpleExplain: "超快的代码搜索工具，就像一个训练有素的搜救犬",
    detailExplain: "就像一个训练有素的搜救犬——The Silver Searcher (ag) 比 grep 快很多，自动忽略版本控制目录和二进制文件，专为在代码库中搜索而设计。",
    examples: [
      { description: "在代码中搜索函数定义", code: "ag \"def handle_request\" ." },
      { description: "忽略大小写搜索", code: "ag -i \"error\" /var/log/" },
      { description: "只搜索Python文件", code: "ag -G \"\\.py$\" \"import\" ." },
      { description: "显示匹配行号和上下文", code: "ag -C 2 \"class User\" src/" }
    ],
    relatedCommands: ["rg", "grep", "find", "ack"]
  },
  {
    name: "jq",
    categoryId: "text",
    syntax: "jq [过滤器] [文件]",
    simpleExplain: "JSON数据处理工具，就像一个精通翻译的JSON语言专家",
    detailExplain: "就像一个精通翻译的JSON语言专家——jq 能读取、过滤、转换JSON数据，把复杂的JSON结构提取成你想要的格式，是处理API返回数据的必备利器。",
    examples: [
      { description: "提取JSON中的某个字段", code: "echo '{\"name\":\"Tom\",\"age\":25}' | jq '.name'", output: "\"Tom\"" },
      { description: "格式化压缩的JSON", code: "curl -s api.example.com/data | jq ." },
      { description: "提取数组中的所有元素", code: "jq '.users[].name' users.json" },
      { description: "筛选满足条件的对象", code: "jq '.[] | select(.age > 18)' people.json" }
    ],
    relatedCommands: ["grep", "sed", "awk", "python"]
  },
  {
    name: "column",
    categoryId: "text",
    syntax: "column [选项] [文件]",
    simpleExplain: "将文本按列对齐显示，就像把散乱的队伍整理成整齐的方阵",
    detailExplain: "就像把散乱的队伍整理成整齐的方阵——column 把杂乱无章的文本按列排列整齐，让输出看起来像一张规整的表格，特别适合展示数据。",
    examples: [
      { description: "按冒号分隔并整齐显示", code: "column -t -s ':' /etc/passwd" },
      { description: "将文本排成多列显示", code: "seq 1 10 | column" },
      { description: "指定输出宽度为80字符", code: "column -c 80 filelist.txt" },
      { description: "按制表符分隔对齐", code: "column -t -s $'\\t' data.tsv" }
    ],
    relatedCommands: ["sort", "paste", "awk", "pr"]
  },
  {
    name: "expand",
    categoryId: "text",
    syntax: "expand [文件]",
    simpleExplain: "将Tab转换为空格，就像把折叠的椅子全部展开",
    detailExplain: "就像把折叠的椅子全部展开——expand 把文件中的 Tab 字符替换成空格，确保在不同编辑器中显示效果一致，不会因为Tab宽度设置不同而错位。",
    examples: [
      { description: "将Tab转换为空格", code: "expand code.py" },
      { description: "指定Tab宽度为4个空格", code: "expand -t 4 code.py" },
      { description: "转换后保存到新文件", code: "expand -t 2 indent.ts > indent_spaces.ts" },
      { description: "只转换行首的Tab", code: "expand -i Makefile" }
    ],
    relatedCommands: ["unexpand", "tr", "sed", "cut"]
  },
  {
    name: "unexpand",
    categoryId: "text",
    syntax: "unexpand [文件]",
    simpleExplain: "将空格转换为Tab，就像把展开的椅子重新折叠起来",
    detailExplain: "就像把展开的椅子重新折叠起来——unexpand 把连续的空格转换回 Tab 字符，可以减小文件体积，也是 expand 的反向操作。",
    examples: [
      { description: "将空格转换为Tab", code: "unexpand code.py" },
      { description: "指定Tab宽度为4", code: "unexpand -t 4 code.py" },
      { description: "只转换行首的空格", code: "unexpand --first-only code.py" },
      { description: "转换后保存到新文件", code: "unexpand -t 2 spaces.txt > tabs.txt" }
    ],
    relatedCommands: ["expand", "tr", "sed", "cut"]
  },
  {
    name: "shuf",
    categoryId: "text",
    syntax: "shuf [选项] [文件]",
    simpleExplain: "随机打乱行顺序，就像洗牌一样把顺序打乱",
    detailExplain: "就像洗牌一样把顺序打乱——shuf 会把输入的每一行随机重新排列，常用于随机抽取、抽奖、生成随机序列等场景。",
    examples: [
      { description: "随机打乱文件中的行", code: "shuf names.txt" },
      { description: "随机抽取3行", code: "shuf -n 3 names.txt" },
      { description: "生成1到10的随机数", code: "shuf -i 1-10 -n 1", output: "7" },
      { description: "从命令行参数中随机选一个", code: "shuf -e apple banana cherry -n 1", output: "banana" }
    ],
    relatedCommands: ["sort", "head", "tail", "seq"]
  },
  {
    name: "comm",
    categoryId: "text",
    syntax: "comm [选项] 文件1 文件2",
    simpleExplain: "比较两个已排序文件的异同，就像找两份名单的相同和不同之处",
    detailExplain: "就像找两份名单的相同和不同之处——comm 会分三列显示：只在文件1中有的、只在文件2中有的、两个文件都有的。前提是两个文件必须先排好序。",
    examples: [
      { description: "比较两个文件的异同", code: "comm file1.txt file2.txt" },
      { description: "只显示两个文件共有的行", code: "comm -12 file1.txt file2.txt" },
      { description: "只显示文件1独有的行", code: "comm -23 file1.txt file2.txt" },
      { description: "只显示文件2独有的行", code: "comm -13 file1.txt file2.txt" }
    ],
    relatedCommands: ["diff", "sort", "join", "uniq"]
  },
  {
    name: "join",
    categoryId: "text",
    syntax: "join [选项] 文件1 文件2",
    simpleExplain: "按共同字段合并两文件，就像根据学号把两张表合并成一张",
    detailExplain: "就像根据学号把两张表合并成一张——join 根据两个文件中相同的字段（默认是第一列）把行合并在一起，类似于数据库的 JOIN 操作。",
    examples: [
      { description: "按第一列合并两个文件", code: "join names.txt scores.txt" },
      { description: "指定合并的字段列", code: "join -1 2 -2 1 file1.txt file2.txt" },
      { description: "显示未匹配的行", code: "join -a 1 names.txt scores.txt" },
      { description: "指定字段分隔符", code: "join -t ',' data1.csv data2.csv" }
    ],
    relatedCommands: ["comm", "sort", "paste", "awk"]
  },
  {
    name: "split",
    categoryId: "text",
    syntax: "split [选项] 文件 [前缀]",
    simpleExplain: "将大文件分割成小文件，就像把一个大蛋糕切成小块",
    detailExplain: "就像把一个大蛋糕切成小块——split 把一个大文件按大小或行数拆分成多个小文件，方便传输或处理。每个小文件会自动命名。",
    examples: [
      { description: "按默认1000行分割文件", code: "split large_log.txt" },
      { description: "每100行分割一次", code: "split -l 100 data.txt chunk_" },
      { description: "按大小分割（每个50MB）", code: "split -b 50M bigfile.zip part_" },
      { description: "分割时使用数字后缀", code: "split -d -l 500 data.txt part_" }
    ],
    relatedCommands: ["csplit", "cat", "wc", "head"]
  },
  {
    name: "csplit",
    categoryId: "text",
    syntax: "csplit [选项] 文件 模式",
    simpleExplain: "按内容模式分割文件，就像按章节把一本书拆分成多个小册子",
    detailExplain: "就像按章节把一本书拆分成多个小册子——csplit 根据文件内容的模式（如特定行或正则匹配）来分割文件，比 split 更灵活，可以按内容逻辑拆分。",
    examples: [
      { description: "按空行分割文件", code: "csplit file.txt /^$/" },
      { description: "按指定行号分割", code: "csplit data.txt 100 200 300" },
      { description: "按章节标题分割", code: "csplit book.txt '/^Chapter/' '{*}'" },
      { description: "保留分割后的文件（不自动删除）", code: "csplit -k log.txt '/^--/' '{*}'" }
    ],
    relatedCommands: ["split", "cat", "head", "tail"]
  },
  {
    name: "iconv",
    categoryId: "text",
    syntax: "iconv -f 编码 -t 编码 文件",
    simpleExplain: "转换文件编码，就像把中文翻译成英文一样转换字符编码",
    detailExplain: "就像把中文翻译成英文一样转换字符编码——iconv 把文件从一种字符编码转换为另一种，解决不同系统之间编码不兼容导致的乱码问题。",
    examples: [
      { description: "将GBK编码转换为UTF-8", code: "iconv -f GBK -t UTF-8 readme.txt" },
      { description: "转换后保存到新文件", code: "iconv -f GB18030 -t UTF-8 input.txt -o output.txt" },
      { description: "列出所有支持的编码", code: "iconv -l" },
      { description: "转换时忽略无法识别的字符", code: "iconv -f GBK -t UTF-8//IGNORE messy.txt" }
    ],
    relatedCommands: ["dos2unix", "unix2dos", "file", "sed"]
  },
  {
    name: "dos2unix",
    categoryId: "text",
    syntax: "dos2unix [文件]",
    simpleExplain: "将Windows换行符转换为Unix格式，就像把右舵车改成左舵车",
    detailExplain: "就像把右舵车改成左舵车——Windows 用 \\r\\n 换行，Unix/Linux 用 \\n 换行，dos2unix 把 Windows 格式的换行符转换为 Unix 格式，解决脚本在Linux上运行报错的问题。",
    examples: [
      { description: "转换Windows文件为Unix格式", code: "dos2unix script.sh" },
      { description: "批量转换所有sh文件", code: "dos2unix *.sh" },
      { description: "只显示哪些文件需要转换", code: "dos2unix -i *.txt" },
      { description: "保留原文件并转换到新文件", code: "dos2unix -n input.txt output.txt" }
    ],
    relatedCommands: ["unix2dos", "iconv", "sed", "tr"]
  },
  {
    name: "unix2dos",
    categoryId: "text",
    syntax: "unix2dos [文件]",
    simpleExplain: "将Unix换行符转换为Windows格式，就像把左舵车改成右舵车",
    detailExplain: "就像把左舵车改成右舵车——unix2dos 是 dos2unix 的反向操作，把 Unix 的 \\n 换行符转换为 Windows 的 \\r\\n 格式，方便在Windows环境中使用。",
    examples: [
      { description: "转换Unix文件为Windows格式", code: "unix2dos readme.txt" },
      { description: "批量转换", code: "unix2dos *.txt" },
      { description: "保留原文件并转换到新文件", code: "unix2dos -n input.txt output.txt" },
      { description: "只显示文件信息不转换", code: "unix2dos -i *.txt" }
    ],
    relatedCommands: ["dos2unix", "iconv", "sed", "tr"]
  },
  {
    name: "base64",
    categoryId: "text",
    syntax: "base64 [选项] [文件]",
    simpleExplain: "Base64编码/解码工具，就像把信件用特殊密码重新编码",
    detailExplain: "就像把信件用特殊密码重新编码——base64 把二进制数据转换成纯文本格式（只含字母、数字和 +/），方便在只支持文本的环境中传输，比如邮件附件和JSON中嵌入图片。",
    examples: [
      { description: "编码字符串", code: "echo -n \"hello\" | base64", output: "aGVsbG8=" },
      { description: "解码Base64字符串", code: "echo \"aGVsbG8=\" | base64 -d", output: "hello" },
      { description: "编码文件内容", code: "base64 image.png > image_b64.txt" },
      { description: "解码Base64文件", code: "base64 -d image_b64.txt > image.png" }
    ],
    relatedCommands: ["xxd", "od", "hexdump", "openssl"]
  },
  {
    name: "strings",
    categoryId: "text",
    syntax: "strings [选项] 文件",
    simpleExplain: "从二进制文件中提取可读文本，就像从矿石中提炼黄金",
    detailExplain: "就像从矿石中提炼黄金——strings 从二进制文件（如可执行程序、图片等）中提取出人类可读的字符串，常用于逆向工程、调试或查看编译后程序中的文本信息。",
    examples: [
      { description: "从二进制文件中提取可读文本", code: "strings /usr/bin/ls" },
      { description: "只提取至少10个字符的文本", code: "strings -n 10 program.bin" },
      { description: "在二进制文件中搜索特定字符串", code: "strings app.bin | grep \"password\"" },
      { description: "提取并显示偏移地址", code: "strings -t x library.so" }
    ],
    relatedCommands: ["grep", "xxd", "od", "hexdump"]
  },
  {
    name: "fold",
    categoryId: "text",
    syntax: "fold [选项] [文件]",
    simpleExplain: "将长行折叠为指定宽度，就像把超长的纸条按固定宽度折起来",
    detailExplain: "就像把超长的纸条按固定宽度折起来——fold 把超过指定宽度的行自动换行，防止内容超出终端显示范围，默认每行80个字符。",
    examples: [
      { description: "按默认80列折叠长行", code: "fold long_text.txt" },
      { description: "指定每行40个字符", code: "fold -w 40 readme.txt" },
      { description: "按字节宽度折叠（不截断多字节字符）", code: "fold -s -w 60 article.txt" },
      { description: "在空格处折行", code: "fold -s -w 50 paragraph.txt" }
    ],
    relatedCommands: ["fmt", "pr", "column", "cut"]
  },

  // ==================== 进程管理 ====================
  {
    name: "ps",
    categoryId: "process",
    syntax: "ps [选项]",
    simpleExplain: "查看当前运行的进程列表，就像看公司的员工考勤表",
    detailExplain: "就像公司的人事经理拿出一份员工在岗名单——谁在工作（运行中）、谁的工号是多少（PID）、占了多少工位资源（CPU/内存）、谁来启动的这个任务。ps 是了解系统正在做什么的最基本工具。",
    examples: [
      { description: "显示当前用户的进程", code: "ps" },
      { description: "显示所有进程的详细信息", code: "ps aux" },
      { description: "以树形结构显示进程关系", code: "ps auxf" },
      { description: "显示指定 PID 的进程信息", code: "ps -p 1234 -o pid,user,cmd" }
    ],
    relatedCommands: ["top", "pstree", "pgrep", "kill"]
  },
  {
    name: "top",
    categoryId: "process",
    syntax: "top [选项]",
    simpleExplain: "实时监控系统进程，就像机场大屏幕实时显示航班动态",
    detailExplain: "就像机场的实时航班信息大屏幕——不断刷新显示哪些进程正在运行、占用多少 CPU 和内存、已经运行了多久。屏幕每隔几秒自动刷新一次，让你能实时掌握系统的健康状态。按 q 键退出。",
    examples: [
      { description: "启动 top 实时监控界面", code: "top" },
      { description: "只显示特定用户的进程", code: "top -u www-data" },
      { description: "每 5 秒刷新一次", code: "top -d 5" },
      { description: "只显示 3 次刷新后退出", code: "top -n 3 -b" }
    ],
    relatedCommands: ["htop", "ps", "vmstat", "mpstat"]
  },
  {
    name: "htop",
    categoryId: "process",
    syntax: "htop [选项]",
    simpleExplain: "增强版进程监控器，就像 top 的升级版彩色触摸屏",
    detailExplain: "就像 top 的豪华升级版——有彩色的界面、可以用鼠标点击操作、可以用方向键选中进程、支持树形视图显示。如果你觉得 top 太简陋难用，htop 绝对会让你眼前一亮。不过很多系统需要额外安装。",
    examples: [
      { description: "启动 htop 交互式界面", code: "htop" },
      { description: "按 CPU 使用率排序", code: "htop --sort-key PERCENT_CPU" },
      { description: "只显示指定 PID 的进程树", code: "htop -p 1234,5678" },
      { description: "启动时延迟 2 秒再显示", code: "htop -d 2" }
    ],
    relatedCommands: ["top", "ps", "glances", "atop"]
  },
  {
    name: "kill",
    categoryId: "process",
    syntax: "kill [选项] <PID>",
    simpleExplain: "终止进程，就像给正在运行的程序发一张停工通知单",
    detailExplain: "就像你对着一个正在干活的工人喊「停下！」——kill 向指定的进程发送信号，最常用的是终止信号（SIGTERM 或 SIGKILL）。SIGTERM 像是礼貌地说「请你停下来收拾下班」，而 SIGKILL 则像是直接拔电源——强制立即停止，不给任何反应机会。",
    examples: [
      { description: "礼貌地请求进程终止", code: "kill 1234" },
      { description: "强制杀死进程", code: "kill -9 5678" },
      { description: "发送挂起信号（暂停但不结束）", code: "kill -STOP 9012" },
      { description: "发送继续信号（恢复被暂停的进程）", code: "kill -CONT 9012" }
    ],
    relatedCommands: ["killall", "pkill", "pgrep", "jobs"],
    dangerLevel: "warning",
  },
  {
    name: "bg",
    categoryId: "process",
    syntax: "bg [作业号]",
    simpleExplain: "把暂停的任务放到后台运行，就像把活儿交给后台部门慢慢做",
    detailExplain: "就像你在前台接待客人时，把一些不需要立刻完成的工作交代给后台部门去慢慢处理——前台终端解放出来可以继续接受其他命令，后台的工作在默默进行。通常配合 Ctrl+Z 先暂停任务再用 bg 放到后台。",
    examples: [
      { description: "把最近一个暂停的作业放到后台运行", code: "bg" },
      { description: "把指定作业号的进程放到后台", code: "bg %2" }
    ],
    relatedCommands: ["fg", "jobs", "nohup", "Ctrl+Z"]
  },
  {
    name: "fg",
    categoryId: "process",
    syntax: "fg [作业号]",
    simpleExplain: "把后台任务拉回前台，就像把后台部门的活儿拿回自己手上做",
    detailExplain: "就像你之前把一项工作交给了后台部门（bg），现在想亲自过问一下，就用 fg 把它重新调回前台终端。此时终端就被这个任务占据，直到它完成或再次被你放到后台。",
    examples: [
      { description: "把最近的后台作业拉回前台", code: "fg" },
      { description: "把 2 号作业拉回前台", code: "fg %2" }
    ],
    relatedCommands: ["bg", "jobs", "Ctrl+Z", "nohup"]
  },
  {
    name: "jobs",
    categoryId: "process",
    syntax: "jobs [选项]",
    simpleExplain: "查看当前 shell 的后台任务列表，就像查看自己的待办事项清单",
    detailExplain: "就像你口袋里的待办事项清单——记录着你在这个终端里启动了哪些后台任务、它们的编号是多少、状态是正在运行还是暂停了。这是管理前后台任务的必备参考表。",
    examples: [
      { description: "列出当前 shell 的所有后台作业", code: "jobs", output: "[1]   Running    python train.py &\n[2]-  Stopped    vim notes.txt\n[3]+  Running    npm start &" },
      { description: "列出作业的同时显示 PID", code: "jobs -l" },
      { description: "只列出正在运行的作业", code: "jobs -r" },
      { description: "只列出已暂停的作业", code: "jobs -s" }
    ],
    relatedCommands: ["fg", "bg", "Ctrl+Z", "nohup"]
  },
  {
    name: "nohup",
    categoryId: "process",
    syntax: "nohup 命令 [参数...]",
    simpleExplain: "让命令断开终端后仍继续运行，就像设定了自动运行的机器人不怕主人离开",
    detailExplain: "就像你安排了一个机器人干活，然后关上门回家——普通的命令在你关闭终端时就会被终止，但 nohup 启动的命令就像一个独立的机器人，不管你是否在线，它都会坚持把活干完。非常适合跑长时间任务。",
    examples: [
      { description: "让脚本在后台持续运行", code: "nohup ./backup.sh &" },
      { description: "自定义输出日志文件", code: "nohup python model_train.py > training.log 2>&1 &" },
      { description: "配合 nice 降低优先级运行", code: "nohup nice -n 19 ./heavy_computation.sh &" }
    ],
    relatedCommands: ["bg", "screen", "tmux", "disown"]
  },
  {
    name: "nice",
    categoryId: "process",
    syntax: "nice [选项] 命令 [参数...]",
    simpleExplain: "以指定优先级启动进程，就像告诉系统这个任务急不急",
    detailExplain: "就像你去办事大厅排队，有的人拿的是 VIP 号（优先级高，先办理），有的人拿的是普通号（优先级低，慢慢排）。nice 值范围是 -20（最高优先级）到 19（最低优先级），默认是 0。nice 值越大表示越「谦让」，越愿意让别人先执行。",
    examples: [
      { description: "以低优先级运行耗时任务", code: "nice -n 10 ./compile_project.sh" },
      { description: "以较高优先级运行关键任务", code: "nice -n -5 ./critical_service" },
      { description: "查看当前 nice 默认值", code: "nice", output: "0" }
    ],
    relatedCommands: ["renice", "ionice", "nohup", "chrt"]
  },
  {
    name: "renice",
    categoryId: "process",
    syntax: "renice [选项] 优先级 <PID>",
    simpleExplain: "调整正在运行进程的优先级，就像中途改变办事的紧急程度",
    detailExplain: "就像一个任务已经开始执行了，但你突然发现它太占资源或者太紧急了——renice 可以中途调整它的优先级。nice 是启动时设定的，renice 是运行中修改的，两者互补。",
    examples: [
      { description: "降低 PID 为 1234 的进程优先级", code: "renice +10 1234" },
      { description: "提高某个进程的优先级", code: "renice -5 5678" },
      { description: "修改用户所有进程的优先级", code: "renice +5 -u www-data" },
      { description: "修改进程组所有进程的优先级", code: "renice +10 -g 1001" }
    ],
    relatedCommands: ["nice", "top", "ps", "ionice"]
  },
  {
    name: "pgrep",
    categoryId: "process",
    syntax: "pgrep [选项] 模式",
    simpleExplain: "按名称查找进程 ID，就像通过姓名查工号",
    detailExplain: "就像人事系统中根据员工姓名查找他的工号——你知道程序叫什么名字（比如 chrome），但不知道它的 PID，pgrep 帮你快速找到。比 ps | grep 更简洁高效，直接返回匹配的 PID 号码。",
    examples: [
      { description: "查找 nginx 进程的 PID", code: "pgrep nginx", output: "1234\n1235" },
      { description: "查找并显示进程名", code: "pgrep -a python", output: "5678 python train.py\n5690 python serve.py" },
      { description: "查找属于指定用户的进程", code: "pgrep -u root sshd" },
      { description: "查找最老的匹配进程", code: "pgrep -o firefox" }
    ],
    relatedCommands: ["pkill", "ps", "pidof", "kill"]
  },
  {
    name: "pkill",
    categoryId: "process",
    syntax: "pkill [选项] 模式",
    simpleExplain: "按名称杀死进程，就像点名让人下班",
    detailExplain: "就像 pgrep + kill 的组合拳——先根据进程名找到对应的进程，然后直接发送终止信号把它杀掉。不用先查 PID 再 kill，一步到位。比如 pkill firefox 就能把所有 Firefox 进程都关掉。",
    examples: [
      { description: "杀死所有名为 chrome 的进程", code: "pkill chrome" },
      { description: "向指定用户的进程发送终止信号", code: "pkill -u bob sleep" },
      { description: "强制杀死匹配的进程", code: "pkill -9 hung_process" },
      { description: "先模拟执行", code: "pkill -l python" }
    ],
    relatedCommands: ["pgrep", "kill", "killall", "ps"],
    dangerLevel: "warning",
  },
  {
    name: "killall",
    categoryId: "process",
    syntax: "killall [选项] 进程名",
    simpleExplain: "按进程名杀死所有同名进程，就像通知所有叫这个名字的人都下班",
    detailExplain: "就像广播通知：「所有叫 Tom 的人请下班！」——不管有几个 Tom，全部一起叫停。killall 和 pkill 类似，但 killall 要求进程名必须完全匹配，更严格一些。",
    examples: [
      { description: "杀死所有 Firefox 进程", code: "killall firefox" },
      { description: "优雅地等待进程自行关闭", code: "killall -w nginx" },
      { description: "按信号名发送信号", code: "killall -HUP apache2" },
      { description: "交互式确认后才杀死进程", code: "killall -i chrome" }
    ],
    relatedCommands: ["kill", "pkill", "pgrep", "xkill"],
    dangerLevel: "warning",
  },
  {
    name: "watch",
    categoryId: "process",
    syntax: "watch [选项] 命令",
    simpleExplain: "周期性重复执行命令，就像每隔几分钟看一次手表确认时间",
    detailExplain: "就像你设置了一个闹钟每隔几秒钟提醒你看一次某个指标——watch 会反复执行同一个命令并把结果刷新显示在屏幕上。比如 watch -n 2 df -h 每 2 秒刷新一次磁盘用量，非常直观地观察变化趋势。",
    examples: [
      { description: "每 2 秒刷新显示内存使用情况", code: "watch -n 2 free -h" },
      { description: "高亮显示变化的区域", code: "watch -d 'ls -l /tmp'" },
      { description: "遇到错误时不中断继续执行", code: "watch -e ping google.com" },
      { description: "执行前先清除屏幕", code: "watch -t date" }
    ],
    relatedCommands: ["top", "cron", "sleep", "loop"]
  },
  {
    name: "screen",
    categoryId: "process",
    syntax: "screen [选项] [命令]",
    simpleExplain: "虚拟终端管理器，就像随身携带一个可以随时打开的便携工作站",
    detailExplain: "就像一个可以随时打开、关闭、带走的便携式虚拟终端——你在 screen 里启动的任务不会因为 SSH 断开而被杀死。可以创建多个「窗口」，每个窗口运行不同的任务。即使你关掉电脑回家，screen 里的任务仍在服务器上默默运行着。",
    examples: [
      { description: "创建一个新的 screen 会话", code: "screen -S mysession" },
      { description: "脱离会话（任务继续在后台运行）", code: "Ctrl+A, D" },
      { description: "重新连接到已有的会话", code: "screen -r mysession" },
      { description: "列出所有 screen 会话", code: "screen -ls" }
    ],
    relatedCommands: ["tmux", "nohup", "bg", "byobu"]
  },
  {
    name: "tmux",
    categoryId: "process",
    syntax: "tmux [选项] [命令]",
    simpleExplain: "终端复用器，就像在一个屏幕上同时开多个窗口办公",
    detailExplain: "就像一个超级工作站——你可以把一个终端屏幕分割成多个窗格（pane），每个窗格运行不同的命令；也可以创建多个标签页（window），每个标签页是一组窗格布局。最重要的是，tmux 里的任务不受 SSH 断开的影响，下次重新连接一切都在。",
    examples: [
      { description: "创建新的 tmux 会话", code: "tmux new -s work" },
      { description: "水平分割当前窗格", code: "Ctrl+B, %" },
      { description: "垂直分割当前窗格", code: "Ctrl+B, \"" },
      { description: "列出所有会话", code: "tmux list-sessions" },
      { description: "重新连接会话", code: "tmux attach -t work" }
    ],
    relatedCommands: ["screen", "nohup", "byobu", "zellij"]
  },
  {
    name: "crontab",
    categoryId: "process",
    syntax: "crontab [选项]",
    simpleExplain: "定时任务管理器，就像每天定时响铃的智能闹钟",
    detailExplain: "就像你设定了一个超级智能闹钟——不仅每天早上叫你起床，还能在每个周一上午 9 点自动备份文件、每月 1 号凌晨清理临时文件、每隔 5 分钟检查一次服务状态。crontab 就是 Linux 的「定时任务管家」。",
    examples: [
      { description: "编辑当前用户的定时任务", code: "crontab -e" },
      { description: "列出当前的定时任务", code: "crontab -l", output: "0 2 * * * /home/user/backup.sh\n*/5 * * * * /usr/bin/check_health.sh" },
      { description: "删除所有定时任务", code: "crontab -r" },
      { description: "为其他用户编辑 crontab", code: "crontab -u www-data -e" }
    ],
    relatedCommands: ["at", "systemctl timer", "anacron", "fcron"]
  },
  {
    name: "systemctl",
    categoryId: "process",
    syntax: "systemctl [选项] 命令 [服务名]",
    simpleExplain: "系统服务控制器，就像管理公司各部门的总指挥中心",
    detailExplain: "就像一家大公司的总控制中心——可以启动/停止各个部门（服务）、查看各部门运行状态、设置开机自启、查看服务日志。现代 Linux 系统都用 systemd 管理服务，systemctl 就是最核心的控制面板。",
    examples: [
      { description: "启动 nginx 服务", code: "systemctl start nginx" },
      { description: "停止 nginx 服务", code: "systemctl stop nginx" },
      { description: "重启 nginx 服务", code: "systemctl restart nginx" },
      { description: "查看服务状态", code: "systemctl status nginx" },
      { description: "设置开机自启", code: "systemctl enable nginx" },
      { description: "查看所有正在运行的服务", code: "systemctl list-units --type=service --state=running" }
    ],
    relatedCommands: ["service", "journalctl", "initctl", "chkconfig"]
  },
  {
    name: "service",
    categoryId: "process",
    syntax: "service <服务名> <命令>",
    simpleExplain: "传统服务管理命令，就像老式的手动控制面板",
    detailExplain: "就像 systemctl 的老前辈——在较旧的 Linux 系统上用来管理服务的启停。虽然新系统推荐用 systemctl，但 service 命令在很多场合仍然可用，而且语法更简单直观。",
    examples: [
      { description: "启动 Apache 服务", code: "service apache2 start" },
      { description: "查看 MySQL 服务状态", code: "service mysql status" },
      { description: "重启防火墙服务", code: "service iptables restart" },
      { description: "列出所有服务及其状态", code: "service --status-all" }
    ],
    relatedCommands: ["systemctl", "chkconfig", "update-rc.d", "initctl"]
  },
  {
    name: "at",
    categoryId: "process",
    syntax: "at [选项] 时间",
    simpleExplain: "一次性定时任务，就像定好今晚 8 点提醒自己做一件事",
    detailExplain: "就像手机上的「提醒」功能——设定一个未来的时间点，到时候系统自动帮你执行一次指定命令。和 crontab 不同，at 只执行一次就结束了，适合「今天下午 3 点发一封邮件」这种一次性需求。",
    examples: [
      { description: "在今天下午 3 点执行备份脚本", code: "echo '/home/user/backup.sh' | at 15:00" },
      { description: "在 10 分钟后执行命令", code: "echo 'echo Time is up!' | at now + 10 minutes" },
      { description: "查看待执行的 at 任务队列", code: "atq" },
      { description: "删除指定编号的 at 任务", code: "atrm 1" }
    ],
    relatedCommands: ["crontab", "batch", "timeout", "sleep"]
  },
  {
    name: "pidof",
    categoryId: "process",
    syntax: "pidof 程序名",
    simpleExplain: "查找正在运行程序的进程ID，就像在人群中找到某人的身份证号",
    detailExplain: "就像在一个人山人海的广场上，你想找到某个叫「张三」的人——pidof 能直接告诉你他的身份证号（PID），方便你后续对他进行操作，比如发送信号或查看详情。",
    examples: [
      { description: "查找 nginx 进程的 PID", code: "pidof nginx", output: "1234 1233" },
      { description: "查找 sshd 进程的 PID", code: "pidof sshd" },
      { description: "只显示一个 PID（最新的）", code: "pidof -s nginx" },
      { description: "查找指定脚本进程的 PID", code: "pidof -x myscript.sh" }
    ],
    relatedCommands: ["pgrep", "ps", "pkill", "kill"]
  },
  {
    name: "lsof",
    categoryId: "process",
    syntax: "lsof [选项]",
    simpleExplain: "列出被进程打开的文件，就像查看谁正在使用哪些房间",
    detailExplain: "就像酒店前台查看每个房间住了谁——lsof 能告诉你哪个进程打开了哪些文件、端口或目录。在排查「文件被谁占用无法删除」或「端口被谁占用」时特别有用，就像查房记录一样一目了然。",
    examples: [
      { description: "查看 80 端口被哪个进程占用", code: "lsof -i :80", output: "nginx  1234  root  6u  IPv4  12345  0t0  TCP *:http (LISTEN)" },
      { description: "查看某个用户打开的所有文件", code: "lsof -u www-data" },
      { description: "查看某个进程打开的文件", code: "lsof -p 1234" },
      { description: "查看被删除但仍被进程占用的文件", code: "lsof | grep deleted" }
    ],
    relatedCommands: ["fuser", "ss", "netstat", "ps"]
  },
  {
    name: "strace",
    categoryId: "process",
    syntax: "strace [选项] 命令",
    simpleExplain: "跟踪程序的系统调用，就像给程序装上监控摄像头看它的一举一动",
    detailExplain: "就像给程序装了一套全方位监控摄像头——程序每次跟操作系统「对话」（系统调用），strace 都会记录下来。程序打开文件、读写数据、网络通信，全都被拍得一清二楚，是排查程序故障的利器。",
    examples: [
      { description: "跟踪 ls 命令的所有系统调用", code: "strace ls" },
      { description: "只跟踪文件相关的系统调用", code: "strace -e trace=file cat test.txt" },
      { description: "跟踪正在运行的进程（按PID）", code: "strace -p 1234" },
      { description: "统计各系统调用的次数和时间", code: "strace -c ls" }
    ],
    relatedCommands: ["ltrace", "lsof", "gdb", "perf"]
  },
  {
    name: "ltrace",
    categoryId: "process",
    syntax: "ltrace [选项] 命令",
    simpleExplain: "跟踪程序的库函数调用，就像监听程序和外部服务的电话记录",
    detailExplain: "就像监听程序打电话给各种外部服务（库函数）的通话记录——程序调用了 printf、malloc、fopen 这些库函数时，ltrace 都会记录下来。和 strace 不同，ltrace 关注的是程序和库的交互，而不是和操作系统的交互。",
    examples: [
      { description: "跟踪 ls 命令的库函数调用", code: "ltrace ls" },
      { description: "只跟踪 malloc 和 free 调用", code: "ltrace -e malloc,free ./myapp" },
      { description: "跟踪正在运行的进程", code: "ltrace -p 1234" },
      { description: "统计各库函数调用次数", code: "ltrace -c ./myapp" }
    ],
    relatedCommands: ["strace", "lsof", "gdb", "nm"]
  },
  {
    name: "ionice",
    categoryId: "process",
    syntax: "ionice [选项] 命令",
    simpleExplain: "设置进程的IO调度优先级，就像给快递分配不同的配送等级",
    detailExplain: "就像快递公司给包裹分了「加急」「普通」「不着急」三个等级——ionice 让你决定某个程序读写磁盘时的优先级。重要的程序可以插队优先读写，不急的后台备份任务可以等别人用完磁盘再说，避免磁盘忙得团团转。",
    examples: [
      { description: "以最低优先级运行备份任务", code: "ionice -c 3 tar czf backup.tar.gz /data" },
      { description: "以最高优先级运行数据库", code: "ionice -c 1 -n 0 mysqld" },
      { description: "查看进程的 IO 调度类别", code: "ionice -p 1234" },
      { description: "以尽力而为模式运行编译任务", code: "ionice -c 2 -n 7 make" }
    ],
    relatedCommands: ["nice", "renice", "taskset", "chrt"]
  },
  {
    name: "taskset",
    categoryId: "process",
    syntax: "taskset [选项] 掩码 命令",
    simpleExplain: "将进程绑定到指定CPU核心，就像指定某个员工只在特定工位工作",
    detailExplain: "就像公司规定某个员工只能在 3 号工位办公——taskset 把进程「绑」到特定的 CPU 核心上运行。这样可以避免进程在不同核心之间跳来跳去，提高缓存命中率，适合对性能要求极高的场景。",
    examples: [
      { description: "将命令绑定到 CPU 0 上运行", code: "taskset 0x1 ./myapp" },
      { description: "将命令绑定到 CPU 0 和 CPU 1 上运行", code: "taskset 0x3 ./myapp" },
      { description: "查看进程的 CPU 亲和性", code: "taskset -p 1234" },
      { description: "修改已运行进程的 CPU 绑定", code: "taskset -p 0x2 1234" }
    ],
    relatedCommands: ["nice", "ionice", "chrt", "ps"]
  },
  {
    name: "prlimit",
    categoryId: "process",
    syntax: "prlimit [选项] -p PID",
    simpleExplain: "查看或修改进程资源限制，就像给员工设置工作额度上限",
    detailExplain: "就像给员工规定每天最多能处理多少单、用多少材料——prlimit 可以查看或修改进程能使用的系统资源上限，比如最多打开多少文件、最多使用多少内存、最多能创建多少进程等，防止单个进程把系统资源吃光。",
    examples: [
      { description: "查看进程的所有资源限制", code: "prlimit -p 1234" },
      { description: "将最大打开文件数设为 65535", code: "prlimit --nofile=65535 -p 1234" },
      { description: "限制进程最大内存为 2GB", code: "prlimit --as=2147483648 -p 1234" },
      { description: "设置进程最大 CPU 时间为 60 秒", code: "prlimit --cpu=60 -p 1234" }
    ],
    relatedCommands: ["ulimit", "nice", "ionice", "ps"]
  },
  {
    name: "chrt",
    categoryId: "process",
    syntax: "chrt [选项] 优先级 命令",
    simpleExplain: "修改进程的实时调度策略，就像给紧急任务开辟绿色通道",
    detailExplain: "就像医院给危重病人开辟绿色通道——chrt 可以让某些进程获得「实时调度」的特权，确保它们在任何情况下都能第一时间获得 CPU 时间。适合对响应时间要求极高的任务，比如音视频处理、工业控制等。",
    examples: [
      { description: "以实时调度策略运行程序（优先级99）", code: "chrt -f 99 ./realtime_app" },
      { description: "以公平调度策略运行程序", code: "chrt -b 0 ./background_task" },
      { description: "查看进程的调度策略", code: "chrt -p 1234" },
      { description: "修改已运行进程的调度策略为实时", code: "chrt -f -p 50 1234" }
    ],
    relatedCommands: ["nice", "ionice", "taskset", "renice"]
  },
  {
    name: "pwdx",
    categoryId: "process",
    syntax: "pwdx PID",
    simpleExplain: "查看进程的工作目录，就像查看某人当前在哪里办公",
    detailExplain: "就像想知道同事现在在哪个办公室——pwdx 能告诉你某个进程当前的工作目录是什么。这在排查「程序从哪里运行」或「相对路径为什么不对」时非常有用，直接定位进程的「办公地点」。",
    examples: [
      { description: "查看 PID 为 1234 的进程工作目录", code: "pwdx 1234", output: "1234: /home/user/project" },
      { description: "查看 nginx 主进程的工作目录", code: "pwdx $(pidof nginx | awk '{print $1}')" },
      { description: "查看所有 bash 进程的工作目录", code: "pgrep bash | xargs pwdx" }
    ],
    relatedCommands: ["pwd", "ps", "lsof", "pgrep"]
  },
  {
    name: "pstree",
    categoryId: "process",
    syntax: "pstree [选项]",
    simpleExplain: "以树形结构显示进程关系，就像画一张家族族谱来看谁是谁的上级",
    detailExplain: "就像画一张家族族谱——pstree 把进程之间的父子关系用树状图展示出来，让你一眼看出哪个进程是「家长」，哪些是「孩子」。比 ps 的列表更直观，特别适合理解进程的层级关系。",
    examples: [
      { description: "显示所有进程的树形结构", code: "pstree" },
      { description: "显示进程的 PID", code: "pstree -p" },
      { description: "以某进程为根显示子进程树", code: "pstree 1234" },
      { description: "高亮当前进程", code: "pstree -h" }
    ],
    relatedCommands: ["ps", "pgrep", "top", "htop"]
  },
  {
    name: "trap",
    categoryId: "process",
    syntax: "trap '命令' 信号",
    simpleExplain: "捕获并处理Shell信号，就像设置一个陷阱来捕获特定事件",
    detailExplain: "就像在家里安装了烟雾报警器——当特定信号（比如 Ctrl+C 的中断信号）到来时，trap 会「捕获」它并执行你预设的命令，而不是让程序直接崩溃退出。常用于脚本退出时做清理工作，比如删除临时文件、释放资源。",
    examples: [
      { description: "脚本退出时执行清理命令", code: "trap 'rm -f /tmp/mylock' EXIT" },
      { description: "忽略 Ctrl+C 中断信号", code: "trap '' INT" },
      { description: "捕获多个信号并执行不同操作", code: "trap 'echo 挂起了' SIGHUP" },
      { description: "查看当前设置的所有 trap", code: "trap -p" }
    ],
    relatedCommands: ["kill", "nohup", "signal", "ps"]
  },

  // ==================== 网络工具 ====================
  {
    name: "ping",
    categoryId: "network",
    syntax: "ping [选项] 目标主机",
    simpleExplain: "测试网络连通性，就像对着远处的人喊一声看他有没有回应",
    detailExplain: "就像你在山谷里大喊一声「喂——！」然后听有没有回声——如果有回声说明路是通的，没回声可能是对方不在或者路断了。ping 向目标主机发送 ICMP 数据包，通过一来一回的过程判断网络是否通畅以及延迟有多高。",
    examples: [
      { description: "测试与 Google 的网络连通性", code: "ping google.com" },
      { description: "只发送 4 个数据包后停止", code: "ping -c 4 baidu.com" },
      { description: "每秒发送一个包", code: "ping -i 1 192.168.1.1" },
      { description: "指定数据包大小", code: "ping -s 1024 server.local" }
    ],
    relatedCommands: ["traceroute", "mtr", "arping", "fping"]
  },
  {
    name: "ifconfig",
    categoryId: "network",
    syntax: "ifconfig [接口] [选项]",
    simpleExplain: "配置和查看网络接口，就像查看和设置网卡的「身份证」信息",
    detailExplain: "就像查看电脑网卡的名片——IP 地址是多少、MAC 地址是什么、收发了多少数据包、网络是开启还是关闭状态。虽然新系统推荐用 ip 命令替代，但 ifconfig 依然被广泛使用。",
    examples: [
      { description: "显示所有网络接口的信息", code: "ifconfig -a" },
      { description: "启用网络接口", code: "ifconfig eth0 up" },
      { description: "禁用网络接口", code: "ifconfig eth0 down" },
      { description: "为接口分配 IP 地址", code: "ifconfig eth0 192.168.1.50 netmask 255.255.255.0" }
    ],
    relatedCommands: ["ip", "ip addr", "netstat", "iwconfig"]
  },
  {
    name: "curl",
    categoryId: "network",
    syntax: "curl [选项] URL",
    simpleExplain: "强大的网络数据传输工具，就像万能的网络浏览器命令行版",
    detailExplain: "就像一个全能的网络浏览器——但没有图形界面。它可以下载文件、上传数据、访问 API 接口、测试网站响应、发送各种 HTTP 请求。curl 是开发者和运维人员最常用的网络工具之一。",
    examples: [
      { description: "获取网页内容", code: "curl https://example.com" },
      { description: "发送 POST 请求（JSON 数据）", code: "curl -X POST -H \"Content-Type: application/json\" -d '{\"name\":\"test\"}' https://api.example.com/users" },
      { description: "下载文件并保存", code: "curl -O https://example.com/file.zip" },
      { description: "只显示响应头信息", code: "curl -I https://google.com" }
    ],
    relatedCommands: ["wget", "httpie", "axios", "httpie"]
  },
  {
    name: "wget",
    categoryId: "network",
    syntax: "wget [选项] URL",
    simpleExplain: "网络文件下载工具，就像一个不知疲倦的下载机器人",
    detailExplain: "就像一个专门负责下载文件的机器人——你给它一个网址，它就会把文件下载到本地。wget 比 curl 更专注于「下载」这件事，支持断点续传、递归下载整个网站、限速等功能。",
    examples: [
      { description: "下载单个文件", code: "wget https://example.com/large_file.iso" },
      { description: "断点续传", code: "wget -c https://example.com/big_file.zip" },
      { description: "递归下载整个网站", code: "wget -r -np https://docs.example.com/" },
      { description: "限制下载速度", code: "wget --limit-rate=200k http://example.com/file.tar.gz" }
    ],
    relatedCommands: ["curl", "axel", "aria2c", "lftp"]
  },
  {
    name: "ssh",
    categoryId: "network",
    syntax: "ssh [选项] 用户@主机",
    simpleExplain: "安全远程登录，就像通过网络远程操控另一台电脑",
    detailExplain: "就像你坐在家里的电脑前，却能像坐在办公室一样操控公司的服务器——键盘敲什么，远端的电脑就执行什么，屏幕上显示的结果实时传回来。SSH 的所有传输都是加密安全的。",
    examples: [
      { description: "远程登录到服务器", code: "ssh user@192.168.1.100" },
      { description: "指定端口登录", code: "ssh -p 2222 user@example.com" },
      { description: "使用密钥文件登录", code: "ssh -i ~/.ssh/id_rsa admin@server.com" },
      { description: "在远程服务器上执行一条命令", code: "ssh user@host 'df -h && free -m'" }
    ],
    relatedCommands: ["scp", "sftp", "telnet", "mosh"]
  },
  {
    name: "scp",
    categoryId: "network",
    syntax: "scp [选项] 源 目标",
    simpleExplain: "安全远程文件拷贝，就像通过加密快递通道寄送文件",
    detailExplain: "就像通过一条加密的安全快递通道在两台电脑之间传送文件——基于 SSH 协议，传输过程全程加密。可以从本地传到远程、从远程传到本地。",
    examples: [
      { description: "上传本地文件到远程服务器", code: "scp localfile.txt user@remote:/home/user/" },
      { description: "从远程服务器下载文件到本地", code: "scp user@remote:/path/file.txt ./local_dir/" },
      { description: "递归复制整个目录", code: "scp -r ./project/ user@server:/opt/apps/" },
      { description: "指定端口传输", code: "scp -P 2222 config.yml deploy@host:/etc/app/" }
    ],
    relatedCommands: ["ssh", "rsync", "sftp", "ftp"]
  },
  {
    name: "netstat",
    categoryId: "network",
    syntax: "netstat [选项]",
    simpleExplain: "查看网络连接状态，就像查看电话交换机的通话记录",
    detailExplain: "就像电信局的通话记录显示器——谁在和谁通话、用的是哪个端口、处于什么状态。虽然逐渐被 ss 取代，但 netstat 依然是经典工具。",
    examples: [
      { description: "显示所有 TCP 连接", code: "netstat -tn" },
      { description: "显示所有监听的端口", code: "netstat -tlnp" },
      { description: "显示路由表", code: "netstat -rn" },
      { description: "持续显示网络接口统计信息", code: "netstat -c" }
    ],
    relatedCommands: ["ss", "lsof", "ip", "nmap"]
  },
  {
    name: "ss",
    categoryId: "network",
    syntax: "ss [选项]",
    simpleExplain: "新一代网络连接查看工具，就像 netstat 的升级高速版",
    detailExplain: "就像 netstat 的现代化升级版——更快、更强大、信息更丰富。ss 直接从内核获取网络连接信息，在连接数量很大的服务器上比 netstat 快得多。",
    examples: [
      { description: "显示所有 TCP 连接", code: "ss -tn" },
      { description: "显示所有监听端口及对应进程", code: "ss -tlnp" },
      { description: "显示 UDP 连接", code: "ss -uln" },
      { description: "统计各状态下的连接数量", code: "ss -s" }
    ],
    relatedCommands: ["netstat", "lsof", "ip", "nmap"]
  },
  {
    name: "nslookup",
    categoryId: "network",
    syntax: "nslookup [选项] 域名",
    simpleExplain: "DNS 查询工具，就像查通讯录把人名翻译成电话号码",
    detailExplain: "就像你只知道朋友的名字（域名），想知道他的电话号码（IP 地址）——nslookup 帮你去 DNS 服务器上查这个映射关系。",
    examples: [
      { description: "查询域名的 IP 地址", code: "nslookup google.com" },
      { description: "指定 DNS 服务器查询", code: "nslookup example.com 114.114.114.114" },
      { description: "查询 MX 记录", code: "nslookup -type=MX gmail.com" },
      { description: "交互模式查询", code: "nslookup" }
    ],
    relatedCommands: ["dig", "host", "whois", "route"]
  },
  {
    name: "dig",
    categoryId: "network",
    syntax: "dig [选项] 域名 [查询类型]",
    simpleExplain: "高级 DNS 查询工具，就像 nslookup 的专业增强版",
    detailExplain: "就像 nslookup 的专业版——输出的信息更加详细和专业，可以看到完整的 DNS 查询过程、响应时间等。深受网络管理员喜爱。",
    examples: [
      { description: "查询域名的 A 记录", code: "dig example.com" },
      { description: "简洁输出", code: "dig +short google.com", output: "142.250.80.46" },
      { description: "追踪完整的 DNS 解析链路", code: "dig +trace example.com" },
      { description: "查询指定类型的 DNS 记录", code: "dig TXT _dmarc.google.com" }
    ],
    relatedCommands: ["nslookup", "host", "whois", "dnstracer"]
  },
  {
    name: "traceroute",
    categoryId: "network",
    syntax: "traceroute [选项] 目标主机",
    simpleExplain: "追踪网络路径，就像查看快递包裹经过了哪些中转站",
    detailExplain: "就像你寄出一个快递包裹，traceroute 帮你追踪这个包裹从你家出发，经过了哪些中转站（路由器），最终到达目的地。每一跳都会显示经过的路由器 IP 和耗时。",
    examples: [
      { description: "追踪到目标主机的完整路径", code: "traceroute google.com" },
      { description: "使用 ICMP 进行追踪", code: "traceroute -I baidu.com" },
      { description: "指定最大跳数", code: "traceroute -m 15 example.com" },
      { description: "不进行 DNS 反解", code: "traceroute -n target.host" }
    ],
    relatedCommands: ["ping", "mtr", "tracepath", "pathping"]
  },
  {
    name: "route",
    categoryId: "network",
    syntax: "route [选项] [命令]",
    simpleExplain: "查看和修改路由表，就像查看和设置导航地图的路线规则",
    detailExplain: "就像 GPS 导航中的路由规划表——告诉数据包要去某个目的地应该走哪条路。route 可以查看当前的路由规则，也可以手动添加或删除路由条目。",
    examples: [
      { description: "显示内核路由表", code: "route -n" },
      { description: "添加默认网关", code: "route add default gw 192.168.1.1" },
      { description: "添加到指定网段的路由", code: "route add -net 10.0.0.0 netmask 255.255.0.0 gw 192.168.1.254" },
      { description: "删除路由条目", code: "route del -net 192.168.2.0 netmask 255.255.255.0" }
    ],
    relatedCommands: ["ip route", "ifconfig", "netstat", "arp"]
  },
  {
    name: "ip",
    categoryId: "network",
    syntax: "ip [选项] 对象 {命令}",
    simpleExplain: "多功能网络配置工具，就像瑞士军刀般的网络管理神器",
    detailExplain: "就像一套瑞士军刀——以前需要 ifconfig、route、arp、netstat 等多个命令做的事，ip 一个命令全部搞定。ip addr 管地址、ip route 管路由、ip link 管接口……是现代 Linux 网络管理的核心工具。",
    examples: [
      { description: "显示所有网络接口的 IP 地址", code: "ip addr show" },
      { description: "显示路由表", code: "ip route show" },
      { description: "启用/禁用网络接口", code: "ip link set eth0 up" },
      { description: "添加 IP 地址到接口", code: "ip addr add 192.168.1.50/24 dev eth0" }
    ],
    relatedCommands: ["ifconfig", "route", "netstat", "ss"]
  },
  {
    name: "nc",
    categoryId: "network",
    syntax: "nc [选项] 主机 端口",
    simpleExplain: "网络瑞士军刀，就像一把万能的网络工具刀",
    detailExplain: "就像一把真正的瑞士军刀——可以当客户端连接服务器、可以当服务器监听端口、可以在两台机器间传文件、可以扫描端口。nc（netcat）简单却极其强大。",
    examples: [
      { description: "扫描端口是否开放", code: "nc -zv google.com 80" },
      { description: "在本机 8888 端口启动简易聊天服务器", code: "nc -l -p 8888" },
      { description: "连接到聊天服务器", code: "nc localhost 8888" },
      { description: "在两台机器间传输文件（接收端）", code: "nc -l -p 9999 > received_file.zip" }
    ],
    relatedCommands: ["socat", "nmap", "telnet", "curl"]
  },
  {
    name: "ftp",
    categoryId: "network",
    syntax: "ftp [选项] 主机",
    simpleExplain: "FTP 文件传输客户端，就像专用的文件快递服务",
    detailExplain: "就像一种专门在网络上传送文件的老牌快递服务——FTP 是最早的文件传输协议之一。虽然安全性不如 SFTP/SCP，但在一些老旧系统和内部网络中仍然在使用。",
    examples: [
      { description: "连接到 FTP 服务器", code: "ftp ftp.example.com" },
      { description: "下载文件", code: "get remote_file.txt" },
      { description: "上传文件", code: "put local_file.txt" },
      { description: "匿名登录 FTP 服务器", code: "ftp anonymous@ftp.gnu.org" }
    ],
    relatedCommands: ["sftp", "lftp", "curl", "wget"]
  },
  {
    name: "arp",
    categoryId: "network",
    syntax: "arp [选项]",
    simpleExplain: "查看和管理 ARP 缓存表，就像查看局域网的「名片夹」",
    detailExplain: "就像你有一个名片夹，记录了身边同事的名字（IP 地址）和长相（MAC 地址）之间的对应关系。ARP 就是建立这种映射的工具。",
    examples: [
      { description: "显示 ARP 缓存表", code: "arp -a" },
      { description: "删除指定的 ARP 条目", code: "arp -d 192.168.1.5" },
      { description: "手动添加 ARP 条目", code: "arp -s 192.168.1.100 00:aa:bb:cc:dd:ee" },
      { description: "显示 ARP 表的数值格式", code: "arp -vn" }
    ],
    relatedCommands: ["ip neigh", "arping", "ifconfig", "netstat"]
  },
  {
    name: "host",
    categoryId: "network",
    syntax: "host [选项] 名称",
    simpleExplain: "简单的 DNS 查询工具，就像快速的电话号码查询器",
    detailExplain: "就像一个轻量级的 DNS 查询工具——比 dig 简单，比 nslookup 输出更干净。输入域名返回 IP 地址，输入 IP 返回域名。",
    examples: [
      { description: "查询域名的 IP 地址", code: "host google.com" },
      { description: "反向查询（IP 查域名）", code: "host 8.8.8.8" },
      { description: "查询 MX 记录", code: "host -t MX gmail.com" },
      { description: "查询 SOA 记录", code: "host -t SOA example.com" }
    ],
    relatedCommands: ["dig", "nslookup", "whois", "dnsmasq"]
  },
  {
    name: "whois",
    categoryId: "network",
    syntax: "whois [选项] 域名/IP",
    simpleExplain: "查询域名注册信息，就像查房产证知道房主是谁",
    detailExplain: "就像去房地产登记中心查一套房子的产权信息——whois 可以查到域名是谁注册的、什么时候注册的、什么时候过期等信息。",
    examples: [
      { description: "查询域名的注册信息", code: "whois example.com" },
      { description: "查询 IP 地址的归属信息", code: "whois 8.8.8.8" },
      { description: "查询结果只显示简要信息", code: "whois -H github.com" },
      { description: "使用指定的 whois 服务器查询", code: "whois -h whois.apnic.net 202.100.1.1" }
    ],
    relatedCommands: ["dig", "nslookup", "host", "nicinfo"]
  },
  {
    name: "nmap",
    categoryId: "network",
    syntax: "nmap [选项] 目标",
    simpleExplain: "网络探测和安全扫描器，就像给网络做一次全面的体检",
    detailExplain: "就像请了一位专业的网络安全体检医生——他会系统地检查目标主机开放了哪些端口、运行了什么服务、操作系统是什么类型。",
    examples: [
      { description: "扫描常见端口", code: "nmap -F 192.168.1.1" },
      { description: "全面扫描所有端口并检测操作系统", code: "nmap -O -sS -p- target.com" },
      { description: "扫描整个子网的主机存活情况", code: "nmap -sn 192.168.1.0/24" },
      { description: "扫描并尝试检测服务版本", code: "nmap -sV 127.0.0.1" }
    ],
    relatedCommands: ["nc", "masscan", "zenmap", "arp-scan"]
  },
  {
    name: "iptables",
    categoryId: "network",
    syntax: "iptables [选项] 命令 [规则]",
    simpleExplain: "Linux 防火墙配置工具，就像给网络大门配保安和安检规则",
    detailExplain: "就像给你的网络大门配备了一套完整的安保系统——可以制定规则允许谁进（ACCEPT）、拒绝谁入（REJECT）、丢弃谁的请求（DROP）。iptables 是保护服务器安全的第一道防线。",
    examples: [
      { description: "查看当前防火墙规则", code: "iptables -L -n -v" },
      { description: "允许 SSH 入站连接", code: "iptables -A INPUT -p tcp --dport 22 -j ACCEPT" },
      { description: "禁止来自某 IP 的所有访问", code: "iptables -A INPUT -s 1.2.3.4 -j DROP" },
      { description: "设置默认策略为拒绝所有入站流量", code: "iptables -P INPUT DROP" }
    ],
    relatedCommands: ["ufw", "firewalld", "nftables", "shorewall"],
    dangerLevel: "danger",
  },
  {
    name: "rsync",
    categoryId: "network",
    syntax: "rsync [选项] 源 目标",
    simpleExplain: "高效远程同步文件，就像一个聪明的搬运工只搬变化过的东西",
    detailExplain: "就像一个特别聪明的搬运工——他不会把所有东西都重新搬一遍，而是只搬上次之后有变化的部分。rsync 通过比较源和目标的差异，只传输变化的内容，大大节省了时间和带宽，是远程备份和同步的首选工具。",
    examples: [
      { description: "将本地目录同步到远程服务器", code: "rsync -avz ./project/ user@server:/backup/project/" },
      { description: "从远程服务器拉取文件到本地", code: "rsync -avz user@server:/var/log/ ./logs/" },
      { description: "本地目录间同步（删除目标多余文件）", code: "rsync -avz --delete ./src/ ./dst/" },
      { description: "显示传输进度和速度", code: "rsync -avz --progress ./data/ user@server:/data/" }
    ],
    relatedCommands: ["scp", "ssh", "wget", "cp"]
  },
  {
    name: "mosh",
    categoryId: "network",
    syntax: "mosh 用户@主机",
    simpleExplain: "支持断线重连的远程连接，就像手机信号不好也能继续通话",
    detailExplain: "就像手机信号不好时通话不会直接挂断——mosh 在网络不稳定、IP 地址变化、甚至短暂断网的情况下都能保持连接不断。比 SSH 更适合在移动网络或不稳定网络环境下使用，是远程办公的利器。",
    examples: [
      { description: "连接到远程服务器", code: "mosh user@server.com" },
      { description: "指定 SSH 端口连接", code: "mosh --ssh='ssh -p 2222' user@server.com" },
      { description: "指定 mosh 的 UDP 端口范围", code: "mosh --port=60001 user@server.com" }
    ],
    relatedCommands: ["ssh", "screen", "tmux", "scp"]
  },
  {
    name: "sftp",
    categoryId: "network",
    syntax: "sftp 用户@主机",
    simpleExplain: "安全的FTP文件传输，就像用装甲车运输贵重物品",
    detailExplain: "就像用装甲车运输贵重物品——sftp 基于 SSH 加密通道传输文件，比传统 FTP 安全得多。它既支持上传下载，也支持浏览远程目录，就像一个加密版的文件管理器，在传输敏感数据时是首选。",
    examples: [
      { description: "连接到远程 SFTP 服务器", code: "sftp user@server.com" },
      { description: "上传本地文件到远程", code: "sftp> put local.txt /remote/path/" },
      { description: "从远程下载文件到本地", code: "sftp> get /remote/file.txt ./local/" },
      { description: "查看远程目录内容", code: "sftp> ls /var/log/" }
    ],
    relatedCommands: ["scp", "ssh", "ftp", "rsync"]
  },
  {
    name: "ncat",
    categoryId: "network",
    syntax: "ncat [选项] [主机] [端口]",
    simpleExplain: "增强版的netcat网络工具，就像瑞士军刀升级版",
    detailExplain: "就像把瑞士军刀升级成了多功能工具箱——ncat 是 netcat 的增强版，支持 SSL 加密、代理、代理链等高级功能。可以用来端口扫描、数据传输、搭建临时服务器，几乎能完成任何网络调试任务。",
    examples: [
      { description: "监听 8080 端口", code: "ncat -l 8080" },
      { description: "连接到远程主机的 80 端口", code: "ncat example.com 80" },
      { description: "使用 SSL 加密连接", code: "ncat --ssl server.com 443" },
      { description: "在两台机器间传输文件", code: "ncat -l 1234 > file.txt  # 接收方\nncat sender-ip 1234 < file.txt  # 发送方" }
    ],
    relatedCommands: ["nc", "socat", "telnet", "curl"]
  },
  {
    name: "socat",
    categoryId: "network",
    syntax: "socat [选项] 地址1 地址2",
    simpleExplain: "高级网络数据转发工具，就像一个万能的数据中转站",
    detailExplain: "就像一个万能的数据中转站——socat 可以在任意两个数据通道之间建立桥梁，比如把 TCP 端口转发到串口、把 UNIX 套接字转发到网络端口等。比 ncat 更强大也更复杂，是网络工程师的终极工具。",
    examples: [
      { description: "将本地 8080 端口转发到远程 80 端口", code: "socat TCP-LISTEN:8080,fork TCP:remote-server:80" },
      { description: "通过 SOCKS5 代理连接", code: "socat TCP:target:80 SOCKS5:proxy:target:80" },
      { description: "将 UNIX 套接字暴露为 TCP 端口", code: "socat TCP-LISTEN:9000,fork UNIX-CONNECT:/var/run/docker.sock" }
    ],
    relatedCommands: ["ncat", "nc", "ssh", "iptables"]
  },
  {
    name: "tcpdump",
    categoryId: "network",
    syntax: "tcpdump [选项]",
    simpleExplain: "抓取网络数据包，就像在网络高速公路上设置监控摄像头",
    detailExplain: "就像在网络高速公路上安装了高清监控摄像头——tcpdump 能捕获流经网卡的所有数据包，让你看到网络里到底在传输什么。排查网络故障、分析协议、安全审计时都离不开它，是网络排障的「照妖镜」。",
    examples: [
      { description: "抓取 eth0 网卡上的所有数据包", code: "tcpdump -i eth0" },
      { description: "只抓取 80 端口的 HTTP 流量", code: "tcpdump -i eth0 port 80" },
      { description: "抓取并保存到文件（用 Wireshark 分析）", code: "tcpdump -i eth0 -w capture.pcap" },
      { description: "抓取来自特定 IP 的数据包", code: "tcpdump -i eth0 src 192.168.1.100" }
    ],
    relatedCommands: ["wireshark", "nmap", "ss", "netstat"]
  },
  {
    name: "nethogs",
    categoryId: "network",
    syntax: "nethogs [选项]",
    simpleExplain: "按进程显示网络流量，就像查看每个App消耗了多少流量",
    detailExplain: "就像手机上查看每个 App 用了多少流量——nethogs 按进程维度显示网络带宽占用，让你一眼看出是哪个程序在疯狂吃带宽。比 iftop 更精确，能定位到具体的程序，是排查网络拥堵的好帮手。",
    examples: [
      { description: "实时显示各进程的网络流量", code: "nethogs" },
      { description: "监控指定网卡", code: "nethogs eth0" },
      { description: "设置刷新间隔为 2 秒", code: "nethogs -d 2" },
      { description: "以 KB 为单位显示流量", code: "nethogs -k" }
    ],
    relatedCommands: ["iftop", "nload", "ss", "netstat"]
  },
  {
    name: "iftop",
    categoryId: "network",
    syntax: "iftop [选项]",
    simpleExplain: "实时显示网络带宽使用，就像实时监控道路的车流量",
    detailExplain: "就像在高速公路旁竖了一块实时车流量显示屏——iftop 实时显示当前网络连接的带宽使用情况，哪个 IP 在和你通信、传了多少数据，一目了然。适合快速判断网络拥堵的来源。",
    examples: [
      { description: "实时显示 eth0 网卡的流量", code: "iftop -i eth0" },
      { description: "不解析主机名（显示IP）", code: "iftop -n" },
      { description: "按流量排序显示", code: "iftop -B" }
    ],
    relatedCommands: ["nethogs", "nload", "ip", "ss"]
  },
  {
    name: "ethtool",
    categoryId: "network",
    syntax: "ethtool [选项] 网卡",
    simpleExplain: "查看和修改网卡参数，就像调整汽车发动机的参数",
    detailExplain: "就像汽车发烧友调整发动机的参数来优化性能——ethtool 让你查看和修改网卡的底层参数，比如速度、双工模式、唤醒功能等。排查网卡性能问题、调整链路速率时非常有用。",
    examples: [
      { description: "查看网卡的基本信息", code: "ethtool eth0", output: "Speed: 1000Mb/s\nDuplex: Full\nAuto-negotiation: on" },
      { description: "查看网卡驱动和固件信息", code: "ethtool -i eth0" },
      { description: "查看网卡统计信息（丢包等）", code: "ethtool -S eth0" },
      { description: "关闭网卡的自动协商并设为千兆全双工", code: "ethtool -s eth0 autoneg off speed 1000 duplex full" }
    ],
    relatedCommands: ["ip", "ifconfig", "mii-tool", "iwconfig"]
  },
  {
    name: "mtr",
    categoryId: "network",
    syntax: "mtr [选项] 主机",
    simpleExplain: "结合ping和traceroute的网络诊断工具，就像同时用雷达和望远镜定位问题",
    detailExplain: "就像同时用了雷达和望远镜——mtr 把 ping 和 traceroute 合二为一，持续不断地探测到目标主机的每一跳网络节点，实时显示每一跳的延迟和丢包率。比单独用 traceroute 更直观，是网络排障的常用工具。",
    examples: [
      { description: "诊断到目标主机的网络路径", code: "mtr google.com" },
      { description: "以报告模式输出（发送10个包）", code: "mtr -r -c 10 google.com" },
      { description: "不解析主机名（显示IP）", code: "mtr -n google.com" },
      { description: "使用 TCP 协议探测", code: "mtr --tcp google.com" }
    ],
    relatedCommands: ["ping", "traceroute", "tracepath", "nmap"]
  },
  {
    name: "iwconfig",
    categoryId: "network",
    syntax: "iwconfig [接口]",
    simpleExplain: "配置无线网卡，就像调节收音机的频道",
    detailExplain: "就像调节收音机找到想听的频道——iwconfig 用来查看和配置无线网卡的参数，比如连接哪个 WiFi 网络、信号强度如何、工作模式是什么。是 Linux 下管理无线网络的基础工具。",
    examples: [
      { description: "查看所有无线网卡状态", code: "iwconfig" },
      { description: "查看指定无线网卡信息", code: "iwconfig wlan0" },
      { description: "连接到指定 WiFi 网络", code: "iwconfig wlan0 essid 'MyWiFi'" },
      { description: "设置无线网卡为监听模式", code: "iwconfig wlan0 mode monitor" }
    ],
    relatedCommands: ["ifconfig", "ip", "ethtool", "iw"]
  },
  {
    name: "ab",
    categoryId: "network",
    syntax: "ab [选项] URL",
    simpleExplain: "Apache压力测试工具，就像模拟一大群人同时涌入商店",
    detailExplain: "就像模拟一大群人同时涌入商店看看店员能不能忙得过来——ab 能模拟大量并发请求访问你的网站，测试服务器在高负载下的表现。看看响应时间多长、有多少请求失败，帮你评估服务器的承受能力。",
    examples: [
      { description: "发送 1000 个请求，并发 100", code: "ab -n 1000 -c 100 http://example.com/" },
      { description: "带自定义 Header 的压力测试", code: "ab -n 500 -c 50 -H 'Authorization: Bearer token' http://api.example.com/" },
      { description: "测试 POST 请求", code: "ab -n 100 -c 10 -p data.json -T 'application/json' http://api.example.com/submit" },
      { description: "设置请求超时时间", code: "ab -n 1000 -c 100 -t 30 http://example.com/" }
    ],
    relatedCommands: ["curl", "wget", "wrk", "siege"]
  },
  {
    name: "speedtest-cli",
    categoryId: "network",
    syntax: "speedtest-cli",
    simpleExplain: "测试网络速度，就像用测速仪测试网络快慢",
    detailExplain: "就像用测速仪测试你家的网速——speedtest-cli 自动选择最近的测速服务器，测试你的下载速度、上传速度和网络延迟。命令行版本适合在没有图形界面的服务器上测试网络性能。",
    examples: [
      { description: "运行网速测试", code: "speedtest-cli", output: "Download: 95.23 Mbit/s\nUpload: 48.67 Mbit/s" },
      { description: "以字节为单位显示结果", code: "speedtest-cli --bytes" },
      { description: "只测试下载速度", code: "speedtest-cli --no-upload" },
      { description: "生成分享结果图片链接", code: "speedtest-cli --share" }
    ],
    relatedCommands: ["ping", "curl", "wget", "iftop"]
  },

  // ==================== 权限管理 ====================
  {
    name: "chmod",
    categoryId: "permission",
    syntax: "chmod [选项] 模式 文件...",
    simpleExplain: "修改文件权限，就像设置谁能读、谁能写、谁能执行这个文件",
    detailExplain: "就像给文件挂上一把锁，并且配了几把钥匙——读钥匙（r）、写钥匙（w）、执行钥匙（x），分别分配给文件的主人、同组成员和其他所有人。chmod 就是决定谁持有哪种钥匙的管理员。",
    examples: [
      { description: "给脚本添加执行权限", code: "chmod +x run.sh" },
      { description: "设置为 755 权限", code: "chmod 755 app.js" },
      { description: "移除其他用户的写权限", code: "chmod o-w sensitive.txt" },
      { description: "递归修改目录及内部所有文件的权限", code: "chmod -R 644 public_html/" }
    ],
    relatedCommands: ["chown", "chgrp", "umask", "stat"],
    dangerLevel: "warning",
  },
  {
    name: "chown",
    categoryId: "permission",
    syntax: "chown [选项] 用户[:组] 文件...",
    simpleExplain: "更改文件所有者，就像把房产证上的户主名字改一下",
    detailExplain: "就像一套房子的产权变更——原来这套文件归张三所有，现在要过户给李四。chown 可以改变文件的主人和所属的用户组。只有 root 用户才有权把文件转给别人。",
    examples: [
      { description: "将文件所有者改为 www-data 用户", code: "chown www-data:www-data /var/www/html/index.html" },
      { description: "只改变所有者不变组", code: "chown alice project.tar.gz" },
      { description: "递归改变目录下所有文件的所有者", code: "chown -R mysql:mysql /var/lib/mysql/" },
      { description: "参照另一个文件设置所有权", code: "chown --reference=config.old config.new" }
    ],
    relatedCommands: ["chmod", "chgrp", "usermod", "stat"],
    dangerLevel: "warning",
  },
  {
    name: "chgrp",
    categoryId: "permission",
    syntax: "chgrp [选项] 组名 文件...",
    simpleExplain: "更改文件所属组，就像把一个人从一个部门调到另一个部门",
    detailExplain: "就像公司里的人事调动——这个人本来属于研发组，现在把他调到市场组。chgrp 只改变文件的所属组，不改变所有者。",
    examples: [
      { description: "将文件所属组改为 developers", code: "chgrp developers app.js" },
      { description: "递归改变目录的所属组", code: "chgrp -R docker /opt/container/" },
      { description: "使用 GID 来指定组", code: "chgrp 1001 shared_file.txt" }
    ],
    relatedCommands: ["chown", "chmod", "groups", "groupmod"]
  },
  {
    name: "sudo",
    categoryId: "permission",
    syntax: "sudo [选项] 命令",
    simpleExplain: "以超级管理员身份执行命令，就像出示证件获得临时特权",
    detailExplain: "就像你需要进入一个只有经理才能进的房间，于是向保安出示你的临时通行证——sudo 让普通用户暂时借用 root 的权限来执行一条命令。比直接用 root 登录更安全。",
    examples: [
      { description: "以 root 权限更新系统软件包", code: "sudo apt update" },
      { description: "以 root 身份切换到指定用户执行命令", code: "sudo -u postgres pg_dump database" },
      { description: "以 root 身份打开一个交互式 shell", code: "sudo -i" },
      { description: "查看当前用户的 sudo 权限", code: "sudo -l" }
    ],
    relatedCommands: ["su", "doas", "pkexec", "run0"]
  },
  {
    name: "su",
    categoryId: "permission",
    syntax: "su [选项] [用户]",
    simpleExplain: "切换用户身份，就像换了一身衣服变成了另一个人",
    detailExplain: "就像你脱下自己的衣服换上了别人的全套装备——从这一刻起，你就是那个用户了，拥有他的所有权限和环境变量。和 sudo 不同，su 是真正「变成」那个人。",
    examples: [
      { description: "切换到 root 用户", code: "su -" },
      { description: "切换到指定用户", code: "su - postgres" },
      { description: "以指定用户身份执行一条命令", code: "su -c 'whoami' mysql" },
      { description: "切换用户但不加载环境变量", code: "su testuser" }
    ],
    relatedCommands: ["sudo", "login", "newgrp", "runuser"]
  },
  {
    name: "umask",
    categoryId: "permission",
    syntax: "umask [模式]",
    simpleExplain: "设置新建文件的默认权限掩码，就像规定新员工的初始权限级别",
    detailExplain: "就像公司规定新入职员工的初始权限级别——umask 决定了你创建新文件和新目录时，系统默认会给它们什么样的权限。它是一个「减法」机制，从最大权限中扣除掩码位。",
    examples: [
      { description: "查看当前的 umask 设置", code: "umask", output: "0022" },
      { description: "设置新建文件默认权限为 600", code: "umask 077" },
      { description: "临时设置 umask 并创建文件测试", code: "umask 077; touch secret.txt" },
      { description: "用符号方式设置 umask", code: "umask u=rwx,g=rx,o=" }
    ],
    relatedCommands: ["chmod", "chown", "install", "mknod"]
  },
  {
    name: "chattr",
    categoryId: "permission",
    syntax: "chattr [选项] 模式 文件...",
    simpleExplain: "设置文件特殊属性，就像给文件加上防篡改封条",
    detailExplain: "就像给重要文件贴上一层特殊的防篡改封条——即使你是 root 用户也无法轻易修改或删除它。最常用的属性是 +i（immutable，不可变），加了之后连 root 都不能改、不能删。",
    examples: [
      { description: "设置文件为不可变", code: "chattr +i /etc/resolv.conf" },
      { description: "移除不可变属性", code: "chattr -i /etc/resolv.conf" },
      { description: "设置只允许追加内容（适合日志文件）", code: "chattr +a /var/log/important.log" },
      { description: "递归设置目录属性", code: "chattr -R +i /critical/system/files/" }
    ],
    relatedCommands: ["lsattr", "chmod", "chown", "setfacl"]
  },
  {
    name: "lsattr",
    categoryId: "permission",
    syntax: "lsattr [选项] 文件...",
    simpleExplain: "查看文件的特殊属性，就像查看文件上的防伪标签",
    detailExplain: "就像查看文件上贴了哪些特殊标签——是不是被设成了不可变（i）、是否只能追加（a）等。lsattr 是 chattr 的配套查看工具。",
    examples: [
      { description: "查看文件的特殊属性", code: "lsattr /etc/passwd" },
      { description: "递归显示目录下所有文件的属性", code: "lsattr -R /boot/" },
      { description: "以长格式显示", code: "lsattr -v /etc/shadow" },
      { description: "只显示具有指定属性的文件", code: "lsattr -a" }
    ],
    relatedCommands: ["chattr", "stat", "getfacl", "file"]
  },
  {
    name: "getfacl",
    categoryId: "permission",
    syntax: "getfacl [选项] 文件...",
    simpleExplain: "查看文件的 ACL 详细权限，就像查看精细化的访客权限清单",
    detailExplain: "就像传统的权限系统太粗糙了，ACL（访问控制列表）就像是更精细的权限管理系统——可以为任意指定的用户或用户组单独设置权限。getfacl 就是查看这份详细权限清单的工具。",
    examples: [
      { description: "查看文件的 ACL 权限详情", code: "getfacl project.doc" },
      { description: "递归查看目录 ACL", code: "getfacl -R shared_dir/" },
      { description: "不显示注释头信息", code: "getfacl -q /etc/config" },
      { description: "只显示有效的 ACL 条目", code: "getfacl -e sensitive_file" }
    ],
    relatedCommands: ["setfacl", "chmod", "chacl", "lsattr"]
  },
  {
    name: "setfacl",
    categoryId: "permission",
    syntax: "setfacl [选项] 规则 文件...",
    simpleExplain: "设置文件的 ACL 精细权限，就像为特定人员定制专属通行证",
    detailExplain: "就像传统的权限只有三把钥匙太粗放了，setfacl 可以为任意个人或小组单独配一把钥匙——比如「bob 这个用户可以读这个文件但不能写」。这就是 ACL 的威力，比传统权限灵活得多。",
    examples: [
      { description: "为用户 bob 单独授予读权限", code: "setfacl -m u:bob:r report.pdf" },
      { description: "为 test 组授予读写权限", code: "setfacl -m g:test:rw shared_data/" },
      { description: "递归设置目录的 ACL", code: "setfacl -R -m g:devteam:rwx /opt/project/" },
      { description: "删除指定用户的 ACL 条目", code: "setfacl -x u:bob report.pdf" }
    ],
    relatedCommands: ["getfacl", "chmod", "chacl", "chown"]
  },
  {
    name: "visudo",
    categoryId: "permission",
    syntax: "visudo",
    simpleExplain: "安全编辑sudoers配置文件，就像由专业人员来修改保险箱密码",
    detailExplain: "就像由专业人员来修改保险箱密码——visudo 是编辑 /etc/sudoers 文件的专用工具，它会在保存前自动检查语法，防止你写错导致 sudo 失效。千万别用普通编辑器直接改 sudoers 文件！",
    examples: [
      { description: "编辑 sudoers 文件", code: "sudo visudo" },
      { description: "检查 sudoers 文件语法", code: "sudo visudo -c" },
      { description: "使用指定编辑器打开", code: "sudo EDITOR=vim visudo" },
      { description: "编辑指定的 sudoers 片段文件", code: "sudo visudo -f /etc/sudoers.d/custom" }
    ],
    relatedCommands: ["sudo", "su", "chmod", "chown"]
  },
  {
    name: "capsh",
    categoryId: "permission",
    syntax: "capsh [选项]",
    simpleExplain: "Linux能力机制管理，就像给不同员工发放不同级别的门禁卡",
    detailExplain: "就像给不同员工发放不同级别的门禁卡——Linux 能力（capabilities）机制把 root 权限拆分成几十种细粒度权限，capsh 可以查看和操作这些能力。比如只给一个程序网络权限，而不给它全部 root 权限。",
    examples: [
      { description: "查看当前进程的所有能力", code: "capsh --print" },
      { description: "以指定能力运行命令", code: "sudo capsh --caps='cap_net_raw+eip' -- -c 'ping 8.8.8.8'" },
      { description: "丢弃所有能力后运行 Shell", code: "capsh --drop=all -- -c 'id'" },
      { description: "查看支持的所有能力", code: "capsh --supports" }
    ],
    relatedCommands: ["sudo", "chmod", "setfacl", "selinux"]
  },
  {
    name: "semanage",
    categoryId: "permission",
    syntax: "semanage [选项]",
    simpleExplain: "SELinux策略管理，就像管理一个严格安保系统的通行规则",
    detailExplain: "就像管理一个严格安保系统的通行规则——semanage 用来配置 SELinux 策略的细节，比如给文件设置安全上下文、管理端口标签、设置用户角色等。SELinux 开启后，很多服务访问被拒时就需要用 semanage 来放行。",
    examples: [
      { description: "查看所有端口策略", code: "sudo semanage port -l" },
      { description: "给 HTTP 服务添加自定义端口", code: "sudo semanage port -a -t http_port_t -p tcp 8080" },
      { description: "查看文件上下文策略", code: "sudo semanage fcontext -l" },
      { description: "删除自定义端口规则", code: "sudo semanage port -d -t http_port_t -p tcp 8080" }
    ],
    relatedCommands: ["selinux", "getenforce", "chcon", "restorecon"]
  },

  // ==================== 系统信息 ====================
  {
    name: "uname",
    categoryId: "system",
    syntax: "uname [选项]",
    simpleExplain: "显示系统基本信息，就像查看电脑的「身份证」",
    detailExplain: "就像查看电脑的出生证明和身份证——操作系统叫什么名字、内核版本是多少、主机名叫什么、CPU 架构是什么。uname 是了解「这台机器是什么」的最基本命令。",
    examples: [
      { description: "显示所有系统信息", code: "uname -a" },
      { description: "只显示内核名称", code: "uname -s", output: "Linux" },
      { description: "显示内核版本号", code: "uname -r" },
      { description: "显示处理器架构", code: "uname -m", output: "x86_64" }
    ],
    relatedCommands: ["hostname", "lsb_release", "arch", "cat /proc/version"]
  },
  {
    name: "hostname",
    categoryId: "system",
    syntax: "hostname [选项] [名称]",
    simpleExplain: "查看或设置主机名，就像查看或修改电脑的昵称",
    detailExplain: "就像给电脑取个名字——方便在网络中称呼这台机器。hostname 显示或修改当前系统的主机名，让别的电脑可以通过这个名字找到它。",
    examples: [
      { description: "查看当前主机名", code: "hostname", output: "my-server-01" },
      { description: "查看完整域名", code: "hostname -f" },
      { description: "查看主机所有 IP 地址", code: "hostname -I" },
      { description: "临时修改主机名", code: "hostname new-name" }
    ],
    relatedCommands: ["uname", "hostnamectl", "dnsdomainname", "nisdomainname"]
  },
  {
    name: "uptime",
    categoryId: "system",
    syntax: "uptime [选项]",
    simpleExplain: "查看系统运行时间和负载，就像查看机器连续工作了多久累不累",
    detailExplain: "就像查看一台机器已经连续运转了多久、目前负载怎么样——uptime 告诉你系统从上次启动到现在过了多长时间、当前有多少用户登录、过去 1/5/15 分钟的平均负载是多少。",
    examples: [
      { description: "显示系统运行时间和负载", code: "uptime" },
      { description: "只显示自启动以来的秒数", code: "uptime -s" },
      { description: "以简洁格式显示", code: "uptime -p" }
    ],
    relatedCommands: ["w", "top", "free", "who"]
  },
  {
    name: "free",
    categoryId: "system",
    syntax: "free [选项]",
    simpleExplain: "查看内存使用情况，就像查看电脑还剩多少「脑容量」可用",
    detailExplain: "就像查看你的大脑（内存 RAM）用了多少、还剩多少——总共有多少 GB 内存、已用多少、空闲多少、有多少被缓存占用了。经常用 free 看看内存健康状况是个好习惯。",
    examples: [
      { description: "以人类友好的格式显示内存信息", code: "free -h" },
      { description: "以 MB 为单位显示", code: "free -m" },
      { description: "每秒刷新显示", code: "free -s 2" },
      { description: "显示总汇总信息", code: "free -t" }
    ],
    relatedCommands: ["top", "vmstat", "ps", "pmap"]
  },
  {
    name: "df",
    categoryId: "system",
    syntax: "df [选项]",
    simpleExplain: "查看磁盘空间使用情况，就像查看仓库还剩多少货架空间",
    detailExplain: "就像仓库管理员查看每个库房的货架使用率——总空间多大、已经用了多少、还剩多少百分比。当磁盘快满的时候 df 会发出警告。",
    examples: [
      { description: "以人类易读格式显示磁盘使用情况", code: "df -h" },
      { description: "显示 inode 使用情况", code: "df -hi" },
      { description: "只显示本地文件系统", code: "df -hl" },
      { description: "指定显示某种文件系统类型", code: "df -t ext4" }
    ],
    relatedCommands: ["du", "lsblk", "fdisk", "mount"]
  },
  {
    name: "du",
    categoryId: "system",
    syntax: "du [选项] [目录/文件]",
    simpleExplain: "查看目录或文件占用磁盘大小，就像用秤称每个文件夹有多重",
    detailExplain: "就像用电子秤一个个称量文件夹的重量——du 告诉你每个目录实际占用了多少磁盘空间。和 df 不同，du 看的是具体的文件和文件夹各自占了多少空间。",
    examples: [
      { description: "以人类易读格式显示当前目录总大小", code: "du -sh ." },
      { description: "显示每个子目录的大小并排序", code: "du -sh * | sort -rh | head -10" },
      { description: "递归显示所有文件和目录的大小", code: "du -ah /var/log/" },
      { description: "排除某些目录不计入统计", code: "du -sh --exclude='*.git' project/" }
    ],
    relatedCommands: ["df", "ncdu", "ls", "find"]
  },
  {
    name: "who",
    categoryId: "system",
    syntax: "who [选项]",
    simpleExplain: "查看当前登录的用户，就像查看办公室里都有谁在上班",
    detailExplain: "就像走到办公室门口看一眼签到表——现在都有谁登录在这台机器上、他们是从哪里登录的、登录时间是什么时候。",
    examples: [
      { description: "显示当前所有登录用户", code: "who" },
      { description: "显示系统启动时间", code: "who -b" },
      { description: "显示死掉的进程", code: "who -d" },
      { description: "显示所有登录用户的计数", code: "who -q" }
    ],
    relatedCommands: ["w", "users", "last", "finger"]
  },
  {
    name: "w",
    categoryId: "system",
    syntax: "w [选项] [用户]",
    simpleExplain: "增强版 who，查看谁在干什么",
    detailExplain: "就像 who 的增强版——不光告诉你谁登录了，还告诉你他们在干什么（正在执行什么命令）、系统负载如何、登录了多久。",
    examples: [
      { description: "显示所有登录用户及其活动", code: "w" },
      { description: "不显示头部信息", code: "w -h" },
      { description: "只显示指定用户的信息", code: "w alice" },
      { description: "以旧格式输出", code: "w -o" }
    ],
    relatedCommands: ["who", "uptime", "users", "finger"]
  },
  {
    name: "lsb_release",
    categoryId: "system",
    syntax: "lsb_release [选项]",
    simpleExplain: "查看 Linux 发行版详细信息，就像查看电脑的「品牌型号标签」",
    detailExplain: "就像查看电脑背面的品牌标签——这是 Ubuntu 还是 CentOS？版本号是多少？lsb_release 专门用来回答这些问题。",
    examples: [
      { description: "显示发行版的全部信息", code: "lsb_release -a" },
      { description: "只显示发行版描述信息", code: "lsb_release -d" },
      { description: "只显示版本号", code: "lsb_release -r" },
      { description: "只显示代号名称", code: "lsb_release -c" }
    ],
    relatedCommands: ["uname", "cat /etc/os-release", "hostnamectl", "rpm -q"]
  },
  {
    name: "lscpu",
    categoryId: "system",
    syntax: "lscpu [选项]",
    simpleExplain: "查看 CPU 详细信息，就像查看电脑的「心脏体检报告」",
    detailExplain: "就像给 CPU 做了一次全面体检——型号是什么、有几颗核心、几个线程、主频多少、支持的指令集有哪些、缓存大小是多少。",
    examples: [
      { description: "显示 CPU 的完整信息", code: "lscpu" },
      { description: "以可解析格式输出", code: "lscpu -p" },
      { description: "只显示缓存信息", code: "lscpu -C" }
    ],
    relatedCommands: ["uname -m", "nproc", "cat /proc/cpuinfo", "hwinfo"]
  },
  {
    name: "vmstat",
    categoryId: "system",
    syntax: "vmstat [选项] [间隔 [次数]]",
    simpleExplain: "查看系统虚拟内存统计，就像医院的各项生命体征监测仪",
    detailExplain: "就像医院的重症监护仪——实时监测系统的各项生命体征：进程状态、内存使用、swap 交换、IO 读写、系统中断、CPU 上下文切换等。",
    examples: [
      { description: "显示一次系统概要统计", code: "vmstat" },
      { description: "每 2 秒刷新显示一次，共显示 5 次", code: "vmstat 2 5" },
      { description: "显示 slab 内核对象缓存信息", code: "vmstat -m" },
      { description: "显示磁盘统计信息", code: "vmstat -d" }
    ],
    relatedCommands: ["top", "iostat", "mpstat", "free"]
  },
  {
    name: "iostat",
    categoryId: "system",
    syntax: "iostat [选项] [间隔 [次数]]",
    simpleExplain: "查看磁盘 I/O 统计信息，就像查看硬盘的「工作量报表」",
    detailExplain: "就像查看硬盘的工作日报——每秒读了多少数据、写了多少数据、IO 等待时间有多长。当系统变慢怀疑是磁盘瓶颈时，iostat 能帮你确认。",
    examples: [
      { description: "显示 CPU 和所有设备的 IO 统计", code: "iostat" },
      { description: "每 3 秒刷新显示，共 10 次", code: "iostat 3 10" },
      { description: "以人类易读格式显示", code: "iostat -h" },
      { description: "只显示指定设备", code: "iostat -p sda" }
    ],
    relatedCommands: ["vmstat", "mpstat", "iotop", "sar"]
  },
  {
    name: "mpstat",
    categoryId: "system",
    syntax: "mpstat [选项] [间隔 [次数]]",
    simpleExplain: "查看各 CPU 核心的使用情况，就像查看每个工人的工作效率",
    detailExplain: "就像工厂主管查看每个工人的工作状态——有的在忙碌、有的在做管理、有的在空闲。mpstat 可以分别显示每个 CPU 核心的利用率。",
    examples: [
      { description: "显示每个 CPU 核心的使用统计", code: "mpstat -P ALL" },
      { description: "每 5 秒刷新一次", code: "mpstat 5" },
      { description: "显示 CPU 0 和 CPU 1 的统计", code: "mpstat -P 0,1" }
    ],
    relatedCommands: ["vmstat", "iostat", "top", "sar"]
  },
  {
    name: "dmesg",
    categoryId: "system",
    syntax: "dmesg [选项]",
    simpleExplain: "查看内核消息日志，就像查看系统的「黑匣子飞行记录」",
    detailExplain: "就像飞机的黑匣子——记录了系统内核启动以来发生的所有大事：硬件检测到了什么设备、驱动加载成功与否、出了什么错误警告等。",
    examples: [
      { description: "查看所有内核消息", code: "dmesg | head -20" },
      { description: "实时跟踪新的内核消息", code: "dmesg -w" },
      { description: "显示人类可读的时间戳", code: "dmesg -T" },
      { description: "只显示错误级别的消息", code: "dmesg -l err,crit,alert,emerg" }
    ],
    relatedCommands: ["journalctl", "lspci", "lsusb", "kern.log"]
  },
  {
    name: "journalctl",
    categoryId: "system",
    syntax: "journalctl [选项]",
    simpleExplain: "查看系统日志，就像查看系统的完整日记本",
    detailExplain: "就像一本超级详细的系统日记——记录了系统从启动到现在的几乎所有事件。journalctl 是 systemd 的日志管理工具，支持按时间、服务、优先级等多种方式过滤日志。",
    examples: [
      { description: "查看最近 20 条系统日志", code: "journalctl -n 20" },
      { description: "实时跟踪最新日志", code: "journalctl -f" },
      { description: "只查看 nginx 服务的日志", code: "journalctl -u nginx" },
      { description: "查看今天产生的日志", code: "journalctl --since today" },
      { description: "只显示错误和警告级别的日志", code: "journalctl -p err" }
    ],
    relatedCommands: ["dmesg", "systemctl", "logger", "rsyslog"]
  },
  {
    name: "date",
    categoryId: "system",
    syntax: "date [选项] [+格式]",
    simpleExplain: "显示或设置系统时间，就像看手表或调手表",
    detailExplain: "就像抬起手腕看一眼手表——现在是几点几分几秒、今天是星期几。date 不光能看时间，还能设置系统时间，还能按照你指定的格式输出时间字符串。",
    examples: [
      { description: "显示当前日期和时间", code: "date" },
      { description: "以指定格式显示时间", code: "date '+%Y-%m-%d_%H:%M:%S'" },
      { description: "显示 Unix 时间戳", code: "date +%s" },
      { description: "将时间戳转换为可读日期", code: "date -d @1736919000" }
    ],
    relatedCommands: ["cal", "timedatectl", "hwclock", "tzselect"]
  },
  {
    name: "cal",
    categoryId: "system",
    syntax: "cal [选项] [[月] 年]",
    simpleExplain: "显示日历，就像撕下来的一页月历",
    detailExplain: "就像随手撕下一页日历挂在墙上——显示某年某月的完整日历视图。可以看本月、看某个月、看一整年的日历。",
    examples: [
      { description: "显示当前月份的日历", code: "cal" },
      { description: "显示 2025 年整年的日历", code: "cal 2025" },
      { description: "显示 2025 年 2 月的日历", code: "cal 2 2025" },
      { description: "显示本周视图", code: "cal -3" }
    ],
    relatedCommands: ["date", "timedatectl", "calendar", "gcal"]
  },
  {
    name: "timedatectl",
    categoryId: "system",
    syntax: "timedatectl [命令]",
    simpleExplain: "管理系统时间和时区，就像设置智能手表的时间和时区",
    detailExplain: "就像智能手表的时间设置界面——可以查看和修改系统时间、时区、是否自动同步网络时间（NTP）等。在现代 systemd 系统上，timedatectl 是管理时间的官方推荐工具。",
    examples: [
      { description: "显示完整的时间和时区信息", code: "timedatectl status" },
      { description: "列出所有可用的时区", code: "timedatectl list-timezones" },
      { description: "设置时区为上海时间", code: "timedatectl set-timezone Asia/Shanghai" },
      { description: "开启 NTP 自动同步时间", code: "timedatectl set-ntp true" }
    ],
    relatedCommands: ["date", "cal", "hwclock", "ntpdate"]
  },
  {
    name: "locale",
    categoryId: "system",
    syntax: "locale [选项]",
    simpleExplain: "查看和设置系统语言区域，就像设置系统的「语言偏好」",
    detailExplain: "就像操作系统的语言和地区设置——用中文还是英文？日期格式是什么？货币符号是 $ 还是 ¥？当你的终端出现乱码时，往往是 locale 设置不对导致的。",
    examples: [
      { description: "显示当前所有 locale 设置", code: "locale" },
      { description: "列出系统所有可用的 locale", code: "locale -a" },
      { description: "显示某个 locale 变量的详细信息", code: "locale -k LC_MONETARY" },
      { description: "临时修改语言为中文 UTF-8", code: "export LANG=zh_CN.UTF-8" }
    ],
    relatedCommands: ["localectl", "charset", "iconv", "env"]
  },
  {
    name: "lsmem",
    categoryId: "system",
    syntax: "lsmem [选项]",
    simpleExplain: "列出内存信息，就像查看仓库里有多少货架和空间",
    detailExplain: "就像查看仓库里有多少货架和空间——lsmem 会显示系统内存的范围、大小、在线状态等信息，让你清楚知道电脑有多少内存可用，哪些内存条是插好的，哪些是空闲的。",
    examples: [
      { description: "列出所有内存信息", code: "lsmem" },
      { description: "以字节为单位显示内存大小", code: "lsmem -b" },
      { description: "以 MB 为单位显示", code: "lsmem --output-size=MB" },
      { description: "只显示摘要信息", code: "lsmem -s" }
    ],
    relatedCommands: ["free", "top", "vmstat", "cat /proc/meminfo"]
  },
  {
    name: "lsusb",
    categoryId: "system",
    syntax: "lsusb [选项]",
    simpleExplain: "列出USB设备，就像查看电脑上插了哪些外设",
    detailExplain: "就像查看电脑上插了哪些外设——lsusb 会列出所有连接到 USB 总线的设备，包括鼠标、键盘、U盘、摄像头等。当你插了个设备却没反应时，先用 lsusb 看看系统认没认出来。",
    examples: [
      { description: "列出所有 USB 设备", code: "lsusb" },
      { description: "显示设备详细信息", code: "lsusb -v" },
      { description: "只查看指定总线的设备", code: "lsusb -s 001" },
      { description: "查看指定厂商的设备", code: "lsusb -d 8087:" }
    ],
    relatedCommands: ["lspci", "lsblk", "dmesg", "usb-devices"]
  },
  {
    name: "lspci",
    categoryId: "system",
    syntax: "lspci [选项]",
    simpleExplain: "列出PCI设备，就像查看主板上插了哪些扩展卡",
    detailExplain: "就像查看主板上插了哪些扩展卡——lspci 会列出所有 PCI 总线上的设备，包括显卡、网卡、声卡等。当你需要安装驱动或排查硬件问题时，lspci 是第一步。",
    examples: [
      { description: "列出所有 PCI 设备", code: "lspci" },
      { description: "显示设备详细信息", code: "lspci -v" },
      { description: "以树形结构显示设备关系", code: "lspci -t" },
      { description: "只显示网卡设备", code: "lspci | grep -i network" }
    ],
    relatedCommands: ["lsusb", "lsblk", "lshw", "dmidecode"]
  },
  {
    name: "dmidecode",
    categoryId: "system",
    syntax: "dmidecode [选项]",
    simpleExplain: "读取硬件信息，就像查看电脑的出生证明和体检报告",
    detailExplain: "就像查看电脑的出生证明和体检报告——dmidecode 从 BIOS/DMI 中读取硬件详细信息，包括主板型号、CPU 规格、内存条品牌和序列号、BIOS 版本等。是硬件信息查询的终极武器。",
    examples: [
      { description: "显示所有硬件信息", code: "sudo dmidecode" },
      { description: "只查看 BIOS 信息", code: "sudo dmidecode -t bios" },
      { description: "只查看内存信息", code: "sudo dmidecode -t memory" },
      { description: "只查看处理器信息", code: "sudo dmidecode -t processor" }
    ],
    relatedCommands: ["lshw", "lspci", "lsusb", "cat /proc/cpuinfo"]
  },
  {
    name: "sensors",
    categoryId: "system",
    syntax: "sensors [选项]",
    simpleExplain: "读取硬件温度传感器，就像给电脑量体温",
    detailExplain: "就像给电脑量体温——sensors 读取主板、CPU、显卡等硬件上的温度传感器数据，显示当前温度、风扇转速、电压等信息。当电脑经常死机或重启时，先用 sensors 看看是不是过热了。",
    examples: [
      { description: "显示所有传感器数据", code: "sensors" },
      { description: "以摄氏度显示温度", code: "sensors -C" },
      { description: "只显示核心温度", code: "sensors | grep -i core" },
      { description: "检测可用传感器芯片", code: "sensors-detect" }
    ],
    relatedCommands: ["top", "htop", "dmidecode", "cat /proc/acpi"]
  },
  {
    name: "nproc",
    categoryId: "system",
    syntax: "nproc",
    simpleExplain: "显示可用的CPU核心数，就像数一下有多少个工人可以同时干活",
    detailExplain: "就像数一下有多少个工人可以同时干活——nproc 显示当前进程可用的 CPU 核心数。编译软件时常用它来决定并行任务数，比如 make -j$(nproc) 就能让所有核心一起开工。",
    examples: [
      { description: "显示可用 CPU 核心数", code: "nproc", output: "8" },
      { description: "显示所有 CPU 核心数（含离线）", code: "nproc --all" },
      { description: "编译时使用所有核心", code: "make -j$(nproc)" },
      { description: "忽略一个核心留给系统用", code: "make -j$(nproc --ignore=1)" }
    ],
    relatedCommands: ["lscpu", "top", "htop", "cat /proc/cpuinfo"]
  },
  {
    name: "arch",
    categoryId: "system",
    syntax: "arch",
    simpleExplain: "显示系统架构，就像查看大楼的建筑结构类型",
    detailExplain: "就像查看大楼的建筑结构类型——arch 显示系统的硬件架构名称，比如 x86_64 表示 64 位 Intel/AMD 处理器，aarch64 表示 ARM 64 位。下载软件时需要选对架构版本。",
    examples: [
      { description: "显示系统架构", code: "arch", output: "x86_64" },
      { description: "与 uname -m 等效", code: "uname -m" },
      { description: "判断是否为 64 位系统", code: "[ $(arch) = x86_64 ] && echo '64位'" },
      { description: "在脚本中根据架构选择软件包", code: "case $(arch) in x86_64) pkg=amd64 ;; aarch64) pkg=arm64 ;; esac" }
    ],
    relatedCommands: ["uname", "lscpu", "dpkg", "rpm"]
  },
  {
    name: "printenv",
    categoryId: "system",
    syntax: "printenv [变量名]",
    simpleExplain: "显示环境变量，就像查看系统公告栏上的所有通知",
    detailExplain: "就像查看系统公告栏上的所有通知——printenv 会把所有环境变量都列出来，包括 PATH、HOME、USER 等。如果你只想看某一条通知，就加上变量名做参数。",
    examples: [
      { description: "显示所有环境变量", code: "printenv" },
      { description: "查看 PATH 变量", code: "printenv PATH" },
      { description: "查看当前用户", code: "printenv USER", output: "zhangsan" },
      { description: "查看家目录路径", code: "printenv HOME" }
    ],
    relatedCommands: ["env", "export", "set", "echo"]
  },
  {
    name: "env",
    categoryId: "system",
    syntax: "env [选项] [命令]",
    simpleExplain: "在指定环境下运行命令，就像在特定的工作环境中执行任务",
    detailExplain: "就像在特定的工作环境中执行任务——env 可以显示所有环境变量，也可以在修改了某些环境变量后运行指定命令。比如你想临时用中文环境运行某个程序，但不影响全局设置。",
    examples: [
      { description: "显示所有环境变量", code: "env" },
      { description: "临时设置变量后运行命令", code: "env LANG=zh_CN.UTF-8 ./myapp" },
      { description: "清空所有环境变量运行命令", code: "env -i /bin/bash" },
      { description: "取消某个变量后运行命令", code: "env -u LD_LIBRARY_PATH ./program" }
    ],
    relatedCommands: ["printenv", "export", "set", "bash"]
  },
  {
    name: "export",
    categoryId: "system",
    syntax: "export 变量名=值",
    simpleExplain: "设置环境变量，就像在公告栏上发布一条新通知",
    detailExplain: "就像在公告栏上发布一条新通知——export 设置的环境变量不仅当前 Shell 能看到，子进程也能继承。比如你设置了一个 JAVA_HOME，之后启动的 Java 程序都能找到它。",
    examples: [
      { description: "设置一个环境变量", code: "export JAVA_HOME=/usr/lib/jvm/java-17" },
      { description: "将目录追加到 PATH", code: "export PATH=$PATH:/opt/bin" },
      { description: "查看所有已导出的变量", code: "export -p" },
      { description: "设置代理环境变量", code: "export http_proxy=http://proxy.example.com:8080" }
    ],
    relatedCommands: ["printenv", "env", "set", "unset"]
  },
  {
    name: "set",
    categoryId: "system",
    syntax: "set [选项]",
    simpleExplain: "显示或设置Shell变量，就像查看和调整系统的所有设置项",
    detailExplain: "就像查看和调整系统的所有设置项——set 不带参数时会显示所有 Shell 变量和函数，带参数时可以控制 Shell 的行为模式，比如开启调试模式、设置出错即退出等。",
    examples: [
      { description: "显示所有 Shell 变量和函数", code: "set" },
      { description: "开启调试模式，显示每条执行的命令", code: "set -x" },
      { description: "脚本中遇到错误立即退出", code: "set -e" },
      { description: "使用未定义变量时报错", code: "set -u" }
    ],
    relatedCommands: ["export", "unset", "env", "shopt"]
  },
  {
    name: "unset",
    categoryId: "system",
    syntax: "unset 变量名",
    simpleExplain: "删除环境变量，就像从公告栏上撕掉一条通知",
    detailExplain: "就像从公告栏上撕掉一条通知——unset 用来删除已经设置的环境变量或 Shell 变量。删掉之后，当前 Shell 和后续子进程就再也看不到这个变量了。",
    examples: [
      { description: "删除一个环境变量", code: "unset JAVA_HOME" },
      { description: "删除多个变量", code: "unset http_proxy https_proxy" },
      { description: "删除一个函数", code: "unset -f my_func" },
      { description: "确认变量已被删除", code: "unset MY_VAR && echo $MY_VAR" }
    ],
    relatedCommands: ["export", "set", "env", "printenv"]
  },
  {
    name: "alias",
    categoryId: "system",
    syntax: "alias 别名=命令",
    simpleExplain: "给命令设置别名，就像给朋友起个昵称方便叫",
    detailExplain: "就像给朋友起个昵称方便叫——alias 可以给常用命令起个短名字，这样每次输入更省事。比如把 ll 当作 ls -l 的别名，输入两个字母就能看到详细列表。",
    examples: [
      { description: "给 ls -l 起别名 ll", code: "alias ll='ls -l'" },
      { description: "查看所有已设置的别名", code: "alias" },
      { description: "给 rm 加安全确认", code: "alias rm='rm -i'" },
      { description: "给 grep 加颜色高亮", code: "alias grep='grep --color=auto'" }
    ],
    relatedCommands: ["unalias", "bash", "source", "type"]
  },
  {
    name: "unalias",
    categoryId: "system",
    syntax: "unalias 别名",
    simpleExplain: "取消命令别名，就像不再用昵称呼叫朋友",
    detailExplain: "就像不再用昵称呼叫朋友——unalias 用来删除之前用 alias 设置的命令别名。删掉之后，那个短名字就不再有效了，必须用命令的全名。",
    examples: [
      { description: "取消 ll 别名", code: "unalias ll" },
      { description: "取消所有别名", code: "unalias -a" },
      { description: "取消 rm 的安全别名", code: "unalias rm" },
      { description: "确认别名已删除", code: "unalias ll && type ll" }
    ],
    relatedCommands: ["alias", "bash", "source", "type"]
  },
  {
    name: "history",
    categoryId: "system",
    syntax: "history [选项]",
    simpleExplain: "显示命令历史记录，就像查看你的操作日记",
    detailExplain: "就像查看你的操作日记——history 列出你在终端里输入过的所有命令。忘了之前怎么操作的？翻翻历史记录就知道了。还可以用 !编号 快速重新执行某条命令。",
    examples: [
      { description: "显示所有历史命令", code: "history" },
      { description: "只显示最近 10 条", code: "history 10" },
      { description: "清除所有历史记录", code: "history -c" },
      { description: "重新执行第 100 条命令", code: "!100" }
    ],
    relatedCommands: ["alias", "bash", "fc", "ctrl+r"]
  },
  {
    name: "sysctl",
    categoryId: "system",
    syntax: "sysctl [选项] [变量]",
    simpleExplain: "查看和修改内核参数，就像调整汽车发动机的底层参数",
    detailExplain: "就像调整汽车发动机的底层参数——sysctl 可以读取和修改 Linux 内核的运行时参数，比如网络转发、文件描述符上限、内存策略等。调错可能让系统不稳定，所以修改前一定要搞清楚参数含义。",
    examples: [
      { description: "查看所有内核参数", code: "sysctl -a" },
      { description: "查看 IP 转发状态", code: "sysctl net.ipv4.ip_forward" },
      { description: "开启 IP 转发", code: "sudo sysctl -w net.ipv4.ip_forward=1" },
      { description: "从配置文件加载参数", code: "sudo sysctl -p" }
    ],
    relatedCommands: ["proc", "modprobe", "iptables", "ulimit"],
    dangerLevel: "warning"
  },

  // ==================== 磁盘管理 ====================
  {
    name: "fdisk",
    categoryId: "disk",
    syntax: "fdisk [选项] 设备",
    simpleExplain: "磁盘分区工具，就像给硬盘划分不同的储物柜格子",
    detailExplain: "就像一间大仓库（硬盘），fdisk 帮你把它隔成若干个小房间（分区）——每个分区可以独立格式化和挂载，存放不同用途的数据。",
    examples: [
      { description: "列出所有分区表", code: "fdisk -l" },
      { description: "进入交互模式对磁盘分区", code: "fdisk /dev/sdb" },
      { description: "创建一个新的 GPT 分区表", code: "fdisk /dev/sdc" }
    ],
    relatedCommands: ["parted", "mkfs", "lsblk", "cfdisk"],
    dangerLevel: "danger",
  },
  {
    name: "mkfs",
    categoryId: "disk",
    syntax: "mkfs [选项] 设备",
    simpleExplain: "格式化分区，就像给空白的储物柜贴上标签和编号",
    detailExplain: "就像你买了一块空地，要在上面建楼房前要先做好地基规划——mkfs 在分区上创建文件系统，让操作系统能够在上面存储和组织文件。",
    examples: [
      { description: "将分区格式化为 ext4 文件系统", code: "mkfs.ext4 /dev/sdb1" },
      { description: "格式化为 xfs 文件系统", code: "mkfs.xfs -f /dev/sdc1" },
      { description: "格式化为 FAT32", code: "mkfs.vfat -F 32 /dev/sdd1" },
      { description: "快速格式化", code: "mkfs.ext4 -T largefile4 /dev/sde1" }
    ],
    relatedCommands: ["fdisk", "fsck", "mount", "tune2fs"],
    dangerLevel: "danger",
  },
  {
    name: "mount",
    categoryId: "disk",
    syntax: "mount [选项] 设备 挂载点",
    simpleExplain: "挂载文件系统，就像把 U 盘插上去让系统能访问里面的文件",
    detailExplain: "就像你把 U 盘插入电脑——操作系统需要把设备「挂载」到某个目录下，你才能通过那个目录访问 U 盘里的文件。硬盘分区、光盘、网络共享目录都需要 mount 才能使用。",
    examples: [
      { description: "将 /dev/sdb1 挂载到 /mnt/data 目录", code: "mount /dev/sdb1 /mnt/data" },
      { description: "挂载 ISO 镜像文件", code: "mount -o loop ubuntu.iso /mnt/cdrom" },
      { description: "以只读方式挂载", code: "mount -o ro /dev/sdc1 /mnt/readonly" },
      { description: "挂载 NFS 网络共享目录", code: "mount -t nfs 192.168.1.100:/share /mnt/nfs_share" }
    ],
    relatedCommands: ["umount", "fstab", "automount", "bindfs"]
  },
  {
    name: "umount",
    categoryId: "disk",
    syntax: "umount [选项] 挂载点/设备",
    simpleExplain: "卸载文件系统，就像安全弹出 U 盘",
    detailExplain: "就像你点击「安全弹出硬件」按钮拔出 U 盘——umount 在断开设备和系统的关联前，确保所有数据都已经写入完毕，避免数据丢失。",
    examples: [
      { description: "卸载 /mnt/data 目录", code: "umount /mnt/data" },
      { description: "通过设备路径卸载", code: "umount /dev/sdb1" },
      { description: "强制卸载（慎用）", code: "umount -l /mnt/busy" },
      { description: "卸载所有 NFS 类型的文件系统", code: "umount -a -t nfs" }
    ],
    relatedCommands: ["mount", "fuser", "lsof", "lazy unmount"],
    dangerLevel: "warning",
  },
  {
    name: "fsck",
    categoryId: "disk",
    syntax: "fsck [选项] 设备",
    simpleExplain: "检查和修复文件系统，就像请医生给硬盘做体检和治病",
    detailExplain: "就像定期去医院做身体检查——fsck 扫描文件系统是否有损坏的数据、丢失的节点等「病症」，发现问题还会尝试修复。通常在系统异常关机后启动时自动运行。",
    examples: [
      { description: "检查分区的文件系统", code: "fsck /dev/sda1" },
      { description: "自动修复发现的问题", code: "fsck -y /dev/sdb1" },
      { description: "强制检查", code: "fsck -f /dev/sdc1" },
      { description: "指定文件系统类型", code: "fsck -t ext4 /dev/sdd1" }
    ],
    relatedCommands: ["mkfs", "dumpe2fs", "tune2fs", "badblocks"],
    dangerLevel: "warning",
  },
  {
    name: "blkid",
    categoryId: "disk",
    syntax: "blkid [选项] [设备]",
    simpleExplain: "查看块设备的 UUID 和类型，就像查看硬盘的「身份证号」",
    detailExplain: "就像查看每块硬盘/分区的身份证——UUID（全局唯一标识符）、文件系统类型、卷标等。UUID 在配置 /etc/fstab 时特别有用，因为它不随设备名称变化。",
    examples: [
      { description: "显示所有块设备的信息", code: "blkid" },
      { description: "只显示指定设备的信息", code: "blkid /dev/sda2" },
      { description: "只显示 UUID", code: "blkid -s UUID -o value /dev/sda1" },
      { description: "显示更详细的信息", code: "blkid -p /dev/sdb1" }
    ],
    relatedCommands: ["lsblk", "fdisk -l", "fstab", "libuuid"]
  },
  {
    name: "lsblk",
    categoryId: "disk",
    syntax: "lsblk [选项]",
    simpleExplain: "列出块设备信息，就像查看电脑的「硬盘全家福」",
    detailExplain: "就像给所有硬盘和分区拍了一张全家福照片——以树形结构展示每个磁盘设备、上面的分区、每个分区的大小、挂载点等。比 fdisk -l 更直观。",
    examples: [
      { description: "以树形结构显示所有块设备", code: "lsblk" },
      { description: "显示 UUID 和文件系统类型", code: "lsblk -f" },
      { description: "以 JSON 格式输出", code: "lsblk -J" },
      { description: "只显示指定设备", code: "lsblk /dev/sda" }
    ],
    relatedCommands: ["blkid", "fdisk", "df", "tree"]
  },
  {
    name: "dd",
    categoryId: "disk",
    syntax: "dd [选项]",
    simpleExplain: "底层磁盘拷贝工具，就像一台精密的磁盘复印机",
    detailExplain: "就像一台超级精密的磁盘复印机——可以逐字节地复制整个磁盘、制作启动 U 盘、备份分区表。dd 功能强大但也很危险，一个参数写错就可能把整个硬盘数据抹掉，所以有「dd = Disk Destroyer」的戏称。",
    examples: [
      { description: "制作启动 U 盘", code: "dd if=ubuntu.iso of=/dev/sdb bs=4M status=progress" },
      { description: "备份整个磁盘为镜像文件", code: "dd if=/dev/sda of=disk_backup.img bs=64K" },
      { description: "安全擦除硬盘数据", code: "dd if=/dev/urandom of=/dev/sdb bs=1M" },
      { description: "测试磁盘写入速度", code: "dd if=/dev/zero of=testfile bs=1M count=1024 oflag=dsync" }
    ],
    relatedCommands: ["cp", "cat", "rsync", "shred"],
    dangerLevel: "danger",
  },
  {
    name: "parted",
    categoryId: "disk",
    syntax: "parted [选项] 设备",
    simpleExplain: "高级磁盘分区工具，就像 fdisk 的升级版能处理更大的硬盘",
    detailExplain: "就像 fdisk 的升级版——支持 GPT 分区表、支持超过 2TB 的大硬盘、可以调整分区大小而不丢失数据。parted 是现代大容量硬盘分区的首选工具。",
    examples: [
      { description: "进入交互模式对磁盘分区", code: "parted /dev/sdb" },
      { description: "创建 GPT 分区表", code: "parted /dev/sdb mklabel gpt" },
      { description: "创建新分区", code: "parted /dev/sdb mkpart primary ext4 0% 50%" },
      { description: "打印分区信息", code: "parted /dev/sdb print" }
    ],
    relatedCommands: ["fdisk", "cfdisk", "gparted", "mkfs"]
  },
  {
    name: "mkswap",
    categoryId: "disk",
    syntax: "mkswap [选项] 设备",
    simpleExplain: "创建交换分区，就像给电脑准备一张「应急内存卡」",
    detailExplain: "就像给电脑准备了一张应急备用内存卡——当真实内存（RAM）不够用时，系统会把一部分数据临时存到 swap 分区里。mkswap 就是把一个分区格式化为 swap 格式。",
    examples: [
      { description: "将分区格式化为 swap 格式", code: "mkswap /dev/sdb1" },
      { description: "创建 swap 文件", code: "dd if=/dev/zero of=/swapfile bs=1M count=4096 && mkswap /swapfile" },
      { description: "指定 UUID 创建 swap", code: "mkswap -U custom-uuid /dev/sdc1" }
    ],
    relatedCommands: ["swapon", "swapoff", "free", "dd"],
    dangerLevel: "warning",
  },
  {
    name: "swapon",
    categoryId: "disk",
    syntax: "swapon [选项] 设备",
    simpleExplain: "启用交换分区，就像激活那张「应急内存卡」让它随时待命",
    detailExplain: "就像把你准备好的应急内存卡插进卡槽激活——swapon 让系统开始使用指定的 swap 分区或 swap 文件。启用后，当物理内存不足时，系统就会自动使用 swap 空间。",
    examples: [
      { description: "启用 swap 分区", code: "swapon /dev/sdb1" },
      { description: "启用 swap 文件", code: "swapon /swapfile" },
      { description: "查看当前所有 swap 设备", code: "swapon --show" },
      { description: "启用所有 swap 设备", code: "swapon -a" }
    ],
    relatedCommands: ["swapoff", "mkswap", "free", "fstab"]
  },
  {
    name: "swapoff",
    categoryId: "disk",
    syntax: "swapoff [选项] 设备",
    simpleExplain: "禁用交换分区，就像拔掉那张「应急内存卡」",
    detailExplain: "就像把应急内存卡从卡槽里拔出来——swapoff 让系统停止使用指定的 swap 分区或文件。禁用前系统会先把 swap 里的数据搬回内存。",
    examples: [
      { description: "禁用指定的 swap 分区", code: "swapoff /dev/sdb1" },
      { description: "禁用所有 swap 设备", code: "swapoff -a" },
      { description: "禁用 swap 文件", code: "swapoff /swapfile" }
    ],
    relatedCommands: ["swapon", "mkswap", "free", "fstab"]
  },
  {
    name: "dumpe2fs",
    categoryId: "disk",
    syntax: "dumpe2fs [选项] 设备",
    simpleExplain: "查看 ext 文件系统的详细信息，就像查看 ext 硬盘的「体检报告」",
    detailExplain: "就像给 ext2/ext3/ext4 文件系统做一次详细的体检报告——显示超级块信息、块组描述、inode 数量等。这些信息对于诊断文件系统问题和优化性能非常有用。",
    examples: [
      { description: "查看 ext4 文件系统的详细信息", code: "dumpe2fs /dev/sda1" },
      { description: "只显示超级块信息", code: "dumpe2fs -h /dev/sda1" },
      { description: "显示块组描述信息", code: "dumpe2fs /dev/sda1 | grep -i 'group'" }
    ],
    relatedCommands: ["tune2fs", "fsck", "mkfs.ext4", "blkid"]
  },
  {
    name: "ncdu",
    categoryId: "disk",
    syntax: "ncdu [目录]",
    simpleExplain: "交互式磁盘使用分析工具，就像一个可视化的仓库盘点员",
    detailExplain: "就像一个可视化的仓库盘点员——ncdu 会扫描指定目录，然后用交互式界面按大小排序显示各文件和文件夹的占用情况。你可以用方向键上下浏览，快速找到吃空间的「大户」。",
    examples: [
      { description: "分析当前目录的磁盘使用", code: "ncdu" },
      { description: "分析指定目录", code: "ncdu /home/user" },
      { description: "不扫描隐藏文件", code: "ncdu --exclude-hidden /home" },
      { description: "导出扫描结果到文件", code: "ncdu -o /tmp/scan_result" }
    ],
    relatedCommands: ["du", "df", "ls", "find"]
  },
  {
    name: "hdparm",
    categoryId: "disk",
    syntax: "hdparm [选项] 设备",
    simpleExplain: "查看和设置硬盘参数，就像给硬盘做性能调校",
    detailExplain: "就像给硬盘做性能调校——hdparm 可以查看硬盘的型号、序列号、缓存大小，还能测试读取速度、开启或关闭 DMA 模式等。不过设置参数有风险，调错可能导致数据丢失。",
    examples: [
      { description: "查看硬盘基本信息", code: "sudo hdparm -i /dev/sda" },
      { description: "测试硬盘读取速度", code: "sudo hdparm -tT /dev/sda" },
      { description: "查看硬盘电源管理状态", code: "sudo hdparm -C /dev/sda" },
      { description: "开启 DMA 传输模式", code: "sudo hdparm -d1 /dev/sda" }
    ],
    relatedCommands: ["smartctl", "fdisk", "lsblk", "badblocks"]
  },
  {
    name: "smartctl",
    categoryId: "disk",
    syntax: "smartctl [选项] 设备",
    simpleExplain: "查看硬盘SMART健康信息，就像给硬盘做健康体检",
    detailExplain: "就像给硬盘做健康体检——smartctl 读取硬盘的 SMART（自监测分析报告技术）数据，包括温度、通电时间、坏扇区计数等。提前发现硬盘健康隐患，避免数据突然丢失。",
    examples: [
      { description: "查看硬盘整体健康状态", code: "sudo smartctl -H /dev/sda" },
      { description: "显示所有 SMART 信息", code: "sudo smartctl -a /dev/sda" },
      { description: "查看硬盘温度", code: "sudo smartctl -A /dev/sda | grep Temperature" },
      { description: "运行硬盘自检", code: "sudo smartctl -t long /dev/sda" }
    ],
    relatedCommands: ["hdparm", "lsblk", "fdisk", "badblocks"]
  },
  {
    name: "losetup",
    categoryId: "disk",
    syntax: "losetup [选项] 循环设备 文件",
    simpleExplain: "设置循环设备，就像把一个文件虚拟成一块硬盘",
    detailExplain: "就像把一个文件虚拟成一块硬盘——losetup 可以把一个普通文件（比如 ISO 镜像）关联到一个循环设备（/dev/loopX），然后就可以像操作真实硬盘一样挂载和访问它。",
    examples: [
      { description: "查看所有循环设备", code: "losetup -a" },
      { description: "将 ISO 文件关联到循环设备", code: "sudo losetup /dev/loop0 ubuntu.iso" },
      { description: "自动寻找空闲循环设备并关联", code: "sudo losetup -f ubuntu.iso" },
      { description: "解除循环设备关联", code: "sudo losetup -d /dev/loop0" }
    ],
    relatedCommands: ["mount", "mkfs", "dd", "fdisk"]
  },
  {
    name: "tune2fs",
    categoryId: "disk",
    syntax: "tune2fs [选项] 设备",
    simpleExplain: "调整ext文件系统参数，就像给文件系统做微调手术",
    detailExplain: "就像给文件系统做微调手术——tune2fs 可以调整 ext2/ext3/ext4 文件系统的各种参数，比如保留空间比例、文件系统标签、自检间隔等。操作不当可能损坏文件系统，务必谨慎。",
    examples: [
      { description: "查看文件系统参数", code: "sudo tune2fs -l /dev/sda1" },
      { description: "设置文件系统标签", code: "sudo tune2fs -L mydata /dev/sda1" },
      { description: "将 ext2 转换为 ext3", code: "sudo tune2fs -j /dev/sda1" },
      { description: "设置每 30 天自检一次", code: "sudo tune2fs -i 30d /dev/sda1" }
    ],
    relatedCommands: ["dumpe2fs", "fsck", "mkfs.ext4", "resize2fs"],
    dangerLevel: "warning"
  },
  {
    name: "resize2fs",
    categoryId: "disk",
    syntax: "resize2fs [选项] 设备 [大小]",
    simpleExplain: "调整ext文件系统大小，就像给房间扩容或缩小",
    detailExplain: "就像给房间扩容或缩小——resize2fs 可以扩大或缩小 ext2/ext3/ext4 文件系统的大小。通常在调整了分区大小后使用，让文件系统填满新的分区空间。",
    examples: [
      { description: "扩大文件系统到分区最大容量", code: "sudo resize2fs /dev/sda1" },
      { description: "将文件系统缩小到指定大小", code: "sudo resize2fs /dev/sda1 50G" },
      { description: "强制调整前先检查", code: "sudo resize2fs -p /dev/sda1" },
      { description: "查看最小可缩小到多少", code: "sudo resize2fs -P /dev/sda1" }
    ],
    relatedCommands: ["tune2fs", "fdisk", "lvextend", "fsck"]
  },
  {
    name: "badblocks",
    categoryId: "disk",
    syntax: "badblocks [选项] 设备",
    simpleExplain: "检查磁盘坏道，就像给硬盘做坏点检测",
    detailExplain: "就像给硬盘做坏点检测——badblocks 扫描磁盘上的每个扇区，找出无法正常读写的坏道。发现坏道意味着硬盘可能快坏了，要及时备份数据。",
    examples: [
      { description: "只读模式扫描坏道", code: "sudo badblocks -s /dev/sda" },
      { description: "非破坏性读写测试", code: "sudo badblocks -n /dev/sda" },
      { description: "将坏道列表保存到文件", code: "sudo badblocks -o bad.txt /dev/sda" },
      { description: "指定扫描的起止块", code: "sudo badblocks -s /dev/sda 1000000 0" }
    ],
    relatedCommands: ["fsck", "smartctl", "hdparm", "e2fsck"]
  },
  {
    name: "sync",
    categoryId: "disk",
    syntax: "sync",
    simpleExplain: "将缓存数据写入磁盘，就像把草稿本上的内容正式抄写到笔记本上",
    detailExplain: "就像把草稿本上的内容正式抄写到笔记本上——Linux 为了提高性能，会把数据先放在内存缓存中，稍后再写入磁盘。sync 命令强制把所有缓存数据立即写入磁盘，确保数据安全。",
    examples: [
      { description: "将所有缓存数据写入磁盘", code: "sync" },
      { description: "拔 U 盘前确保数据写入", code: "sync && sudo eject /dev/sdb" },
      { description: "重启前同步数据", code: "sync && sudo reboot" },
      { description: "显示同步进度信息", code: "sync -v" }
    ],
    relatedCommands: ["fsck", "mount", "umount", "dd"]
  },

  // ==================== 压缩解压 ====================
  {
    name: "tar",
    categoryId: "compress",
    syntax: "tar [选项] 文件...",
    simpleExplain: "打包和解包文件，就像用纸箱把一堆东西装箱打包",
    detailExplain: "就像搬家时用纸箱把一堆零散的东西打包在一起——tar 本身只负责「打包」，不压缩。但通常配合 gzip 或 bzip2 一起使用，边打包边压缩，就像把东西装箱后再用真空袋抽气压缩。",
    examples: [
      { description: "打包并压缩为 .tar.gz", code: "tar -czf backup.tar.gz /home/user/project/" },
      { description: "解压 .tar.gz 文件", code: "tar -xzf backup.tar.gz" },
      { description: "打包并压缩为 .tar.bz2", code: "tar -cjf archive.tar.bz2 documents/" },
      { description: "查看压缩包内容（不解压）", code: "tar -tzf backup.tar.gz" }
    ],
    relatedCommands: ["gzip", "bzip2", "zip", "7z"]
  },
  {
    name: "gzip",
    categoryId: "compress",
    syntax: "gzip [选项] 文件...",
    simpleExplain: "压缩文件，就像用真空袋把衣服压缩变小",
    detailExplain: "就像用真空压缩袋把蓬松的冬衣压扁——gzip 把文件压缩变小，节省磁盘空间和网络传输时间。压缩后原文件会被替换为 .gz 文件。gzip 是 Linux 上最常用的压缩格式。",
    examples: [
      { description: "压缩文件", code: "gzip access.log" },
      { description: "保留原文件同时压缩", code: "gzip -k important_data.csv" },
      { description: "指定压缩级别（1 最快，9 最小）", code: "gzip -9 large_file.bin" },
      { description: "递归压缩目录下所有文件", code: "gzip -r logs/" }
    ],
    relatedCommands: ["gunzip", "bzip2", "xz", "zcat"]
  },
  {
    name: "gunzip",
    categoryId: "compress",
    syntax: "gunzip [选项] 文件...",
    simpleExplain: "解压 gzip 文件，就像打开真空袋让衣服恢复原状",
    detailExplain: "就像打开真空压缩袋，让被压扁的衣服恢复蓬松——gunzip 把 .gz 文件解压还原成原始文件。gunzip 其实就是 gzip -d。",
    examples: [
      { description: "解压 .gz 文件", code: "gunzip access.log.gz" },
      { description: "保留压缩文件同时解压", code: "gunzip -k archive.gz" },
      { description: "递归解压目录下所有 .gz 文件", code: "gunzip -r logs/" }
    ],
    relatedCommands: ["gzip", "zcat", "bunzip2", "unxz"]
  },
  {
    name: "bzip2",
    categoryId: "compress",
    syntax: "bzip2 [选项] 文件...",
    simpleExplain: "高压缩比压缩工具，就像一台更厉害的真空压缩机",
    detailExplain: "就像比 gzip 更强力的高级真空压缩机——压缩率比 gzip 更高，但压缩速度更慢。适合对文件大小敏感、不太在乎压缩时间的场景。",
    examples: [
      { description: "压缩文件为 .bz2 格式", code: "bzip2 big_file.txt" },
      { description: "保留原文件同时压缩", code: "bzip2 -k data.csv" },
      { description: "使用最高压缩级别", code: "bzip2 -9 archive.dat" },
      { description: "解压 bzip2 文件", code: "bzip2 -d compressed.bz2" }
    ],
    relatedCommands: ["bunzip2", "gzip", "xz", "bzcat"]
  },
  {
    name: "bunzip2",
    categoryId: "compress",
    syntax: "bunzip2 [选项] 文件...",
    simpleExplain: "解压 bzip2 文件，就像打开高级真空袋恢复原状",
    detailExplain: "就像打开 bzip2 这个高级真空压缩袋——把 .bz2 文件解压还原成原始文件。bunzip2 其实就是 bzip2 -d。",
    examples: [
      { description: "解压 .bz2 文件", code: "bunzip2 archive.bz2" },
      { description: "保留压缩文件同时解压", code: "bunzip2 -k archive.bz2" }
    ],
    relatedCommands: ["bzip2", "bzcat", "gunzip", "unxz"]
  },
  {
    name: "zip",
    categoryId: "compress",
    syntax: "zip [选项] 压缩包名 文件...",
    simpleExplain: "创建 ZIP 压缩包，就像 Windows 用户最熟悉的那个压缩工具",
    detailExplain: "就像 Windows 上大家最常用的那个压缩工具——zip 格式是跨平台的压缩标准，Windows、Mac、Linux 都能直接打开。zip 压缩时会保留原文件，非常适合和 Windows 用户交换文件。",
    examples: [
      { description: "将多个文件压缩为 zip 包", code: "zip archive.zip file1.txt file2.txt" },
      { description: "递归压缩整个目录", code: "zip -r project.zip project_folder/" },
      { description: "添加文件到已有的 zip 包", code: "zip -u archive.zip newfile.txt" },
      { description: "加密压缩", code: "zip -e secret.zip confidential.pdf" }
    ],
    relatedCommands: ["unzip", "gzip", "tar", "7z"]
  },
  {
    name: "unzip",
    categoryId: "compress",
    syntax: "unzip [选项] 压缩包",
    simpleExplain: "解压 ZIP 文件，就像打开一个拉链袋取出里面的东西",
    detailExplain: "就像拉开一个拉链袋取出里面的东西——unzip 把 .zip 压缩包里的文件解压出来。可以解压到当前目录，也可以指定目标目录。",
    examples: [
      { description: "解压 zip 文件到当前目录", code: "unzip archive.zip" },
      { description: "解压到指定目录", code: "unzip archive.zip -d /target/path/" },
      { description: "查看压缩包内容（不解压）", code: "unzip -l archive.zip" },
      { description: "只解压特定文件", code: "unzip archive.zip \"*.txt\"" }
    ],
    relatedCommands: ["zip", "tar", "7z", "jar"]
  },
  {
    name: "xz",
    categoryId: "compress",
    syntax: "xz [选项] 文件...",
    simpleExplain: "超高压缩比工具，就像一台终极真空压缩机",
    detailExplain: "就像比 bzip2 还要厉害的终极真空压缩机——压缩率最高，但压缩速度也最慢。适合需要极致压缩的场景，比如发布大型软件源码包。",
    examples: [
      { description: "压缩文件为 .xz 格式", code: "xz huge_file.bin" },
      { description: "保留原文件同时压缩", code: "xz -k data.tar" },
      { description: "使用极速压缩", code: "xz -0 quick_compress.dat" },
      { description: "使用极限压缩", code: "xz -9e massive_database.sql" }
    ],
    relatedCommands: ["unxz", "xzcat", "gzip", "bzip2"]
  },
  {
    name: "unxz",
    categoryId: "compress",
    syntax: "unxz [选项] 文件...",
    simpleExplain: "解压 xz 文件，就像打开终极真空袋恢复原状",
    detailExplain: "就像打开 xz 这个终极真空压缩袋——把 .xz 文件解压还原成原始文件。unxz 其实就是 xz -d。",
    examples: [
      { description: "解压 .xz 文件", code: "unxz archive.xz" },
      { description: "保留压缩文件同时解压", code: "unxz -k archive.xz" }
    ],
    relatedCommands: ["xz", "xzcat", "gunzip", "bunzip2"]
  },
  {
    name: "7z",
    categoryId: "compress",
    syntax: "7z [命令] [选项] 压缩包 文件...",
    simpleExplain: "7-Zip 压缩工具，就像压缩界的全能冠军",
    detailExplain: "就像压缩界的全能冠军——支持 7z、zip、rar、tar、gzip 等几乎所有常见压缩格式，而且 7z 格式的压缩率极高。如果你只想装一个压缩工具，7z 几乎能搞定所有格式。",
    examples: [
      { description: "压缩为 7z 格式", code: "7z a archive.7z folder/" },
      { description: "解压 7z 文件", code: "7z x archive.7z" },
      { description: "解压 rar 文件", code: "7z x file.rar" },
      { description: "列出压缩包内容", code: "7z l archive.7z" }
    ],
    relatedCommands: ["zip", "unzip", "rar", "tar"]
  },
  {
    name: "zcat",
    categoryId: "compress",
    syntax: "zcat [选项] 文件...",
    simpleExplain: "不解压直接查看 gzip 压缩文件内容，就像隔着透明袋看里面的东西",
    detailExplain: "就像真空袋是透明的，你不用打开袋子就能看到里面装了什么——zcat 不需要先解压 .gz 文件，就能直接把压缩文件的内容输出到屏幕上。",
    examples: [
      { description: "查看 gzip 压缩文件的内容", code: "zcat access.log.gz" },
      { description: "配合 grep 搜索压缩日志", code: "zcat access.log.gz | grep 'error'" },
      { description: "查看多个压缩文件", code: "zcat file1.gz file2.gz" }
    ],
    relatedCommands: ["gzip", "gunzip", "bzcat", "xzcat"]
  },
  {
    name: "bzcat",
    categoryId: "compress",
    syntax: "bzcat [选项] 文件...",
    simpleExplain: "不解压直接查看 bzip2 压缩文件内容",
    detailExplain: "就像 zcat 的 bzip2 版本——不需要先解压 .bz2 文件，就能直接把压缩文件的内容输出到屏幕上。",
    examples: [
      { description: "查看 bzip2 压缩文件的内容", code: "bzcat archive.bz2" },
      { description: "配合 grep 搜索", code: "bzcat log.bz2 | grep 'warning'" }
    ],
    relatedCommands: ["bzip2", "bunzip2", "zcat", "xzcat"]
  },
  {
    name: "compress",
    categoryId: "compress",
    syntax: "compress [选项] 文件...",
    simpleExplain: "老式 Unix 压缩工具，就像压缩界的「老爷爷」",
    detailExplain: "就像压缩界的「老爷爷」——是 Unix 系统上最早的压缩工具之一，压缩后文件后缀为 .Z。压缩率不如 gzip，现在基本已经被淘汰了。",
    examples: [
      { description: "压缩文件为 .Z 格式", code: "compress large_file.txt" },
      { description: "强制压缩", code: "compress -f data.log" }
    ],
    relatedCommands: ["uncompress", "gzip", "zip", "zcat"]
  },
  {
    name: "uncompress",
    categoryId: "compress",
    syntax: "uncompress [选项] 文件...",
    simpleExplain: "解压 .Z 格式文件，就像帮老爷爷打开他的老式压缩袋",
    detailExplain: "就像帮老爷爷打开他那老式的压缩袋——uncompress 专门用来解压 compress 命令生成的 .Z 格式文件。",
    examples: [
      { description: "解压 .Z 文件", code: "uncompress archive.Z" },
      { description: "强制解压", code: "uncompress -f data.log.Z" }
    ],
    relatedCommands: ["compress", "gunzip", "bunzip2", "zcat"]
  },
  {
    name: "rar",
    categoryId: "compress",
    syntax: "rar [命令] [选项] 压缩包 文件...",
    simpleExplain: "RAR 格式压缩工具，就像压缩界的「专业选手」",
    detailExplain: "就像压缩界的专业选手——RAR 格式压缩率高、支持分卷压缩、支持恢复记录。不过 rar 是商业软件，Linux 上通常用 7z 或 unrar 来处理 rar 文件。",
    examples: [
      { description: "压缩为 rar 格式", code: "rar a archive.rar folder/" },
      { description: "分卷压缩（每卷 100MB）", code: "rar a -v100m archive.rar large_file.iso" },
      { description: "解压 rar 文件", code: "rar x archive.rar" },
      { description: "测试压缩包完整性", code: "rar t archive.rar" }
    ],
    relatedCommands: ["unrar", "7z", "zip", "tar"]
  },
  {
    name: "lz4",
    categoryId: "compress",
    syntax: "lz4 [选项] 文件",
    simpleExplain: "极速压缩工具，就像一个动作飞快的打包员",
    detailExplain: "就像一个动作飞快的打包员——lz4 的压缩和解压速度极快，远超 gzip 和 bzip2，虽然压缩比不是最高，但在需要速度的场景下是首选。常用于实时数据传输和日志压缩。",
    examples: [
      { description: "压缩文件", code: "lz4 logfile logfile.lz4" },
      { description: "解压文件", code: "lz4 -d logfile.lz4 logfile" },
      { description: "高压缩比模式（更慢但更小）", code: "lz4 -9 bigfile bigfile.lz4" },
      { description: "流式压缩（配合管道使用）", code: "tar -cf - mydir/ | lz4 > backup.tar.lz4" }
    ],
    relatedCommands: ["gzip", "zstd", "bzip2", "tar"]
  },
  {
    name: "zstd",
    categoryId: "compress",
    syntax: "zstd [选项] 文件",
    simpleExplain: "高压缩比的新型压缩工具，就像一个既快又省空间的收纳大师",
    detailExplain: "就像一个既快又省空间的收纳大师——zstd（Zstandard）由 Facebook 开发，兼顾了压缩速度和压缩比，比 gzip 更快更小，正在成为 Linux 生态的新标准。很多现代软件已开始默认使用 zstd。",
    examples: [
      { description: "压缩文件", code: "zstd data.txt" },
      { description: "解压文件", code: "zstd -d data.txt.zst" },
      { description: "指定压缩级别（1-19）", code: "zstd -15 large_file" },
      { description: "递归压缩目录", code: "tar --zstd -cf archive.tar.zst mydir/" }
    ],
    relatedCommands: ["gzip", "lz4", "xz", "tar"]
  },
  {
    name: "lzma",
    categoryId: "compress",
    syntax: "lzma [选项] 文件",
    simpleExplain: "高压缩比压缩工具，就像把行李箱压缩到极致",
    detailExplain: "就像把行李箱压缩到极致——lzma 使用 LZMA 算法，压缩比非常高，但速度较慢。适合对体积敏感而对时间不敏感的场景，比如发布软件源码包。xz 是 lzma 的继任者，功能更强大。",
    examples: [
      { description: "压缩文件", code: "lzma bigfile" },
      { description: "解压文件", code: "lzma -d bigfile.lzma" },
      { description: "保留原文件压缩", code: "lzma -k data.tar" },
      { description: "指定压缩级别", code: "lzma -9 archive.tar" }
    ],
    relatedCommands: ["xz", "gzip", "bzip2", "tar"]
  },
  {
    name: "cpio",
    categoryId: "compress",
    syntax: "cpio [选项]",
    simpleExplain: "文件归档工具，就像把文件按顺序打包进集装箱",
    detailExplain: "就像把文件按顺序打包进集装箱——cpio 从标准输入读取文件列表，将它们打包成一个归档文件。常与 find 命令配合使用，也用于处理 RPM 包和内核镜像文件。",
    examples: [
      { description: "将当前目录所有文件打包", code: "find . | cpio -o > archive.cpio" },
      { description: "从归档中解包文件", code: "cpio -id < archive.cpio" },
      { description: "查看归档内容列表", code: "cpio -t < archive.cpio" },
      { description: "打包并用 gzip 压缩", code: "find . | cpio -o | gzip > archive.cpio.gz" }
    ],
    relatedCommands: ["tar", "gzip", "find", "rpm2cpio"]
  },
  {
    name: "shar",
    categoryId: "compress",
    syntax: "shar 文件... > archive.shar",
    simpleExplain: "创建Shell自解压包，就像把东西装进一个能自己打开的箱子",
    detailExplain: "就像把东西装进一个能自己打开的箱子——shar 把多个文件打包成一个 Shell 脚本，运行这个脚本就能自动解出所有文件。不需要额外工具，只要有 Shell 就能解包，但注意安全性——不要运行来源不明的 shar 包。",
    examples: [
      { description: "打包多个文件为自解压脚本", code: "shar file1.txt file2.txt > archive.shar" },
      { description: "打包整个目录", code: "shar mydir/ > mydir.shar" },
      { description: "解包自解压脚本", code: "sh archive.shar" },
      { description: "先查看脚本内容再解包", code: "less archive.shar" }
    ],
    relatedCommands: ["tar", "cpio", "ar", "gzip"]
  },
  {
    name: "ar",
    categoryId: "compress",
    syntax: "ar [选项] 归档文件 成员文件",
    simpleExplain: "创建或管理归档文件，就像图书馆管理员整理和查找档案",
    detailExplain: "就像图书馆管理员整理和查找档案——ar 主要用于创建和管理静态库（.a 文件），是 C/C++ 编译工具链的一部分。也可以用来打包 Debian 软件包（.deb 文件本质就是 ar 归档）。",
    examples: [
      { description: "创建静态库", code: "ar rcs libmath.a add.o sub.o mul.o" },
      { description: "列出归档中的文件", code: "ar t libmath.a" },
      { description: "从归档中提取文件", code: "ar x libmath.a add.o" },
      { description: "查看 .deb 包内容", code: "ar t package.deb" }
    ],
    relatedCommands: ["tar", "cpio", "gcc", "dpkg"]
  },

  // ==================== 用户管理 ====================
  {
    name: "useradd",
    categoryId: "user",
    syntax: "useradd [选项] 用户名",
    simpleExplain: "创建新用户，就像给新员工办入职手续发工牌",
    detailExplain: "就像 HR 给新入职的员工办理入职手续——创建用户账号、分配用户 ID、设置家目录、指定默认 shell。",
    examples: [
      { description: "创建新用户", code: "useradd zhangsan" },
      { description: "创建用户并指定家目录和 shell", code: "useradd -m -s /bin/bash lisi" },
      { description: "创建用户并加入附加组", code: "useradd -G docker,sudo wangwu" },
      { description: "创建系统用户（无登录权限）", code: "useradd -r -s /sbin/nologin nginx" }
    ],
    relatedCommands: ["userdel", "usermod", "adduser", "passwd"]
  },
  {
    name: "userdel",
    categoryId: "user",
    syntax: "userdel [选项] 用户名",
    simpleExplain: "删除用户，就像给离职员工办理退工手续",
    detailExplain: "就像 HR 给离职员工办理退工手续——删除用户账号。默认只删除账号信息，不删除家目录。加 -r 参数会连同家目录一起删除。",
    examples: [
      { description: "删除用户（保留家目录）", code: "userdel zhangsan" },
      { description: "删除用户并连同家目录一起删除", code: "userdel -r lisi" },
      { description: "强制删除正在登录的用户", code: "userdel -f wangwu" }
    ],
    relatedCommands: ["useradd", "usermod", "groupdel", "passwd"],
    dangerLevel: "danger",
  },
  {
    name: "usermod",
    categoryId: "user",
    syntax: "usermod [选项] 用户名",
    simpleExplain: "修改用户信息，就像修改员工的档案信息",
    detailExplain: "就像 HR 修改员工的人事档案——可以改用户名、改家目录、改默认 shell、加组减组、设账号过期时间等。usermod 是用户管理的「万能修改器」。",
    examples: [
      { description: "将用户加入附加组", code: "usermod -aG docker zhangsan" },
      { description: "修改用户的默认 shell", code: "usermod -s /bin/zsh lisi" },
      { description: "修改用户名", code: "usermod -l newname oldname" },
      { description: "锁定用户账号", code: "usermod -L wangwu" }
    ],
    relatedCommands: ["useradd", "userdel", "groupmod", "chage"]
  },
  {
    name: "passwd",
    categoryId: "user",
    syntax: "passwd [选项] [用户名]",
    simpleExplain: "修改用户密码，就像重置门禁卡的密码",
    detailExplain: "就像重置门禁卡的密码——passwd 用来设置或修改用户密码。普通用户只能改自己的密码，root 可以改任何人的密码。",
    examples: [
      { description: "修改当前用户密码", code: "passwd" },
      { description: "root 修改其他用户密码", code: "passwd zhangsan" },
      { description: "锁定用户账号", code: "passwd -l lisi" },
      { description: "强制用户下次登录时修改密码", code: "passwd -e wangwu" }
    ],
    relatedCommands: ["usermod", "useradd", "chage", "shadow"]
  },
  {
    name: "groupadd",
    categoryId: "user",
    syntax: "groupadd [选项] 组名",
    simpleExplain: "创建新用户组，就像公司里新建一个部门",
    detailExplain: "就像公司里新成立了一个部门——groupadd 创建一个新的用户组。用户组的作用是把多个用户归到一起，方便统一管理权限。",
    examples: [
      { description: "创建新用户组", code: "groupadd developers" },
      { description: "创建指定 GID 的用户组", code: "groupadd -g 2000 testers" },
      { description: "创建系统组", code: "groupadd -r nginx" }
    ],
    relatedCommands: ["groupdel", "groupmod", "useradd", "usermod"]
  },
  {
    name: "groupdel",
    categoryId: "user",
    syntax: "groupdel [选项] 组名",
    simpleExplain: "删除用户组，就像撤销一个部门",
    detailExplain: "就像公司撤销了一个部门——groupdel 删除指定的用户组。注意：不能删除某个用户的主组，就像不能撤销一个还有人上班的部门。",
    examples: [
      { description: "删除用户组", code: "groupdel developers" },
      { description: "强制删除", code: "groupdel -f testers" }
    ],
    relatedCommands: ["groupadd", "groupmod", "userdel", "usermod"],
    dangerLevel: "danger",
  },
  {
    name: "id",
    categoryId: "user",
    syntax: "id [选项] [用户名]",
    simpleExplain: "查看用户的 ID 信息，就像查看员工的工号和所属部门",
    detailExplain: "就像查看员工的工号（UID）和所属部门（GID）——id 显示用户的用户 ID、主组 ID、以及所属的所有附加组。",
    examples: [
      { description: "查看当前用户的 ID 信息", code: "id", output: "uid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo),998(docker)" },
      { description: "查看指定用户的 ID 信息", code: "id zhangsan" },
      { description: "只显示 UID", code: "id -u" },
      { description: "只显示 GID", code: "id -g" }
    ],
    relatedCommands: ["whoami", "groups", "finger", "getent"]
  },
  {
    name: "whoami",
    categoryId: "user",
    syntax: "whoami",
    simpleExplain: "显示当前用户名，就像问自己「我是谁」",
    detailExplain: "就像你突然失忆了，问自己「我是谁？」——whoami 告诉你当前登录的用户名是什么。在用 sudo su 切换了一堆用户后，确认自己当前身份时非常有用。",
    examples: [
      { description: "显示当前用户名", code: "whoami", output: "alice" },
      { description: "配合其他命令使用", code: "echo \"Current user: $(whoami)\"" }
    ],
    relatedCommands: ["id", "who", "logname", "su"]
  },
  {
    name: "groups",
    categoryId: "user",
    syntax: "groups [用户名]",
    simpleExplain: "查看用户所属的组，就像查看员工属于哪些部门",
    detailExplain: "就像查看一个员工同时属于哪些部门——groups 列出指定用户所属的所有用户组。了解用户所属组对于理解权限很重要。",
    examples: [
      { description: "查看当前用户所属的组", code: "groups", output: "alice sudo docker" },
      { description: "查看指定用户所属的组", code: "groups zhangsan", output: "zhangsan developers testers" }
    ],
    relatedCommands: ["id", "groupadd", "usermod", "getent"]
  },
  {
    name: "finger",
    categoryId: "user",
    syntax: "finger [选项] [用户名]",
    simpleExplain: "查看用户详细信息，就像查看员工的详细档案",
    detailExplain: "就像查看员工的详细人事档案——finger 显示用户的登录名、真实姓名、家目录、默认 shell、最近登录时间等信息。",
    examples: [
      { description: "查看指定用户的详细信息", code: "finger zhangsan" },
      { description: "查看所有登录用户的信息", code: "finger" },
      { description: "显示长格式信息", code: "finger -l lisi" }
    ],
    relatedCommands: ["id", "who", "w", "pinky"]
  },
  {
    name: "last",
    categoryId: "user",
    syntax: "last [选项] [用户名]",
    simpleExplain: "查看用户登录历史，就像查看考勤打卡记录",
    detailExplain: "就像查看公司的考勤打卡记录——last 显示所有用户（或指定用户）的最近登录历史：谁登录了、从哪里登录的、登录了多久。对于安全审计和排查问题非常有用。",
    examples: [
      { description: "查看所有用户的登录历史", code: "last" },
      { description: "查看指定用户的登录历史", code: "last zhangsan" },
      { description: "只显示最近 5 条记录", code: "last -n 5" },
      { description: "显示完整的登录时间和主机名", code: "last -a" }
    ],
    relatedCommands: ["who", "w", "lastlog", "finger"]
  },
  {
    name: "newgrp",
    categoryId: "user",
    syntax: "newgrp [组名]",
    simpleExplain: "切换当前用户的主组，就像临时换一个部门身份",
    detailExplain: "就像你临时换了一个部门身份去办事——newgrp 让你切换当前会话的主组（GID），这样你新创建的文件就属于新的组了。注意这会启动一个新的 shell。",
    examples: [
      { description: "切换到 docker 组", code: "newgrp docker" },
      { description: "切换到 developers 组", code: "newgrp developers" }
    ],
    relatedCommands: ["groups", "id", "usermod", "sg"]
  },
  {
    name: "chage",
    categoryId: "user",
    syntax: "chage [选项] 用户名",
    simpleExplain: "管理用户密码过期策略，就像设置员工密码的有效期",
    detailExplain: "就像公司规定员工必须每 90 天改一次密码——chage 用来设置用户密码的过期时间、最短使用期限、最长使用期限、过期前警告天数等。这是安全合规的重要工具。",
    examples: [
      { description: "查看用户的密码过期信息", code: "chage -l zhangsan" },
      { description: "设置密码 90 天后过期", code: "chage -M 90 zhangsan" },
      { description: "设置密码过期前 7 天警告", code: "chage -W 7 zhangsan" },
      { description: "强制用户下次登录时修改密码", code: "chage -d 0 zhangsan" }
    ],
    relatedCommands: ["passwd", "usermod", "shadow", "id"]
  },
  {
    name: "login",
    categoryId: "user",
    syntax: "login [用户名]",
    simpleExplain: "登录系统，就像刷卡进入办公大楼",
    detailExplain: "就像刷卡进入办公大楼——login 命令用于登录系统，输入用户名和密码后进入你的工作环境。通常由系统在终端启动时自动调用，一般不需要手动执行。",
    examples: [
      { description: "以指定用户登录", code: "login zhangsan" },
      { description: "登录时显示系统信息", code: "login -p zhangsan" },
      { description: "不执行启动脚本直接登录", code: "login -f zhangsan" },
      { description: "在远程终端上登录", code: "login -h terminal1 zhangsan" }
    ],
    relatedCommands: ["logout", "su", "ssh", "who"]
  },
  {
    name: "logout",
    categoryId: "user",
    syntax: "logout",
    simpleExplain: "退出登录，就像下班刷卡离开办公大楼",
    detailExplain: "就像下班刷卡离开办公大楼——logout 命令用于退出当前登录的 Shell 会话。在图形界面的终端里通常用 exit 代替，但在真正的登录终端上 logout 更合适。",
    examples: [
      { description: "退出当前登录", code: "logout" },
      { description: "与 exit 等效", code: "exit" },
      { description: "在脚本中检查是否可以退出", code: "shopt -q login_shell && logout || exit" },
      { description: "快捷键退出", code: "Ctrl+D" }
    ],
    relatedCommands: ["login", "exit", "su", "who"]
  },
  {
    name: "nologin",
    categoryId: "user",
    syntax: "nologin",
    simpleExplain: "阻止用户登录，就像在门口挂上「谢绝入内」的牌子",
    detailExplain: "就像在门口挂上「谢绝入内」的牌子——nologin 是一个特殊的 Shell 程序，当用户的登录 Shell 被设为 /sbin/nologin 时，该用户就无法登录系统了。常用于系统服务账户，防止它们被用来登录。",
    examples: [
      { description: "将用户 Shell 设为 nologin 禁止登录", code: "sudo usermod -s /sbin/nologin guest" },
      { description: "创建不能登录的系统用户", code: "sudo useradd -s /sbin/nologin mysql" },
      { description: "自定义拒绝登录提示", code: "echo '此账户已禁用' > /etc/nologin.txt" },
      { description: "临时禁止所有非 root 用户登录", code: "sudo touch /etc/nologin" }
    ],
    relatedCommands: ["usermod", "useradd", "passwd", "login"]
  },
  {
    name: "pwck",
    categoryId: "user",
    syntax: "pwck [选项]",
    simpleExplain: "检查密码文件完整性，就像审计员检查账本有没有错误",
    detailExplain: "就像审计员检查账本有没有错误——pwck 检查 /etc/passwd 和 /etc/shadow 文件的完整性和一致性，比如有没有重复的用户名、无效的 UID、缺失的家目录等。是系统维护的好帮手。",
    examples: [
      { description: "检查密码文件完整性", code: "sudo pwck" },
      { description: "只读模式检查（不提示修复）", code: "sudo pwck -r" },
      { description: "检查指定文件", code: "sudo pwck /etc/passwd /etc/shadow" },
      { description: "静默模式，只显示错误", code: "sudo pwck -q" }
    ],
    relatedCommands: ["grpck", "passwd", "useradd", "usermod"]
  },
  {
    name: "grpck",
    categoryId: "user",
    syntax: "grpck [选项]",
    simpleExplain: "检查组文件完整性，就像审计员检查团队名册有没有问题",
    detailExplain: "就像审计员检查团队名册有没有问题——grpck 检查 /etc/group 和 /etc/gshadow 文件的完整性和一致性，比如有没有重复的组名、不存在的组成员等。和 pwck 是一对好搭档。",
    examples: [
      { description: "检查组文件完整性", code: "sudo grpck" },
      { description: "只读模式检查", code: "sudo grpck -r" },
      { description: "检查指定文件", code: "sudo grpck /etc/group /etc/gshadow" },
      { description: "静默模式", code: "sudo grpck -q" }
    ],
    relatedCommands: ["pwck", "groupadd", "groupmod", "groups"]
  },
  {
    name: "chsh",
    categoryId: "user",
    syntax: "chsh [选项] [用户名]",
    simpleExplain: "修改用户的登录Shell，就像给员工换一个工作台",
    detailExplain: "就像给员工换一个工作台——chsh 可以修改用户的默认登录 Shell，比如从 bash 换成 zsh 或 fish。不同的 Shell 有不同的操作习惯和功能，选一个用着顺手的很重要。",
    examples: [
      { description: "修改自己的登录 Shell", code: "chsh -s /bin/zsh" },
      { description: "修改其他用户的 Shell", code: "sudo chsh -s /bin/bash zhangsan" },
      { description: "列出系统可用的 Shell", code: "chsh -l" },
      { description: "查看当前用户的 Shell", code: "echo $SHELL" }
    ],
    relatedCommands: ["bash", "zsh", "usermod", "cat /etc/shells"]
  },
  {
    name: "chfn",
    categoryId: "user",
    syntax: "chfn [选项] [用户名]",
    simpleExplain: "修改用户的个人信息，就像更新通讯录里的联系人资料",
    detailExplain: "就像更新通讯录里的联系人资料——chfn 修改用户的全名、办公室房间号、工作电话、家庭电话等个人信息（finger information）。这些信息存在 /etc/passwd 中，用 finger 命令可以查看。",
    examples: [
      { description: "交互式修改个人信息", code: "chfn" },
      { description: "修改用户全名", code: "sudo chfn -f '张三' zhangsan" },
      { description: "修改办公电话", code: "sudo chfn -w '010-12345678' zhangsan" },
      { description: "查看用户信息", code: "finger zhangsan" }
    ],
    relatedCommands: ["usermod", "passwd", "chsh", "finger"]
  },

  // ==================== 软件包管理 ====================
  {
    name: "apt",
    categoryId: "package",
    syntax: "apt [命令] [选项] [包名]",
    simpleExplain: "Ubuntu/Debian 的软件包管理器，就像手机上的应用商店",
    detailExplain: "就像手机上的应用商店——apt 是 Ubuntu/Debian 系统上的软件包管理工具，可以搜索、安装、更新、卸载软件。一条命令就能自动下载安装软件及其所有依赖，比手动下载安装方便太多了。",
    examples: [
      { description: "更新软件源列表", code: "sudo apt update" },
      { description: "升级所有已安装的软件", code: "sudo apt upgrade" },
      { description: "安装软件包", code: "sudo apt install nginx" },
      { description: "卸载软件包", code: "sudo apt remove nginx" },
      { description: "搜索软件包", code: "apt search text editor" }
    ],
    relatedCommands: ["apt-get", "dpkg", "snap", "aptitude"]
  },
  {
    name: "apt-get",
    categoryId: "package",
    syntax: "apt-get [命令] [选项] [包名]",
    simpleExplain: "Debian 系底层包管理工具，就像 apt 的老版本",
    detailExplain: "就像 apt 的老版本——apt-get 是 Debian 系的底层包管理工具，功能比 apt 更丰富但语法更复杂。在脚本中推荐用 apt-get（输出更稳定），交互使用推荐用 apt（更友好）。",
    examples: [
      { description: "更新软件源", code: "sudo apt-get update" },
      { description: "安装软件包", code: "sudo apt-get install -y build-essential" },
      { description: "彻底卸载软件（含配置文件）", code: "sudo apt-get purge nginx" },
      { description: "清理不再需要的依赖包", code: "sudo apt-get autoremove" }
    ],
    relatedCommands: ["apt", "dpkg", "aptitude", "synaptic"]
  },
  {
    name: "yum",
    categoryId: "package",
    syntax: "yum [命令] [选项] [包名]",
    simpleExplain: "CentOS/RHEL 的软件包管理器，就像 RedHat 系的应用商店",
    detailExplain: "就像 RedHat/CentOS 系统上的应用商店——yum 是这些系统上的软件包管理工具，功能类似 apt。自动解决依赖关系，一条命令安装软件。在 CentOS 8+ 上已被 dnf 取代。",
    examples: [
      { description: "安装软件包", code: "sudo yum install nginx" },
      { description: "更新所有软件", code: "sudo yum update" },
      { description: "搜索软件包", code: "yum search httpd" },
      { description: "卸载软件包", code: "sudo yum remove nginx" }
    ],
    relatedCommands: ["dnf", "rpm", "yum-config-manager", "repoquery"]
  },
  {
    name: "dnf",
    categoryId: "package",
    syntax: "dnf [命令] [选项] [包名]",
    simpleExplain: "新一代 RedHat 包管理器，就像 yum 的升级版",
    detailExplain: "就像 yum 的升级版——dnf 解决了 yum 的一些性能问题和设计缺陷，速度更快、内存占用更少。从 Fedora 18 和 CentOS 8 开始替代 yum 成为默认包管理器。",
    examples: [
      { description: "安装软件包", code: "sudo dnf install nginx" },
      { description: "更新所有软件", code: "sudo dnf upgrade" },
      { description: "搜索软件包", code: "dnf search httpd" },
      { description: "查看软件包信息", code: "dnf info nginx" }
    ],
    relatedCommands: ["yum", "rpm", "microdnf", "dnf5"]
  },
  {
    name: "pacman",
    categoryId: "package",
    syntax: "pacman [选项] [包名]",
    simpleExplain: "Arch Linux 的包管理器，就像极客专属的应用商店",
    detailExplain: "就像 Arch Linux 极客专属的应用商店——pacman 以速度快、设计简洁著称，是 Arch Linux 的核心包管理工具。它同时处理包的下载、安装和依赖解决，一个命令搞定一切。",
    examples: [
      { description: "安装软件包", code: "sudo pacman -S nginx" },
      { description: "更新所有软件", code: "sudo pacman -Syu" },
      { description: "搜索软件包", code: "pacman -Ss text-editor" },
      { description: "卸载软件包", code: "sudo pacman -R nginx" }
    ],
    relatedCommands: ["yay", "paru", "makepkg", "pactree"]
  },
  {
    name: "pip",
    categoryId: "package",
    syntax: "pip [命令] [选项] 包名",
    simpleExplain: "Python 包管理器，就像 Python 世界的应用商店",
    detailExplain: "就像 Python 世界的应用商店——pip 用来安装和管理 Python 的第三方库和工具。从 PyPI（Python Package Index）下载安装包，一条命令就能装好各种 Python 库。",
    examples: [
      { description: "安装 Python 包", code: "pip install requests" },
      { description: "卸载 Python 包", code: "pip uninstall flask" },
      { description: "查看已安装的包", code: "pip list" },
      { description: "升级包", code: "pip install --upgrade numpy" }
    ],
    relatedCommands: ["pip3", "conda", "poetry", "pipenv"]
  },
  {
    name: "npm",
    categoryId: "package",
    syntax: "npm [命令] [包名]",
    simpleExplain: "Node.js 包管理器，就像 JavaScript 世界的应用商店",
    detailExplain: "就像 JavaScript/Node.js 世界的应用商店——npm 用来安装和管理 JavaScript 的第三方包。从 npmjs.com 下载安装包，是前端和 Node.js 开发者最常用的工具。",
    examples: [
      { description: "初始化一个新项目", code: "npm init -y" },
      { description: "安装依赖包", code: "npm install express" },
      { description: "全局安装工具", code: "npm install -g typescript" },
      { description: "运行项目脚本", code: "npm run build" }
    ],
    relatedCommands: ["yarn", "pnpm", "npx", "bun"]
  },
  {
    name: "snap",
    categoryId: "package",
    syntax: "snap [命令] [包名]",
    simpleExplain: "Snap 通用包管理器，就像跨发行版的应用商店",
    detailExplain: "就像一个跨 Linux 发行版的通用应用商店——Snap 包自带所有依赖，在任何支持 Snap 的 Linux 上都能运行，不用担心兼容性问题。缺点是启动稍慢、占用空间稍大。",
    examples: [
      { description: "安装 Snap 包", code: "sudo snap install vlc" },
      { description: "查看已安装的 Snap 包", code: "snap list" },
      { description: "更新 Snap 包", code: "sudo snap refresh vlc" },
      { description: "卸载 Snap 包", code: "sudo snap remove vlc" }
    ],
    relatedCommands: ["flatpak", "apt", "dpkg", "snapcraft"]
  },
  {
    name: "flatpak",
    categoryId: "package",
    syntax: "flatpak [命令] [选项] [包名]",
    simpleExplain: "Flatpak 沙箱化包管理器，就像在沙箱里运行的应用商店",
    detailExplain: "就像一个在沙箱里运行的应用商店——Flatpak 把应用放在沙箱中运行，限制其权限，提高安全性。和 Snap 类似，Flatpak 也是跨发行版的通用包格式，在桌面 Linux 上很流行。",
    examples: [
      { description: "安装 Flatpak 应用", code: "flatpak install flathub org.gimp.GIMP" },
      { description: "运行 Flatpak 应用", code: "flatpak run org.gimp.GIMP" },
      { description: "更新所有 Flatpak 应用", code: "flatpak update" },
      { description: "卸载 Flatpak 应用", code: "flatpak uninstall org.gimp.GIMP" }
    ],
    relatedCommands: ["snap", "apt", "dnf", "flathub"]
  },
  {
    name: "dpkg",
    categoryId: "package",
    syntax: "dpkg [选项] [包名/文件]",
    simpleExplain: "Debian 底层包操作工具，就像手动安装应用的底层工具",
    detailExplain: "就像手动安装应用的底层工具——dpkg 直接操作 .deb 包文件，安装、卸载、查询。它不自动解决依赖关系（那是 apt 的工作），所以通常配合 apt 一起使用。",
    examples: [
      { description: "安装 .deb 包文件", code: "sudo dpkg -i package.deb" },
      { description: "查看已安装的包列表", code: "dpkg -l" },
      { description: "查看包安装的文件列表", code: "dpkg -L nginx" },
      { description: "卸载包", code: "sudo dpkg -r package-name" }
    ],
    relatedCommands: ["apt", "apt-get", "alien", "debsums"]
  },
  {
    name: "rpm",
    categoryId: "package",
    syntax: "rpm [选项] [包名/文件]",
    simpleExplain: "RedHat 底层包操作工具，就像 dpkg 的 RedHat 版",
    detailExplain: "就像 dpkg 的 RedHat 版——rpm 直接操作 .rpm 包文件，安装、卸载、查询。它不自动解决依赖关系（那是 yum/dnf 的工作），所以通常配合 yum/dnf 一起使用。",
    examples: [
      { description: "安装 .rpm 包文件", code: "sudo rpm -ivh package.rpm" },
      { description: "查看已安装的包列表", code: "rpm -qa" },
      { description: "查看包安装的文件列表", code: "rpm -ql nginx" },
      { description: "卸载包", code: "sudo rpm -e package-name" }
    ],
    relatedCommands: ["yum", "dnf", "alien", "rpm2cpio"]
  },
  {
    name: "brew",
    categoryId: "package",
    syntax: "brew [命令] [包名]",
    simpleExplain: "Homebrew 包管理器，就像 macOS/Linux 上的第三方应用商店",
    detailExplain: "就像 macOS（也支持 Linux）上的第三方应用商店——Homebrew 让你轻松安装系统自带包管理器中没有的软件。语法简洁，社区活跃，是 macOS 开发者的必备工具，Linux 上叫 Linuxbrew。",
    examples: [
      { description: "安装软件", code: "brew install git" },
      { description: "搜索软件", code: "brew search node" },
      { description: "更新 Homebrew 和所有软件", code: "brew update && brew upgrade" },
      { description: "卸载软件", code: "brew uninstall git" }
    ],
    relatedCommands: ["apt", "npm", "pip", "nix"]
  },
  {
    name: "cargo",
    categoryId: "package",
    syntax: "cargo [命令] [选项]",
    simpleExplain: "Rust 包管理器和构建工具，就像 Rust 世界的全能助手",
    detailExplain: "就像 Rust 世界的全能助手——cargo 不仅是包管理器，还是构建工具、测试运行器、文档生成器。Rust 开发者几乎不需要其他工具，cargo 一把梭。",
    examples: [
      { description: "创建新项目", code: "cargo new my_project" },
      { description: "构建项目", code: "cargo build" },
      { description: "运行项目", code: "cargo run" },
      { description: "安装二进制工具", code: "cargo install ripgrep" }
    ],
    relatedCommands: ["rustup", "rustc", "npm", "pip"]
  },
  {
    name: "gem",
    categoryId: "package",
    syntax: "gem [命令] [包名]",
    simpleExplain: "Ruby 包管理器，就像 Ruby 世界的应用商店",
    detailExplain: "就像 Ruby 世界的应用商店——gem 用来安装和管理 Ruby 的第三方库（称为 gem）。从 rubygems.org 下载安装包，是 Ruby 开发者最常用的工具。",
    examples: [
      { description: "安装 Ruby gem", code: "gem install rails" },
      { description: "查看已安装的 gem", code: "gem list" },
      { description: "卸载 gem", code: "gem uninstall rails" },
      { description: "更新所有 gem", code: "gem update" }
    ],
    relatedCommands: ["bundler", "ruby", "rvm", "rbenv"]
  },
  {
    name: "conda",
    categoryId: "package",
    syntax: "conda [命令] [包名]",
    simpleExplain: "Conda 包和环境管理器，就像 Python 的虚拟环境管家",
    detailExplain: "就像 Python 的虚拟环境管家——conda 不但能安装包，还能创建隔离的虚拟环境，让不同项目使用不同版本的 Python 和库互不干扰。是数据科学和机器学习领域的标配工具。",
    examples: [
      { description: "创建新的虚拟环境", code: "conda create -n myenv python=3.11" },
      { description: "激活虚拟环境", code: "conda activate myenv" },
      { description: "安装包", code: "conda install numpy pandas" },
      { description: "查看所有环境", code: "conda env list" }
    ],
    relatedCommands: ["pip", "venv", "virtualenv", "mamba"]
  },
  {
    name: "make",
    categoryId: "package",
    syntax: "make [选项] [目标]",
    simpleExplain: "编译构建工具，就像一个工头按照图纸指挥工人施工",
    detailExplain: "就像一个工头按照图纸指挥工人施工——make 根据 Makefile 中定义的规则，自动判断哪些文件需要重新编译，然后只编译必要的部分。是 C/C++ 项目编译的标准工具，也广泛用于其他语言的构建流程。",
    examples: [
      { description: "编译项目", code: "make" },
      { description: "使用 4 个并行任务编译", code: "make -j4" },
      { description: "安装编译好的程序", code: "sudo make install" },
      { description: "清理编译产物", code: "make clean" }
    ],
    relatedCommands: ["cmake", "gcc", "nproc", "autoreconf"]
  },
  {
    name: "cmake",
    categoryId: "package",
    syntax: "cmake [选项] 路径",
    simpleExplain: "跨平台构建系统生成器，就像一个能根据不同工地生成不同施工图的建筑师",
    detailExplain: "就像一个能根据不同工地生成不同施工图的建筑师——cmake 不直接编译代码，而是根据 CMakeLists.txt 配置文件生成 Makefile 或其他构建文件。它跨平台支持，是大型 C/C++ 项目的标配。",
    examples: [
      { description: "在 build 目录中生成 Makefile", code: "cmake -B build" },
      { description: "指定安装路径", code: "cmake -DCMAKE_INSTALL_PREFIX=/usr/local .." },
      { description: "生成后编译", code: "cmake --build build" },
      { description: "安装编译结果", code: "cmake --install build" }
    ],
    relatedCommands: ["make", "gcc", "pkg-config", "ninja"]
  },
  {
    name: "nix",
    categoryId: "package",
    syntax: "nix [选项] 命令",
    simpleExplain: "Nix包管理器，就像一个时光机可以随时回滚到任何版本",
    detailExplain: "就像一个时光机可以随时回滚到任何版本——Nix 包管理器采用函数式思路，每次安装都创建新的系统快照，互不干扰。安装出错？一键回滚到之前的版本。多个版本的软件可以共存，彻底告别依赖地狱。",
    examples: [
      { description: "安装一个包", code: "nix-env -iA nixpkgs.git" },
      { description: "查看已安装的包", code: "nix-env -q" },
      { description: "回滚到上一个系统状态", code: "nix-env --rollback" },
      { description: "进入临时 Shell 环境", code: "nix-shell -p python3" }
    ],
    relatedCommands: ["apt", "yum", "guix", "docker"]
  },
  {
    name: "guix",
    categoryId: "package",
    syntax: "guix [选项] 命令",
    simpleExplain: "Guix包管理器，就像一个极其严谨的图书管理员",
    detailExplain: "就像一个极其严谨的图书管理员——Guix 是 GNU 项目推出的包管理器，和 Nix 类似但用 Guile Scheme 编写配置。它追求完全自由和可复现的构建，每个包的构建过程都是确定性的。",
    examples: [
      { description: "安装一个包", code: "guix install git" },
      { description: "查看可用的包", code: "guix package -A python" },
      { description: "回滚到上一代配置", code: "guix package --roll-back" },
      { description: "创建一个容器环境", code: "guix shell --container python numpy" }
    ],
    relatedCommands: ["nix", "apt", "conda", "docker"]
  },
  {
    name: "yarn",
    categoryId: "package",
    syntax: "yarn [命令]",
    simpleExplain: "快速可靠的JavaScript包管理器，就像npm的升级版快递服务",
    detailExplain: "就像 npm 的升级版快递服务——yarn 是 Facebook 开发的 JavaScript 包管理器，安装速度比 npm 快，有锁文件保证依赖一致性，支持离线安装和工作区（monorepo）。现在和 npm 互为替代。",
    examples: [
      { description: "安装项目所有依赖", code: "yarn" },
      { description: "添加一个依赖包", code: "yarn add lodash" },
      { description: "添加开发依赖", code: "yarn add -D jest" },
      { description: "运行脚本命令", code: "yarn run build" }
    ],
    relatedCommands: ["npm", "pnpm", "node", "npx"]
  },
  {
    name: "pnpm",
    categoryId: "package",
    syntax: "pnpm [命令]",
    simpleExplain: "高效的Node包管理器，就像一个会共享工具的聪明仓库管理员",
    detailExplain: "就像一个会共享工具的聪明仓库管理员——pnpm 用硬链接和符号链接的方式存储包，多个项目共享同一份依赖，大大节省磁盘空间。安装速度也很快，还严格隔离依赖，避免幽灵依赖问题。",
    examples: [
      { description: "安装项目依赖", code: "pnpm install" },
      { description: "添加一个依赖包", code: "pnpm add express" },
      { description: "全局安装工具", code: "pnpm add -g typescript" },
      { description: "运行脚本", code: "pnpm run dev" }
    ],
    relatedCommands: ["npm", "yarn", "node", "npx"]
  },
  {
    name: "composer",
    categoryId: "package",
    syntax: "composer [命令]",
    simpleExplain: "PHP依赖管理工具，就像PHP项目的采购员",
    detailExplain: "就像 PHP 项目的采购员——composer 是 PHP 的标准包管理工具，根据 composer.json 声明项目依赖，自动下载和安装所需的 PHP 库。Laravel、Symfony 等主流框架都依赖它。",
    examples: [
      { description: "安装项目依赖", code: "composer install" },
      { description: "添加一个依赖包", code: "composer require guzzlehttp/guzzle" },
      { description: "更新所有依赖", code: "composer update" },
      { description: "创建新项目", code: "composer create-project laravel/laravel myapp" }
    ],
    relatedCommands: ["php", "npm", "pip", "pecl"]
  },
  {
    name: "gradle",
    categoryId: "package",
    syntax: "gradle [任务]",
    simpleExplain: "Java构建自动化工具，就像Java世界的施工队长",
    detailExplain: "就像 Java 世界的施工队长——gradle 用 Groovy 或 Kotlin DSL 编写构建脚本，比 Maven 更灵活、比 Ant 更规范。Android 项目默认使用 Gradle 构建，是 Java/Kotlin 生态的主流构建工具。",
    examples: [
      { description: "编译项目", code: "gradle build" },
      { description: "运行测试", code: "gradle test" },
      { description: "清理构建产物", code: "gradle clean" },
      { description: "查看所有可用任务", code: "gradle tasks" }
    ],
    relatedCommands: ["make", "maven", "java", "ant"]
  }
];
