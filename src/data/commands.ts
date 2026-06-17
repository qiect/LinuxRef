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
  helpOutput?: string;
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
    simpleExplain: "列出目录下的文件和子目录",
    detailExplain: "列出指定目录下的文件和子目录。默认只显示文件名，按字母排序。常用参数：-l 显示详细信息（权限、大小、修改时间、属主），-a 显示隐藏文件（以.开头的文件），-h 以人类可读格式显示文件大小，-t 按修改时间排序，-R 递归列出子目录内容。",
    helpOutput: `用法: ls [选项]... [文件]...
列出文件信息（默认为当前目录）。
如果未指定 -cftuvSUX 或 --sort，则按字母顺序排序条目。

长选项的必选参数对短选项同样必选。
  -a, --all                  不忽略以 . 开头的条目
  -A, --almost-all           不列出隐含的 . 和 ..
      --author               配合 -l，打印每个文件的作者
  -b, --escape               对非图形字符打印 C 风格的转义序列
      --block-size=SIZE      配合 -l，按 SIZE 缩放打印的大小；
                             例如 '--block-size=M'；参见下文的 SIZE 格式

  -B, --ignore-backups       不列出以 ~ 结尾的隐含条目
  -c                         配合 -lt：按 ctime 排序并显示（文件状态信息
                             最后修改的时间）；
                             配合 -l：显示 ctime 并按名称排序；
                             否则：按 ctime 排序，最新的在前

  -C                         按列列出条目
      --color[=WHEN]         WHEN 时对输出着色；更多信息见下文
  -d, --directory            列出目录本身，而非其内容
  -D, --dired                生成适用于 Emacs dired 模式的输出
  -f                         按目录顺序列出所有条目
  -F, --classify[=WHEN]      WHEN 时在条目后追加指示符（*/=>@| 之一）
      --file-type            同上，但不追加 '*'
      --format=WORD          across -x, commas -m, horizontal -x, long -l,
                             single-column -1, verbose -l, vertical -C

      --full-time            类似于 -l --time-style=full-iso
  -g                         类似于 -l，但不列出所有者
      --group-directories-first
                             将目录排在文件之前；
                             可与 --sort 选项配合使用，但任何
                             --sort=none (-U) 的使用都会禁用分组

  -G, --no-group             在长格式列表中，不打印组名
  -h, --human-readable       配合 -l 和 -s，以 1K 234M 2G 等格式打印大小
      --si                   同上，但使用 1000 的幂而非 1024
  -H, --dereference-command-line
                             跟随命令行中列出的符号链接
      --dereference-command-line-symlink-to-dir
                             跟随每个指向目录的命令行符号链接

      --hide=PATTERN         不列出匹配 shell PATTERN 的隐含条目
                             （被 -a 或 -A 覆盖）

      --hyperlink[=WHEN]     WHEN 时为文件名添加超链接
      --indicator-style=WORD
                             按风格 WORD 在条目名后追加指示符：
                             none（默认），slash (-p)，
                             file-type (--file-type)，classify (-F)

  -i, --inode                打印每个 f`,
    examples: [
      { description: "列出当前目录下的所有文件和文件夹", code: "ls", output: "Documents  Downloads  Pictures  README.md" },
      { description: "以详细列表形式显示（含权限、大小、时间）", code: "ls -l", output: "drwxr-xr-x 2 user user 4096 Jan 15 10:30 Documents\n-rw-r--r-- 1 user user 1234 Jan 14 09:00 README.md" },
      { description: "显示隐藏文件（以点开头的文件）", code: "ls -la" },
      { description: "按文件大小从大到小排序显示", code: "ls -lhS" },
      { description: "查看帮助文档", code: "ls --help" }
    ],
    relatedCommands: ["cd", "pwd", "tree", "find"]
  },
  {
    name: "cd",
    categoryId: "file",
    syntax: "cd [目录路径]",
    simpleExplain: "切换当前工作目录",
    detailExplain: "切换当前工作目录到指定路径。不带参数时回到用户家目录，cd - 返回上一次所在目录，cd .. 进入上一级目录。参数支持绝对路径和相对路径。是 shell 内建命令，不产生新进程。",
    helpOutput: `cd: cd [-L|[-P [-e]] [-@]] [dir]
    切换 shell 工作目录。
    
    将当前目录切换到 DIR。默认 DIR 为 HOME shell 变量的值。如果 DIR 为 "-"，则转换为 $OLDPWD。
    
    变量 CDPATH 定义了包含 DIR 的目录搜索路径。CDPATH 中的备选目录名以冒号 (:) 分隔。
    空目录名等同于当前目录。如果 DIR 以斜杠 (/) 开头，则不使用 CDPATH。
    
    如果找不到目录，且设置了 shell 选项 \`cdable_vars'，
    则将该词假定为变量名。如果该变量有值，
    则其值用作 DIR。
    
    选项：
      -L	强制跟随符号链接：在处理 \`..' 的实例之后
    		解析 DIR 中的符号链接
      -P	使用物理目录结构而不跟随
    		符号链接：在处理 \`..' 的实例之前
    		解析 DIR 中的符号链接
      -e	如果提供了 -P 选项，且当前工作
    		目录无法成功确定，则以
    		非零状态退出
      -@	在支持的系统上，将带有扩展
    		属性的文件呈现为包含文件属性的目录
    
    默认行为是跟随符号链接，如同指定了 \`-L'。
    \`..' 的处理方式是移除紧邻的前一个路径名组件，
    回退到斜杠或 DIR 的开头。
    
    退出状态：
    如果目录已切换，且使用 -P 时 $PWD 设置成功，则返回 0；
    否则返回非零值。`,
    examples: [
      { description: "进入 Documents 目录", code: "cd ~/Documents" },
      { description: "回到上一级目录", code: "cd .." },
      { description: "直接回到家目录", code: "cd ~" },
      { description: "回到上次所在的目录", code: "cd -" },
      { description: "查看帮助文档", code: "help cd" }
    ],
    relatedCommands: ["ls", "pwd", "mkdir", "pushd"]
  },
  {
    name: "cp",
    categoryId: "file",
    syntax: "cp [选项] 源文件 目标位置",
    simpleExplain: "复制文件或目录",
    detailExplain: "复制文件或目录到目标位置，源文件保持不变。常用参数：-r 递归复制目录及其内容，-i 覆盖前提示确认，-p 保留权限、属主和时间戳，-v 显示复制过程，-u 仅在源较新时复制。常用于备份和分发文件。",
    helpOutput: `用法: cp [选项]... [-T] 源 目标
  或:  cp [选项]... 源... 目录
  或:  cp [选项]... -t 目录 源...
将源复制到目标，或将多个源复制到目录。

长选项的必选参数对短选项同样必选。
  -a, --archive                等同于 -dR --preserve=all
      --attributes-only        不复制文件数据，只复制属性
      --backup[=CONTROL]       为每个已存在的目标文件创建备份
  -b                           类似于 --backup 但不接受参数
      --copy-contents          递归时复制特殊文件的内容
  -d                           等同于 --no-dereference --preserve=links
      --debug                  解释文件是如何复制的。隐含 -v
  -f, --force                  如果已存在的目标文件无法
                                 打开，则删除它并重试（当同时使用
                                 -n 选项时此选项被忽略）
  -i, --interactive            覆盖前提示（覆盖之前的 -n 选项）
  -H                           跟随源中的命令行符号链接
  -l, --link                   创建硬链接而非复制文件
  -L, --dereference            总是跟随源中的符号链接
  -n, --no-clobber             不覆盖已存在的文件且不失败
                                 （覆盖 -u 或之前的 -i 选项）。另见
                                 --update；等同于 --update=none。
  -P, --no-dereference         从不跟随源中的符号链接
  -p                           等同于 --preserve=mode,ownership,timestamps
      --preserve[=ATTR_LIST]   保留指定的属性
      --no-preserve=ATTR_LIST  不保留指定的属性
      --parents                在目录下使用完整的源文件名
  -R, -r, --recursive          递归复制目录
      --reflink[=WHEN]         控制克隆/CoW 复制。见下文
      --remove-destination     在尝试打开之前删除每个已存在的目标文件
                                 （与 --force 对比）
      --sparse=WHEN            控制稀疏文件的创建。见下文
      --strip-trailing-slashes  移除每个源参数
                                 末尾的斜杠
  -s, --symbolic-link          创建符号链接而非复制
  -S, --suffix=SUFFIX          覆盖默认的备份后缀
  -t, --target-directory=DIRECTORY  将所有源参数复制到目录中
  -T, --no-target-directory    将目标视为普通文件
  --update[=UPDATE]            控制更新哪些已存在的文件；
                                 UPDATE={all,none,older(默认)}。见下文
  -u                           等同于 --update[=older]
  -v, --verbose                解释正在执行的操作
  -x, --one-file-system        保留在此文件系统上
  -Z `,
    examples: [
      { description: "复制一个文件到指定目录", code: "cp report.txt /home/user/backup/" },
      { description: "复制并重命名新文件", code: "cp old_config.txt new_config.txt" },
      { description: "递归复制整个文件夹", code: "cp -r project_folder/ /home/user/backup/" },
      { description: "复制时保留文件属性", code: "cp -a important_data /backup/" },
      { description: "查看帮助文档", code: "cp --help" }
    ],
    relatedCommands: ["mv", "rsync", "scp", "ln"]
  },
  {
    name: "mv",
    categoryId: "file",
    syntax: "mv [选项] 源文件 目标位置",
    simpleExplain: "移动或重命名文件",
    detailExplain: "移动文件或目录到新位置，也可用于重命名。源位置文件会被删除，目标位置生成同名文件。常用参数：-i 覆盖前提示，-f 强制覆盖不提示，-n 不覆盖已存在文件，-v 显示操作过程。跨文件系统移动时实际执行复制后删除。",
    helpOutput: `用法: mv [选项]... [-T] 源 目标
  或:  mv [选项]... 源... 目录
  或:  mv [选项]... -t 目录 源...
将源重命名为目标，或将源移动到目录。

长选项的必选参数对短选项同样必选。
      --backup[=CONTROL]       为每个已存在的目标文件创建备份
  -b                           类似于 --backup 但不接受参数
      --debug                  解释文件是如何复制的。隐含 -v
  -f, --force                  覆盖前不提示
  -i, --interactive            覆盖前提示
  -n, --no-clobber             不覆盖已存在的文件
如果同时指定了 -i、-f、-n 中的多个，只有最后一个生效。
      --no-copy                如果重命名失败则不复制
      --strip-trailing-slashes  移除每个源参数
                                 末尾的斜杠
  -S, --suffix=SUFFIX          覆盖默认的备份后缀
  -t, --target-directory=DIRECTORY  将所有源参数移动到目录中
  -T, --no-target-directory    将目标视为普通文件
  --update[=UPDATE]            控制更新哪些已存在的文件；
                                 UPDATE={all,none,older(默认)}。见下文
  -u                           等同于 --update[=older]
  -v, --verbose                解释正在执行的操作
  -Z, --context                将目标文件的 SELinux 安全上下文
                                 设置为默认类型
      --help        显示此帮助并退出
      --version     输出版本信息并退出

UPDATE 控制目标中哪些已存在的文件被替换。
未指定 --update 选项时，'all' 是默认操作，
即目标中所有已存在的文件都会被替换。
'none' 类似于 --no-clobber 选项，目标中的文件不会被替换，
但跳过的文件也不会导致失败。
指定 --update 时，'older' 是默认操作，即当目标文件
比对应的源文件更旧时替换目标文件。

备份后缀为 '~'，除非通过 --suffix 或 SIMPLE_BACKUP_SUFFIX 设置。
版本控制方法可通过 --backup 选项或 VERSION_CONTROL 环境变量选择。取值如下：

  none, off       从不创建备份（即使指定了 --backup）
  numbered, t     创建编号备份
  existing, nil   如果存在编号备份则创建编号备份，否则创建简单备份
  simple, never   总是创建简单备份

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/mv>
或通过本地命令获取：info '(coreutils) mv invocation'`,
    examples: [
      { description: "将文件移动到另一个目录", code: "mv download.pdf ~/Documents/" },
      { description: "给文件改个名字", code: "mv old_name.txt new_name.txt" },
      { description: "移动前先询问确认", code: "mv -i important_file /tmp/" },
      { description: "批量移动所有 txt 文件", code: "mv *.txt ~/text_files/" },
      { description: "查看帮助文档", code: "mv --help" }
    ],
    relatedCommands: ["cp", "rm", "rename", "ln"]
  },
  {
    name: "rm",
    categoryId: "file",
    syntax: "rm [选项] 文件/目录",
    simpleExplain: "删除文件或目录（不可恢复）",
    detailExplain: "删除文件或目录，删除后不可恢复，无回收站机制。常用参数：-r 递归删除目录及其内容，-f 强制删除不提示，-i 删除前逐个确认，-v 显示删除过程。使用 -rf 时需格外谨慎，避免误删重要数据。常用于清理临时文件和卸载软件。",
    helpOutput: `用法: rm [选项]... [文件]...
删除（取消链接）文件。

  -f, --force           忽略不存在的文件和参数，从不提示
  -i                    每次删除前提示
  -I                    在删除超过三个文件或递归删除时提示一次；
                          不如 -i 干扰大，但仍能防止大多数误操作
      --interactive[=WHEN]  根据 WHEN 提示：never、once (-I) 或
                          always (-i)；未指定 WHEN 时总是提示
      --one-file-system  递归删除层级时，跳过任何位于
                          与对应命令行参数不同文件系统上的目录
      --no-preserve-root  不特殊对待 '/'
      --preserve-root[=all]  不删除 '/'（默认）；
                              使用 'all' 时，拒绝任何与其父目录
                              在不同设备上的命令行参数
  -r, -R, --recursive   递归删除目录及其内容
  -d, --dir             删除空目录
  -v, --verbose         解释正在执行的操作
      --help        显示此帮助并退出
      --version     输出版本信息并退出

默认情况下，rm 不删除目录。使用 --recursive (-r 或 -R)
选项可以删除每个列出的目录及其所有内容。

要删除以 '-' 开头的文件，例如 '-foo'，
请使用以下命令之一：
  rm -- -foo

  rm ./-foo

请注意，如果使用 rm 删除文件，在具备足够专业知识和/或
时间的情况下，可能可以恢复部分内容。为确保内容真正
不可恢复，请考虑使用 shred(1)。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/rm>
或通过本地命令获取：info '(coreutils) rm invocation'`,
    examples: [
      { description: "删除一个普通文件", code: "rm temp_file.txt" },
      { description: "删除前逐一询问确认", code: "rm -i *.log" },
      { description: "强制删除且递归删除整个目录（慎用！）", code: "rm -rf old_project/" },
      { description: "删除空目录", code: "rmdir empty_folder/" },
      { description: "查看帮助文档", code: "rm --help" }
    ],
    relatedCommands: ["cp", "mv", "trash", "shred"],
    dangerLevel: "danger",
  },
  {
    name: "mkdir",
    categoryId: "file",
    syntax: "mkdir [选项] 目录名",
    simpleExplain: "创建新目录",
    detailExplain: "创建新目录。常用参数：-p 递归创建多级目录且目录已存在时不报错，-m 设置目录权限（如 -m 755），-v 显示创建过程。常用于初始化项目结构、创建工作目录。一次可创建多个目录。",
    helpOutput: `用法: mkdir [选项]... 目录...
如果目录不存在，则创建它们。

长选项的必选参数对短选项同样必选。
  -m, --mode=MODE   设置文件模式（如 chmod），而非 a=rwx - umask
  -p, --parents     不报错（如果已存在），按需创建父目录，
                    且其文件模式不受 -m 选项影响。
  -v, --verbose     为每个创建的目录打印一条消息
  -Z                   将每个创建目录的 SELinux 安全上下文
                         设置为默认类型
      --context[=CTX]  类似于 -Z，或如果指定了 CTX 则将 SELinux
                         或 SMACK 安全上下文设置为 CTX
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/mkdir>
或通过本地命令获取：info '(coreutils) mkdir invocation'`,
    examples: [
      { description: "创建一个名为 photos 的目录", code: "mkdir photos" },
      { description: "同时创建多层嵌套目录", code: "mkdir -p project/src/components/utils" },
      { description: "创建目录并设置权限", code: "mkdir -m 755 public_html" },
      { description: "一次创建多个目录", code: "mkdir dir1 dir2 dir3" },
      { description: "查看帮助文档", code: "mkdir --help" }
    ],
    relatedCommands: ["ls", "cd", "rmdir", "tree"]
  },
  {
    name: "touch",
    categoryId: "file",
    syntax: "touch [选项] 文件名",
    simpleExplain: "创建空文件或更新时间戳",
    detailExplain: "更新文件的时间戳（访问时间和修改时间）为当前时间，若文件不存在则创建空文件。常用参数：-a 仅更新访问时间，-m 仅更新修改时间，-d 或 -t 指定具体时间，-c 文件不存在时不创建。常用于快速创建空文件或触发构建工具重新编译。",
    helpOutput: `用法: touch [选项]... 文件...
将每个文件的访问和修改时间更新为当前时间。

如果文件参数不存在，则创建空文件，除非指定了 -c 或 -h。

文件参数字符串 - 会被特殊处理，使 touch 更改与标准输出
关联的文件的时间。

长选项的必选参数对短选项同样必选。
  -a                     只更改访问时间
  -c, --no-create        不创建任何文件
  -d, --date=STRING      解析 STRING 并使用它代替当前时间
  -f                     （忽略）
  -h, --no-dereference   影响每个符号链接而非被引用的
                         文件（仅在能更改符号链接时间戳的
                         系统上有用）
  -m                     只更改修改时间
  -r, --reference=FILE   使用此文件的时间代替当前时间
  -t STAMP               使用 [[CC]YY]MMDDhhmm[.ss] 代替当前时间
      --time=WORD        更改指定的时间：
                           WORD 为 access、atime 或 use：等同于 -a
                           WORD 为 modify 或 mtime：等同于 -m
      --help        显示此帮助并退出
      --version     输出版本信息并退出

注意 -d 和 -t 选项接受不同的时间日期格式。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/touch>
或通过本地命令获取：info '(coreutils) touch invocation'`,
    examples: [
      { description: "创建一个空的 notes.txt 文件", code: "touch notes.txt" },
      { description: "同时创建多个空文件", code: "touch file1.log file2.log file3.log" },
      { description: "更新已有文件的时间戳", code: "touch existing_file.md" },
      { description: "将文件时间戳设为指定时间", code: "touch -t 202501011200.00 archive.txt" },
      { description: "查看帮助文档", code: "touch --help" }
    ],
    relatedCommands: ["ls", "stat", "mkdir", "cat"]
  },
  {
    name: "find",
    categoryId: "file",
    syntax: "find [路径] [表达式]",
    simpleExplain: "按条件搜索文件",
    detailExplain: "在指定目录下按多种条件搜索文件并执行操作。支持按名称（-name）、类型（-type）、大小（-size）、修改时间（-mtime）、属主（-user）、权限（-perm）等条件过滤，可用 -exec 对结果执行命令，-delete 删除匹配文件。常用于批量查找、清理和文件管理。",
    helpOutput: `用法: find [-H] [-L] [-P] [-Olevel] [-D debugopts] [path...] [expression]

默认路径为当前目录；默认表达式为 -print。
表达式可由：运算符、选项、测试和动作组成。

运算符（优先级递减；未指定其他运算符时 -and 为隐含）：
      ( EXPR )   ! EXPR   -not EXPR   EXPR1 -a EXPR2   EXPR1 -and EXPR2
      EXPR1 -o EXPR2   EXPR1 -or EXPR2   EXPR1 , EXPR2

位置选项（始终为真）：
      -daystart -follow -nowarn -regextype -warn

普通选项（始终为真，需在其他表达式之前指定）：
      -depth -files0-from FILE -maxdepth LEVELS -mindepth LEVELS
       -mount -noleaf -xdev -ignore_readdir_race -noignore_readdir_race

测试（N 可以是 +N 或 -N 或 N）：
      -amin N -anewer FILE -atime N -cmin N -cnewer FILE -context CONTEXT
      -ctime N -empty -false -fstype TYPE -gid N -group NAME -ilname PATTERN
      -iname PATTERN -inum N -iwholename PATTERN -iregex PATTERN
      -links N -lname PATTERN -mmin N -mtime N -name PATTERN -newer FILE
      -nouser -nogroup -path PATTERN -perm [-/]MODE -regex PATTERN
      -readable -writable -executable
      -wholename PATTERN -size N[bcwkMG] -true -type [bcdpflsD] -uid N
      -used N -user NAME -xtype [bcdpfls]

动作：
      -delete -print0 -printf FORMAT -fprintf FILE FORMAT -print 
      -fprint0 FILE -fprint FILE -ls -fls FILE -prune -quit
      -exec COMMAND ; -exec COMMAND {} + -ok COMMAND ;
      -execdir COMMAND ; -execdir COMMAND {} + -okdir COMMAND ;

其他常用选项：
      --help                   显示此帮助并退出
      --version                输出版本信息并退出

-D 的有效参数：
exec, opt, rates, search, stat, time, tree, all, help
使用 '-D help' 查看选项说明，或参见 find(1)

另请参阅 https://www.gnu.org/software/findutils/ 上的文档。
您可以通过 GNU findutils 错误报告页面报告（并跟踪修复进度）"find"
程序中的错误，网址为
https://savannah.gnu.org/bugs/?group=findutils，或者如果没有
网络访问权限，可发送电子邮件至 <bug-findutils@gnu.org>。`,
    examples: [
      { description: "在当前目录下查找所有 txt 文件", code: "find . -name \"*.txt\"", output: "./notes.txt\n./report.txt\n./data/summary.txt" },
      { description: "查找大于 100MB 的文件", code: "find /home -size +100M" },
      { description: "查找 7 天内被修改过的文件", code: "find ./project -mtime -7" },
      { description: "找到后执行删除操作（慎用）", code: "find /tmp -name \"*.tmp\" -delete" },
      { description: "查看帮助文档", code: "find --help" }
    ],
    relatedCommands: ["locate", "grep", "which", "whereis"]
  },
  {
    name: "ln",
    categoryId: "file",
    syntax: "ln [选项] 目标 链接名",
    simpleExplain: "创建文件链接（硬链接或符号链接）",
    detailExplain: "为文件或目录创建链接。默认创建硬链接，-s 创建符号链接（软链接）。硬链接与源文件共享同一 inode，删除源文件后仍可访问；符号链接是指向目标路径的独立文件，源文件删除后失效。常用参数：-f 强制覆盖已有链接，-v 显示创建过程。常用于为路径较深的文件创建快捷访问入口。",
    helpOutput: `用法: ln [选项]... [-T] 目标 链接名
  或:  ln [选项]... 目标
  或:  ln [选项]... 目标... 目录
  或:  ln [选项]... -t 目录 目标...
第一种形式：创建指向目标的链接，名称为链接名。
第二种形式：在当前目录创建指向目标的链接。
第三种和第四种形式：在目录中为每个目标创建链接。
默认创建硬链接，使用 --symbolic 创建符号链接。
默认情况下，每个目标（新链接的名称）不应已存在。
创建硬链接时，每个目标必须存在。符号链接
可以包含任意文本；如果后续被解析，相对链接会
相对于其父目录进行解释。

长选项的必选参数对短选项同样必选。
      --backup[=CONTROL]      为每个已存在的目标文件创建备份
  -b                          类似于 --backup 但不接受参数
  -d, -F, --directory         允许超级用户尝试硬链接
                                目录（注意：由于系统限制可能
                                会失败，即使对超级用户也是如此）
  -f, --force                 删除已存在的目标文件
  -i, --interactive           提示是否删除目标
  -L, --logical               解引用作为符号链接的目标
  -n, --no-dereference        如果链接名是指向目录的符号链接，
                                则将其视为普通文件
  -P, --physical              直接对符号链接创建硬链接
  -r, --relative              配合 -s，创建相对于链接位置的链接
  -s, --symbolic              创建符号链接而非硬链接
  -S, --suffix=SUFFIX         覆盖默认的备份后缀
  -t, --target-directory=DIRECTORY  指定在其中创建
                                链接的目录
  -T, --no-target-directory   始终将链接名视为普通文件
  -v, --verbose               打印每个链接文件的名称
      --help        显示此帮助并退出
      --version     输出版本信息并退出

备份后缀为 '~'，除非通过 --suffix 或 SIMPLE_BACKUP_SUFFIX 设置。
版本控制方法可通过 --backup 选项或 VERSION_CONTROL 环境变量选择。取值如下：

  none, off       从不创建备份（即使指定了 --backup）
  numbered, t     创建编号备份
  existing, nil   如果存在编号备份则创建编号备份，否则创建简单备份
  simple, never   总是创建简单备份

使用 -s 时忽略 -L 和 -P。否则，最后指定的选项控制
目标为符号链接时的行为，默认为 -P。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/ln>
或通过本地命令获取：info '(coreutils) ln invocation'`,
    examples: [
      { description: "创建软链接（类似快捷方式）", code: "ln -s /opt/app/config.yml ~/config_link" },
      { description: "创建硬链接", code: "ln original.txt hardlink.txt" },
      { description: "覆盖已存在的链接", code: "ln -sf /new/path target_link" },
      { description: "在当前目录为远程文件创建链接", code: "ln -s /var/log/syslog ./syslog_link" },
      { description: "查看帮助文档", code: "ln --help" }
    ],
    relatedCommands: ["cp", "mv", "readlink", "stat"]
  },
  {
    name: "pwd",
    categoryId: "file",
    syntax: "pwd",
    simpleExplain: "显示当前工作目录的路径",
    detailExplain: "打印当前工作目录的绝对路径。默认输出逻辑路径（受 shell 环境影响），-P 参数显示物理路径（解析符号链接后的真实路径）。常用于脚本中获取当前目录、确认所处位置。是 shell 内建命令。",
    helpOutput: `pwd: pwd [-LP]
    打印当前工作目录的名称。
    
    选项：
      -L	如果 $PWD 命名的是当前工作
    		目录，则打印 $PWD 的值
      -P	打印物理目录，不包含任何符号链接
    
    默认情况下，\`pwd' 的行为如同指定了 \`-L'。
    
    退出状态：
    除非给出了无效选项或当前目录无法读取，否则返回 0。`,
    examples: [
      { description: "显示当前工作目录的完整路径", code: "pwd", output: "/home/user/Documents/project" },
      { description: "显示物理路径（解析掉符号链接）", code: "pwd -P" },
      { description: "查看帮助文档", code: "help pwd" }
    ],
    relatedCommands: ["cd", "ls", "dirname", "basename"]
  },
  {
    name: "tree",
    categoryId: "file",
    syntax: "tree [选项] [目录]",
    simpleExplain: "以树形结构显示目录内容",
    detailExplain: "以树状结构递归显示目录及其子目录内容，直观展示层级关系。常用参数：-d 只显示目录，-L 限制显示深度，-a 显示隐藏文件，-f 显示完整路径，-h 显示文件大小，-C 彩色输出。常用于查看项目结构、文档化目录布局。",
    helpOutput: `用法: tree [-acdfghilnpqrstuvxACDFJQNSUX] [-L level [-R]] [-H  baseHREF]
	[-T title] [-o filename] [-P pattern] [-I pattern] [--gitignore]
	[--gitfile[=]file] [--matchdirs] [--metafirst] [--ignore-case]
	[--nolinks] [--hintro[=]file] [--houtro[=]file] [--inodes] [--device]
	[--sort[=]<name>] [--dirsfirst] [--filesfirst] [--filelimit #] [--si]
	[--du] [--prune] [--charset[=]X] [--timefmt[=]format] [--fromfile]
	[--fromtabfile] [--fflinks] [--info] [--infofile[=]file] [--noreport]
	[--version] [--help] [--] [directory ...]
  ------- 列表选项 -------
  -a            列出所有文件。
  -d            只列出目录。
  -l            像目录一样跟随符号链接。
  -f            为每个文件打印完整路径前缀。
  -x            只停留在当前文件系统上。
  -L level      只向下深入 level 层目录。
  -R            当达到最大目录层级时重新运行 tree。
  -P pattern    只列出匹配给定模式的文件。
  -I pattern    不列出匹配给定模式的文件。
  --gitignore   使用 .gitignore 文件进行过滤。
  --gitfile X   显式读取 gitignore 文件。
  --ignore-case 模式匹配时忽略大小写。
  --matchdirs   在 -P 模式匹配中包含目录名。
  --metafirst   在每行开头打印元数据。
  --prune       从输出中修剪空目录。
  --info        打印在 .info 文件中找到的文件信息。
  --infofile X  显式读取 info 文件。
  --noreport    关闭树列表末尾的文件/目录计数。
  --charset X   终端/HTML 和缩进线输出使用字符集 X。
  --filelimit # 不深入包含超过 # 个文件的目录。
  -o filename   输出到文件而非标准输出。
  ------- 文件选项 -------
  -q            将不可打印字符打印为 '?'。
  -N            原样打印不可打印字符。
  -Q            用双引号引用文件名。
  -p            打印每个文件的保护权限。
  -u            显示文件所有者或 UID 号。
  -g            显示文件组所有者或 GID 号。
  -s            打印每个文件的字节大小。
  -h            以更易读的方式打印大小。
  --si          类似于 -h，但使用 SI 单位（1000 的幂）。
  --du          按内容计算目录大小。
  -D            打印最后修改日期或 (-c) 状态更改日期。
  --timefmt <f> 按格式 <f> 打印和格式化时间。
  -F            按 ls -F 方式追加 '/'、'='、'*'、'@'、'|' 或 '>'。
  --inodes      打印每个文件的 inode 号。
  --device      打印每个文件所属的设备 ID 号。
  ------- 排序选项 -------
  -v            按版本字母数字顺序排序文件。
  -t            按最后修改时间排序文件。
  -c            按最后状态更改时间排序文件。
  -U            不排序文件。
  -r            反转排序顺序。
  --dirsfirst   将目录列在文件之前`,
    examples: [
      { description: "以树形结构展示当前目录", code: "tree", output: ".\n├── src/\n│   ├── main.ts\n│   └── utils.ts\n├── package.json\n└── README.md" },
      { description: "只显示目录，不显示文件", code: "tree -d" },
      { description: "限制显示深度为 2 层", code: "tree -L 2" },
      { description: "显示每个文件的大小", code: "tree -h" },
      { description: "查看帮助文档", code: "tree --help" }
    ],
    relatedCommands: ["ls", "find", "pwd", "du"]
  },
  {
    name: "rmdir",
    categoryId: "file",
    syntax: "rmdir [选项] 目录名",
    simpleExplain: "删除空目录",
    detailExplain: "删除空目录，目录非空时报错，是一种防止误删的安全机制。常用参数：-p 递归删除空的父目录，-v 显示删除过程。如需删除非空目录应使用 rm -r。常用于清理临时目录结构。",
    helpOutput: `用法: rmdir [选项]... 目录...
如果目录为空，则删除它们。

      --ignore-fail-on-non-empty
                    忽略删除非空目录时的每个失败
  -p, --parents     删除目录及其祖先目录；
                    例如 'rmdir -p a/b' 类似于 'rmdir a/b a'

  -v, --verbose     为每个处理的目录输出诊断信息
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/rmdir>
或通过本地命令获取：info '(coreutils) rmdir invocation'`,
    examples: [
      { description: "删除空目录", code: "rmdir empty_folder" },
      { description: "连同空的父目录一起删除", code: "rmdir -p a/b/c/empty_dir" },
      { description: "忽略非空目录的错误提示", code: "rmdir --ignore-fail-on-non-empty folder*" },
      { description: "查看帮助文档", code: "rmdir --help" }
    ],
    relatedCommands: ["rm", "mkdir", "ls", "tree"]
  },
  {
    name: "stat",
    categoryId: "file",
    syntax: "stat [选项] 文件/目录",
    simpleExplain: "显示文件或文件系统的详细信息",
    detailExplain: "显示文件或文件系统的详细状态信息，包括大小、块数、inode、权限、属主、访问时间、修改时间、状态改变时间等。常用参数：-f 显示文件系统而非文件信息，-c 按指定格式输出，-t 以简洁格式显示。比 ls -l 提供更完整的时间戳和元数据。常用于排查文件权限和检查时间信息。",
    helpOutput: `用法: stat [选项]... 文件...
显示文件或文件系统状态。

长选项的必选参数对短选项同样必选。
  -L, --dereference     跟随链接
  -f, --file-system     显示文件系统状态而非文件状态
      --cached=MODE     指定如何使用缓存属性；
                          在远程文件系统上有用。参见下文的 MODE
  -c  --format=FORMAT   使用指定的 FORMAT 代替默认格式；
                          每次使用 FORMAT 后输出一个换行符
      --printf=FORMAT   类似于 --format，但解释反斜杠转义，
                          且不输出必须的末尾换行符；
                          如果需要换行符，请在 FORMAT 中包含 \\n
  -t, --terse           以简洁形式打印信息
      --help        显示此帮助并退出
      --version     输出版本信息并退出

--cached 的 MODE 参数可以是：always、never 或 default。
'always' 会在可用时使用缓存属性，
'never' 会尝试与最新属性同步，
'default' 则交由底层文件系统决定。

文件的有效格式序列（不带 --file-system）：

  %a   八进制权限位（注意 '#' 和 '0' printf 标志）
  %A   人类可读形式的权限位和文件类型
  %b   已分配的块数（见 %B）
  %B   %b 报告的每个块的字节大小
  %C   SELinux 安全上下文字符串
  %d   十进制设备号 (st_dev)
  %D   十六进制设备号 (st_dev)
  %Hd  十进制主设备号
  %Ld  十进制次设备号
  %f   十六进制原始模式
  %F   文件类型
  %g   所有者的组 ID
  %G   所有者的组名
  %h   硬链接数
  %i   inode 号
  %m   挂载点
  %n   文件名
  %N   带引号的文件名，如果是符号链接则显示解引用
  %o   最佳 I/O 传输大小提示
  %s   总大小，以字节为单位
  %r   十进制设备类型 (st_rdev)
  %R   十六进制设备类型 (st_rdev)
  %Hr  十进制主设备类型，用于字符/块设备特殊文件
  %Lr  十进制次设备类型，用于字符/块设备特殊文件
  %t   十六进制主设备类型，用于字符/块设备特殊文件
  %T   十六进制次设备类型，用于字符/块设备特殊文件
  %u   所有者的用户 ID
  %U   所有者的用户名
  %w   文件创建时间，人类可读格式；未知则显示 -
  %W   文件创建时间，自纪元以来的秒数；未知则为 0
  %x   最后访问时间，人类可读格式
  %X   最后访问时间，自纪元以来的秒数
  %y   最后数据修改时间，人类可读格式
  %Y   最后数据修改时间，自纪元以来的秒数
  %z   最后状态更改时间，人类可读格式
  %Z   最后状态更改时间，自纪元以来的秒数

文件系统的有效格式序列：

  %a   非超级用户可用的空闲块
  %b   文件系统中的总数据块
  %c   文件系统中的总文件节点
  %d   文件系统中的空闲文件节点
  %f   fr`,
    examples: [
      { description: "查看文件的完整元信息", code: "stat report.pdf", output: "  File: report.pdf\n  Size: 1048576\tBlocks: 2048\nModify: 2025-01-15 10:30:00" },
      { description: "只显示文件系统信息", code: "stat -f /dev/sda1" },
      { description: "以简洁格式显示", code: "stat -c '%n %s %y' *.txt" },
      { description: "查看帮助文档", code: "stat --help" }
    ],
    relatedCommands: ["ls", "file", "touch", "wc"]
  },
  {
    name: "file",
    categoryId: "file",
    syntax: "file [选项] 文件名",
    simpleExplain: "识别文件类型",
    detailExplain: "通过读取文件头部魔术数字（magic number）判断文件真实类型，不依赖扩展名。常用参数：-b 不显示文件名，-i 输出 MIME 类型，-z 查看压缩文件内部，-L 跟随符号链接。常用于识别无扩展名或扩展名错误的文件、验证文件格式。",
    helpOutput: `用法: file [选项...] [文件...]
判定文件的类型。

      --help                 显示此帮助并退出
  -v, --version              输出版本信息并退出
  -m, --magic-file LIST      使用 LIST 作为以冒号分隔的 magic
                               number 文件列表
  -z, --uncompress           尝试查看压缩文件内部
  -Z, --uncompress-noreport  只打印压缩文件的内容
  -b, --brief                不在输出行前加文件名
  -c, --checking-printout    打印 magic 文件的解析形式，与
                               -m 配合使用，在安装前调试新的 magic
                               文件
  -e, --exclude TEST         从 file 要执行的测试列表中
                               排除 TEST。有效测试为：
                               apptype, ascii, cdf, compress, csv, elf,
                               encoding, soft, tar, json, simh,
                               text, tokens
      --exclude-quiet TEST   类似于 exclude，但忽略未知测试
  -f, --files-from FILE      从 FILE 读取要检查的文件名
  -F, --separator STRING     使用 string 作为分隔符代替 \`:'
  -i, --mime                 输出 MIME 类型字符串 (--mime-type 和
                               --mime-encoding)
      --apple                输出 Apple CREATOR/TYPE
      --extension            输出以斜杠分隔的扩展名列表
      --mime-type            输出 MIME 类型
      --mime-encoding        输出 MIME 编码
  -k, --keep-going           不在第一个匹配处停止
  -l, --list                 列出 magic 强度
  -L, --dereference          跟随符号链接（如果设置了 POSIXLY_CORRECT 则为默认）
  -h, --no-dereference       不跟随符号链接（如果未设置 POSIXLY_CORRECT 则为默认）(默认)
  -n, --no-buffer            不缓冲输出
  -N, --no-pad               不填充输出
  -0, --print0               以 ASCII NUL 终止文件名
  -p, --preserve-date        保留文件的访问时间
  -P, --parameter            设置文件引擎参数限制
                                   bytes 7340032 查看文件内部的最大字节数
                               elf_notes     256 处理的 ELF notes 最大数
                               elf_phnum    2048 处理的 ELF 程序段最大数
                               elf_shnum   32768 处理的 ELF 节最大数
                               elf_shsize 134217728 ELF 节的最大大小
                                encoding   65536 扫描编码的最大字节数
                                   indir      50 间接引用的递归限制
                                    name      50 name/use magic 的使用限制
                                   regex    8192 REGEX 搜索的长度限制
  -r, --raw                  不将不可打印字符转换为 \\ooo
  -s, --special-files        将特殊文件（块/字符设备`,
    examples: [
      { description: "识别文件的类型", code: "file mystery_file", output: "mystery_file: PNG image data, 1920 x 1080" },
      { description: "批量识别多个文件类型", code: "file *" },
      { description: "显示 MIME 类型", code: "file --mime document.pdf", output: "document.pdf: application/pdf; charset=binary" },
      { description: "不解压直接识别压缩包内文件类型", code: "file -z backup.tar.gz" },
      { description: "查看帮助文档", code: "file --help" }
    ],
    relatedCommands: ["stat", "ls", "xdg-mime", "mimetype"]
  },
  {
    name: "rename",
    categoryId: "file",
    syntax: "rename [选项] 表达式 文件名...",
    simpleExplain: "批量重命名文件",
    detailExplain: "按 Perl 正则表达式批量重命名文件。第一个参数为替换规则，后续为待处理文件列表。例如 's/\\.htm/\\.html/' 将 .htm 改为 .html，'s/^/prefix_/' 添加前缀。支持 -n 预览不实际执行，-f 强制覆盖，-v 显示过程。常用于批量修改扩展名、规范化命名。",
    helpOutput: `用法: rename [ -h|-m|-V ] [ -v|-n ] [ -f ] [ -e|-E perlexpr]*|perlexpr  [ files ]

选项:
  -v, --verbose    打印所有被重命名的文件名
  -n, --nono       只预览不实际执行（dry run）
  -f, --force      覆盖已存在的文件
  -e, --expression  指定 Perl 正则表达式进行替换
  -m, --man        显示完整手册
  -V, --version    显示版本信息`,
    examples: [
      { description: "把所有 .htm 文件后缀改为 .html", code: "rename 's/.htm$/.html/' *.htm" },
      { description: "在所有文件名前加上日期前缀", code: "rename 's/^/2025-01-15-/' *.jpg" },
      { description: "把文件名中的空格替换为下划线", code: "rename 's/ /_/g' *\\ *" },
      { description: "预览改名效果（不实际执行）", code: "rename -n 's/.JPG$/.jpg/' *" },
      { description: "查看帮助文档", code: "rename --help" }
    ],
    relatedCommands: ["mv", "mmv", "ln", "basename"]
  },
  {
    name: "locate",
    categoryId: "file",
    syntax: "locate [选项] 关键词",
    simpleExplain: "通过索引数据库快速查找文件",
    detailExplain: "通过预建的文件名数据库快速查找文件路径，速度远快于 find。数据库由 updatedb 定期更新，可能不含最新文件。常用参数：-i 忽略大小写，-r 使用正则表达式，-c 只输出匹配数量，-d 指定数据库。常用于快速定位已知文件名的路径。",
    helpOutput: `用法: locate [选项]... [模式]...
在 mlocate 数据库中搜索条目。

  -A, --all            仅显示匹配所有模式的条目
  -b, --basename       仅匹配路径的最后一部分（文件名）
  -c, --count          只输出匹配数量
  -d, --database DBPATH 使用指定数据库而非默认
  -e, --existing       仅显示当前存在的文件
  -i, --ignore-case    忽略大小写
  -l, --limit N        限制输出条数
  -r, --regexp REGEXP  使用基本正则表达式
  -w, --wholename      匹配完整路径（默认）
      --help           显示帮助
      --version        显示版本`,
    examples: [
      { description: "快速查找所有包含 config 的文件", code: "locate config", output: "/etc/config.conf\n/home/user/.config\n/usr/local/etc/nginx/config" },
      { description: "统计匹配到的文件数量", code: "locate -c nginx" },
      { description: "使用正则表达式搜索", code: "locate -r '\\.log$'" },
      { description: "忽略大小写搜索", code: "locate -i README" },
      { description: "查看帮助文档", code: "locate --help" }
    ],
    relatedCommands: ["find", "updatedb", "which", "whereis"]
  },
  {
    name: "which",
    categoryId: "file",
    syntax: "which 命令名",
    simpleExplain: "查找可执行命令的路径",
    detailExplain: "在 PATH 环境变量指定的目录中查找可执行文件的位置，返回第一个匹配的完整路径。常用参数：-a 列出所有匹配路径而非仅第一个。常用于排查命令找不到、确认使用的是哪个版本的程序、区分内建命令与外部命令。",
    helpOutput: `用法: /usr/bin/which [-as] 参数`,
    examples: [
      { description: "查找 python3 的安装路径", code: "which python3", output: "/usr/bin/python3" },
      { description: "查找所有匹配的位置", code: "which -a node", output: "/usr/local/bin/node\n/home/user/.nvm/versions/node/bin/node" },
      { description: "查找 git 的位置", code: "which git", output: "/usr/bin/git" },
      { description: "查看帮助文档", code: "which --help" }
    ],
    relatedCommands: ["whereis", "type", "locate", "find"]
  },
  {
    name: "whereis",
    categoryId: "file",
    syntax: "whereis [选项] 命令名",
    simpleExplain: "查找命令相关的程序、手册和源码",
    detailExplain: "同时查找命令的二进制文件、源代码和 man 手册页路径。比 which 覆盖范围更广，搜索路径包括 /usr、/bin、/etc 等标准目录。常用参数：-b 仅查二进制，-m 仅查手册，-s 仅查源码，-B/-M/-S 指定搜索路径。常用于全面了解命令的安装位置和相关文档。",
    helpOutput: `
用法:
 whereis [选项] [-BMS <目录>... -f] <名称>

定位命令的二进制文件、源文件和手册页文件。

选项:
 -b         只搜索二进制文件
 -B <目录>  定义二进制文件查找路径
 -m         只搜索手册和 info
 -M <目录>  定义 man 和 info 查找路径
 -s         只搜索源文件
 -S <目录>  定义源文件查找路径
 -f         终止 <目录> 参数列表
 -u         搜索异常条目
 -g         将名称解释为 glob（路径名模式）
 -l         输出有效查找路径

 -h, --help     显示此帮助
 -V, --version  显示版本

更多详情参见 whereis(1)。`,
    examples: [
      { description: "查找 gcc 相关的所有文件", code: "whereis gcc", output: "gcc: /usr/bin/gcc /usr/lib/gcc /usr/share/man/man1/gcc.1.gz" },
      { description: "只查找二进制程序", code: "whereis -b python" },
      { description: "只查找帮助手册", code: "whereis -m curl" },
      { description: "只查找源代码文件", code: "whereis -s apache2" },
      { description: "查看帮助文档", code: "whereis --help" }
    ],
    relatedCommands: ["which", "type", "find", "locate"]
  },
  {
    name: "basename",
    categoryId: "file",
    syntax: "basename 路径 [后缀]",
    simpleExplain: "提取文件路径中的文件名部分",
    detailExplain: "从完整路径中提取文件名部分，去除目录前缀，可选去除指定后缀。例如 basename /var/log/syslog 输出 syslog，basename file.txt .txt 输出 file。常用于脚本中处理文件路径、提取纯文件名。",
    helpOutput: `用法: basename 名称 [后缀]
  或:  basename 选项... 名称...
打印去除了前导目录组件的名称。
如果指定了后缀，则同时去除末尾的后缀。

长选项的必选参数对短选项同样必选。
  -a, --multiple       支持多个参数，将每个视为名称
  -s, --suffix=SUFFIX  去除末尾的后缀；隐含 -a
  -z, --zero           以 NUL 而非换行符结束每行输出
      --help        显示此帮助并退出
      --version     输出版本信息并退出

示例：
  basename /usr/bin/sort          -> "sort"
  basename include/stdio.h .h     -> "stdio"
  basename -s .h include/stdio.h  -> "stdio"
  basename -a any/str1 any/str2   -> "str1" 后跟 "str2"

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/basename>
或通过本地命令获取：info '(coreutils) basename invocation'`,
    examples: [
      { description: "提取路径中的文件名", code: "basename /home/user/docs/report.txt", output: "report.txt" },
      { description: "提取文件名并去掉后缀", code: "basename /home/user/docs/report.txt .txt", output: "report" },
      { description: "提取目录路径的最后一级", code: "basename /var/log/nginx/", output: "nginx" },
      { description: "处理多个路径", code: "basename -a /usr/bin/python3 /usr/bin/git", output: "python3\ngit" },
      { description: "查看帮助文档", code: "basename --help" }
    ],
    relatedCommands: ["dirname", "realpath", "readlink", "pwd"]
  },
  {
    name: "dirname",
    categoryId: "file",
    syntax: "dirname 路径",
    simpleExplain: "提取文件路径中的目录部分",
    detailExplain: "从完整路径中提取目录部分，去除末尾的文件名。例如 dirname /var/log/syslog 输出 /var/log。支持处理相对路径和绝对路径，多个斜杠会被规范化。常用于脚本中获取文件所在目录、构造相关路径。",
    helpOutput: `用法: dirname [选项] 名称...
输出每个名称去掉最后一个非斜杠组件和末尾斜杠后的结果；
如果名称中不含 /，则输出 '.'（表示当前目录）。

  -z, --zero     以 NUL 而非换行符结束每行输出
      --help        显示此帮助并退出
      --version     输出版本信息并退出

示例：
  dirname /usr/bin/          -> "/usr"
  dirname dir1/str dir2/str  -> "dir1" 后跟 "dir2"
  dirname stdio.h            -> "."

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/dirname>
或通过本地命令获取：info '(coreutils) dirname invocation'`,
    examples: [
      { description: "提取路径中的目录部分", code: "dirname /home/user/docs/report.txt", output: "/home/user/docs" },
      { description: "处理当前目录下的文件", code: "dirname config.yaml", output: "." },
      { description: "处理多级路径", code: "dirname /var/log/nginx/access.log", output: "/var/log/nginx" },
      { description: "处理末尾有斜杠的路径", code: "dirname /home/user/", output: "/home" },
      { description: "查看帮助文档", code: "dirname --help" }
    ],
    relatedCommands: ["basename", "realpath", "pwd", "cd"]
  },
  {
    name: "realpath",
    categoryId: "file",
    syntax: "realpath 文件路径",
    simpleExplain: "显示文件的真实绝对路径",
    detailExplain: "将给定路径解析为规范的绝对路径，展开符号链接、处理 . 和 .. 引用。常用参数：-s 不展开符号链接，-m 允许路径不存在，-e 要求路径必须存在，--relative-to 输出相对路径。常用于脚本中规范化路径、获取文件真实位置。",
    helpOutput: `用法: realpath [选项]... 文件...
打印解析后的绝对文件名；
除最后一个组件外，所有组件都必须存在

  -e, --canonicalize-existing  路径的所有组件都必须存在
  -m, --canonicalize-missing   不需要路径组件存在或为目录
  -L, --logical                在符号链接之前解析 '..' 组件
  -P, --physical               遇到符号链接时解析（默认）
  -q, --quiet                  抑制大多数错误消息
      --relative-to=DIR        打印相对于 DIR 的解析路径
      --relative-base=DIR      除非路径在 DIR 之下，否则打印绝对路径
  -s, --strip, --no-symlinks   不展开符号链接
  -z, --zero                   以 NUL 而非换行符结束每行输出
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/realpath>
或通过本地命令获取：info '(coreutils) realpath invocation'`,
    examples: [
      { description: "显示文件的真实绝对路径", code: "realpath ../neighbor/config.ini", output: "/home/user/project/config.ini" },
      { description: "解析符号链接的真实路径", code: "realpath /usr/bin/python3", output: "/usr/bin/python3.10" },
      { description: "去除路径中的 . 和 ..", code: "realpath ./src/../lib/./utils.js", output: "/home/user/project/lib/utils.js" },
      { description: "检查多个文件的真实路径", code: "realpath file1.txt file2.txt" },
      { description: "查看帮助文档", code: "realpath --help" }
    ],
    relatedCommands: ["readlink", "basename", "dirname", "pwd"]
  },
  {
    name: "readlink",
    categoryId: "file",
    syntax: "readlink 链接文件",
    simpleExplain: "查看符号链接指向的真实目标",
    detailExplain: "输出符号链接指向的目标路径。默认只处理一层链接，-f 参数递归解析所有符号链接并输出规范化的绝对路径，-e 要求目标必须存在，-n 不输出换行。常用于脚本中获取符号链接的真实目标、验证链接有效性。",
    helpOutput: `用法: readlink [选项]... 文件...
打印符号链接的值或规范文件名

  -f, --canonicalize            通过递归跟随给定名称每个组件中的
                                每个符号链接来规范化；
                                除最后一个组件外，所有组件都必须存在
  -e, --canonicalize-existing   通过递归跟随给定名称每个组件中的
                                每个符号链接来规范化，
                                所有组件都必须存在
  -m, --canonicalize-missing    通过递归跟随给定名称每个组件中的
                                每个符号链接来规范化，
                                不对组件的存在性有要求
  -n, --no-newline              不输出末尾分隔符
  -q, --quiet
  -s, --silent                  抑制大多数错误消息（默认开启）
  -v, --verbose                 报告错误消息
  -z, --zero                    以 NUL 而非换行符结束每行输出
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/readlink>
或通过本地命令获取：info '(coreutils) readlink invocation'`,
    examples: [
      { description: "查看符号链接指向的目标", code: "readlink /usr/bin/python", output: "/usr/bin/python3" },
      { description: "递归解析多层符号链接", code: "readlink -f /usr/bin/python", output: "/usr/bin/python3.10" },
      { description: "查看多个链接的目标", code: "readlink link1 link2 link3" },
      { description: "显示链接的详细信息", code: "readlink -e /usr/bin/python3" },
      { description: "查看帮助文档", code: "readlink --help" }
    ],
    relatedCommands: ["ln", "realpath", "ls", "stat"]
  },
  {
    name: "install",
    categoryId: "file",
    syntax: "install [选项] 源文件 目标",
    simpleExplain: "复制文件并设置权限",
    detailExplain: "复制文件到目标位置并同时设置权限、属主等属性，常用于 Makefile 中的安装步骤。常用参数：-m 设置权限（如 -m 755），-o 设置属主，-g 设置属组，-d 创建目录，-p 保留时间戳。结合了 cp、chmod、chown 的功能，常用于软件安装和部署。",
    helpOutput: `用法: install [选项]... [-T] 源 目标
  或:  install [选项]... 源... 目录
  或:  install [选项]... -t 目录 源...
  或:  install [选项]... -d 目录...

此 install 程序将文件（通常是刚编译好的）复制到您选择的目标
位置。如果您想在 GNU/Linux 系统上下载并安装即装即用的
软件包，应改用包管理器，
如 yum(1) 或 apt-get(1)。

在前三种形式中，将源复制到目标，或将多个源复制到
已存在的目录，同时设置权限模式和属主/属组。
在第 4 种形式中，创建给定目录的所有组成部分。

长选项的必选参数对短选项同样必选。
      --backup[=CONTROL]  为每个已存在的目标文件创建备份
  -b                  类似 --backup 但不接受参数
  -c                  （忽略）
  -C, --compare       比较源文件和目标文件的内容，如果
                        内容、属主和权限没有变化，
                        则完全不修改目标
  -d, --directory     将所有参数视为目录名；创建
                        指定目录的所有组成部分
  -D                  创建目标除最后一项外的所有前导组成部分，
                        或 --target-directory 的所有组成部分，
                        然后将源复制到目标
      --debug         解释文件是如何复制的。隐含 -v
  -g, --group=GROUP   设置属组，而不是进程的当前属组
  -m, --mode=MODE     设置权限模式（如 chmod），而不是 rwxr-xr-x
  -o, --owner=OWNER   设置属主（仅超级用户）
  -p, --preserve-timestamps   将源文件的访问/修改时间
                        应用到对应的目标文件
  -s, --strip         去除符号表
      --strip-program=PROGRAM  用于去除二进制文件符号的程序
  -S, --suffix=SUFFIX  覆盖默认的备份后缀
  -t, --target-directory=DIRECTORY  将所有源参数复制到目录中
  -T, --no-target-directory  将目标视为普通文件
  -v, --verbose       打印每个创建的文件或目录的名称
      --preserve-context  保留 SELinux 安全上下文
  -Z                      将目标文件和每个创建目录的
                            SELinux 安全上下文设置为默认类型
      --context[=CTX]     类似 -Z，或如果指定了 CTX 则将
                            SELinux 或 SMACK 安全上下文设置为 CTX
      --help        显示此帮助并退出
      --version     输出版本信息并退出

备份后缀为 '~'，除非通过 --suffix 或 SIMPLE_BACKUP_SUFFIX 设置。
版本控制方法可通过 --backup 选项或通过
VERSION_CONTROL 环境变量选择。可选值如下：

  none, off       从不创建备份（即使指定了 --backup）
  numbered, t     创建编号备份
  existing, ni`,
    examples: [
      { description: "复制文件并设置权限为755", code: "install -m 755 myapp /usr/local/bin/" },
      { description: "复制文件并设置所有者", code: "install -o root -g root script.sh /usr/local/bin/" },
      { description: "创建目录并设置权限", code: "install -d -m 750 /etc/myapp/config" },
      { description: "备份目标文件后再复制", code: "install -b -m 644 config.ini /etc/myapp/" },
      { description: "查看帮助文档", code: "install --help" }
    ],
    relatedCommands: ["cp", "chmod", "chown", "mkdir"]
  },
  {
    name: "shred",
    categoryId: "file",
    syntax: "shred [选项] 文件",
    simpleExplain: "安全删除文件使其无法恢复",
    detailExplain: "通过多次覆写文件内容使数据难以恢复，比 rm 更安全地删除敏感数据。常用参数：-n 指定覆写次数，-z 最后用零覆写以隐藏 shred 操作，-u 覆写后删除文件，-v 显示过程。对日志结构文件系统、SSD 和带快照的文件系统效果有限。常用于销毁机密文件。",
    helpOutput: `用法: shred [选项]... 文件...
重复覆盖指定的文件，使得即使是昂贵的硬件探测
也难以恢复数据。

如果文件为 -，则覆盖标准输出。

长选项的必选参数对短选项同样必选。
  -f, --force    必要时更改权限以允许写入
  -n, --iterations=N  覆盖 N 次而不是默认的 3 次
      --random-source=文件  从文件中获取随机字节
  -s, --size=N   覆盖指定字节数（接受 K、M、G 等后缀）
  -u             覆盖后释放并删除文件
      --remove[=HOW]  类似 -u 但可控制删除方式；见下文
  -v, --verbose  显示进度
  -x, --exact    不将文件大小向上取整到下一个完整块；
                   对于非普通文件这是默认行为
  -z, --zero     最后增加一次全零覆盖以隐藏粉碎操作
      --help        显示此帮助并退出
      --version     输出版本信息并退出

如果指定了 --remove (-u) 则删除文件。默认不删除
文件，因为通常会对 /dev/hda 等设备文件进行操作，
而这些文件通常不应被删除。
可选的 HOW 参数指示如何删除目录项：
'unlink' => 使用标准的 unlink 调用。
'wipe' => 还会先混淆名称中的字节。
'wipesync' => 还会将每个混淆的字节同步到设备。
默认模式是 'wipesync'，但注意这可能开销很大。

注意：shred 假定文件系统和硬件会就地覆盖数据。
虽然这很常见，但许多平台并非如此。此外，备份
和镜像可能包含无法删除的副本，使得被粉碎的文件
日后仍可被恢复。详见 GNU coreutils 手册。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/shred>
或本地可用通过：info '(coreutils) shred invocation'
`,
    examples: [
      { description: "安全删除文件（覆写3次后删除）", code: "shred -u secret.txt" },
      { description: "覆写25次后删除", code: "shred -v -n 25 -u secret.txt" },
      { description: "只覆写不删除文件", code: "shred -n 5 important.dat" },
      { description: "安全删除整个分区数据", code: "shred -vfz /dev/sdb1" },
      { description: "查看帮助文档", code: "shred --help" }
    ],
    relatedCommands: ["rm", "dd", "wipe", "cp"],
    dangerLevel: "danger"
  },
  {
    name: "chroot",
    categoryId: "file",
    syntax: "chroot 新根目录 [命令]",
    simpleExplain: "切换根目录运行程序",
    detailExplain: "将指定目录作为根目录运行程序，程序在该目录内运行，无法访问外部真实文件系统。需要 root 权限，目标目录需包含必要的运行库和设备文件。常用参数：--userspec 指定用户和组。常用于系统修复、构建沙箱环境、测试和交叉编译。",
    helpOutput: `用法: chroot [选项] 新根目录 [命令 [参数]...]
  或:  chroot 选项
以新根目录运行命令。

      --groups=G_LIST        以 g1,g2,..,gN 指定附加组
      --userspec=USER:GROUP  指定要使用的用户和组（ID 或名称）
      --skip-chdir           不将工作目录更改为 '/'
      --help        显示此帮助并退出
      --version     输出版本信息并退出

如果未给出命令，则运行 '"$SHELL" -i'（默认：'/bin/sh -i'）。

退出状态：
  125  如果 chroot 命令本身失败
  126  如果找到命令但无法调用
  127  如果找不到命令
  -    否则为命令的退出状态

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/chroot>
或本地可用通过：info '(coreutils) chroot invocation'
`,
    examples: [
      { description: "切换到新根目录并运行shell", code: "chroot /mnt/sysroot /bin/bash" },
      { description: "在新根目录中执行指定命令", code: "chroot /mnt/sysroot apt update" },
      { description: "指定用户和组运行", code: "chroot --userspec=user:group /mnt/newroot /bin/sh" },
      { description: "切换根目录进行系统修复", code: "chroot /mnt/recovery /bin/bash" },
      { description: "查看帮助文档", code: "chroot --help" }
    ],
    relatedCommands: ["mount", "su", "docker", "ssh"],
    dangerLevel: "warning"
  },
  {
    name: "pushd",
    categoryId: "file",
    syntax: "pushd 目录",
    simpleExplain: "切换目录并保存当前目录到栈中",
    detailExplain: "将当前目录压入目录栈并切换到指定目录，结合 popd 可在多个目录间快速切换。不带参数时交换栈顶两个目录。常用参数：-n 仅压栈不切换目录，+N/-N 指定栈中位置。常用于在多个工作目录间频繁切换、脚本中保存和恢复目录状态。",
    helpOutput: `pushd: pushd [-n] [+N | -N | dir]
    将目录压入栈。
    
    将目录添加到目录栈顶部，或旋转
    栈，使栈的新顶部成为当前工作
    目录。不带参数时，交换顶部两个目录。
    
    选项：
      -n	添加目录到栈时抑制正常的目录切换，
    		因此只操作栈本身。
    
    参数：
      +N	旋转栈，使第 N 个目录（从
    		\`dirs' 所显示列表的左侧开始计数，
    		从零开始）位于顶部。
    
      -N	旋转栈，使第 N 个目录（从
    		\`dirs' 所显示列表的右侧开始计数，
    		从零开始）位于顶部。
    
      dir	将目录添加到目录栈顶部，使其成为
    		新的当前工作目录。
    
    \`dirs' 内建命令显示目录栈。
    
    退出状态：
    除非提供了无效参数或目录切换失败，否则返回成功。
`,
    examples: [
      { description: "切换到新目录并保存当前目录", code: "pushd /var/log", output: "/var/log ~" },
      { description: "与当前目录交换", code: "pushd +1" },
      { description: "切换到项目目录", code: "pushd ~/projects/myapp" },
      { description: "在多个目录间快速切换", code: "pushd /etc/nginx" },
      { description: "查看帮助文档", code: "help pushd" }
    ],
    relatedCommands: ["popd", "dirs", "cd", "pwd"]
  },
  {
    name: "popd",
    categoryId: "file",
    syntax: "popd",
    simpleExplain: "返回到之前pushd保存的目录",
    detailExplain: "从目录栈中弹出栈顶目录并切换到新的栈顶目录，与 pushd 配合使用。不带参数时弹出当前目录并回到上一个目录。常用参数：-n 仅弹出栈顶不切换目录，+N/-N 删除栈中指定位置的目录。常用于脚本中恢复之前的工作目录。",
    helpOutput: `popd: popd [-n] [+N | -N]
    从栈中移除目录。
    
    从目录栈中移除条目。不带参数时，移除
    栈顶目录，并切换到新的栈顶目录。
    
    选项：
      -n	从栈中移除目录时抑制正常的目录切换，
    		因此只操作栈本身。
    
    参数：
      +N	从 \`dirs' 所显示列表的左侧开始计数，移除
    		第 N 个条目，从零开始。例如：\`popd +0'
    		移除第一个目录，\`popd +1' 移除第二个。
    
      -N	从 \`dirs' 所显示列表的右侧开始计数，移除
    		第 N 个条目，从零开始。例如：\`popd -0'
    		移除最后一个目录，\`popd -1' 移除倒数第二个。
    
    \`dirs' 内建命令显示目录栈。
    
    退出状态：
    除非提供了无效参数或目录切换失败，否则返回成功。
`,
    examples: [
      { description: "返回上一个pushd保存的目录", code: "popd", output: "~" },
      { description: "跳转到栈中第2个目录", code: "popd +1" },
      { description: "删除栈顶目录但不切换", code: "popd -n" },
      { description: "与pushd配合在多个目录间跳转", code: "popd" },
      { description: "查看帮助文档", code: "help popd" }
    ],
    relatedCommands: ["pushd", "dirs", "cd", "pwd"]
  },
  {
    name: "dirs",
    categoryId: "file",
    syntax: "dirs",
    simpleExplain: "显示目录栈的内容",
    detailExplain: "显示目录栈的内容。目录栈由 pushd 命令压入、popd 命令弹出，dirs 列出当前栈中保存的所有目录路径。常用参数：-c 清空目录栈，-v 显示带行号的列表，-l 显示完整路径。常用于在多个工作目录间快速切换时查看可跳转的目录列表。",
    helpOutput: `dirs: dirs [-clpv] [+N] [-N]
    显示目录栈。
    
    显示当前记住的目录列表。目录通过
    \`pushd' 命令进入列表；可以通过
    \`popd' 命令回溯列表。
    
    选项：
      -c	删除所有元素以清空目录栈
      -l	不打印相对于主目录的以波浪号为前缀的
    		目录版本
      -p	每行一个条目地打印目录栈
      -v	每行一个条目地打印目录栈，并带有
    		其在栈中位置的前缀
    
    参数：
      +N	从 \`dirs' 不带选项调用时所显示列表的左侧
    		开始计数，显示第 N 个条目，从零开始。
    
      -N	从 \`dirs' 不带选项调用时所显示列表的右侧
    		开始计数，显示第 N 个条目，从零开始。
    
    退出状态：
    除非提供了无效选项或发生错误，否则返回成功。
`,
    examples: [
      { description: "显示目录栈", code: "dirs", output: "~ /var/log /etc/nginx" },
      { description: "每行显示一个目录", code: "dirs -p", output: "~\n/var/log\n/etc/nginx" },
      { description: "显示目录栈中的索引号", code: "dirs -v", output: "0  ~\n1  /var/log\n2  /etc/nginx" },
      { description: "只显示第N个目录", code: "dirs +1" },
      { description: "查看帮助文档", code: "help dirs" }
    ],
    relatedCommands: ["pushd", "popd", "cd", "pwd"]
  },
  {
    name: "md5sum",
    categoryId: "file",
    syntax: "md5sum 文件",
    simpleExplain: "计算文件的MD5校验和",
    detailExplain: "计算并校验文件的 MD5 散列值。MD5 根据文件内容生成 128 位（32 位十六进制字符）的固定长度摘要，文件内容任何改动都会导致散列值完全变化。常用方式：md5sum file 生成校验和，md5sum -c checksum.md5 校验文件完整性。常用于验证文件下载是否完整或检测文件是否被篡改。",
    helpOutput: `用法: md5sum [选项]... [文件]...
打印或校验 MD5（128 位）校验和。

如果没有文件，或文件为 -，则读取标准输入。
  -b, --binary          以二进制模式读取
  -c, --check           从文件中读取校验和并校验
      --tag             创建 BSD 风格的校验和
  -t, --text            以文本模式读取（默认）
  -z, --zero            每行输出以 NUL 而非换行符结尾，
                          并禁用文件名转义

以下五个选项仅在验证校验和时有用：
      --ignore-missing  不对缺失的文件失败或报告状态
      --quiet           不为每个成功验证的文件打印 OK
      --status          不输出任何内容，状态码表示成功
      --strict          对格式不正确的校验和行以非零值退出
  -w, --warn            对格式不正确的校验和行发出警告

      --help        显示此帮助并退出
      --version     输出版本信息并退出

校验和按 RFC 1321 描述的方式计算。
校验时，输入应为该程序之前的输出。
默认模式是打印一行：校验和、一个空格、
一个表示输入模式的字符（'*' 表示二进制，' ' 表示文本
或二进制无意义的情况），以及每个文件的名称。

注意：在 GNU 系统上，二进制模式和文本模式没有区别。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/md5sum>
或本地可用通过：info '(coreutils) md5sum invocation'
`,
    examples: [
      { description: "计算文件的MD5值", code: "md5sum ubuntu-22.04.iso", output: "a4acf81002b7c7ce2e2e5f1b2c5c5c5c  ubuntu-22.04.iso" },
      { description: "校验文件与MD5值是否匹配", code: "md5sum -c checksum.md5", output: "ubuntu-22.04.iso: OK" },
      { description: "计算多个文件的MD5", code: "md5sum file1.txt file2.txt > checksums.md5" },
      { description: "从标准输入计算MD5", code: "echo \"hello\" | md5sum", output: "b1946ac92492d2347c6235b4d2611184  -" },
      { description: "查看帮助文档", code: "md5sum --help" }
    ],
    relatedCommands: ["sha256sum", "cksum", "sha1sum", "file"]
  },
  {
    name: "sha256sum",
    categoryId: "file",
    syntax: "sha256sum 文件",
    simpleExplain: "计算文件的SHA256校验和",
    detailExplain: "计算并校验文件的 SHA256 散列值。SHA256 生成 256 位（64 位十六进制字符）摘要，安全性高于 MD5，碰撞概率极低。常用方式：sha256sum file 生成校验和，sha256sum -c checksum.sha256 校验文件完整性。是当前推荐的文件校验方式，常用于验证系统镜像、密钥文件等关键数据。",
    helpOutput: `用法: sha256sum [选项]... [文件]...
打印或校验 SHA256（256 位）校验和。

如果没有文件，或文件为 -，则读取标准输入。
  -b, --binary          以二进制模式读取
  -c, --check           从文件中读取校验和并校验
      --tag             创建 BSD 风格的校验和
  -t, --text            以文本模式读取（默认）
  -z, --zero            每行输出以 NUL 而非换行符结尾，
                          并禁用文件名转义

以下五个选项仅在验证校验和时有用：
      --ignore-missing  不对缺失的文件失败或报告状态
      --quiet           不为每个成功验证的文件打印 OK
      --status          不输出任何内容，状态码表示成功
      --strict          对格式不正确的校验和行以非零值退出
  -w, --warn            对格式不正确的校验和行发出警告

      --help        显示此帮助并退出
      --version     输出版本信息并退出

校验和按 FIPS-180-2 描述的方式计算。
校验时，输入应为该程序之前的输出。
默认模式是打印一行：校验和、一个空格、
一个表示输入模式的字符（'*' 表示二进制，' ' 表示文本
或二进制无意义的情况），以及每个文件的名称。

注意：在 GNU 系统上，二进制模式和文本模式没有区别。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/sha256sum>
或本地可用通过：info '(coreutils) sha2 utilities'
`,
    examples: [
      { description: "计算文件的SHA256值", code: "sha256sum ubuntu-22.04.iso", output: "ab4acf81002b7c7ce2e2e5f1b2c5c5c5c...  ubuntu-22.04.iso" },
      { description: "校验文件完整性", code: "sha256sum -c SHA256SUMS", output: "ubuntu-22.04.iso: OK" },
      { description: "计算多个文件的SHA256", code: "sha256sum *.tar.gz > checksums.sha256" },
      { description: "从标准输入计算SHA256", code: "echo \"hello\" | sha256sum" },
      { description: "查看帮助文档", code: "sha256sum --help" }
    ],
    relatedCommands: ["md5sum", "cksum", "sha1sum", "gpg"]
  },
  {
    name: "xargs",
    categoryId: "file",
    syntax: "xargs [选项] [命令]",
    simpleExplain: "将标准输入转换为命令参数",
    detailExplain: "从标准输入读取数据并作为参数传递给后续命令。解决管道只能传递 stdin 而不能传递命令行参数的问题。常用参数：-n 指定每次传递的参数个数，-I 指定替换字符串，-d 指定分隔符，-P 并行执行。典型用法：find . -name \"*.log\" | xargs rm 批量删除查找到的文件。",
    helpOutput: `用法: xargs [选项]... 命令 [初始参数]...
以初始参数和从输入读取的更多参数运行命令。

长选项的必选和可选参数对相应的短选项
同样必选或可选。
  -0, --null                   项以 null 而非空白分隔；
                                 禁用引号和反斜杠处理以及
                                 逻辑 EOF 处理
  -a, --arg-file=文件          从文件而非标准输入读取参数
  -d, --delimiter=字符         输入流中的项以字符分隔，
                                 而非空白；禁用引号和反斜杠
                                 处理以及逻辑 EOF 处理
  -E END                       设置逻辑 EOF 字符串；如果 END 作为
                                 输入的一行出现，则忽略剩余输入
                                 （如果指定了 -0 或 -d 则忽略）
  -e, --eof[=END]              如果指定了 END 则等价于 -E END；
                                 否则没有结束字符串
  -I R                         同 --replace=R
  -i, --replace[=R]            用从标准输入读取的名称替换初始参数中的 R，
                                 以换行符分割；
                                 如果未指定 R，则假定 {}
  -L, --max-lines=MAX-LINES    每个命令行最多使用 MAX-LINES 行非空输入
  -l[MAX-LINES]                类似 -L，但如果未指定 MAX-LINES 则默认
                                 最多一行非空输入
  -n, --max-args=MAX-ARGS      每个命令行最多使用 MAX-ARGS 个参数
  -o, --open-tty               在子进程中执行命令前将 stdin 重新打开为
                                 /dev/tty；用于运行
                                 交互式应用程序。
  -P, --max-procs=MAX-PROCS    同时最多运行 MAX-PROCS 个进程
  -p, --interactive            运行命令前提示
      --process-slot-var=VAR   在子进程中设置环境变量 VAR
  -r, --no-run-if-empty        如果没有参数，则不运行命令；
                                 如果未给出此选项，命令将
                                 至少运行一次
  -s, --max-chars=MAX-CHARS    将命令行长度限制为 MAX-CHARS
      --show-limits            显示命令行长度的限制
  -t, --verbose                执行前打印命令
  -x, --exit                   如果超出大小（见 -s）则退出
      --help                   显示此帮助并退出
      --version                输出版本信息并退出

另请参阅 https://www.gnu.org/software/findutils/ 上的文档。
您可以通过 GNU findutils 错误报告页面报告（并跟踪修复进度）
"xargs" 程序的错误，位于
ht`,
    examples: [
      { description: "查找并删除所有.log文件", code: "find . -name \"*.log\" | xargs rm" },
      { description: "每行一个参数执行命令", code: "find . -name \"*.txt\" | xargs -I {} cp {} /backup/" },
      { description: "限制每次传递的参数数量", code: "echo \"a b c d e\" | xargs -n 2 echo", output: "a b\nc d\ne" },
      { description: "并行执行任务", code: "find . -name \"*.jpg\" | xargs -P 4 -I {} convert {} {}.png" },
      { description: "查看帮助文档", code: "xargs --help" }
    ],
    relatedCommands: ["find", "grep", "exec", "parallel"]
  },

  // ==================== 文本处理 ====================
  {
    name: "cat",
    categoryId: "text",
    syntax: "cat [选项] 文件名...",
    simpleExplain: "查看文件全部内容",
    detailExplain: "顺序读取文件内容并输出到标准输出。可同时显示多个文件，按顺序拼接输出。常用参数：-n 显示行号，-b 仅对非空行编号，-s 压缩连续空行，-A 显示不可见字符。适合查看小型文件；大文件应使用 less 或 more 分页查看。",
    helpOutput: `用法: cat [选项]... [文件]...
将文件连接到标准输出。

如果没有文件，或文件为 -，则读取标准输入。

  -A, --show-all           等价于 -vET
  -b, --number-nonblank    对非空输出行编号，覆盖 -n
  -e                       等价于 -vE
  -E, --show-ends          在每行末尾显示 $
  -n, --number             对所有输出行编号
  -s, --squeeze-blank      压缩重复的空输出行
  -t                       等价于 -vT
  -T, --show-tabs          将 TAB 字符显示为 ^I
  -u                       （忽略）
  -v, --show-nonprinting   使用 ^ 和 M- 表示法，LFD 和 TAB 除外
      --help        显示此帮助并退出
      --version     输出版本信息并退出

示例：
  cat f - g  输出 f 的内容，然后是标准输入，然后是 g 的内容。
  cat        将标准输入复制到标准输出。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/cat>
或本地可用通过：info '(coreutils) cat invocation'
`,
    examples: [
      { description: "显示文件的全部内容", code: "cat config.json" },
      { description: "显示多个文件并合并输出", code: "cat header.txt body.txt footer.txt > full_doc.txt" },
      { description: "带行号显示文件内容", code: "cat -n main.py" },
      { description: "压缩连续空行为一行", code: "cat -s messy_text.txt" },
      { description: "查看帮助文档", code: "cat --help" }
    ],
    relatedCommands: ["less", "more", "head", "tail"]
  },
  {
    name: "grep",
    categoryId: "text",
    syntax: "grep [选项] 模式 文件...",
    simpleExplain: "在文本中搜索匹配的行",
    detailExplain: "在文本中搜索匹配指定模式的行并输出。支持基本正则、扩展正则（-E）和固定字符串（-F）。常用参数：-i 忽略大小写，-v 反向匹配（输出不包含模式的行），-r 递归搜索目录，-n 显示行号，-c 统计匹配行数，-o 仅输出匹配部分。是日志分析和文本检索的核心工具。",
    helpOutput: `用法: grep [选项]... 模式 [文件]...
在每个文件中搜索模式。
示例：grep -i 'hello world' menu.h main.c
模式可以包含多个以换行符分隔的模式。

模式选择和解释：
  -E, --extended-regexp     模式是扩展正则表达式
  -F, --fixed-strings       模式是字符串
  -G, --basic-regexp        模式是基本正则表达式
  -P, --perl-regexp         模式是 Perl 正则表达式
  -e, --regexp=模式         使用模式进行匹配
  -f, --file=文件           从文件中获取模式
  -i, --ignore-case         忽略模式和数据中的大小写区别
      --no-ignore-case      不忽略大小写区别（默认）
  -w, --word-regexp         只匹配整个单词
  -x, --line-regexp         只匹配整行
  -z, --null-data           数据行以 0 字节而非换行符结尾

其他：
  -s, --no-messages         抑制错误信息
  -v, --invert-match        选择不匹配的行
  -V, --version             显示版本信息并退出
      --help                显示此帮助文本并退出

输出控制：
  -m, --max-count=NUM       在选中 NUM 行后停止
  -b, --byte-offset         随输出行打印字节偏移量
  -n, --line-number         随输出行打印行号
      --line-buffered       每行刷新输出
  -H, --with-filename       随输出行打印文件名
  -h, --no-filename         抑制输出中的文件名前缀
      --label=LABEL         使用 LABEL 作为标准输入文件名前缀
  -o, --only-matching       只显示行中匹配的非空部分
  -q, --quiet, --silent     抑制所有正常输出
      --binary-files=TYPE   假定二进制文件为 TYPE 类型；
                            TYPE 为 'binary'、'text' 或 'without-match'
  -a, --text                等价于 --binary-files=text
  -I                        等价于 --binary-files=without-match
  -d, --directories=ACTION  如何处理目录；
                            ACTION 为 'read'、'recurse' 或 'skip'
  -D, --devices=ACTION      如何处理设备、FIFO 和套接字；
                            ACTION 为 'read' 或 'skip'
  -r, --recursive           类似 --directories=recurse
  -R, --dereference-recursive  同上，但跟随所有符号链接
      --include=GLOB        只搜索匹配 GLOB 的文件（文件模式）
      --exclude=GLOB        跳过匹配 GLOB 的文件
      --exclude-from=文件   跳过匹配文件中任何文件模式的文件
      --exclude-dir=GLOB    跳过匹配 GLOB 的目录
  -L, --files-without-match  只打印没有选中行的文件名
  -l, --files-with-matches  只打印有选中行的文件名
  -c, --count               只打印每个文件选中行的计数
  -T, --initial-tab         使制表符对齐（如需要）
  -Z, --null                在文件名后打印 0 字节

上下文 con`,
    examples: [
      { description: "在文件中搜索 error 关键词", code: "grep \"error\" app.log" },
      { description: "忽略大小写搜索", code: "grep -i \"warning\" system.log" },
      { description: "显示匹配行的行号", code: "grep -n \"TODO\" src/*.ts" },
      { description: "递归搜索目录下所有文件", code: "grep -r \"function\" ./src/" },
      { description: "反向匹配：显示不包含该词的行", code: "grep -v \"^#\" config.ini" },
      { description: "查看帮助文档", code: "grep --help" }
    ],
    relatedCommands: ["egrep", "fgrep", "sed", "awk"]
  },
  {
    name: "sed",
    categoryId: "text",
    syntax: "sed [选项] '脚本' 文件...",
    simpleExplain: "流编辑器，对文本进行替换和编辑",
    detailExplain: "流编辑器，按行对文本执行编辑操作。最常用于文本替换，也支持删除、插入、追加等操作。常用参数：s/old/new/g 全局替换，-i 直接修改原文件，-n 配合 p 仅输出匹配行，-e 执行多个编辑命令，-r 使用扩展正则。常用于批量修改配置文件或脚本中的文本。",
    helpOutput: `用法: sed [选项]... {仅当无其他脚本时的脚本} [输入文件]...

  -n, --quiet, --silent
                 抑制模式空间的自动打印
      --debug
                 标注程序执行过程
  -e 脚本, --expression=脚本
                 将脚本添加到要执行的命令中
  -f 脚本文件, --file=脚本文件
                 将脚本文件的内容添加到要执行的命令中
  --follow-symlinks
                 就地处理时跟随符号链接
  -i[后缀], --in-place[=后缀]
                 就地编辑文件（如果提供后缀则创建备份）
  -l N, --line-length=N
                 为 \`l' 命令指定所需的换行长度
  --posix
                 禁用所有 GNU 扩展。
  -E, -r, --regexp-extended
                 在脚本中使用扩展正则表达式
                 （为可移植性使用 POSIX -E）。
  -s, --separate
                 将文件视为独立的而非单个
                 连续的长流。
      --sandbox
                 在沙箱模式下运行（禁用 e/r/w 命令）。
  -u, --unbuffered
                 从输入文件加载最少量的数据并更频繁地
                 刷新输出缓冲区
  -z, --null-data
                 以 NUL 字符分隔行
      --help     显示此帮助并退出
      --version  输出版本信息并退出

如果没有给出 -e、--expression、-f 或 --file 选项，则第一个
非选项参数被作为要解释的 sed 脚本。所有剩余参数是
输入文件的名称；如果未指定输入文件，则读取标准输入。

GNU sed 主页：<https://www.gnu.org/software/sed/>。
使用 GNU 软件的一般帮助：<https://www.gnu.org/gethelp/>。
将错误报告发送至：<bug-sed@gnu.org>。
`,
    examples: [
      { description: "将文件中的 foo 替换为 bar 并输出", code: "sed 's/foo/bar/g' input.txt" },
      { description: "直接修改文件内容（原地替换）", code: "sed -i 's/old_domain.com/new_domain.com/g' *.html" },
      { description: "删除第 2 到第 5 行", code: "sed '2,5d' data.csv" },
      { description: "只显示匹配的行", code: "sed -n '/error/p' logfile" },
      { description: "查看帮助文档", code: "sed --help" }
    ],
    relatedCommands: ["grep", "awk", "tr", "perl"]
  },
  {
    name: "awk",
    categoryId: "text",
    syntax: "awk [选项] '模式{动作}' 文件...",
    simpleExplain: "强大的文本数据处理工具",
    detailExplain: "文本处理语言，按行和列处理结构化文本。默认以空格/制表符分列，通过 $1、$2 等访问字段，支持条件判断、循环和算术运算。常用方式：awk '{print $1}' 输出第一列，awk -F',' '{print $2}' 指定分隔符，awk '$3>100' 按条件过滤。适合处理 CSV、日志等列式数据。",
    helpOutput: `用法: awk [POSIX 或 GNU 风格选项] -f 程序文件 [--] 文件 ...
用法: awk [POSIX 或 GNU 风格选项] [--] '程序' 文件 ...
POSIX 选项：		GNU 长选项：（标准）
	-f 程序文件		--file=程序文件
	-F fs			--field-separator=fs
	-v var=val		--assign=var=val
短选项：		GNU 长选项：（扩展）
	-b			--characters-as-bytes
	-c			--traditional
	-C			--copyright
	-d[文件]		--dump-variables[=文件]
	-D[文件]		--debug[=文件]
	-e '程序文本'	--source='程序文本'
	-E 文件			--exec=文件
	-g			--gen-pot
	-h			--help
	-i 包含文件		--include=包含文件
	-I			--trace
	-l 库			--load=库
	-L[fatal|invalid|no-ext]	--lint[=fatal|invalid|no-ext]
	-M			--bignum
	-N			--use-lc-numeric
	-n			--non-decimal-data
	-o[文件]		--pretty-print[=文件]
	-O			--optimize
	-p[文件]		--profile[=文件]
	-P			--posix
	-r			--re-interval
	-s			--no-optimize
	-S			--sandbox
	-t			--lint-old
	-V			--version

要报告错误，请使用 \`gawkbug' 程序。
完整说明请参见 \`gawk.info' 中的 \`Bugs' 节点，
即印刷版中的 \`Reporting Problems and Bugs' 节。
同样的信息可在
https://www.gnu.org/software/gawk/manual/html_node/Bugs.html 找到。
请勿尝试通过在 comp.lang.awk 发帖，
或使用 Stack Overflow 等网络论坛来报告错误。

gawk 是一种模式扫描和处理语言。
默认情况下，它读取标准输入并写入标准输出。

示例：
	awk '{ sum += $1 }; END { print sum }' 文件
	awk -F: '{ print $1 }' /etc/passwd
`,
    examples: [
      { description: "打印文件的第 1 列和第 3 列", code: "awk '{print $1, $3}' data.txt" },
      { description: "以冒号为分隔符，打印用户名", code: "awk -F: '{print $1}' /etc/passwd", output: "root\ndaemon\nbin\nsys\nuser" },
      { description: "计算第二列数值的总和", code: "awk '{sum+=$2} END {print sum}' numbers.txt" },
      { description: "过滤第三列大于 50 的行", code: "awk '$3 > 50' scores.csv" },
      { description: "查看帮助文档", code: "awk --help" }
    ],
    relatedCommands: ["sed", "grep", "cut", "sort"]
  },
  {
    name: "head",
    categoryId: "text",
    syntax: "head [选项] 文件...",
    simpleExplain: "查看文件开头若干行",
    detailExplain: "输出文件开头部分内容。默认显示前 10 行。常用参数：-n N 指定显示前 N 行，-n -N 显示除最后 N 行外的所有内容，-c N 显示前 N 字节。常用于快速查看文件格式、检查日志文件头部信息或预览大文件内容。",
    helpOutput: `用法: head [选项]... [文件]...
将每个文件的前 10 行打印到标准输出。
如果有多个文件，在每个文件前加上给出文件名的标题。

如果没有文件，或文件为 -，则读取标准输入。

长选项的必选参数对短选项同样必选。
  -c, --bytes=[-]NUM       打印每个文件的前 NUM 字节；
                             带前导 '-' 时，打印除最后
                             NUM 字节外的所有内容
  -n, --lines=[-]NUM       打印前 NUM 行而不是前 10 行；
                             带前导 '-' 时，打印除最后
                             NUM 行外的所有内容
  -q, --quiet, --silent    从不打印给出文件名的标题
  -v, --verbose            总是打印给出文件名的标题
  -z, --zero-terminated    行分隔符为 NUL 而非换行符
      --help        显示此帮助并退出
      --version     输出版本信息并退出

NUM 可以带有乘数后缀：
b 512，kB 1000，K 1024，MB 1000*1000，M 1024*1024，
GB 1000*1000*1000，G 1024*1024*1024，T、P、E、Z、Y、R、Q 以此类推。
也可使用二进制前缀：KiB=K，MiB=M，以此类推。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/head>
或本地可用通过：info '(coreutils) head invocation'
`,
    examples: [
      { description: "显示文件前 10 行（默认）", code: "head server.log" },
      { description: "只显示前 5 行", code: "head -n 5 config.yaml" },
      { description: "显示前 20 个字节", code: "head -c 20 binary.dat" },
      { description: "同时显示多个文件的开头", code: "head -n 3 *.txt" },
      { description: "查看帮助文档", code: "head --help" }
    ],
    relatedCommands: ["tail", "cat", "less", "tac"]
  },
  {
    name: "tail",
    categoryId: "text",
    syntax: "tail [选项] 文件...",
    simpleExplain: "查看文件末尾若干行",
    detailExplain: "输出文件末尾部分内容。默认显示最后 10 行。常用参数：-n N 指定显示最后 N 行，-f 实时追踪文件新增内容（常用于监控日志），-F 同 -f 但文件被轮转时仍可追踪，-c N 显示最后 N 字节。是日志监控和排查问题的常用工具。",
    helpOutput: `用法: tail [选项]... [文件]...
将每个文件的最后 10 行打印到标准输出。
如果有多个文件，在每个文件前加上给出文件名的标题。

如果没有文件，或文件为 -，则读取标准输入。

长选项的必选参数对短选项同样必选。
  -c, --bytes=[+]NUM       输出最后 NUM 字节；或使用 -c +NUM
                             从每个文件的第 NUM 字节开始输出
  -f, --follow[={name|descriptor}]
                           随文件增长输出追加的数据；
                             缺省选项参数表示 'descriptor'
  -F                       同 --follow=name --retry
  -n, --lines=[+]NUM       输出最后 NUM 行而不是最后 10 行；
                             或使用 -n +NUM 跳过开头的 NUM-1 行
      --max-unchanged-stats=N
                           使用 --follow=name 时，重新打开在 N（默认 5）次
                             迭代后大小未变的文件，
                             以查看它是否已被取消链接或重命名
                             （这是轮转日志文件的常见情况）；
                             使用 inotify 时，此选项很少有用
      --pid=PID            使用 -f 时，在进程 ID（PID）终止后退出
  -q, --quiet, --silent    从不输出给出文件名的标题
      --retry              如果文件不可访问，则不断尝试打开
  -s, --sleep-interval=N   使用 -f 时，迭代之间休眠约 N 秒
                             （默认 1.0）；
                             使用 inotify 和 --pid=P 时，至少每 N 秒
                             检查一次进程 P
  -v, --verbose            总是输出给出文件名的标题
  -z, --zero-terminated    行分隔符为 NUL 而非换行符
      --help        显示此帮助并退出
      --version     输出版本信息并退出

NUM 可以带有乘数后缀：
b 512，kB 1000，K 1024，MB 1000*1000，M 1024*1024，
GB 1000*1000*1000，G 1024*1024*1024，T、P、E、Z、Y、R、Q 以此类推。
也可使用二进制前缀：KiB=K，MiB=M，以此类推。

使用 --follow (-f) 时，tail 默认跟随文件描述符，这
意味着即使被 tail 的文件被重命名，tail 也会继续跟踪
其末尾。当您确实想跟踪文件的实际名称而非文件描述符
（例如日志轮转）时，此默认行为并不理想。
在这种情况下使用 --follow=name。这使 tail 以适应重命名、
删除和创建的方式跟踪命名文件。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/tail>
或本地可用通过：info '(coreutils) tail invocation'
`,
    examples: [
      { description: "显示文件末尾 10 行（默认）", code: "tail access.log" },
      { description: "实时跟踪日志文件的新增内容", code: "tail -f /var/log/syslog" },
      { description: "显示最后 20 行", code: "tail -n 20 debug.log" },
      { description: "从第 100 行开始显示到末尾", code: "tail -n +100 bigfile.txt" },
      { description: "查看帮助文档", code: "tail --help" }
    ],
    relatedCommands: ["head", "less", "tailf", "multitail"]
  },
  {
    name: "sort",
    categoryId: "text",
    syntax: "sort [选项] 文件...",
    simpleExplain: "对文本行进行排序",
    detailExplain: "对文本行进行排序。默认按字典序排序。常用参数：-n 按数值排序，-r 逆序排序，-k N 按第 N 列排序，-t 指定字段分隔符，-u 排序并去重，-f 忽略大小写。常配合 uniq 使用，先排序再去重以删除所有重复行。",
    helpOutput: `用法: sort [选项]... [文件]...
  或:  sort [选项]... --files0-from=F
将所有文件的排序合并写入标准输出。

如果没有文件，或文件为 -，则读取标准输入。

长选项的必选参数对短选项同样必选。
排序选项：

  -b, --ignore-leading-blanks  忽略前导空白
  -d, --dictionary-order      只考虑空白和字母数字字符
  -f, --ignore-case           将小写字母转换为大写字母
  -g, --general-numeric-sort  按一般数值进行比较
  -i, --ignore-nonprinting    只考虑可打印字符
  -M, --month-sort            比较 (未知) < 'JAN' < ... < 'DEC'
  -h, --human-numeric-sort    比较人类可读的数字（例如 2K 1G）
  -n, --numeric-sort          按字符串数值进行比较
  -R, --random-sort           随机排序，但将相同的键分组。见 shuf(1)
      --random-source=文件    从文件获取随机字节
  -r, --reverse               反转比较结果
      --sort=WORD             按 WORD 排序：
                                general-numeric -g，human-numeric -h，month -M，
                                numeric -n，random -R，version -V
  -V, --version-sort          对文本中的（版本）数字进行自然排序

其他选项：

      --batch-size=NMERGE   一次最多合并 NMERGE 个输入；
                            更多则使用临时文件
  -c, --check, --check=diagnose-first  检查输入是否已排序；不排序
  -C, --check=quiet, --check=silent  类似 -c，但不报告第一个错误行
      --compress-program=PROG  用 PROG 压缩临时文件；
                              用 PROG -d 解压
      --debug               标注用于排序的行部分，
                              并向 stderr 报告可疑用法
      --files0-from=F       从文件 F 中以 NUL 结尾的名称
                            指定的文件读取输入；
                            如果 F 为 - 则从标准输入读取名称
  -k, --key=KEYDEF          通过键排序；KEYDEF 给出位置和类型
  -m, --merge               合并已排序的文件；不排序
  -o, --output=文件         将结果写入文件而非标准输出
  -s, --stable              通过禁用最后手段比较来稳定排序
  -S, --buffer-size=SIZE    使用 SIZE 作为主内存缓冲区
  -t, --field-separator=SEP  使用 SEP 而非非空白到空白的转换
  -T, --temporary-directory=DIR  使用 DIR 存放临时文件，而非 $TMPDIR 或 /tmp；
                              多个选项指定多个目录
      --parallel=N          将并发运行的排序数更改为 N
  -u, --unique              使用 -c 时，检查严格排序；
                              不使用 -c 时，只输出相等运行中的第一个
  -z, --zero-terminated     行分隔符为 NUL 而非换行符
      --help        显示此帮助并退出
`,
    examples: [
      { description: "按字母顺序对文件内容排序", code: "sort names.txt", output: "Alice\nBob\nCharlie\nDavid" },
      { description: "按数字大小排序", code: "sort -n scores.txt" },
      { description: "倒序排列（从大到小）", code: "sort -r dates.txt" },
      { description: "按第 2 列排序", code: "sort -k2 -n data.csv" },
      { description: "去除重复行后排序", code: "sort -u list.txt" },
      { description: "查看帮助文档", code: "sort --help" }
    ],
    relatedCommands: ["uniq", "awk", "cut", "wc"]
  },
  {
    name: "uniq",
    categoryId: "text",
    syntax: "uniq [选项] 文件...",
    simpleExplain: "去除相邻的重复行",
    detailExplain: "去除相邻的重复行，仅保留一行。注意只处理相邻重复，因此通常先用 sort 排序再用 uniq 去重。常用参数：-c 显示每行重复次数，-d 仅显示重复行，-u 仅显示唯一行，-i 忽略大小写。常用于统计日志中重复记录或合并相同条目。",
    helpOutput: `用法: uniq [选项]... [输入 [输出]]
从输入（或标准输入）过滤相邻的匹配行，
写入到输出（或标准输出）。

不带选项时，匹配行合并为第一次出现。

长选项的必选参数对短选项同样必选。
  -c, --count           在行前加上出现次数
  -d, --repeated        只打印重复行，每组一行
  -D                    打印所有重复行
      --all-repeated[=METHOD]  类似 -D，但允许用空行
                                 分隔各组；
                                 METHOD={none(默认),prepend,separate}
  -f, --skip-fields=N   跳过前 N 个字段不比较
      --group[=METHOD]  显示所有项，用空行分隔各组；
                          METHOD={separate(默认),prepend,append,both}
  -i, --ignore-case     比较时忽略大小写差异
  -s, --skip-chars=N    跳过前 N 个字符不比较
  -u, --unique          只打印唯一行
  -z, --zero-terminated     行分隔符为 NUL 而非换行符
  -w, --check-chars=N   在行中比较不超过 N 个字符
      --help        显示此帮助并退出
      --version     输出版本信息并退出

字段是一串空白（通常是空格和/或 TAB），然后是非空白
字符。字段在字符之前被跳过。

注意：'uniq' 不会检测重复行，除非它们是相邻的。
您可能需要先对输入排序，或使用 'sort -u' 而不用 'uniq'。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/uniq>
或本地可用通过：info '(coreutils) uniq invocation'
`,
    examples: [
      { description: "去除相邻重复行", code: "uniq raw_log.txt" },
      { description: "显示重复出现的行及出现次数", code: "uniq -c access.log", output: "   3  192.168.1.1\n   7  10.0.0.5\n   1  172.16.0.1" },
      { description: "只显示重复的行", code: "uniq -d users.txt" },
      { description: "只显示不重复的唯一行", code: "uniq -u items.txt" },
      { description: "查看帮助文档", code: "uniq --help" }
    ],
    relatedCommands: ["sort", "awk", "tr", "wc"]
  },
  {
    name: "wc",
    categoryId: "text",
    syntax: "wc [选项] 文件...",
    simpleExplain: "统计文件的行数、单词数和字节数",
    detailExplain: "统计文件的行数、单词数和字节数。默认依次输出三个数值。常用参数：-l 仅统计行数，-w 仅统计单词数，-c 仅统计字节数，-m 统计字符数。常用于快速了解文件规模，如统计日志行数、代码行数等。",
    helpOutput: `用法: wc [选项]... [文件]...
  或:  wc [选项]... --files0-from=F
打印每个文件的换行符、单词和字节计数，如果指定了多个文件
则打印总计行。单词是由空白分隔的非零长度可打印字符序列。

如果没有文件，或文件为 -，则读取标准输入。

以下选项可用于选择打印哪些计数，始终按以下顺序：
换行符、单词、字符、字节、最大行长度。
  -c, --bytes            打印字节计数
  -m, --chars            打印字符计数
  -l, --lines            打印换行符计数
      --files0-from=F    从文件 F 中以 NUL 结尾的名称
                           指定的文件读取输入；
                           如果 F 为 - 则从标准输入读取名称
  -L, --max-line-length  打印最大显示宽度
  -w, --words            打印单词计数
      --total=WHEN       何时打印带有总计的行；
                           WHEN 可为：auto、always、only、never
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/wc>
或本地可用通过：info '(coreutils) wc invocation'
`,
    examples: [
      { description: "统计文件的行数、单词数和字符数", code: "wc essay.txt", output: "  25  180  1056 essay.txt" },
      { description: "只统计行数", code: "wc -l large_file.csv", output: "10000 large_file.csv" },
      { description: "只统计字符数", code: "wc -m message.txt" },
      { description: "统计多个文件并显示总计", code: "wc *.py" },
      { description: "查看帮助文档", code: "wc --help" }
    ],
    relatedCommands: ["cat", "nl", "sort", "uniq"]
  },
  {
    name: "cut",
    categoryId: "text",
    syntax: "cut [选项] 文件...",
    simpleExplain: "按列或字段提取文本",
    detailExplain: "按列或字段提取文本内容。常用参数：-f N 提取第 N 个字段（需配合 -d 指定分隔符），-d 指定字段分隔符（默认为制表符），-c N-M 提取字符范围，-b N-M 提取字节范围。常用于从 CSV、/etc/passwd 等结构化文件中提取特定列。",
    helpOutput: `用法: cut 选项... [文件]...
将每个文件中选定的行部分打印到标准输出。

如果没有文件，或文件为 -，则读取标准输入。

长选项的必选参数对短选项同样必选。
  -b, --bytes=列表        只选定这些字节
  -c, --characters=列表   只选定这些字符
  -d, --delimiter=DELIM   使用 DELIM 而非 TAB 作为字段分隔符
  -f, --fields=列表       只选定这些字段；同时打印任何
                            不含分隔符的行，除非
                            指定了 -s 选项
  -n                      （忽略）
      --complement        补全选定的字节、字符
                            或字段集合
  -s, --only-delimited    不打印不含分隔符的行
      --output-delimiter=字符串  使用字符串作为输出分隔符
                            默认使用输入分隔符
  -z, --zero-terminated   行分隔符为 NUL 而非换行符
      --help        显示此帮助并退出
      --version     输出版本信息并退出

使用 -b、-c 或 -f 中的一个且仅一个。每个列表由一个
范围或多个以逗号分隔的范围组成。选定的输入按读取顺序
写入，且只写入一次。每个范围是以下之一：

  N     第 N 个字节、字符或字段，从 1 开始计数
  N-    从第 N 个字节、字符或字段到行尾
  N-M   从第 N 个到第 M 个（含）字节、字符或字段
  -M    从第一个到第 M 个（含）字节、字符或字段

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/cut>
或本地可用通过：info '(coreutils) cut invocation'
`,
    examples: [
      { description: "提取每行的第 1-3 个字符", code: "cut -c1-3 codes.txt" },
      { description: "以冒号为分隔符，提取第 1 和第 6 列", code: "cut -d: -f1,6 /etc/passwd", output: "root:/root\nbin:/bin\ndaemon:/sbin" },
      { description: "以逗号分隔，提取第 2 列", code: "cut -d',' -f2 data.csv" },
      { description: "提取除第 1 列外的所有列", code: "cut -d'\t' -f2- tabbed.tsv" },
      { description: "查看帮助文档", code: "cut --help" }
    ],
    relatedCommands: ["awk", "paste", "sort", "join"]
  },
  {
    name: "tr",
    categoryId: "text",
    syntax: "tr [选项] 字符集1 字符集2",
    simpleExplain: "替换或删除字符",
    detailExplain: "转换或删除标准输入中的字符。从 stdin 读取、写到 stdout，不能直接读取文件。常用方式：tr 'a-z' 'A-Z' 小写转大写，tr -d ' ' 删除空格，tr -s ' ' 压缩连续空格为一个，tr 可将换行符替换为空格实现行合并。常用于字符大小写转换、空白符处理等。",
    helpOutput: `用法: tr [选项]... 字符串1 [字符串2]
从标准输入转换、压缩和/或删除字符，
写入到标准输出。字符串1 和字符串2 指定控制操作的
字符数组 数组1 和 数组2。

  -c, -C, --complement    使用 数组1 的补集
  -d, --delete            删除 数组1 中的字符，不转换
  -s, --squeeze-repeats   将最后指定的数组中列出的
                            每个重复字符序列
                            替换为该字符的单次出现
  -t, --truncate-set1     首先将 数组1 截断为 数组2 的长度
      --help        显示此帮助并退出
      --version     输出版本信息并退出

数组以字符字符串形式指定。大多数字符代表自身。
可解释的序列有：

  \\NNN            八进制值为 NNN 的字符（1 到 3 位八进制数字）
  \\\\              反斜杠
  \\a              响铃
  \\b              退格
  \\f              换页
  \\n              换行
  \\r              回车
  \\t              水平制表符
  \\v              垂直制表符
  CHAR1-CHAR2     从 CHAR1 到 CHAR2 的所有字符，按升序排列
  [CHAR*]         在 数组2 中，CHAR 的副本直到 数组1 的长度
  [CHAR*REPEAT]   REPEAT 个 CHAR 的副本，如果以 0 开头则 REPEAT 为八进制
  [:alnum:]       所有字母和数字
  [:alpha:]       所有字母
  [:blank:]       所有水平空白
  [:cntrl:]       所有控制字符
  [:digit:]       所有数字
  [:graph:]       所有可打印字符，不包括空格
  [:lower:]       所有小写字母
  [:print:]       所有可打印字符，包括空格
  [:punct:]       所有标点字符
  [:space:]       所有水平或垂直空白
  [:upper:]       所有大写字母
  [:xdigit:]      所有十六进制数字
  [=CHAR=]        所有等同于 CHAR 的字符

如果未给出 -d 且同时出现 字符串1 和 字符串2，则进行转换。
-t 仅在转换时有意义。数组2 通过按需重复其最后一个字符
扩展到 数组1 的长度。数组2 中多余的字符
被忽略。字符类以未指定的顺序展开；
转换时，[:lower:] 和 [:upper:] 可成对使用以
指定大小写转换。压缩在转换或删除之后进行。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/tr>
或本地可用通过：info '(coreutils) tr invocation'
`,
    examples: [
      { description: "把小写字母转换为大写", code: "echo \"hello world\" | tr 'a-z' 'A-Z'", output: "HELLO WORLD" },
      { description: "删除所有数字字符", code: "echo \"abc123def456\" | tr -d '0-9'", output: "abcdef" },
      { description: "把连续的空格压缩为一个", code: "echo \"hello    world\" | tr -s ' '", output: "hello world" },
      { description: "把换行符替换为空格", code: "tr '\\n' ' ' < multiline.txt" },
      { description: "查看帮助文档", code: "tr --help" }
    ],
    relatedCommands: ["sed", "awk", "fold", "expand"]
  },
  {
    name: "diff",
    categoryId: "text",
    syntax: "diff [选项] 文件1 文件2",
    simpleExplain: "比较两个文件的差异",
    detailExplain: "逐行比较两个文件或目录的差异并输出。输出格式标记：< 表示第一个文件独有，> 表示第二个文件独有，--- 分隔两个文件。常用参数：-u 显示统一格式（unified，patch 默认格式），-c 上下文格式，-r 递归比较目录，-q 仅报告是否不同。常用于代码变更对比和生成补丁。",
    helpOutput: `用法: diff [选项]... 文件
逐行比较文件。

长选项的必选参数对短选项同样必选。
      --normal                  输出普通 diff（默认）
  -q, --brief                   仅在文件不同时报告
  -s, --report-identical-files  在两个文件相同时报告
  -c, -C NUM, --context[=NUM]   输出 NUM（默认 3）行复制上下文
  -u, -U NUM, --unified[=NUM]   输出 NUM（默认 3）行统一上下文
  -e, --ed                      输出 ed 脚本
  -n, --rcs                     输出 RCS 格式 diff
  -y, --side-by-side            以两列输出
  -W, --width=NUM               输出最多 NUM（默认 130）个打印列
      --left-column             只输出公共行的左列
      --suppress-common-lines   不输出公共行

  -p, --show-c-function         显示每个更改所在的 C 函数
  -F, --show-function-line=RE   显示匹配 RE 的最近一行
      --label LABEL             使用 LABEL 代替文件名和时间戳
                                  （可重复）

  -t, --expand-tabs             在输出中将制表符展开为空格
  -T, --initial-tab             通过前置制表符使制表符对齐
      --tabsize=NUM             每 NUM（默认 8）个打印列一个制表位
      --suppress-blank-empty    抑制空输出行前的空格或制表符
  -l, --paginate                将输出通过 'pr' 分页

  -r, --recursive                 递归比较找到的任何子目录
      --no-dereference            不跟随符号链接
  -N, --new-file                  将不存在的文件视为空文件
      --unidirectional-new-file   将不存在的第一个文件视为空文件
      --ignore-file-name-case     比较文件名时忽略大小写
      --no-ignore-file-name-case  比较文件名时考虑大小写
  -x, --exclude=PAT               排除匹配 PAT 的文件
  -X, --exclude-from=文件         排除匹配文件中任何模式的文件
  -S, --starting-file=文件        比较目录时从文件开始
      --from-file=FILE1           将 FILE1 与所有操作数比较；
                                    FILE1 可以是目录
      --to-file=FILE2             将所有操作数与 FILE2 比较；
                                    FILE2 可以是目录

  -i, --ignore-case               忽略文件内容中的大小写差异
  -E, --ignore-tab-expansion      忽略因制表符展开导致的更改
  -Z, --ignore-trailing-space     忽略行尾空白
  -b, --ignore-space-change       忽略空白量的变化
  -w, --ignore-all-space          忽略所有空白
  -B, --ignore-blank-lines        忽略全为空行的更改
  -I, --ignore-matching-lines=RE  忽略所有行匹配 RE 的更改

  -a, --text                      将所有文件视为文本
      --strip-trailing-cr         去除结尾的回车`,
    examples: [
      { description: "比较两个文件的差异", code: "diff file_v1.txt file_v2.txt" },
      { description: "以统一的 diff 格式显示差异", code: "diff -u original.py modified.py" },
      { description: "递归比较两个目录的差异", code: "diff -r dir_a/ dir_b/" },
      { description: "忽略空格差异进行比较", code: "diff -w config_old.ini config_new.ini" },
      { description: "查看帮助文档", code: "diff --help" }
    ],
    relatedCommands: ["cmp", "vimdiff", "patch", "sdiff"]
  },
  {
    name: "tee",
    categoryId: "text",
    syntax: "tee [选项] 文件...",
    simpleExplain: "将输出同时写入文件和标准输出",
    detailExplain: "从标准输入读取数据，同时写入文件和标准输出，实现输出分流。常用参数：-a 追加而非覆盖文件，-i 忽略中断信号。典型用法：command | tee output.log 既在屏幕显示又保存到文件，常用于记录命令输出同时观察执行过程。",
    helpOutput: `用法: tee [选项]... [文件]...
将标准输入复制到每个文件，同时也复制到标准输出。

  -a, --append              追加到给定文件，不覆盖
  -i, --ignore-interrupts   忽略中断信号
  -p                        以更适合管道的 MODE 操作。
      --output-error[=MODE]   设置写入错误时的行为。见下文 MODE
      --help        显示此帮助并退出
      --version     输出版本信息并退出

MODE 决定输出写入错误时的行为：
  warn           诊断写入任何输出的错误
  warn-nopipe    诊断写入非管道输出的错误
  exit           写入任何输出出错时退出
  exit-nopipe    写入非管道输出出错时退出
-p 选项的默认 MODE 是 'warn-nopipe'。
使用 "nopipe" MODE 时，如果所有输出都变为断开的管道则立即退出。
未指定 --output-error 时的默认操作是，
写入管道出错时立即退出，并诊断写入
非管道输出的错误。

GNU coreutils 在线帮助：<https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/tee>
或本地可用通过：info '(coreutils) tee invocation'
`,
    examples: [
      { description: "保存输出到文件的同时显示在屏幕", code: "echo \"important log\" | tee logfile.txt", output: "important log" },
      { description: "追加写入而非覆盖", code: "ping google.com | tee -a ping_result.txt" },
      { description: "同时写入多个文件", code: "cat data.csv | tee backup1.csv backup2.csv | sort" },
      { description: "配合 sudo 写入需要权限的文件", code: "echo \"setting\" | sudo tee /etc/config.d/new.conf" },
      { description: "查看帮助文档", code: "tee --help" }
    ],
    relatedCommands: ["cat", "redirect", "pipe", "script"]
  },
  {
    name: "less",
    categoryId: "text",
    syntax: "less [选项] 文件...",
    simpleExplain: "分页查看文件内容",
    detailExplain: "分页查看文件内容，支持前后翻页和搜索。相比 more 功能更强，查看时不会一次性加载整个文件，适合大文件。常用快捷键：空格/PageDown 向下翻页，b/PageUp 向上翻页，/ 向下搜索，? 向上搜索，q 退出。常用于查看日志、配置文件等长文本。",
    helpOutput: `
                   lleessss  命命令令摘摘要要

      标记有 * 的命令前可以加数字 _N。
      括号中的说明表示给定 _N 时的行为。
      带脱字符的键表示 Ctrl 键；因此 ^K 即 ctrl-K。

  h  H                 显示此帮助。
  q  :q  Q  :Q  ZZ     退出。
 ---------------------------------------------------------------------------

                           移移动动

  e  ^E  j  ^N  CR  *  前进一行   （或 _N 行）。
  y  ^Y  k  ^K  ^P  *  后退一行   （或 _N 行）。
  f  ^F  ^V  SPACE  *  前进一个窗口（或 _N 行）。
  b  ^B  ESC-v      *  后退一个窗口（或 _N 行）。
  z                 *  前进一个窗口（并将窗口设为 _N）。
  w                 *  后退一个窗口（并将窗口设为 _N）。
  ESC-SPACE         *  前进一个窗口，但在文件末尾不停。
  d  ^D             *  前进半个窗口（并将半窗口设为 _N）。
  u  ^U             *  后退半个窗口（并将半窗口设为 _N）。
  ESC-)  RightArrow *  右移半个屏幕宽度（或 _N 个位置）。
  ESC-(  LeftArrow  *  左移半个屏幕宽度（或 _N 个位置）。
  ESC-}  ^RightArrow   右移至显示的最后一列。
  ESC-{  ^LeftArrow    左移至第一列。
  F                    持续前进；类似 "tail -f"。
  ESC-F                类似 F 但在找到搜索模式时停止。
  r  ^R  ^L            重绘屏幕。
  R                    重绘屏幕，丢弃缓冲的输入。
        ---------------------------------------------------
        默认"窗口"为屏幕高度。
        默认"半窗口"为屏幕高度的一半。
 ---------------------------------------------------------------------------

                          搜搜索索

  /_p_a_t_t_e_r_n          *  向前搜索第（_N 个）匹配行。
  ?_p_a_t_t_e_r_n          *  向后搜索第（_N 个）匹配行。
  n                 *  重复上次搜索（第 _N 次出现）。
  N                 *  反向重复上次搜索。
  ESC-n             *  重复上次搜索，跨文件。
  ESC-N             *  反向重复上次搜索，跨文件。
  ESC-u                撤销（切换）搜索高亮。
  ESC-U                清除搜索高亮。
  &_p_a_t_t_e_r_n          *  仅显示匹配行。
        ---------------------------------------------------
        搜索模式可以以下列一个或多个前缀开头：
        ^N 或 !  搜索不匹配的行。
        ^E 或 *  搜索多个文件（穿过文件末尾）。
        ^F 或 @  从第一个文件开始搜索（对于 /）或从最后一个文件开始（对于 ?）。
        ^K       高亮匹配但不移动（保持位置）。
        ^R       不使用正则表达式。
        ^W       未找到匹配时环绕搜索。
 -----------------------------------------------------
`,
    examples: [
      { description: "分页浏览大日志文件", code: "less /var/log/syslog" },
      { description: "打开时直接跳到文件末尾", code: "less +G huge_log.txt" },
      { description: "显示行号", code: "less -N source_code.c" },
      { description: "打开后直接搜索关键词", code: "less +/error app.log" },
      { description: "查看帮助文档", code: "less --help" }
    ],
    relatedCommands: ["more", "cat", "head", "tail"]
  },
  {
    name: "more",
    categoryId: "text",
    syntax: "more [选项] 文件...",
    simpleExplain: "简单的分页查看器",
    detailExplain: "分页查看文件内容，按空格向下翻页。功能较简单，只能向下翻页，不能向上翻页或搜索。已被功能更强大的 less 基本取代。常用快捷键：空格向下翻页，Enter 向下滚动一行，q 退出。适用于简单分页查看场景。",
    helpOutput: `
用法:
 more [选项] <文件>...

在终端中显示文件内容。

选项:
 -d, --silent          显示帮助而非响铃
 -f, --logical         统计逻辑行数而非屏幕行数
 -l, --no-pause        取消换页后的暂停
 -c, --print-over      不滚动，显示文本并清除行尾
 -p, --clean-print     不滚动，清屏并显示文本
 -e, --exit-on-eof     在文件结束时退出
 -s, --squeeze         将多个连续空行压缩为一行
 -u, --plain           取消下划线和粗体
 -n, --lines <数字>    每屏显示的行数
 -<数字>               同 --lines
 +<数字>               从指定行号开始显示文件
 +/<模式>              从匹配模式处开始显示文件

 -h, --help            显示此帮助
 -V, --version         显示版本

更多详情见 more(1)。
`,
    examples: [
      { description: "分页显示文件内容", code: "more readme.txt" },
      { description: "每屏显示 15 行", code: "more -15 long_text.txt" },
      { description: "从第 20 行开始显示", code: "more +20 document.txt" },
      { description: "清除屏幕后显示", code: "more -c file.txt" },
      { description: "查看帮助文档", code: "more --help" }
    ],
    relatedCommands: ["less", "cat", "pg", "most"]
  },
  {
    name: "paste",
    categoryId: "text",
    syntax: "paste [选项] 文件...",
    simpleExplain: "按行合并多个文件",
    detailExplain: "将多个文件的对应行横向合并，默认以制表符分隔。常用参数：-d 指定分隔符，-s 将每个文件的内容合并为一行（横向变纵向）。典型用法：paste file1 file2 将两个文件按行并排显示，常用于合并多列数据生成表格。",
    helpOutput: `用法: paste [选项]... [文件]...
将每个文件中顺序对应的行合并，以 TAB 分隔，写入标准输出。

如果没有指定 FILE，或 FILE 为 -，则读取标准输入。

长选项的强制参数对短选项同样强制。
  -d, --delimiters=LIST   使用 LIST 中的字符替代 TAB
  -s, --serial            一次粘贴一个文件而非并行粘贴
  -z, --zero-terminated    行分隔符为 NUL 而非换行符
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/paste>
或本地可通过以下命令查看: info '(coreutils) paste invocation'
`,
    examples: [
      { description: "将两个文件按行合并", code: "paste names.txt ages.txt", output: "Alice\t25\nBob\t30\nCharlie\t28" },
      { description: "用逗号作为分隔符合并", code: "paste -d',' ids.txt cities.txt" },
      { description: "合并多个文件", code: "paste -d'|' col1.txt col2.txt col3.txt" },
      { description: "将标准输入的行转为单行", code: "ls | paste -d' ' -s" },
      { description: "查看帮助文档", code: "paste --help" }
    ],
    relatedCommands: ["cut", "join", "pr", "awk"]
  },
  {
    name: "fmt",
    categoryId: "text",
    syntax: "fmt [选项] 文件...",
    simpleExplain: "格式化文本段落",
    detailExplain: "重新格式化文本段落，使每行宽度大致一致。默认目标宽度为 75 个字符。常用参数：-w N 设置行宽为 N，-s 仅拆分长行不合并短行，-u 统一空格（单词间一个空格、句间两个空格）。常用于整理格式混乱的纯文本文件，如 README、邮件正文。",
    helpOutput: `用法: fmt [-WIDTH] [选项]... [文件]...
重新格式化文件中的每个段落，写入标准输出。
选项 -WIDTH 是 --width=DIGITS 的简写形式。

如果没有指定 FILE，或 FILE 为 -，则读取标准输入。

长选项的强制参数对短选项同样强制。
  -c, --crown-margin        保留前两行的缩进
  -p, --prefix=STRING       仅重新格式化以 STRING 开头的行，
                              并将前缀重新附加到格式化后的行
  -s, --split-only          拆分长行，但不重新填充
  -t, --tagged-paragraph    第一行的缩进与第二行不同
  -u, --uniform-spacing     单词间一个空格，句子后两个空格
  -w, --width=WIDTH         最大行宽（默认 75 列）
  -g, --goal=WIDTH          目标宽度（默认为 width 的 93%）
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/fmt>
或本地可通过以下命令查看: info '(coreutils) fmt invocation'
`,
    examples: [
      { description: "格式化段落（默认宽度 75 字符）", code: "fmt paragraph.txt" },
      { description: "设置每行宽度为 50 字符", code: "fmt -w 50 long_line.txt" },
      { description: "缩进每行 4 个空格", code: "fmt -p '    ' indented.txt" },
      { description: "合并短行并均匀分割", code: "fmt -s short_lines.txt" },
      { description: "查看帮助文档", code: "fmt --help" }
    ],
    relatedCommands: ["fold", "par", "pr", "nl"]
  },
  {
    name: "nl",
    categoryId: "text",
    syntax: "nl [选项] 文件...",
    simpleExplain: "为文本行添加行号",
    detailExplain: "为文件每行添加行号并输出。比 cat -n 提供更多控制选项。常用参数：-b 指定编号方式（a 全部编号、t 非空行编号、n 不编号），-n 设置编号格式（ln 左对齐、rn 右对齐、rz 右对齐补零），-w 设置编号字段宽度，-s 设置编号与内容分隔符。常用于生成带行号的代码或文档。",
    helpOutput: `用法: nl [选项]... [文件]...
将每个文件添加行号后写入标准输出。

如果没有指定 FILE，或 FILE 为 -，则读取标准输入。

长选项的强制参数对短选项同样强制。
  -b, --body-numbering=STYLE      使用 STYLE 为正文行编号
  -d, --section-delimiter=CC      使用 CC 作为逻辑页分隔符
  -f, --footer-numbering=STYLE    使用 STYLE 为页脚行编号
  -h, --header-numbering=STYLE    使用 STYLE 为页眉行编号
  -i, --line-increment=NUMBER     每行的行号增量
  -l, --join-blank-lines=NUMBER   将 NUMBER 个空行视为一行
  -n, --number-format=FORMAT      按照 FORMAT 插入行号
  -p, --no-renumber               不为每个分节重置行号
  -s, --number-separator=STRING   在行号后添加 STRING
  -v, --starting-line-number=NUMBER  每个分节的起始行号
  -w, --number-width=NUMBER       行号占用的列数
      --help        显示此帮助并退出
      --version     输出版本信息并退出

默认选项为: -bt -d'\\:' -fn -hn -i1 -l1 -n'rn' -s<TAB> -v1 -w6

CC 是用于构造逻辑页分隔符的两个分隔字符；
省略第二个字符时表示 ':'。作为 GNU 扩展，可以指定
多于两个字符，指定空字符串（-d ''）可禁用分节匹配。

STYLE 可取以下值之一:

  a      为所有行编号
  t      仅非空行编号
  n      不编号
  pBRE   仅对匹配基本正则表达式 BRE 的行编号

FORMAT 可取以下值之一:

  ln     左对齐，无前导零
  rn     右对齐，无前导零
  rz     右对齐，有前导零


GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/nl>
或本地可通过以下命令查看: info '(coreutils) nl invocation'
`,
    examples: [
      { description: "给文件添加行号", code: "nl source.py" },
      { description: "自定义行号格式", code: "nl -nrz -w3 data.txt" },
      { description: "行号从 10 开始，每次加 5", code: "nl -v10 -i5 list.txt" },
      { description: "不给空行编号", code: "nl -bt mixed.txt" },
      { description: "查看帮助文档", code: "nl --help" }
    ],
    relatedCommands: ["cat", "wc", "pr", "fmt"]
  },
  {
    name: "tac",
    categoryId: "text",
    syntax: "tac [选项] 文件...",
    simpleExplain: "倒序显示文件内容",
    detailExplain: "反向输出文件内容，从最后一行到第一行（cat 反拼）。常用于查看日志时将最新内容显示在最上方。常用参数：-s 指定分隔符（默认为换行符），-r 将分隔符作为正则表达式处理。适合需要逆序查看文件内容的场景。",
    helpOutput: `用法: tac [选项]... [文件]...
将每个文件按行逆序写入标准输出。

如果没有指定 FILE，或 FILE 为 -，则读取标准输入。

长选项的强制参数对短选项同样强制。
  -b, --before             将分隔符附加在前面而非后面
  -r, --regex              将分隔符解释为正则表达式
  -s, --separator=STRING   使用 STRING 替代换行符作为分隔符
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/tac>
或本地可通过以下命令查看: info '(coreutils) tac invocation'
`,
    examples: [
      { description: "倒序显示文件内容", code: "tac access.log" },
      { description: "倒序显示并用分隔符连接", code: "tac -s ',' csv_data.txt" },
      { description: "查看帮助文档", code: "tac --help" }
    ],
    relatedCommands: ["cat", "tail", "rev", "sort -r"]
  },
  {
    name: "rev",
    categoryId: "text",
    syntax: "rev [选项] 文件...",
    simpleExplain: "反转每行中的字符顺序",
    detailExplain: "反转每行中字符的顺序，逐行处理。例如 hello 变为 olleh，但行序不变。从 stdin 读取、输出到 stdout。常用于简单的字符反转需求，如密码学练习、文本处理中的字符串变换等场景。",
    helpOutput: `用法: rev [选项] [文件 ...]

按字符逆序每行。

选项:
 -h, --help     显示此帮助
 -V, --version  显示版本

更多详情见 rev(1)。
`,
    examples: [
      { description: "反转每行中的字符顺序", code: "echo \"hello world\" | rev", output: "dlrow olleh" },
      { description: "反转文件中每一行", code: "rev palindrome_test.txt" },
      { description: "检查是否为回文字符串", code: "echo \"level\" | rev", output: "level" },
      { description: "查看帮助文档", code: "rev --help" }
    ],
    relatedCommands: ["tac", "tr", "sed", "perl"]
  },
  {
    name: "rg",
    categoryId: "text",
    syntax: "rg [选项] 模式 [文件]",
    simpleExplain: "高速递归搜索工具（ripgrep）",
    detailExplain: "ripgrep，用 Rust 编写的高速文本搜索工具。默认递归搜索当前目录，自动遵循 .gitignore 规则忽略文件，速度优于 grep。常用参数：-i 忽略大小写，-n 显示行号，-l 仅显示文件名，-t 按文件类型过滤，-e 使用正则，-F 固定字符串。是现代代码库检索的首选工具。",
    helpOutput: `ripgrep 14.1.0
Andrew Gallant <jamslam@gmail.com>

ripgrep (rg) 递归搜索当前目录中匹配正则表达式的行。默认情况下，
ripgrep 会遵守 gitignore 规则，并自动跳过隐藏文件/目录和二进制文件。

使用 -h 获取简短说明，使用 --help 获取更多详情。

项目主页: https://github.com/BurntSushi/ripgrep

用法:
    rg [选项] PATTERN [PATH ...]
    rg [选项] -e PATTERN ... [PATH ...]
    rg [选项] -f PATTERNFILE ... [PATH ...]
    rg [选项] --files [PATH ...]
    rg [选项] --type-list
    command | rg [选项] PATTERN
    rg [选项] --help
    rg [选项] --version

位置参数:
    <PATTERN>
        用于搜索的正则表达式。要匹配以连字符开头的模式，
        请使用 -e/--regexp 标志。

        例如，要搜索字面量 '-foo'，可以使用此标志:

            rg -e -foo

        你也可以使用特殊的 '--' 分隔符表示不再提供更多
        标志。即以下命令与上面的等价:

            rg -- -foo

    <PATH>...
        要搜索的文件或目录。目录会被递归搜索。
        命令行上指定的文件路径会覆盖 glob 和忽略规则。

输入选项:
    -e PATTERN, --regexp=PATTERN
        要搜索的模式。此选项可多次提供，所有给出的模式都会被搜索，
        加上 -f/--file 提供的任何模式。匹配至少一个所提供模式的行
        会被打印。此标志也可用于搜索以连字符开头的模式。

        例如，要搜索字面量 -foo:

            rg -e -foo

        你也可以使用特殊的 -- 分隔符表示不再提供更多
        标志。即以下命令与上面的等价:

            rg -- -foo

        当使用 -f/--file 或 -e/--regexp 时，ripgrep 会将所有
        位置参数视为要搜索的文件或目录。

    -f PATTERNFILE, --file=PATTERNFILE
        从给定文件中搜索模式，每行一个模式。当此标志多次使用或
        与 -e/--regexp 标志组合使用时，所有提供的模式都会被搜索。
        空模式行会匹配所有输入行，换行符不计入模式的一部分。

        当且仅当一行匹配至少一个模式时，该行才会被打印。

        当 PATTERNFILE 为 - 时，从 stdin 读取模式。

        当使用 -f/--file 或 -e/--regexp 时，ripgrep 会将所有
        位置参数视为要搜索的文件或目录。

    --pre=COMMAND
        对于每个输入 PATH，此标志使 ripgrep 搜索 COMMAND PATH 的标准
        输出而非 PATH 的内容。此选项要求 COMMAND 程序是一个路径 `,
    examples: [
      { description: "在当前目录递归搜索关键词", code: "rg \"TODO\" .", output: "src/main.rs:10:// TODO: refactor this" },
      { description: "只搜索特定类型的文件", code: "rg -t py \"import os\" ." },
      { description: "显示匹配行的上下文", code: "rg -C 3 \"error\" app.log" },
      { description: "只显示匹配的文件名", code: "rg -l \"function\" src/" },
      { description: "查看帮助文档", code: "rg --help" }
    ],
    relatedCommands: ["grep", "ag", "find", "sed"]
  },
  {
    name: "ag",
    categoryId: "text",
    syntax: "ag [选项] 模式 [路径]",
    simpleExplain: "快速的代码搜索工具",
    detailExplain: "The Silver Searcher，专为代码库搜索优化的高速搜索工具。自动忽略 .gitignore 中的文件和版本控制目录，速度比 grep 快。常用参数：-i 忽略大小写，-l 仅显示文件名，-G 按文件名过滤，--ignore 添加忽略规则。适合在大型代码库中快速定位代码。",
    helpOutput: `用法: ag [文件类型] [选项] PATTERN [路径]

The Silver Searcher。一个类似 ack 但更快的代码搜索工具。

选项:
  -i, --ignore-case           忽略大小写
  -v, --invert-match          反向匹配
  -w, --word-regexp           全词匹配
  -Q, --literal               按字面量搜索（非正则）
  -l, --files-with-matches    只输出含匹配的文件名
  -L, --files-without-matches 只输出不含匹配的文件名
  -c, --count                 显示每个文件的匹配数
  -r, --recurse               递归搜索（默认）
  -n, --norecurse             不递归
  -g PATTERN                  按文件名搜索
  -G PATTERN                  限制搜索文件名匹配的文件
      --hidden                搜索隐藏文件
      --ignore PATTERN        忽略匹配的文件
  -A NUM, --after NUM         显示匹配行后 NUM 行
  -B NUM, --before NUM        显示匹配行前 NUM 行
  -C NUM, --context NUM       显示匹配行前后各 NUM 行`,
    examples: [
      { description: "在代码中搜索函数定义", code: "ag \"def handle_request\" ." },
      { description: "忽略大小写搜索", code: "ag -i \"error\" /var/log/" },
      { description: "只搜索Python文件", code: "ag -G \"\\.py$\" \"import\" ." },
      { description: "显示匹配行号和上下文", code: "ag -C 2 \"class User\" src/" },
      { description: "查看帮助文档", code: "ag --help" }
    ],
    relatedCommands: ["rg", "grep", "find", "ack"]
  },
  {
    name: "jq",
    categoryId: "text",
    syntax: "jq [过滤器] [文件]",
    simpleExplain: "命令行JSON数据处理工具",
    detailExplain: "命令行 JSON 处理工具，支持查询、过滤、转换和格式化 JSON 数据。使用类 jq 语法访问字段和数组。常用方式：jq '.' 格式化输出，jq '.key' 提取字段，jq '.[]' 遍历数组，jq -r 输出原始字符串，jq -c 紧凑输出。常用于处理 API 响应、配置文件等 JSON 数据。",
    helpOutput: `jq - 命令行 JSON 处理器 [版本 1.7]

用法:	jq [选项] <jq 过滤器> [文件...]
	jq [选项] --args <jq 过滤器> [字符串...]
	jq [选项] --jsonargs <jq 过滤器> [JSON_TEXTS...]

jq 是一个用于处理 JSON 输入的工具，将给定的过滤器应用于
其 JSON 文本输入，并将过滤器的结果作为 JSON 输出到标准输出。

最简单的过滤器是 .，它将 jq 的输入原样复制到输出，
仅格式化有所不同。更多高级过滤器请参阅
jq(1) 手册页（"man jq"）和/或 https://jqlang.github.io/jq/。

示例:

	$ echo '{"foo": 0}' | jq .
	{
	  "foo": 0
	}

命令选项:
  -n, --null-input          使用 \`null\` 作为唯一的输入值；
  -R, --raw-input           将每行作为字符串而非 JSON 读取；
  -s, --slurp               将所有输入读入一个数组并作为
                            唯一的输入值；
  -c, --compact-output      紧凑输出而非美化输出；
  -r, --raw-output          输出字符串不带转义和引号；
      --raw-output0         隐含 -r 并在每个输出后输出 NUL；
  -j, --join-output         隐含 -r 且每个输出后不换行；
  -a, --ascii-output        仅使用 ASCII 字符通过转义序列
                            输出字符串；
  -S, --sort-keys           输出时对每个对象的键排序；
  -C, --color-output        彩色 JSON 输出；
  -M, --monochrome-output   禁用彩色输出；
      --tab                 使用制表符缩进；
      --indent n            使用 n 个空格缩进（最多 7 个空格）；
      --unbuffered          每次输出后刷新输出流；
      --stream              以流式方式解析输入值；
      --stream-errors       隐含 --stream 并将解析错误报告为
                            数组；
      --seq                 将输入/输出解析为 application/json-seq；
  -f, --from-file file      从文件加载过滤器；
  -L directory              从目录搜索模块；
      --arg name value      将 $name 设为字符串值；
      --argjson name value  将 $name 设为 JSON 值；
      --slurpfile name file 将 $name 设为从文件读取的 JSON 值数组；
      --rawfile name file   将 $name 设为文件的字符串内容；
      --args                将剩余参数作为位置字符串值消费；
      --jsonargs            将剩余参数作为位置 JSON 值消费；
  -e, --exit-status         根据输出设置退出状态码；
  -V, --version             显示版本；
  --build-configuration     显示 jq 的构建配置；
  -h, --help                显示帮助；
  --                        终止参数处理；

命名参数也可通过 $ARGS.named[] 访问，而
位置参数可通过 $ARGS.positional[] 访问。
`,
    examples: [
      { description: "提取JSON中的某个字段", code: "echo '{\"name\":\"Tom\",\"age\":25}' | jq '.name'", output: "\"Tom\"" },
      { description: "格式化压缩的JSON", code: "curl -s api.example.com/data | jq ." },
      { description: "提取数组中的所有元素", code: "jq '.users[].name' users.json" },
      { description: "筛选满足条件的对象", code: "jq '.[] | select(.age > 18)' people.json" },
      { description: "查看帮助文档", code: "jq --help" }
    ],
    relatedCommands: ["grep", "sed", "awk", "python"]
  },
  {
    name: "column",
    categoryId: "text",
    syntax: "column [选项] [文件]",
    simpleExplain: "将文本按列对齐显示",
    detailExplain: "将输入文本按列对齐排列成表格形式。常用参数：-t 根据分隔符自动判断列数并创建表格，-s 指定列分隔符（默认为空格），-c 设置输出最大宽度，-n 禁用将相邻分隔符合并。适合将杂乱数据整理成易读的表格输出。",
    helpOutput: `
用法:
 column [选项] [<文件>...]

将列表按列排列。

选项:
 -t, --table                      创建表格
 -n, --table-name <名称>          JSON 输出的表名
 -O, --table-order <列>           指定输出列的顺序
 -C, --table-column <属性>        定义列
 -N, --table-columns <名称>       逗号分隔的列名
 -l, --table-columns-limit <数字>  输入列的最大数量
 -E, --table-noextreme <列>       不将列中的长文本计入列宽
 -d, --table-noheadings           不打印表头
 -m, --table-maxout               填充所有可用空间
 -e, --table-header-repeat        每页重复表头
 -H, --table-hide <列>            不打印这些列
 -R, --table-right <列>           这些列中的文本右对齐
 -T, --table-truncate <列>        必要时截断这些列中的文本
 -W, --table-wrap <列>            必要时换行这些列中的文本
 -L, --keep-empty-lines           不忽略空行
 -J, --json                       表格使用 JSON 输出格式

 -r, --tree <列>                  表格中使用树状输出的列
 -i, --tree-id <列>               指定父子关系的行 ID
 -p, --tree-parent <列>           指定父子关系的父列

 -c, --output-width <宽度>        输出宽度（字符数）
 -o, --output-separator <字符串>  表格输出的列分隔符（默认为两个空格）
 -s, --separator <字符串>         可能的表格分隔符
 -x, --fillrows                   先填充行再填充列

 -h, --help                       显示此帮助
 -V, --version                    显示版本

更多详情见 column(1)。
`,
    examples: [
      { description: "按冒号分隔并整齐显示", code: "column -t -s ':' /etc/passwd" },
      { description: "将文本排成多列显示", code: "seq 1 10 | column" },
      { description: "指定输出宽度为80字符", code: "column -c 80 filelist.txt" },
      { description: "按制表符分隔对齐", code: "column -t -s $'\\t' data.tsv" },
      { description: "查看帮助文档", code: "column --help" }
    ],
    relatedCommands: ["sort", "paste", "awk", "pr"]
  },
  {
    name: "expand",
    categoryId: "text",
    syntax: "expand [文件]",
    simpleExplain: "将Tab字符转换为空格",
    detailExplain: "将文件中的 Tab 字符转换为空格，保证在不同环境下显示一致。默认每个 Tab 转换为 8 个空格，可用 -t 参数指定空格数或自定义制表位位置。常用于代码格式化或避免 Tab 宽度差异导致的对齐问题。",
    helpOutput: `用法: expand [选项]... [文件]...
将每个文件中的制表符转换为空格，写入标准输出。

如果没有指定 FILE，或 FILE 为 -，则读取标准输入。

长选项的强制参数对短选项同样强制。
  -i, --initial    不转换非空白字符后的制表符
  -t, --tabs=N     制表符间距为 N 个字符，而非 8
  -t, --tabs=LIST  使用逗号分隔的制表位列表。
                     最后指定的位置可以加 '/' 前缀
                     来指定最后一个显式制表位之后使用的制表符大小。
                     也可以使用 '+' 前缀使剩余制表位相对于
                     最后指定的制表位而非第一列对齐
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/expand>
或本地可通过以下命令查看: info '(coreutils) expand invocation'
`,
    examples: [
      { description: "将Tab转换为空格", code: "expand code.py" },
      { description: "指定Tab宽度为4个空格", code: "expand -t 4 code.py" },
      { description: "转换后保存到新文件", code: "expand -t 2 indent.ts > indent_spaces.ts" },
      { description: "只转换行首的Tab", code: "expand -i Makefile" },
      { description: "查看帮助文档", code: "expand --help" }
    ],
    relatedCommands: ["unexpand", "tr", "sed", "cut"]
  },
  {
    name: "unexpand",
    categoryId: "text",
    syntax: "unexpand [文件]",
    simpleExplain: "将空格转换为Tab字符",
    detailExplain: "将连续的空格转换回 Tab 字符，是 expand 的反向操作。默认只转换行首的空格，-a 参数表示转换所有位置的空格。常用于压缩文件体积或恢复使用 Tab 缩进的格式。",
    helpOutput: `用法: unexpand [选项]... [文件]...
将每个文件中的空格转换为制表符，写入标准输出。

如果没有指定 FILE，或 FILE 为 -，则读取标准输入。

长选项的强制参数对短选项同样强制。
  -a, --all        转换所有空格，而非仅行首空格
      --first-only  仅转换行首的空白序列（覆盖 -a）
  -t, --tabs=N     制表符间距为 N 个字符而非 8（启用 -a）
  -t, --tabs=LIST  使用逗号分隔的制表位列表。
                     最后指定的位置可以加 '/' 前缀
                     来指定最后一个显式制表位之后使用的制表符大小。
                     也可以使用 '+' 前缀使剩余制表位相对于
                     最后指定的制表位而非第一列对齐
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/unexpand>
或本地可通过以下命令查看: info '(coreutils) unexpand invocation'
`,
    examples: [
      { description: "将空格转换为Tab", code: "unexpand code.py" },
      { description: "指定Tab宽度为4", code: "unexpand -t 4 code.py" },
      { description: "只转换行首的空格", code: "unexpand --first-only code.py" },
      { description: "转换后保存到新文件", code: "unexpand -t 2 spaces.txt > tabs.txt" },
      { description: "查看帮助文档", code: "unexpand --help" }
    ],
    relatedCommands: ["expand", "tr", "sed", "cut"]
  },
  {
    name: "shuf",
    categoryId: "text",
    syntax: "shuf [选项] [文件]",
    simpleExplain: "随机打乱输入行的顺序",
    detailExplain: "将输入的每一行随机打乱顺序后输出。支持从文件或标准输入读取，常用参数：-n 只输出指定数量的随机行，-r 允许重复抽样，-i 从指定数字范围生成随机数，-e 直接处理命令行参数。常用于随机抽样、抽奖或生成随机序列。",
    helpOutput: `用法: shuf [选项]... [文件]
  或:  shuf -e [选项]... [参数]...
  或:  shuf -i LO-HI [选项]...
将输入行的随机排列写入标准输出。

如果没有指定 FILE，或 FILE 为 -，则读取标准输入。

长选项的强制参数对短选项同样强制。
  -e, --echo                将每个 ARG 作为输入行
  -i, --input-range=LO-HI   将 LO 到 HI 的每个数字作为输入行
  -n, --head-count=COUNT    最多输出 COUNT 行
  -o, --output=FILE         将结果写入 FILE 而非标准输出
      --random-source=FILE  从 FILE 获取随机字节
  -r, --repeat              输出行可以重复
  -z, --zero-terminated     行分隔符为 NUL 而非换行符
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/shuf>
或本地可通过以下命令查看: info '(coreutils) shuf invocation'
`,
    examples: [
      { description: "随机打乱文件中的行", code: "shuf names.txt" },
      { description: "随机抽取3行", code: "shuf -n 3 names.txt" },
      { description: "生成1到10的随机数", code: "shuf -i 1-10 -n 1", output: "7" },
      { description: "从命令行参数中随机选一个", code: "shuf -e apple banana cherry -n 1", output: "banana" },
      { description: "查看帮助文档", code: "shuf --help" }
    ],
    relatedCommands: ["sort", "head", "tail", "seq"]
  },
  {
    name: "comm",
    categoryId: "text",
    syntax: "comm [选项] 文件1 文件2",
    simpleExplain: "比较两个已排序文件的异同",
    detailExplain: "逐行比较两个已排序的文件，输出三列：仅文件1有的行、仅文件2有的行、两文件共有的行。参数 -1、-2、-3 分别抑制对应列的输出，可用于求交集或差集。前提是两个输入文件必须先排序。",
    helpOutput: `用法: comm [选项]... FILE1 FILE2
逐行比较已排序的文件 FILE1 和 FILE2。

当 FILE1 或 FILE2（非两者）为 - 时，读取标准输入。

不带选项时，产生三列输出。第一列包含 FILE1 独有的行，
第二列包含 FILE2 独有的行，第三列包含两个文件共有的行。

  -1                      抑制第 1 列（FILE1 独有的行）
  -2                      抑制第 2 列（FILE2 独有的行）
  -3                      抑制第 3 列（两个文件共有的行）

      --check-order       检查输入是否已正确排序，
                            即使所有输入行都能配对
      --nocheck-order     不检查输入是否已正确排序
      --output-delimiter=STR  用 STR 分隔列
      --total             输出汇总
  -z, --zero-terminated   行分隔符为 NUL 而非换行符
      --help        显示此帮助并退出
      --version     输出版本信息并退出

注意，比较遵循 'LC_COLLATE' 指定的规则。

示例:
  comm -12 file1 file2  仅打印 file1 和 file2 中都存在的行。
  comm -3 file1 file2  打印 file1 中不在 file2 中的行，反之亦然。

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/comm>
或本地可通过以下命令查看: info '(coreutils) comm invocation'
`,
    examples: [
      { description: "比较两个文件的异同", code: "comm file1.txt file2.txt" },
      { description: "只显示两个文件共有的行", code: "comm -12 file1.txt file2.txt" },
      { description: "只显示文件1独有的行", code: "comm -23 file1.txt file2.txt" },
      { description: "只显示文件2独有的行", code: "comm -13 file1.txt file2.txt" },
      { description: "查看帮助文档", code: "comm --help" }
    ],
    relatedCommands: ["diff", "sort", "join", "uniq"]
  },
  {
    name: "join",
    categoryId: "text",
    syntax: "join [选项] 文件1 文件2",
    simpleExplain: "按共同字段合并两个文件",
    detailExplain: "根据两个文件中相同的字段（默认第一列）将行合并，类似数据库的 JOIN 操作。要求两个文件已按该字段排序。常用参数：-1 和 -2 指定各文件的连接字段，-t 设置字段分隔符，-a 显示未匹配的行，-o 自定义输出字段。",
    helpOutput: `用法: join [选项]... FILE1 FILE2
对于每对具有相同连接字段的输入行，写入一行到标准输出。
默认连接字段为第一个字段，以空白分隔。

当 FILE1 或 FILE2（非两者）为 - 时，读取标准输入。

  -a FILENUM             也打印文件 FILENUM 中无法配对的行，其中
                           FILENUM 为 1 或 2，对应 FILE1 或 FILE2
  -e STRING              用 STRING 替换缺失（空）的输入字段；
                           即用 '-12jo' 选项指定的缺失字段
  -i, --ignore-case      比较字段时忽略大小写差异
  -j FIELD               等同于 '-1 FIELD -2 FIELD'
  -o FORMAT              构造输出行时遵循 FORMAT
  -t CHAR                使用 CHAR 作为输入和输出字段分隔符
  -v FILENUM             类似 -a FILENUM，但抑制已连接的输出行
  -1 FIELD               在文件 1 的此 FIELD 上连接
  -2 FIELD               在文件 2 的此 FIELD 上连接
      --check-order      检查输入是否已正确排序，
                           即使所有输入行都能配对
      --nocheck-order    不检查输入是否已正确排序
      --header           将每个文件的第一行视为字段标题，
                           打印它们而不尝试配对
  -z, --zero-terminated  行分隔符为 NUL 而非换行符
      --help        显示此帮助并退出
      --version     输出版本信息并退出

除非指定 -t CHAR，否则前导空白分隔字段并被忽略，
否则字段由 CHAR 分隔。FIELD 是从 1 开始计数的字段号。
FORMAT 是一个或多个以逗号或空白分隔的规范，
每个为 'FILENUM.FIELD' 或 '0'。默认 FORMAT 输出连接字段、
FILE1 的剩余字段、FILE2 的剩余字段，全部以 CHAR 分隔。
如果 FORMAT 是关键字 'auto'，则每个文件的第一行
决定每行输出的字段数。

重要: FILE1 和 FILE2 必须按连接字段排序。
例如，如果 'join' 没有选项，使用 "sort -k 1b,1"，
或者如果 'sort' 没有选项，使用 "join -t ''"。
注意，比较遵循 'LC_COLLATE' 指定的规则。
如果输入未排序且某些行无法连接，将给出警告信息。

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/join>
或本地可通过以下命令查看: info '(coreutils) join invocation'
`,
    examples: [
      { description: "按第一列合并两个文件", code: "join names.txt scores.txt" },
      { description: "指定合并的字段列", code: "join -1 2 -2 1 file1.txt file2.txt" },
      { description: "显示未匹配的行", code: "join -a 1 names.txt scores.txt" },
      { description: "指定字段分隔符", code: "join -t ',' data1.csv data2.csv" },
      { description: "查看帮助文档", code: "join --help" }
    ],
    relatedCommands: ["comm", "sort", "paste", "awk"]
  },
  {
    name: "split",
    categoryId: "text",
    syntax: "split [选项] 文件 [前缀]",
    simpleExplain: "将大文件分割成多个小文件",
    detailExplain: "将大文件按大小或行数拆分成多个小文件。默认每 1000 行拆分一次，输出文件以 xaa、xab... 命名。常用参数：-l 按行数拆分，-b 按字节数拆分，-d 使用数字后缀，-a 指定后缀长度。常用于分割日志或大文件便于传输。",
    helpOutput: `用法: split [选项]... [文件 [前缀]]
将文件分割为 PREFIXaa, PREFIXab, ... 输出；
默认大小为 1000 行，默认前缀为 'x'。

如果没有指定 FILE，或 FILE 为 -，则读取标准输入。

长选项的强制参数对短选项同样强制。
  -a, --suffix-length=N   生成长度为 N 的后缀（默认 2）
      --additional-suffix=SUFFIX  在文件名后追加额外的 SUFFIX
  -b, --bytes=SIZE        每个输出文件 SIZE 字节
  -C, --line-bytes=SIZE   每个输出文件最多 SIZE 字节的记录
  -d                      使用从 0 开始的数字后缀，而非字母
      --numeric-suffixes[=FROM]  同 -d，但允许设置起始值
  -x                      使用从 0 开始的十六进制后缀，而非字母
      --hex-suffixes[=FROM]  同 -x，但允许设置起始值
  -e, --elide-empty-files  使用 '-n' 时不生成空输出文件
      --filter=COMMAND    写入 shell COMMAND；文件名为 $FILE
  -l, --lines=NUMBER      每个输出文件 NUMBER 行/记录
  -n, --number=CHUNKS     生成 CHUNKS 个输出文件；见下文说明
  -t, --separator=SEP     使用 SEP 替代换行符作为记录分隔符；
                            '\\0'（零）指定 NUL 字符
  -u, --unbuffered        使用 '-n r/...' 时立即将输入复制到输出
      --verbose           在每个输出文件打开前打印诊断信息
      --help        显示此帮助并退出
      --version     输出版本信息并退出

SIZE 参数是一个整数和可选单位（例如: 10K 即 10*1024）。
单位为 K,M,G,T,P,E,Z,Y,R,Q（1024 的幂）或 KB,MB,...（1000 的幂）。
也可使用二进制前缀: KiB=K, MiB=M，等等。

CHUNKS 可以是:
  N       根据输入大小分割为 N 个文件
  K/N     输出 N 个中的第 K 个到 stdout
  l/N     分割为 N 个文件但不拆分行/记录
  l/K/N   输出 N 个中的第 K 个到 stdout，不拆分行/记录
  r/N     类似 'l' 但使用轮询分布
  r/K/N   同上但仅输出 N 个中的第 K 个到 stdout

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/split>
或本地可通过以下命令查看: info '(coreutils) split invocation'
`,
    examples: [
      { description: "按默认1000行分割文件", code: "split large_log.txt" },
      { description: "每100行分割一次", code: "split -l 100 data.txt chunk_" },
      { description: "按大小分割（每个50MB）", code: "split -b 50M bigfile.zip part_" },
      { description: "分割时使用数字后缀", code: "split -d -l 500 data.txt part_" },
      { description: "查看帮助文档", code: "split --help" }
    ],
    relatedCommands: ["csplit", "cat", "wc", "head"]
  },
  {
    name: "csplit",
    categoryId: "text",
    syntax: "csplit [选项] 文件 模式",
    simpleExplain: "按内容模式分割文件",
    detailExplain: "根据文件内容的模式（行号或正则匹配）分割文件，比 split 更灵活。可按章节、空行或特定标记拆分。常用参数：-f 指定输出文件前缀，-b 指定后缀格式，-k 保留出错时已生成的文件，/模式/ 按正则分割，{n} 重复分割 n 次。",
    helpOutput: `用法: csplit [选项]... 文件 PATTERN...
将文件按 PATTERN 分隔为 'xx00', 'xx01', ... 等片段输出，
并将每个片段的字节数输出到标准输出。

如果 FILE 为 - 则读取标准输入

长选项的强制参数对短选项同样强制。
  -b, --suffix-format=FORMAT  使用 sprintf FORMAT 替代 %02d
  -f, --prefix=PREFIX        使用 PREFIX 替代 'xx'
  -k, --keep-files           出错时不删除输出文件
      --suppress-matched     抑制匹配 PATTERN 的行
  -n, --digits=DIGITS        使用指定的数字位数而非 2
  -s, --quiet, --silent      不打印输出文件大小的计数
  -z, --elide-empty-files    抑制空输出文件
      --help        显示此帮助并退出
      --version     输出版本信息并退出

每个 PATTERN 可以是:
  INTEGER            复制到但不包含指定行号
  /REGEXP/[OFFSET]   复制到但不包含匹配行
  %REGEXP%[OFFSET]   跳到但不包含匹配行
  {INTEGER}          将前一个模式重复指定次数
  {*}                将前一个模式重复尽可能多的次数

行 OFFSET 是一个整数，可选前缀 '+' 或 '-'

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/csplit>
或本地可通过以下命令查看: info '(coreutils) csplit invocation'
`,
    examples: [
      { description: "按空行分割文件", code: "csplit file.txt /^$/" },
      { description: "按指定行号分割", code: "csplit data.txt 100 200 300" },
      { description: "按章节标题分割", code: "csplit book.txt '/^Chapter/' '{*}'" },
      { description: "保留分割后的文件（不自动删除）", code: "csplit -k log.txt '/^--/' '{*}'" },
      { description: "查看帮助文档", code: "csplit --help" }
    ],
    relatedCommands: ["split", "cat", "head", "tail"]
  },
  {
    name: "iconv",
    categoryId: "text",
    syntax: "iconv -f 编码 -t 编码 文件",
    simpleExplain: "转换文件的字符编码",
    detailExplain: "将文件从一种字符编码转换为另一种编码。常用参数：-f 指定源编码，-t 指定目标编码，-o 输出到文件，-c 忽略无法转换的字符，-l 列出所有支持的编码。常用于解决不同系统间编码不兼容导致的乱码问题，如 GBK 与 UTF-8 互转。",
    helpOutput: `用法: iconv [选项...] [文件...]
将给定文件从一种编码转换为另一种编码。

 输入/输出格式指定:
  -f, --from-code=NAME       原始文本的编码
  -t, --to-code=NAME         输出的编码

 信息:
  -l, --list                 列出所有已知的编码字符集

 输出控制:
  -c                         从输出中省略无效字符
  -o, --output=FILE          输出文件
  -s, --silent               抑制警告
      --verbose              打印进度信息

  -?, --help                 显示此帮助列表
      --usage                显示简短用法信息
  -V, --version              打印程序版本

长选项的强制或可选参数对对应的短选项同样强制或可选。

错误报告说明请见:
<https://bugs.launchpad.net/ubuntu/+source/glibc/+bugs>。
`,
    examples: [
      { description: "将GBK编码转换为UTF-8", code: "iconv -f GBK -t UTF-8 readme.txt" },
      { description: "转换后保存到新文件", code: "iconv -f GB18030 -t UTF-8 input.txt -o output.txt" },
      { description: "列出所有支持的编码", code: "iconv -l" },
      { description: "转换时忽略无法识别的字符", code: "iconv -f GBK -t UTF-8//IGNORE messy.txt" },
      { description: "查看帮助文档", code: "iconv --help" }
    ],
    relatedCommands: ["dos2unix", "unix2dos", "file", "sed"]
  },
  {
    name: "dos2unix",
    categoryId: "text",
    syntax: "dos2unix [文件]",
    simpleExplain: "将Windows换行符转为Unix格式",
    detailExplain: "将 Windows 格式的换行符 \\r\\n 转换为 Unix 格式的 \\n。常用参数：-k 保留原文件时间戳，-n 输出到新文件而不修改原文件，-q 静默模式。常用于解决在 Linux 上运行 Windows 编辑的脚本时报语法错误的问题。",
    helpOutput: `用法: dos2unix [选项] [文件 ...]
将 DOS/MAC 文本文件转换为 Unix 格式。

选项:
  -k, --keepdate       保留原文件时间戳
  -n, --newfile        写入新文件而非覆盖
  -o, --oldfile        覆盖原文件（默认）
  -q, --quiet          安静模式
  -v, --verbose        详细输出
  -c, --convmode MODE  转换模式: dos, mac, unix
  -F, --follow-symlink 跟随符号链接
  -R, --replace-charset 替换字符集
  -l, --list           列出可用编码
      --version        显示版本`,
    examples: [
      { description: "转换Windows文件为Unix格式", code: "dos2unix script.sh" },
      { description: "批量转换所有sh文件", code: "dos2unix *.sh" },
      { description: "只显示哪些文件需要转换", code: "dos2unix -i *.txt" },
      { description: "保留原文件并转换到新文件", code: "dos2unix -n input.txt output.txt" },
      { description: "查看帮助文档", code: "dos2unix --help" }
    ],
    relatedCommands: ["unix2dos", "iconv", "sed", "tr"]
  },
  {
    name: "unix2dos",
    categoryId: "text",
    syntax: "unix2dos [文件]",
    simpleExplain: "将Unix换行符转为Windows格式",
    detailExplain: "将 Unix 格式的换行符 \\n 转换为 Windows 格式的 \\r\\n，是 dos2unix 的反向操作。常用参数：-k 保留文件时间戳，-n 输出到新文件，-q 静默模式。常用于将 Linux 上的文本文件传到 Windows 环境中避免显示异常。",
    helpOutput: `用法: unix2dos [选项] [文件 ...]
将 Unix 文本文件转换为 DOS 格式。

选项:
  -k, --keepdate       保留原文件时间戳
  -n, --newfile        写入新文件而非覆盖
  -o, --oldfile        覆盖原文件（默认）
  -q, --quiet          安静模式
  -v, --verbose        详细输出
  -c, --convmode MODE  转换模式: dos, mac, unix
  -F, --follow-symlink 跟随符号链接
  -l, --list           列出可用编码
      --version        显示版本`,
    examples: [
      { description: "转换Unix文件为Windows格式", code: "unix2dos readme.txt" },
      { description: "批量转换", code: "unix2dos *.txt" },
      { description: "保留原文件并转换到新文件", code: "unix2dos -n input.txt output.txt" },
      { description: "只显示文件信息不转换", code: "unix2dos -i *.txt" },
      { description: "查看帮助文档", code: "unix2dos --help" }
    ],
    relatedCommands: ["dos2unix", "iconv", "sed", "tr"]
  },
  {
    name: "base64",
    categoryId: "text",
    syntax: "base64 [选项] [文件]",
    simpleExplain: "Base64编码或解码数据",
    detailExplain: "将二进制数据编码为纯文本格式（仅含 A-Z、a-z、0-9、+/= 字符）。常用参数：-d 解码数据，-i 忽略非字母字符，-w 指定换行宽度（0 表示不换行）。常用于在只支持文本的环境中传输二进制数据，如邮件附件、JSON 中嵌入图片、HTTP Basic 认证。",
    helpOutput: `用法: base64 [选项]... [文件]
对文件或标准输入进行 Base64 编码或解码，输出到标准输出。

如果没有指定 FILE，或 FILE 为 -，则读取标准输入。

长选项的强制参数对短选项同样强制。
  -d, --decode          解码数据
  -i, --ignore-garbage  解码时忽略非字母表字符
  -w, --wrap=COLS       在 COLS 个字符后换行（默认 76）。
                          使用 0 禁用换行
      --help        显示此帮助并退出
      --version     输出版本信息并退出

数据按照 RFC 4648 中 base64 字母表的描述进行编码。
解码时，输入除了正式 base64 字母表的字节外，还可以包含换行符。
使用 --ignore-garbage 尝试从编码流中的任何其他非字母表字节恢复。

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误请报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/base64>
或本地可通过以下命令查看: info '(coreutils) base64 invocation'
`,
    examples: [
      { description: "编码字符串", code: "echo -n \"hello\" | base64", output: "aGVsbG8=" },
      { description: "解码Base64字符串", code: "echo \"aGVsbG8=\" | base64 -d", output: "hello" },
      { description: "编码文件内容", code: "base64 image.png > image_b64.txt" },
      { description: "解码Base64文件", code: "base64 -d image_b64.txt > image.png" },
      { description: "查看帮助文档", code: "base64 --help" }
    ],
    relatedCommands: ["xxd", "od", "hexdump", "openssl"]
  },
  {
    name: "strings",
    categoryId: "text",
    syntax: "strings [选项] 文件",
    simpleExplain: "从二进制文件中提取可读字符串",
    detailExplain: "从二进制文件中提取可打印的字符串序列（默认长度至少 4 个字符）。常用参数：-n 指定最小字符串长度，-a 扫描整个文件，-t 显示字符串偏移量，-e 设置字符编码。常用于逆向工程、调试或查看编译后程序中的文本信息。",
    helpOutput: `用法: strings [option(s)] [file(s)]
 显示 [file(s)] 中的可打印字符串（默认为标准输入）
 选项如下：
  -a - --all                扫描整个文件，而不仅是数据段 [默认]
  -d --data                 只扫描文件中的数据段
  -f --print-file-name      在每个字符串前打印文件名
  -n <number>               查找并打印任何至少 <number>
    --bytes=<number>         个可显示字符的序列。（默认为 4）。
  -t --radix={o,d,x}        以 8、10 或 16 进制打印字符串位置
  -w --include-all-whitespace 将所有空白字符视为有效的字符串字符
  -o                        --radix=o 的别名
  -T --target=<BFDNAME>     指定二进制文件格式
  -e --encoding={s,S,b,l,B,L} 选择字符大小和字节序：
                            s = 7 位，S = 8 位，{b,l} = 16 位，{B,L} = 32 位
  --unicode={default|show|invalid|hex|escape|highlight}
  -U {d|s|i|x|e|h}          指定如何处理 UTF-8 编码的 unicode 字符
  -s --output-separator=<string> 用于在输出中分隔字符串的字符串。
  @<file>                   从 <file> 读取选项
  -h --help                 显示此信息
  -v -V --version           打印程序版本号
strings: 支持的目标: elf64-x86-64 elf32-i386 elf32-iamcu elf32-x86-64 pei-i386 pe-x86-64 pei-x86-64 elf64-little elf64-big elf32-little elf32-big pe-bigobj-x86-64 pe-i386 pdb srec symbolsrec verilog tekhex binary ihex plugin
报告 bug 至 <https://sourceware.org/bugzilla/>
`,
    examples: [
      { description: "从二进制文件中提取可读文本", code: "strings /usr/bin/ls" },
      { description: "只提取至少10个字符的文本", code: "strings -n 10 program.bin" },
      { description: "在二进制文件中搜索特定字符串", code: "strings app.bin | grep \"password\"" },
      { description: "提取并显示偏移地址", code: "strings -t x library.so" },
      { description: "查看帮助文档", code: "strings --help" }
    ],
    relatedCommands: ["grep", "xxd", "od", "hexdump"]
  },
  {
    name: "fold",
    categoryId: "text",
    syntax: "fold [选项] [文件]",
    simpleExplain: "将长行按指定宽度折行显示",
    detailExplain: "将超过指定宽度的行自动换行，默认每行 80 个字符。常用参数：-w 指定行宽，-b 按字节而非字符计数，-s 尽量在空格处换行避免单词被截断。常用于防止长行超出终端显示范围或适配固定宽度输出。",
    helpOutput: `用法: fold [OPTION]... [FILE]...
对每个 FILE 中的输入行进行换行，写入标准输出。

如果没有指定 FILE，或 FILE 为 -，则读取标准输入。

长选项的强制参数对短选项同样强制。
  -b, --bytes         统计字节数而非列数
  -s, --spaces        在空格处换行
  -w, --width=WIDTH   使用 WIDTH 列而非 80 列
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译 bug 至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/fold>
或本地可用: info '(coreutils) fold invocation'
`,
    examples: [
      { description: "按默认80列折叠长行", code: "fold long_text.txt" },
      { description: "指定每行40个字符", code: "fold -w 40 readme.txt" },
      { description: "按字节宽度折叠（不截断多字节字符）", code: "fold -s -w 60 article.txt" },
      { description: "在空格处折行", code: "fold -s -w 50 paragraph.txt" },
      { description: "查看帮助文档", code: "fold --help" }
    ],
    relatedCommands: ["fmt", "pr", "column", "cut"]
  },

  // ==================== 进程管理 ====================
  {
    name: "ps",
    categoryId: "process",
    syntax: "ps [选项]",
    simpleExplain: "查看当前运行的进程列表",
    detailExplain: "显示当前系统进程的快照信息。常用参数：-e 或 -A 显示所有进程，-f 显示完整格式，-u 按用户过滤，-aux 显示所有进程的详细信息（BSD 风格），--forest 以树形显示进程关系。是排查进程状态、CPU/内存占用最基础的工具。",
    helpOutput: `
用法：
 ps [options]

 尝试 'ps --help <simple|list|output|threads|misc|all>'
  或 'ps --help <s|l|o|t|m|a>'
 获取更多帮助文本。

更多详情见 ps(1)。
`,
    examples: [
      { description: "显示当前用户的进程", code: "ps" },
      { description: "显示所有进程的详细信息", code: "ps aux" },
      { description: "以树形结构显示进程关系", code: "ps auxf" },
      { description: "显示指定 PID 的进程信息", code: "ps -p 1234 -o pid,user,cmd" },
      { description: "查看帮助文档", code: "ps --help" }
    ],
    relatedCommands: ["top", "pstree", "pgrep", "kill"]
  },
  {
    name: "top",
    categoryId: "process",
    syntax: "top [选项]",
    simpleExplain: "实时监控系统的进程和资源",
    detailExplain: "实时动态显示系统进程状态和资源占用情况，默认每 3 秒刷新一次。顶部显示系统负载、CPU、内存等汇总信息，下方列出各进程的 PID、用户、CPU、内存、运行时间等。按 q 退出，M 按内存排序，P 按 CPU 排序，k 可终止进程。",
    helpOutput: `
用法：
 top [options]

选项：
 -b, --batch-mode                以非交互批处理模式运行
 -c, --cmdline-toggle            反转上次记忆的 'c' 状态
 -d, --delay =SECS [.TENTHS]     迭代延迟为 SECS [.TENTHS]
 -E, --scale-summary-mem =SCALE  设置内存单位为: k,m,g,t,p,e 对应 SCALE
 -e, --scale-task-mem =SCALE     设置内存单位为: k,m,g,t,p 对应 SCALE
 -H, --threads-show              显示任务及其所有线程
 -i, --idle-toggle               反转上次记忆的 'i' 状态
 -n, --iterations =NUMBER        达到最大迭代次数 NUMBER 后退出
 -O, --list-fields               输出所有字段名，然后退出
 -o, --sort-override =FIELD      强制按指定的 FIELD 排序
 -p, --pid =PIDLIST              仅监控 PIDLIST 中的任务
 -S, --accum-time-toggle         反转上次记忆的 'S' 状态
 -s, --secure-mode               以安全模式限制运行
 -U, --filter-any-user =USER     仅显示属于 USER 的进程
 -u, --filter-only-euser =USER   仅显示属于 USER 的进程
 -w, --width [=COLUMNS]          更改打印宽度 [,使用 COLUMNS]
 -1, --single-cpu-toggle         反转上次记忆的 '1' 状态

 -h, --help                      显示此帮助文本，然后退出
 -V, --version                   输出版本信息并退出

更多详情见 top(1)。
`,
    examples: [
      { description: "启动 top 实时监控界面", code: "top" },
      { description: "只显示特定用户的进程", code: "top -u www-data" },
      { description: "每 5 秒刷新一次", code: "top -d 5" },
      { description: "只显示 3 次刷新后退出", code: "top -n 3 -b" },
      { description: "查看帮助文档", code: "top --help" }
    ],
    relatedCommands: ["htop", "ps", "vmstat", "mpstat"]
  },
  {
    name: "htop",
    categoryId: "process",
    syntax: "htop [选项]",
    simpleExplain: "增强版交互式进程监控器",
    detailExplain: "增强版的 top，提供彩色界面和交互式操作。支持鼠标点击、方向键选中进程、树形视图、横向滚动查看完整信息。常用快捷键：F5 树形视图，F6 排序，F9 发送信号，F7/F8 调整优先级。多数系统需额外安装。",
    helpOutput: `htop 3.3.0
(C) 2004-2019 Hisham Muhammad. (C) 2020-2024 htop dev team.
基于 GNU GPLv2+ 发布。

-C --no-color                   使用单色配色方案
-d --delay=DELAY                设置更新之间的延迟，以十分之一秒为单位
-F --filter=FILTER              仅显示匹配给定过滤器的命令
-h --help                       打印此帮助屏幕
-H --highlight-changes[=DELAY]  高亮显示新旧进程
-M --no-mouse                   禁用鼠标
-n --max-iterations=NUMBER      在 NUMBER 次迭代/帧更新后退出 htop
-p --pid=PID[,PID,PID...]       仅显示给定的 PID
   --readonly                   禁用所有系统和进程修改功能
-s --sort-key=COLUMN            在列表视图中按 COLUMN 排序（尝试 --sort-key=help 查看列表）
-t --tree                       显示树形视图（可与 -s 组合使用）
-u --user[=USERNAME]            仅显示给定用户（或 $USER）的进程
-U --no-unicode                 不使用 unicode 而使用纯 ASCII
-V --version                    打印版本信息

在 htop 中按 F1 获取在线帮助。
更多信息见 'man htop'。
`,
    examples: [
      { description: "启动 htop 交互式界面", code: "htop" },
      { description: "按 CPU 使用率排序", code: "htop --sort-key PERCENT_CPU" },
      { description: "只显示指定 PID 的进程树", code: "htop -p 1234,5678" },
      { description: "启动时延迟 2 秒再显示", code: "htop -d 2" },
      { description: "查看帮助文档", code: "htop --help" }
    ],
    relatedCommands: ["top", "ps", "glances", "atop"]
  },
  {
    name: "kill",
    categoryId: "process",
    syntax: "kill [选项] <PID>",
    simpleExplain: "向进程发送信号（常用于终止）",
    detailExplain: "向指定进程发送信号，默认发送 SIGTERM（15）请求进程正常退出。常用参数：-9 发送 SIGKILL 强制终止进程（不可被捕获或忽略），-15 发送 SIGTERM，-l 列出所有信号，-HUP 重启进程。需提供进程 PID。",
    helpOutput: `
用法：
 kill [options] <pid> [...]

选项：
 <pid> [...]            向列出的每个 <pid> 发送信号
 -<signal>, -s, --signal <signal>
                        指定要发送的 <signal>
 -q, --queue <value>    随信号发送的整数值
 -l, --list=[<signal>]  列出所有信号名，或将信号转换为名称
 -L, --table            以美观的表格列出所有信号名

 -h, --help     显示此帮助并退出
 -V, --version  输出版本信息并退出

更多详情见 kill(1)。
`,
    examples: [
      { description: "礼貌地请求进程终止", code: "kill 1234" },
      { description: "强制杀死进程", code: "kill -9 5678" },
      { description: "发送挂起信号（暂停但不结束）", code: "kill -STOP 9012" },
      { description: "发送继续信号（恢复被暂停的进程）", code: "kill -CONT 9012" },
      { description: "查看帮助文档", code: "kill --help" }
    ],
    relatedCommands: ["killall", "pkill", "pgrep", "jobs"],
    dangerLevel: "warning",
  },
  {
    name: "bg",
    categoryId: "process",
    syntax: "bg [作业号]",
    simpleExplain: "将暂停的任务放到后台继续运行",
    detailExplain: "将暂停（挂起）的作业放到后台继续运行。通常先用 Ctrl+Z 暂停前台任务，再用 bg 将其转入后台。可指定作业号（如 bg %1）选择特定任务。后台任务继续执行但不再占用终端，可配合 jobs 查看状态。",
    helpOutput: `bg: bg [job_spec ...]
    将作业移至后台。
    
    将每个 JOB_SPEC 标识的作业放入后台，如同它们
    以 \`&' 启动一样。如果未指定 JOB_SPEC，则使用 shell 所认为的
    当前作业。
    
    退出状态：
    除非未启用作业控制或发生错误，否则返回成功。
`,
    examples: [
      { description: "把最近一个暂停的作业放到后台运行", code: "bg" },
      { description: "把指定作业号的进程放到后台", code: "bg %2" },
      { description: "查看帮助文档", code: "help bg" }
    ],
    relatedCommands: ["fg", "jobs", "nohup", "Ctrl+Z"]
  },
  {
    name: "fg",
    categoryId: "process",
    syntax: "fg [作业号]",
    simpleExplain: "将后台任务调回前台运行",
    detailExplain: "将后台作业调回前台继续运行。可指定作业号（如 fg %1）选择特定任务。任务回到前台后终端被其占用，直到任务完成或再次被 Ctrl+Z 暂停。常用于查看后台任务的实时输出或重新交互操作。",
    helpOutput: `fg: fg [job_spec]
    将作业移至前台。
    
    将 JOB_SPEC 标识的作业放入前台，使其成为
    当前作业。如果未指定 JOB_SPEC，则使用 shell 所认为的
    当前作业。
    
    退出状态：
    放入前台的命令的状态，或发生错误时失败。
`,
    examples: [
      { description: "把最近的后台作业拉回前台", code: "fg" },
      { description: "把 2 号作业拉回前台", code: "fg %2" },
      { description: "查看帮助文档", code: "help fg" }
    ],
    relatedCommands: ["bg", "jobs", "Ctrl+Z", "nohup"]
  },
  {
    name: "jobs",
    categoryId: "process",
    syntax: "jobs [选项]",
    simpleExplain: "查看当前shell的后台任务列表",
    detailExplain: "列出当前 shell 会话中的后台作业及其状态。显示作业号、状态（Running/Stopped）和命令。常用参数：-l 同时显示 PID，-p 仅显示 PID，-r 只显示运行中的，-s 只显示已停止的。是管理前后台任务的参考工具。",
    helpOutput: `jobs: jobs [-lnprs] [jobspec ...] or jobs -x command [args]
    显示作业状态。
    
    列出活动作业。JOBSPEC 将输出限制为该作业。
    不带选项时，显示所有活动作业的状态。
    
    选项：
      -l	除正常信息外还列出进程 ID
      -n	仅列出自上次通知以来状态已改变的进程
      -p	仅列出进程 ID
      -r	将输出限制为运行中的作业
      -s	将输出限制为已停止的作业
    
    如果提供 -x，则在 ARGS 中出现的所有作业规格被替换为该作业的
    进程组领导进程 ID 后运行 COMMAND。
    
    退出状态：
    除非给出无效选项或发生错误，否则返回成功。
    如果使用 -x，返回 COMMAND 的退出状态。
`,
    examples: [
      { description: "列出当前 shell 的所有后台作业", code: "jobs", output: "[1]   Running    python train.py &\n[2]-  Stopped    vim notes.txt\n[3]+  Running    npm start &" },
      { description: "列出作业的同时显示 PID", code: "jobs -l" },
      { description: "只列出正在运行的作业", code: "jobs -r" },
      { description: "只列出已暂停的作业", code: "jobs -s" },
      { description: "查看帮助文档", code: "help jobs" }
    ],
    relatedCommands: ["fg", "bg", "Ctrl+Z", "nohup"]
  },
  {
    name: "nohup",
    categoryId: "process",
    syntax: "nohup 命令 [参数...]",
    simpleExplain: "让命令断开终端后继续运行",
    detailExplain: "忽略挂断信号（SIGHUP）运行命令，使进程在终端关闭后继续运行。输出默认重定向到 nohup.out 文件。常用于运行长时间任务，配合 & 放到后台执行，如 nohup ./script.sh &。注意 nohup 不自动将任务转入后台，需手动加 &。",
    helpOutput: `用法: nohup COMMAND [ARG]...
  或:  nohup OPTION
运行 COMMAND，忽略挂断信号。

      --help        显示此帮助并退出
      --version     输出版本信息并退出

如果标准输入是终端，则从不可读的文件重定向它。
如果标准输出是终端，则尽可能将输出追加到 'nohup.out'，
否则追加到 '$HOME/nohup.out'。
如果标准错误是终端，则将其重定向到标准输出。
要将输出保存到 FILE，请使用 'nohup COMMAND > FILE'。

注意：你的 shell 可能有自己的 nohup 版本，通常会取代
此处描述的版本。请参阅你的 shell 文档
以了解其支持的选项详情。

退出状态：
  125  如果 nohup 命令本身失败
  126  如果找到 COMMAND 但无法调用
  127  如果找不到 COMMAND
  -    否则为 COMMAND 的退出状态

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译 bug 至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/nohup>
或本地可用: info '(coreutils) nohup invocation'
`,
    examples: [
      { description: "让脚本在后台持续运行", code: "nohup ./backup.sh &" },
      { description: "自定义输出日志文件", code: "nohup python model_train.py > training.log 2>&1 &" },
      { description: "配合 nice 降低优先级运行", code: "nohup nice -n 19 ./heavy_computation.sh &" },
      { description: "查看帮助文档", code: "nohup --help" }
    ],
    relatedCommands: ["bg", "screen", "tmux", "disown"]
  },
  {
    name: "nice",
    categoryId: "process",
    syntax: "nice [选项] 命令 [参数...]",
    simpleExplain: "以指定优先级启动进程",
    detailExplain: "以指定优先级启动进程。nice 值范围 -20（最高优先级）到 19（最低优先级），默认 0，普通用户只能调高 nice 值（降低优先级），root 可调低。语法：nice -n 10 command。值越大表示越谦让，占用 CPU 越少。",
    helpOutput: `用法: nice [OPTION] [COMMAND [ARG]...]
以调整后的 niceness 值运行 COMMAND，这会影响进程调度。
如果没有 COMMAND，打印当前 niceness 值。niceness 值范围从
-20（对进程最有利）到 19（对进程最不利）。

长选项的强制参数对短选项同样强制。
  -n, --adjustment=N   将整数 N 加到 niceness 值上（默认 10）
      --help        显示此帮助并退出
      --version     输出版本信息并退出

注意：你的 shell 可能有自己的 nice 版本，通常会取代
此处描述的版本。请参阅你的 shell 文档
以了解其支持的选项详情。

退出状态：
  125  如果 nice 命令本身失败
  126  如果找到 COMMAND 但无法调用
  127  如果找不到 COMMAND
  -    否则为 COMMAND 的退出状态

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译 bug 至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/nice>
或本地可用: info '(coreutils) nice invocation'
`,
    examples: [
      { description: "以低优先级运行耗时任务", code: "nice -n 10 ./compile_project.sh" },
      { description: "以较高优先级运行关键任务", code: "nice -n -5 ./critical_service" },
      { description: "查看当前 nice 默认值", code: "nice", output: "0" },
      { description: "查看帮助文档", code: "nice --help" }
    ],
    relatedCommands: ["renice", "ionice", "nohup", "chrt"]
  },
  {
    name: "renice",
    categoryId: "process",
    syntax: "renice [选项] 优先级 <PID>",
    simpleExplain: "调整运行中进程的优先级",
    detailExplain: "调整正在运行的进程的优先级。与 nice（启动时设定）不同，renice 用于运行中修改。语法：renice -n 5 -p PID。常用参数：-p 指定 PID，-u 按用户调整其所有进程，-g 按进程组调整。普通用户只能调高 nice 值。",
    helpOutput: `
用法：
 renice [-n|--priority|--relative] <priority> [-p|--pid] <pid>...
 renice [-n|--priority|--relative] <priority>  -g|--pgrp <pgid>...
 renice [-n|--priority|--relative] <priority>  -u|--user <user>...

修改运行中进程的优先级。

选项：
 -n <num>               指定 nice 值
                          如果环境中设置了 POSIXLY_CORRECT 标志
                          则优先级相对于当前进程优先级为
                          'relative'（相对）。否则为 'absolute'（绝对）。
 --priority <num>       指定 'absolute'（绝对）nice 值
 --relative <num>       指定 'relative'（相对）nice 值
 -p, --pid              将参数解释为进程 ID（默认）
 -g, --pgrp             将参数解释为进程组 ID
 -u, --user             将参数解释为用户名或用户 ID

 -h, --help             显示此帮助
 -V, --version          显示版本

更多详情见 renice(1)。
`,
    examples: [
      { description: "降低 PID 为 1234 的进程优先级", code: "renice +10 1234" },
      { description: "提高某个进程的优先级", code: "renice -5 5678" },
      { description: "修改用户所有进程的优先级", code: "renice +5 -u www-data" },
      { description: "修改进程组所有进程的优先级", code: "renice +10 -g 1001" },
      { description: "查看帮助文档", code: "renice --help" }
    ],
    relatedCommands: ["nice", "top", "ps", "ionice"]
  },
  {
    name: "pgrep",
    categoryId: "process",
    syntax: "pgrep [选项] 模式",
    simpleExplain: "按名称查找进程ID",
    detailExplain: "根据进程名或其他属性查找进程并输出其 PID。比 ps | grep 更简洁高效。常用参数：-l 同时显示进程名，-u 按用户过滤，-f 匹配完整命令行，-x 精确匹配进程名，-n 只返回最新启动的进程。常用于脚本中获取 PID。",
    helpOutput: `
用法：
 pgrep [options] <pattern>

选项：
 -d, --delimiter <string>  指定输出分隔符
 -l, --list-name           列出 PID 和进程名
 -a, --list-full           列出 PID 和完整命令行
 -v, --inverse             反向匹配
 -w, --lightweight         列出所有 TID
 -c, --count               匹配进程的数量
 -f, --full                使用完整进程名匹配
 -g, --pgroup <PGID,...>   匹配列出的进程组 ID
 -G, --group <GID,...>     匹配真实组 ID
 -i, --ignore-case         忽略大小写匹配
 -n, --newest              选择最近启动的
 -o, --oldest              选择最早启动的
 -O, --older <seconds>     选择早于指定秒数的
 -P, --parent <PPID,...>   仅匹配给定父进程的子进程
 -s, --session <SID,...>   匹配会话 ID
     --signal <sig>        要发送的信号（数字或名称）
 -t, --terminal <tty,...>  按控制终端匹配
 -u, --euid <ID,...>       按有效 ID 匹配
 -U, --uid <ID,...>        按真实 ID 匹配
 -x, --exact               与命令名精确匹配
 -F, --pidfile <file>      从文件读取 PID
 -L, --logpidfile          如果 PID 文件未锁定则失败
 -r, --runstates <state>   匹配运行状态 [D,S,Z,...]
 -A, --ignore-ancestors    从结果中排除我们的祖先
 --cgroup <grp,...>        按 cgroup v2 名称匹配
 --ns <PID>                匹配属于与 <pid> 相同
                           命名空间的进程
 --nslist <ns,...>         列出 --ns 选项将考虑的
                           命名空间。
                           可用命名空间: ipc, mnt, net, pid, user, uts

 -h, --help     显示此帮助并退出
 -V, --version  输出版本信息并退出

更多详情见 pgrep(1)。
`,
    examples: [
      { description: "查找 nginx 进程的 PID", code: "pgrep nginx", output: "1234\n1235" },
      { description: "查找并显示进程名", code: "pgrep -a python", output: "5678 python train.py\n5690 python serve.py" },
      { description: "查找属于指定用户的进程", code: "pgrep -u root sshd" },
      { description: "查找最老的匹配进程", code: "pgrep -o firefox" },
      { description: "查看帮助文档", code: "pgrep --help" }
    ],
    relatedCommands: ["pkill", "ps", "pidof", "kill"]
  },
  {
    name: "pkill",
    categoryId: "process",
    syntax: "pkill [选项] 模式",
    simpleExplain: "按名称向进程发送信号",
    detailExplain: "根据进程名或其他属性直接向匹配的进程发送信号（默认 SIGTERM），是 pgrep 与 kill 的组合。常用参数：-9 强制终止，-u 按用户过滤，-f 匹配完整命令行，-x 精确匹配进程名。无需先查 PID，一步完成，如 pkill firefox。",
    helpOutput: `
用法：
 pkill [options] <pattern>

选项：
 -<sig>                    要发送的信号（数字或名称）
 -H, --require-handler     仅在存在信号处理程序时匹配
 -q, --queue <value>       随信号发送的整数值
 -e, --echo                显示被杀死的进程
 -c, --count               匹配进程的数量
 -f, --full                使用完整进程名匹配
 -g, --pgroup <PGID,...>   匹配列出的进程组 ID
 -G, --group <GID,...>     匹配真实组 ID
 -i, --ignore-case         忽略大小写匹配
 -n, --newest              选择最近启动的
 -o, --oldest              选择最早启动的
 -O, --older <seconds>     选择早于指定秒数的
 -P, --parent <PPID,...>   仅匹配给定父进程的子进程
 -s, --session <SID,...>   匹配会话 ID
     --signal <sig>        要发送的信号（数字或名称）
 -t, --terminal <tty,...>  按控制终端匹配
 -u, --euid <ID,...>       按有效 ID 匹配
 -U, --uid <ID,...>        按真实 ID 匹配
 -x, --exact               与命令名精确匹配
 -F, --pidfile <file>      从文件读取 PID
 -L, --logpidfile          如果 PID 文件未锁定则失败
 -r, --runstates <state>   匹配运行状态 [D,S,Z,...]
 -A, --ignore-ancestors    从结果中排除我们的祖先
 --cgroup <grp,...>        按 cgroup v2 名称匹配
 --ns <PID>                匹配属于与 <pid> 相同
                           命名空间的进程
 --nslist <ns,...>         列出 --ns 选项将考虑的
                           命名空间。
                           可用命名空间: ipc, mnt, net, pid, user, uts

 -h, --help     显示此帮助并退出
 -V, --version  输出版本信息并退出

更多详情见 pgrep(1)。
`,
    examples: [
      { description: "杀死所有名为 chrome 的进程", code: "pkill chrome" },
      { description: "向指定用户的进程发送终止信号", code: "pkill -u bob sleep" },
      { description: "强制杀死匹配的进程", code: "pkill -9 hung_process" },
      { description: "先模拟执行", code: "pkill -l python" },
      { description: "查看帮助文档", code: "pkill --help" }
    ],
    relatedCommands: ["pgrep", "kill", "killall", "ps"],
    dangerLevel: "warning",
  },
  {
    name: "killall",
    categoryId: "process",
    syntax: "killall [选项] 进程名",
    simpleExplain: "按进程名杀死所有同名进程",
    detailExplain: "按进程名向所有匹配的进程发送信号（默认 SIGTERM）。与 pkill 类似，但 killall 要求进程名完全匹配，更严格。常用参数：-9 强制终止，-u 按用户过滤，-i 交互式确认，-e 显示详细信息，-w 等待进程终止。如 killall nginx。",
    helpOutput: `用法: killall [OPTION]... [--] NAME...
按名称向进程发送信号。

选项：
  -e, --exact          要求精确匹配进程名
  -g, --process-group  杀死整个进程组
  -i, --interactive    杀死前询问确认
  -l, --list           列出所有信号名
  -n, --ns PID         匹配指定命名空间的进程
  -q, --quiet          无进程被杀时不报错
  -r, --regexp         将 NAME 解释为正则表达式
  -s, --signal SIGNAL  指定发送的信号（如 -9 / -KILL）
  -u, --user USER      仅杀死指定用户的进程
  -v, --verbose        报告信号发送情况
  -w, --wait           等待所有被杀进程退出
  -I, --ignore-case    进程名匹配忽略大小写
  -Z, --context REGEXP 匹配 SELinux 安全上下文`,
    examples: [
      { description: "杀死所有 Firefox 进程", code: "killall firefox" },
      { description: "优雅地等待进程自行关闭", code: "killall -w nginx" },
      { description: "按信号名发送信号", code: "killall -HUP apache2" },
      { description: "交互式确认后才杀死进程", code: "killall -i chrome" },
      { description: "查看帮助文档", code: "killall --help" }
    ],
    relatedCommands: ["kill", "pkill", "pgrep", "xkill"],
    dangerLevel: "warning",
  },
  {
    name: "watch",
    categoryId: "process",
    syntax: "watch [选项] 命令",
    simpleExplain: "周期性重复执行命令并显示输出",
    detailExplain: "周期性执行指定命令并将输出全屏刷新显示，用于实时监控命令输出变化。常用参数：-n 指定刷新间隔（秒，默认 2 秒），-d 高亮显示两次刷新间变化的文本，-t 不显示标题栏。典型用法如 watch -n 1 df -h 实时监控磁盘使用情况。",
    helpOutput: `
用法：
 watch [options] command

选项：
  -b, --beep             如果命令非零退出则蜂鸣
  -c, --color            解释 ANSI 颜色和样式序列
  -C, --no-color         不解释 ANSI 颜色和样式序列
  -d, --differences[=<permanent>]
                         高亮显示更新之间的变化
  -e, --errexit          如果命令非零退出则退出
  -g, --chgexit          当命令输出变化时退出
  -q, --equexit <cycles>
                         当命令输出不变时退出
  -n, --interval <secs>  更新之间等待的秒数
  -p, --precise          尝试以精确间隔运行命令
  -r, --no-rerun         窗口大小改变时不重新运行程序
  -t, --no-title         关闭标题
  -w, --no-wrap          关闭行换行
  -x, --exec             将命令传递给 exec 而非 "sh -c"

 -h, --help     显示此帮助并退出
 -v, --version  输出版本信息并退出

更多详情见 watch(1)。
`,
    examples: [
      { description: "每 2 秒刷新显示内存使用情况", code: "watch -n 2 free -h" },
      { description: "高亮显示变化的区域", code: "watch -d 'ls -l /tmp'" },
      { description: "遇到错误时不中断继续执行", code: "watch -e ping google.com" },
      { description: "执行前先清除屏幕", code: "watch -t date" },
      { description: "查看帮助文档", code: "watch --help" }
    ],
    relatedCommands: ["top", "cron", "sleep", "loop"]
  },
  {
    name: "screen",
    categoryId: "process",
    syntax: "screen [选项] [命令]",
    simpleExplain: "虚拟终端多路复用管理器",
    detailExplain: "创建可在其中运行多个独立终端窗口的全屏会话，会话在 SSH 断开后继续运行，重连后可恢复。常用快捷键：Ctrl+A C 创建新窗口，Ctrl+A N/P 切换窗口，Ctrl+A D 分离会话；用 screen -r 恢复会话。适合长时间运行任务和远程会话管理。",
    helpOutput: `用法: screen [options] [cmd [args]]

Screen 是一个全屏窗口管理器，可复用一个物理终端。

选项：
  -A             适配所有窗口到当前终端尺寸
  -d -m          启动分离模式的 screen 会话
  -dmS name      以指定名称启动分离会话
  -D -R          先分离再重新连接
  -L             开启日志记录
  -r [session]   重新连接到分离的会话
  -R             重新连接，如不存在则创建
  -S sessionname 指定会话名称
  -ls            列出现有 screen 会话
  -list          同 -ls
  -wipe          清理已死会话
  -x             连接到非分离的会话（多窗口共享）
  -X command     在会话中执行命令
  -v             显示版本`,
    examples: [
      { description: "创建一个新的 screen 会话", code: "screen -S mysession" },
      { description: "脱离会话（任务继续在后台运行）", code: "Ctrl+A, D" },
      { description: "重新连接到已有的会话", code: "screen -r mysession" },
      { description: "列出所有 screen 会话", code: "screen -ls" },
      { description: "查看帮助文档", code: "screen --help" }
    ],
    relatedCommands: ["tmux", "nohup", "bg", "byobu"]
  },
  {
    name: "tmux",
    categoryId: "process",
    syntax: "tmux [选项] [命令]",
    simpleExplain: "终端复用器，支持多窗口会话",
    detailExplain: "终端复用器，支持在一个终端中创建多个窗口和窗格，会话独立于 SSH 连接持续运行。常用操作：水平/垂直分割窗格、创建/切换窗口、tmux attach 恢复会话、tmux detach 分离会话。相比 screen 功能更强大，配置更灵活。",
    helpOutput: `用法: tmux [-2CDluvV] [-c shell-command] [-f file] [-L socket-name]
            [-S socket-path] [-T terminal-title] [command [flags]]

命令：
  new-session      创建新会话 (-s 名称)
  attach-session   附加到已有会话 (-t 名称)
  list-sessions    列出所有会话 (ls)
  kill-session     终止会话 (-t 名称)
  kill-server      终止 tmux 服务器
  split-window     水平分屏 (-h 垂直分屏)
  new-window       创建新窗口 (-n 名称)
  list-windows     列出所有窗口
  kill-window      关闭窗口
  rename-window    重命名窗口
  select-window    切换窗口
  source-file      从文件加载配置
  show-options     显示选项
  set-option       设置选项
  bind-key         绑定快捷键
  send-keys        向窗口发送按键`,
    examples: [
      { description: "创建新的 tmux 会话", code: "tmux new -s work" },
      { description: "水平分割当前窗格", code: "Ctrl+B, %" },
      { description: "垂直分割当前窗格", code: "Ctrl+B, \"" },
      { description: "列出所有会话", code: "tmux list-sessions" },
      { description: "重新连接会话", code: "tmux attach -t work" },
      { description: "查看帮助文档", code: "tmux --help" }
    ],
    relatedCommands: ["screen", "nohup", "byobu", "zellij"]
  },
  {
    name: "crontab",
    categoryId: "process",
    syntax: "crontab [选项]",
    simpleExplain: "管理定时循环任务",
    detailExplain: "管理用户的定时任务表，按 cron 表达式周期性执行指定命令，格式为「分 时 日 月 周 命令」。常用参数：-e 编辑当前用户任务表，-l 列出任务，-r 删除所有任务，-u 指定用户。适合周期性备份、清理、监控等任务。",
    helpOutput: `用法: crontab [options] file
       crontab [options]

选项：
  -u <user>   指定用户的 crontab（需 root 权限）
  -e          编辑当前用户的 crontab
  -l          列出当前用户的 crontab 内容
  -r          删除当前用户的 crontab
  -i          删除前确认
  -s          添加 SELinux 安全上下文

Cron 时间格式: 分 时 日 月 周 命令
  * 表示任意值
  */N 表示每 N 个单位
  a,b,c 表示列表
  a-b 表示范围`,
    examples: [
      { description: "编辑当前用户的定时任务", code: "crontab -e" },
      { description: "列出当前的定时任务", code: "crontab -l", output: "0 2 * * * /home/user/backup.sh\n*/5 * * * * /usr/bin/check_health.sh" },
      { description: "删除所有定时任务", code: "crontab -r" },
      { description: "为其他用户编辑 crontab", code: "crontab -u www-data -e" },
      { description: "查看帮助文档", code: "crontab --help" }
    ],
    relatedCommands: ["at", "systemctl timer", "anacron", "fcron"]
  },
  {
    name: "systemctl",
    categoryId: "process",
    syntax: "systemctl [选项] 命令 [服务名]",
    simpleExplain: "控制systemd系统服务",
    detailExplain: "systemd 的主控制工具，用于管理系统服务（单元）。常用参数：start/stop/restart/reload 控制服务，status 查看状态，enable/disable 设置开机自启，list-units 列出所有单元，list-unit-files 查看单元文件。是现代 Linux 发行版的标准服务管理方式。",
    helpOutput: `systemctl [OPTIONS...] COMMAND ...

查询或向系统管理器发送控制命令。

[0m单元命令：
  list-units [PATTERN...]             列出当前内存中的单元
  list-automounts [PATTERN...]        列出当前内存中的自动挂载单元，
                                      按路径排序
  list-paths [PATTERN...]             列出当前内存中的路径单元，
                                      按路径排序
  list-sockets [PATTERN...]           列出当前内存中的套接字单元，
                                      按地址排序
  list-timers [PATTERN...]            列出当前内存中的定时器单元，
                                      按下次触发时间排序
  is-active PATTERN...                检查单元是否处于活动状态
  is-failed [PATTERN...]              检查单元是否失败或
                                      系统处于降级状态
  status [PATTERN...|PID...]          显示一个或多个单元的运行时状态
  show [PATTERN...|JOB...]            显示一个或多个
                                      单元/作业或管理器的属性
  cat PATTERN...                      显示指定单元的文件和 drop-in
  help PATTERN...|PID...              显示一个或多个单元的手册
  list-dependencies [UNIT...]         递归显示单元所需或想要的单元，
                                      或需要或想要这些单元的单元
  start UNIT...                       启动（激活）一个或多个单元
  stop UNIT...                        停止（停用）一个或多个单元
  reload UNIT...                      重新加载一个或多个单元
  restart UNIT...                     启动或重启一个或多个单元
  try-restart UNIT...                 如果活动则重启一个或多个单元
  reload-or-restart UNIT...           如果可能则重新加载一个或多个单元，
                                      否则启动或重启
  try-reload-or-restart UNIT...       如果活动，则重新加载一个或多个单元，
                                      如果支持，否则重启
  isolate UNIT                        启动一个单元并停止所有其他单元
  kill UNIT...                        向单元的进程发送信号
  clean UNIT...                       清理单元的运行时、缓存、状态、日志或
                                      配置
  freeze PATTERN...                   冻结单元进程的执行
  thaw PATTERN...                     恢复冻结单元的执行
  set-property UNIT PROPERTY=VALUE... 设置单元的一个或多个属性
  bind UNIT PATH [PATH]               将主机的路径绑定挂载到
                                      单元的命名空间
  mount-image UNIT PATH [PATH [OPTS]] 将主机的镜像挂载到
                                      单元的命名空间
  service-log-level SERVICE [LEVEL]   获取/设置服务的日志阈值
  servi`,
    examples: [
      { description: "启动 nginx 服务", code: "systemctl start nginx" },
      { description: "停止 nginx 服务", code: "systemctl stop nginx" },
      { description: "重启 nginx 服务", code: "systemctl restart nginx" },
      { description: "查看服务状态", code: "systemctl status nginx" },
      { description: "设置开机自启", code: "systemctl enable nginx" },
      { description: "查看所有正在运行的服务", code: "systemctl list-units --type=service --state=running" },
      { description: "查看帮助文档", code: "systemctl --help" }
    ],
    relatedCommands: ["service", "journalctl", "initctl", "chkconfig"]
  },
  {
    name: "service",
    categoryId: "process",
    syntax: "service <服务名> <命令>",
    simpleExplain: "传统系统服务管理工具",
    detailExplain: "传统 SysVinit 风格的服务管理命令，对指定服务执行 start、stop、restart、status 等操作。语法简单（如 service nginx restart），在新系统上通常作为 systemctl 的兼容包装。适合旧版系统或简单脚本场景。",
    helpOutput: `用法: service < option > | --status-all | [ service_name [ command | --full-restart ] ]
`,
    examples: [
      { description: "启动 Apache 服务", code: "service apache2 start" },
      { description: "查看 MySQL 服务状态", code: "service mysql status" },
      { description: "重启防火墙服务", code: "service iptables restart" },
      { description: "列出所有服务及其状态", code: "service --status-all" },
      { description: "查看帮助文档", code: "service --help" }
    ],
    relatedCommands: ["systemctl", "chkconfig", "update-rc.d", "initctl"]
  },
  {
    name: "at",
    categoryId: "process",
    syntax: "at [选项] 时间",
    simpleExplain: "执行一次性定时任务",
    detailExplain: "在指定时间点执行一次性任务，与 crontab 的周期性任务互补。常用参数：-f 从文件读取命令，-l 列出待执行任务，-d 删除任务，-m 任务完成后发邮件。时间格式支持 now + 5 minutes、3pm 等，需 atd 服务运行。",
    helpOutput: `用法: at [-V] [-q queue] [-f file] [-mMlv] timespec ...
       at [-V] [-q queue] [-f file] [-mMkv] [-t time]
       at -c job [job...]
       atq [-V] [-q queue]
       atrm [-V] job [job...]
       batch

选项：
  -q queue    使用指定队列（a-z, A-Z）
  -f file     从文件读取命令而非标准输入
  -m          任务完成后发邮件（即使无输出）
  -M          永不发邮件
  -v          显示任务将被执行的时间
  -t time     使用 [[CC]YY]MMDDhhmm[.ss] 格式时间
  -l          列出待执行任务（等同 atq）
  -d job      删除任务（等同 atrm）
  -c job      显示指定任务的命令内容
  -V          显示版本`,
    examples: [
      { description: "在今天下午 3 点执行备份脚本", code: "echo '/home/user/backup.sh' | at 15:00" },
      { description: "在 10 分钟后执行命令", code: "echo 'echo Time is up!' | at now + 10 minutes" },
      { description: "查看待执行的 at 任务队列", code: "atq" },
      { description: "删除指定编号的 at 任务", code: "atrm 1" },
      { description: "查看帮助文档", code: "at --help" }
    ],
    relatedCommands: ["crontab", "batch", "timeout", "sleep"]
  },
  {
    name: "pidof",
    categoryId: "process",
    syntax: "pidof 程序名",
    simpleExplain: "查找运行中程序的进程ID",
    detailExplain: "查找指定名称进程的 PID。常用参数：-s 只返回一个 PID，-c 只返回当前终端下的进程，-x 同时匹配脚本名，-o 省略指定 PID。常用于脚本中获取进程号以便后续 kill 或监控。",
    helpOutput: `Usage: pidof [options] program1 [program2 ..]

Options:
  -s          只返回一个 PID
  -c          仅返回同一根目录下的进程（需 root）
  -x          同时返回运行脚本的进程
  -o omit1    省略指定的 PID（可多次使用）
  -o %ppid    省略调用 pidof 的父进程
  -S          使用多进程信号安全模式
  -q          安静模式，不输出 PID
  -h          显示帮助
  -V          显示版本`,
    examples: [
      { description: "查找 nginx 进程的 PID", code: "pidof nginx", output: "1234 1233" },
      { description: "查找 sshd 进程的 PID", code: "pidof sshd" },
      { description: "只显示一个 PID（最新的）", code: "pidof -s nginx" },
      { description: "查找指定脚本进程的 PID", code: "pidof -x myscript.sh" },
      { description: "查看帮助文档", code: "pidof --help" }
    ],
    relatedCommands: ["pgrep", "ps", "pkill", "kill"]
  },
  {
    name: "lsof",
    categoryId: "process",
    syntax: "lsof [选项]",
    simpleExplain: "列出进程打开的文件",
    detailExplain: "列出当前系统打开的文件及占用它们的进程，文件涵盖普通文件、目录、网络套接字、设备等。常用参数：-i 查看网络连接，-p 指定进程，-u 指定用户，+D 递归查看目录。常用于排查端口占用、文件被锁、删除未释放等问题。",
    helpOutput: `lsof: 非法的选项字符: -
lsof: -e 后未跟文件系统路径: "lp"
lsof 4.95.0
 最新修订版: https://github.com/lsof-org/lsof
 最新常见问题: https://github.com/lsof-org/lsof/blob/master/00FAQ
 最新（未格式化）手册页: https://github.com/lsof-org/lsof/blob/master/Lsof.8
 用法: [-?abhKlnNoOPRtUvVX] [+|-c c] [+|-d s] [+D D] [+|-E] [+|-e s] [+|-f[gG]]
 [-F [f]] [-g [s]] [-i [i]] [+|-L [l]] [+m [m]] [+|-M] [-o [o]] [-p s]
 [+|-r [t]] [-s [p:s]] [-S [t]] [-T [t]] [-u s] [+|-w] [-x [fl]] [--] [names]
括号内为默认值；逗号分隔集合 (s) 项；连字符分隔范围。
  -?|-h 列出帮助          -a 与选择 (OR)     -b 避免内核阻塞
  -c c  命令 c ^c /c/[bix]  +c w  COMMAND 宽度 (9)    +d s  目录 s 文件
  -d s  按 FD 集合选择   +D D  目录 D 树 *慢?*   +|-e s  排除 s *有风险*
  -i 选择 IPv[46] 文件  -K [i] 列出|(i)忽略任务    -l 列出 UID 号
  -n 不显示主机名         -N 选择 NFS 文件        -o 列出文件偏移
  -O 无开销 *有风险*   -P 不显示端口名           -Q 允许失败的搜索
  -R 列出父进程 PID       -s 列出文件大小          -t 简洁列表
  -T 禁用 TCP/TPI 信息  -U 选择 Unix 套接字      -v 列出版本信息
  -V 详细搜索        +|-w  警告 (+)         -X 跳过 TCP&UDP* 文件
  -Z Z  上下文 [Z]        -- 结束选项扫描
  -E 显示端点信息              +E 显示端点信息和文件
  +f|-f  +文件系统或 -文件名     +|-f[gG] 标志
  -F [f] 选择字段; -F? 获取帮助
  +|-L [l] 列出 (+) 抑制 (-) 链接计数 < l (0 = 全部; 默认 = 0)
                                        +m [m] 使用|创建挂载补充
  +|-M   portMap 注册 (-)       -o o   o 0t 偏移位数 (8)
  -p s   排除(^)|选择 PID         -S [t] t 秒 stat 超时 (15)
  -T fqs TCP/TPI Fl,Q,St (s) 信息
  -g [s] 排除(^)|选择并打印进程组 ID
  -i i   按 IPv[46] 地址选择: [46][proto][@host|addr][:svc_list|port_list]
  +|-r [t[m<fmt>]] 每 t 秒重复 (15);  + 直到无文件, - 永远。
       t 的可选后缀为 m<fmt>; m 必须将 t 与 <fmt> 分隔，且
      <fmt> 是标记行的 strftime(3) 格式。
  -s p:s  排除(^)|按名称选择协议 (p = TCP|UDP) 状态。
  -u s   排除(^)|选择登录名|UID 集合 s
  -x [fl] 跨越 +d|+D 文件系统或符号链接
  names  选择指定名称的文件或指定文件系统上的文件
任何人都可以列出所有文件; /dev 警告已禁用; 内核 ID 检查已禁用。`,
    examples: [
      { description: "查看 80 端口被哪个进程占用", code: "lsof -i :80", output: "nginx  1234  root  6u  IPv4  12345  0t0  TCP *:http (LISTEN)" },
      { description: "查看某个用户打开的所有文件", code: "lsof -u www-data" },
      { description: "查看某个进程打开的文件", code: "lsof -p 1234" },
      { description: "查看被删除但仍被进程占用的文件", code: "lsof | grep deleted" },
      { description: "查看帮助文档", code: "lsof --help" }
    ],
    relatedCommands: ["fuser", "ss", "netstat", "ps"]
  },
  {
    name: "strace",
    categoryId: "process",
    syntax: "strace [选项] 命令",
    simpleExplain: "跟踪程序的系统调用",
    detailExplain: "跟踪进程的系统调用和接收到的信号。常用参数：-p 附加到运行中进程，-f 跟踪子进程，-e 过滤特定调用，-c 统计调用次数与耗时，-o 输出到文件。常用于排查程序崩溃、卡死、性能瓶颈及文件/网络访问问题。",
    helpOutput: `用法: strace [-ACdffhikqqrtttTvVwxxyyzZ] [-I N] [-b execve] [-e EXPR]...
              [-a COLUMN] [-o FILE] [-s STRSIZE] [-X FORMAT] [-O OVERHEAD]
              [-S SORTBY] [-P PATH]... [-p PID]... [-U COLUMNS] [--seccomp-bpf]
              { -p PID | [-DDD] [-E VAR=VAL]... [-u USERNAME] PROG [ARGS] }
   或: strace -c[dfwzZ] [-I N] [-b execve] [-e EXPR]... [-O OVERHEAD]
              [-S SORTBY] [-P PATH]... [-p PID]... [-U COLUMNS] [--seccomp-bpf]
              { -p PID | [-DDD] [-E VAR=VAL]... [-u USERNAME] PROG [ARGS] }

常规:
  -e EXPR        限定表达式: OPTION=[!]all 或 OPTION=[!]VAL1[,VAL2]...
     选项:    trace, abbrev, verbose, raw, signal, read, write, fault,
                 inject, status, quiet, kvm, decode-fds

启动:
  -E VAR=VAL, --env=VAR=VAL
                 为命令设置环境变量 VAR=VAL
  -E VAR, --env=VAR
                 从命令环境中移除 VAR
  -p PID, --attach=PID
                 跟踪进程号为 PID 的进程，可重复使用
  -u USERNAME, --user=USERNAME
                 以 USERNAME 身份运行命令，处理 setuid 和/或 setgid
  --argv0=NAME   将 PROG 的 argv[0] 设置为 NAME

跟踪:
  -b execve, --detach-on=execve
                 在 execve 系统调用时分离
  -D, --daemonize[=grandchild]
                 以孙进程而非父进程方式运行跟踪器
  -DD, --daemonize=pgroup
                 在单独的进程组中运行跟踪器
  -DDD, --daemonize=session
                 在单独的会话中运行跟踪器
  -f, --follow-forks
                 跟踪子进程
  -ff, --follow-forks --output-separately
                 跟踪子进程并输出到单独的文件
  -I INTERRUPTIBLE, --interruptible=INTERRUPTIBLE
     1, anywhere:   不阻塞任何信号
     2, waiting:    解码系统调用时阻塞致命信号（默认）
     3, never:      始终阻塞致命信号（'-o FILE PROG' 时默认）
     4, never_tstp: 始终阻塞致命信号和 SIGTSTP (^Z)
                    （用于使 'strace -o FILE PROG' 在 ^Z 时不停止）
  --kill-on-exit 如果 strace 被终止则杀死所有被跟踪进程

过滤:
  -e trace=[!][?]{{SYSCALL|GROUP|all|/REGEX}[@64|@32|@x32]|none},
   --trace=[!][?]{{SYSCALL|GROUP|all|/REGEX}[@64|@32|@x32]|none}
                 仅跟踪指定的系统调用。
     groups:     %clock, %creds, %desc, %file, %fstat, %fstatfs %ipc, %lstat,
                 %memory, %net, %process, %pure, %signal, %stat, %%stat,
                 %statfs, %%statfs
  -e signal=SET, --signal=SET
                 仅跟踪指定的信号集合
                 仅打印 SET 中的信号
  -e status=SET, --status=SET
                 仅打印返回状态在 SET 中的系统调用
     statuses:   successful, failed, unfinished, unavailable, detached
  -e trace-fds=SET, --trace-fds=SET
                 跟踪 SET 中文件描述符上的操作
  -P PATH, --trace-path=PATH
                 跟踪对 PATH 的访问
  -z, --su`,
    examples: [
      { description: "跟踪 ls 命令的所有系统调用", code: "strace ls" },
      { description: "只跟踪文件相关的系统调用", code: "strace -e trace=file cat test.txt" },
      { description: "跟踪正在运行的进程（按PID）", code: "strace -p 1234" },
      { description: "统计各系统调用的次数和时间", code: "strace -c ls" },
      { description: "查看帮助文档", code: "strace --help" }
    ],
    relatedCommands: ["ltrace", "lsof", "gdb", "perf"]
  },
  {
    name: "ltrace",
    categoryId: "process",
    syntax: "ltrace [选项] 命令",
    simpleExplain: "跟踪程序的库函数调用",
    detailExplain: "跟踪进程对动态库函数的调用，与 strace 跟踪系统调用形成互补。常用参数：-p 附加进程，-f 跟踪子进程，-e 过滤特定库函数，-c 统计调用次数，-l 按库过滤。常用于分析程序对 libc 等库函数的使用情况。",
    helpOutput: `Usage: ltrace [option ...] command [arg ...]

Options:
  -a, --align COLUMN  对齐返回值到指定列
  -c, --count          统计系统调用次数和时间
  -C, --demangle       解码 C++ 符号名
  -D, --debug          调试模式
  -e expr              过滤要跟踪的函数
  -f                   跟踪子进程
  -F, --config FILE    从文件加载配置
  -h, --help           显示帮助
  -i                   打印指令指针
  -l, --library FILE   仅跟踪指定库
  -L                   不打印库调用
  -n, --indent NR      缩进嵌套调用
  -o, --output FILE    输出到文件
  -p PID               附加到运行中的进程
  -r, --timestamp      打印相对时间戳
  -s STRSIZE           限制字符串显示长度
  -S                   显示系统调用
  -t, -tt, -ttt        打印时间戳
  -T                   显示调用耗时
  -u USERNAME          以指定用户运行`,
    examples: [
      { description: "跟踪 ls 命令的库函数调用", code: "ltrace ls" },
      { description: "只跟踪 malloc 和 free 调用", code: "ltrace -e malloc,free ./myapp" },
      { description: "跟踪正在运行的进程", code: "ltrace -p 1234" },
      { description: "统计各库函数调用次数", code: "ltrace -c ./myapp" },
      { description: "查看帮助文档", code: "ltrace --help" }
    ],
    relatedCommands: ["strace", "lsof", "gdb", "nm"]
  },
  {
    name: "ionice",
    categoryId: "process",
    syntax: "ionice [选项] 命令",
    simpleExplain: "设置进程的IO调度优先级",
    detailExplain: "设置或查看进程的 I/O 调度优先级。调度类别：-c 0 无优先级，-c 1 实时（最高），-c 2 尽力（默认），-c 3 空闲（仅当磁盘空闲时）；-n 0-7 指定优先级，-p 指定进程。适合降低后台备份任务的磁盘争用。",
    helpOutput: `
用法:
 ionice [options] -p <pid>...
 ionice [options] -P <pgid>...
 ionice [options] -u <uid>...
 ionice [options] <command>

显示或更改进程的 I/O 调度类和优先级。

选项:
 -c, --class <class>    调度类的名称或编号，
                          0: 无, 1: 实时, 2: 尽力而为, 3: 空闲
 -n, --classdata <num>  指定调度类中的优先级 (0..7)，
                          仅用于实时和尽力而为类
 -p, --pid <pid>...     作用于这些已运行的进程
 -P, --pgid <pgrp>...   作用于这些组中已运行的进程
 -t, --ignore           忽略失败
 -u, --uid <uid>...     作用于这些用户拥有的已运行进程

 -h, --help             显示此帮助
 -V, --version          显示版本

更多详情见 ionice(1)。
`,
    examples: [
      { description: "以最低优先级运行备份任务", code: "ionice -c 3 tar czf backup.tar.gz /data" },
      { description: "以最高优先级运行数据库", code: "ionice -c 1 -n 0 mysqld" },
      { description: "查看进程的 IO 调度类别", code: "ionice -p 1234" },
      { description: "以尽力而为模式运行编译任务", code: "ionice -c 2 -n 7 make" },
      { description: "查看帮助文档", code: "ionice --help" }
    ],
    relatedCommands: ["nice", "renice", "taskset", "chrt"]
  },
  {
    name: "taskset",
    categoryId: "process",
    syntax: "taskset [选项] 掩码 命令",
    simpleExplain: "将进程绑定到指定CPU核心",
    detailExplain: "设置或查看进程的 CPU 亲和性，将进程绑定到指定 CPU 核心。常用参数：-p 操作已运行进程，-c 指定 CPU 列表。例如 taskset -c 0,1 command 限定在 0、1 号核心运行。可减少核心切换开销，提升缓存命中率，常用于性能优化和隔离。",
    helpOutput: `用法: taskset [options] [mask | cpu-list] [pid|cmd [args...]]


显示或更改进程的 CPU 亲和性。

选项:
 -a, --all-tasks         对给定 pid 的所有任务（线程）进行操作
 -p, --pid               对已存在的给定 pid 进行操作
 -c, --cpu-list          以列表格式显示和指定 CPU
 -h, --help              显示此帮助
 -V, --version           显示版本

默认行为是运行新命令:
    taskset 03 sshd -b 1024
您可以获取已存在任务的掩码:
    taskset -p 700
或设置它:
    taskset -p 03 700
列表格式使用逗号分隔的列表代替掩码:
    taskset -pc 0,3,7-11 700
列表格式中的范围可以带步长参数:
    例如 0-31:2 等价于掩码 0x55555555

更多详情见 taskset(1)。
`,
    examples: [
      { description: "将命令绑定到 CPU 0 上运行", code: "taskset 0x1 ./myapp" },
      { description: "将命令绑定到 CPU 0 和 CPU 1 上运行", code: "taskset 0x3 ./myapp" },
      { description: "查看进程的 CPU 亲和性", code: "taskset -p 1234" },
      { description: "修改已运行进程的 CPU 绑定", code: "taskset -p 0x2 1234" },
      { description: "查看帮助文档", code: "taskset --help" }
    ],
    relatedCommands: ["nice", "ionice", "chrt", "ps"]
  },
  {
    name: "prlimit",
    categoryId: "process",
    syntax: "prlimit [选项] -p PID",
    simpleExplain: "查看或修改进程资源限制",
    detailExplain: "查看或修改进程的资源限制（rlimit），涵盖 CPU 时间、文件数、内存、进程数、文件大小等。常用参数：-p 指定 PID，--nofile 设置最大打开文件数，--rss 设置内存上限，--nproc 设置进程数上限。常用于排查 too many open files 等资源耗尽问题。",
    helpOutput: `
用法:
 prlimit [options] [--<resource>=<limit>] [-p PID]
 prlimit [options] [--<resource>=<limit>] COMMAND

显示或更改进程的资源限制。

选项:
 -p, --pid <pid>        进程 ID
 -o, --output <list>    定义使用哪些输出列
     --noheadings       不打印标题
     --raw              使用原始输出格式
     --verbose          详细输出
 -h, --help             显示此帮助
 -V, --version          显示版本

资源:
 -c, --core             创建的核心文件的最大大小
 -d, --data             进程数据段的最大大小
 -e, --nice             允许提升的最大 nice 优先级
 -f, --fsize            进程写入文件的最大大小
 -i, --sigpending       待处理信号的最大数量
 -l, --memlock          进程可锁定到内存的最大大小
 -m, --rss              最大常驻集大小
 -n, --nofile           打开文件的最大数量
 -q, --msgqueue         POSIX 消息队列中的最大字节数
 -r, --rtprio           最大实时调度优先级
 -s, --stack            最大栈大小
 -t, --cpu              最大 CPU 时间（秒）
 -u, --nproc            用户进程的最大数量
 -v, --as               虚拟内存大小
 -x, --locks            文件锁的最大数量
 -y, --rttime           实时调度下进程的 CPU 时间（微秒）

参数:
 <limit> 定义为范围 soft:hard, soft:, :hard 或一个值来
         同时定义两个限制（例如 -e=0:10 -r=:10）。

可用输出列:
 DESCRIPTION  资源描述
    RESOURCE  资源名称
        SOFT  软限制
        HARD  硬限制（上限）
       UNITS  单位

更多详情见 prlimit(1)。
`,
    examples: [
      { description: "查看进程的所有资源限制", code: "prlimit -p 1234" },
      { description: "将最大打开文件数设为 65535", code: "prlimit --nofile=65535 -p 1234" },
      { description: "限制进程最大内存为 2GB", code: "prlimit --as=2147483648 -p 1234" },
      { description: "设置进程最大 CPU 时间为 60 秒", code: "prlimit --cpu=60 -p 1234" },
      { description: "查看帮助文档", code: "prlimit --help" }
    ],
    relatedCommands: ["ulimit", "nice", "ionice", "ps"]
  },
  {
    name: "chrt",
    categoryId: "process",
    syntax: "chrt [选项] 优先级 命令",
    simpleExplain: "修改进程的实时调度策略",
    detailExplain: "设置或查看进程的实时调度策略与优先级。调度策略：-f FIFO，-r Round Robin，-o Other（普通）；-p 优先级 PID 修改运行中进程。例如 chrt -f -p 99 1234 设置最高实时优先级。适用于音视频处理、工业控制等对响应时间敏感的场景。",
    helpOutput: `显示或更改进程的实时调度属性。

设置策略:
 chrt [options] <priority> <command> [<arg>...]
 chrt [options] --pid <priority> <pid>

获取策略:
 chrt [options] -p <pid>

策略选项:
 -b, --batch          设置策略为 SCHED_BATCH
 -d, --deadline       设置策略为 SCHED_DEADLINE
 -f, --fifo           设置策略为 SCHED_FIFO
 -i, --idle           设置策略为 SCHED_IDLE
 -o, --other          设置策略为 SCHED_OTHER
 -r, --rr             设置策略为 SCHED_RR（默认）

调度选项:
 -R, --reset-on-fork       设置 reset-on-fork 标志
 -T, --sched-runtime <ns>  DEADLINE 的运行时参数
 -P, --sched-period <ns>   DEADLINE 的周期参数
 -D, --sched-deadline <ns> DEADLINE 的截止时间参数

其他选项:
 -a, --all-tasks      对给定 pid 的所有任务（线程）进行操作
 -m, --max            显示最小和最大有效优先级
 -p, --pid            对已存在的给定 pid 进行操作
 -v, --verbose        显示状态信息

 -h, --help           显示此帮助
 -V, --version        显示版本

更多详情见 chrt(1)。
`,
    examples: [
      { description: "以实时调度策略运行程序（优先级99）", code: "chrt -f 99 ./realtime_app" },
      { description: "以公平调度策略运行程序", code: "chrt -b 0 ./background_task" },
      { description: "查看进程的调度策略", code: "chrt -p 1234" },
      { description: "修改已运行进程的调度策略为实时", code: "chrt -f -p 50 1234" },
      { description: "查看帮助文档", code: "chrt --help" }
    ],
    relatedCommands: ["nice", "ionice", "taskset", "renice"]
  },
  {
    name: "pwdx",
    categoryId: "process",
    syntax: "pwdx PID",
    simpleExplain: "查看进程的当前工作目录",
    detailExplain: "显示指定进程的当前工作目录。用法为 pwdx PID，直接输出该进程启动时的目录路径。常用于排查程序相对路径异常、定位进程运行位置、确认服务实际工作目录等问题。",
    helpOutput: `
用法:
 pwdx [options] pid...

选项:
 -h, --help     显示此帮助并退出
 -V, --version  输出版本信息并退出

更多详情见 pwdx(1)。
`,
    examples: [
      { description: "查看 PID 为 1234 的进程工作目录", code: "pwdx 1234", output: "1234: /home/user/project" },
      { description: "查看 nginx 主进程的工作目录", code: "pwdx $(pidof nginx | awk '{print $1}')" },
      { description: "查看所有 bash 进程的工作目录", code: "pgrep bash | xargs pwdx" },
      { description: "查看帮助文档", code: "pwdx --help" }
    ],
    relatedCommands: ["pwd", "ps", "lsof", "pgrep"]
  },
  {
    name: "pstree",
    categoryId: "process",
    syntax: "pstree [选项]",
    simpleExplain: "以树形结构显示进程关系",
    detailExplain: "以树状结构显示进程及其父子关系。常用参数：-p 显示 PID，-u 显示用户，-a 显示命令行参数，-n 按 PID 排序，-h 高亮当前进程及祖先。比 ps 列表更直观地展示进程层级，便于理解服务派生关系。",
    helpOutput: `Usage: pstree [ -a ] [ -c ] [ -h | -H PID ] [ -g ] [ -G | -U ] [ -l ]
            [ -n ] [ -p ] [ -s ] [ -Z ] [ PID | USER ]

Options:
  -a          显示命令行参数
  -A          使用 ASCII 字符画树
  -c          禁用相同子树合并
  -g          显示 PGID（进程组ID）
  -G          使用 VT100 线条字符
  -h          高亮当前进程及其祖先
  -H PID      高亮指定进程
  -l          长行不截断
  -n          按 PID 排序（默认按名称）
  -N ns       切换到指定命名空间
  -p          显示 PID
  -s          显示父进程
  -S          显示命名空间
  -u          显示 UID
  -U          使用 UTF-8 线条字符
  -V          显示版本
  -Z          显示 SELinux 上下文`,
    examples: [
      { description: "显示所有进程的树形结构", code: "pstree" },
      { description: "显示进程的 PID", code: "pstree -p" },
      { description: "以某进程为根显示子进程树", code: "pstree 1234" },
      { description: "高亮当前进程", code: "pstree -h" },
      { description: "查看帮助文档", code: "pstree --help" }
    ],
    relatedCommands: ["ps", "pgrep", "top", "htop"]
  },
  {
    name: "trap",
    categoryId: "process",
    syntax: "trap '命令' 信号",
    simpleExplain: "捕获并处理Shell信号",
    detailExplain: "在 Shell 脚本中捕获指定信号并执行预设命令，避免脚本被信号异常中断。语法为 trap '命令' 信号，常用信号：EXIT（脚本退出）、INT（Ctrl+C）、TERM（终止）、HUP（挂起）。常用于脚本退出时清理临时文件、释放锁、回滚状态。",
    helpOutput: `trap: trap [-lp] [[arg] signal_spec ...]
    捕获信号和其他事件。

    定义并激活处理程序，在 shell 接收到信号或其他条件时运行。

    ARG 是一个命令，当 shell 接收到信号 SIGNAL_SPEC 时读取并执行。
    如果 ARG 缺失（且只提供一个 SIGNAL_SPEC）或 \`-'，则每个指定的
    信号被重置为原始值。如果 ARG 是空字符串，则每个 SIGNAL_SPEC
    被 shell 及其调用的命令忽略。

    如果 SIGNAL_SPEC 是 EXIT (0)，ARG 在 shell 退出时执行。如果
    SIGNAL_SPEC 是 DEBUG，ARG 在每个简单命令之前执行。如果
    SIGNAL_SPEC 是 RETURN，ARG 在每次 shell 函数或由 . 或 source
    内置命令运行的脚本完成执行时执行。SIGNAL_SPEC 为 ERR 表示
    当 -e 选项启用时，命令失败会导致 shell 退出时执行 ARG。

    如果没有提供参数，trap 打印与每个信号关联的命令列表。

    选项:
      -l	打印信号名称及其对应编号的列表
      -p	显示与每个 SIGNAL_SPEC 关联的 trap 命令

    每个 SIGNAL_SPEC 是 <signal.h> 中的信号名称或信号编号。
    信号名称不区分大小写，SIG 前缀是可选的。可以使用
    "kill -signal $$" 向 shell 发送信号。

    退出状态:
    除非 SIGSPEC 无效或给出了无效选项，否则返回成功。
`,
    examples: [
      { description: "脚本退出时执行清理命令", code: "trap 'rm -f /tmp/mylock' EXIT" },
      { description: "忽略 Ctrl+C 中断信号", code: "trap '' INT" },
      { description: "捕获多个信号并执行不同操作", code: "trap 'echo 挂起了' SIGHUP" },
      { description: "查看当前设置的所有 trap", code: "trap -p" },
      { description: "查看帮助文档", code: "help trap" }
    ],
    relatedCommands: ["kill", "nohup", "signal", "ps"]
  },

  // ==================== 网络工具 ====================
  {
    name: "ping",
    categoryId: "network",
    syntax: "ping [选项] 目标主机",
    simpleExplain: "测试网络连通性",
    detailExplain: "向目标主机发送 ICMP Echo 请求包，根据是否收到回应判断网络连通性和延迟。常用参数：-c 指定发送次数，-i 指定间隔，-s 指定包大小，-W 指定超时，-f 洪泛模式。常用于网络故障排查、连通性测试和延迟测量。",
    helpOutput: `ping: 无效选项 -- '-'

用法
  ping [options] <destination>

选项:
  <destination>      DNS 名称或 IP 地址
  -a                 使用有声 ping
  -A                 使用自适应 ping
  -B                 固定源地址
  -c <count>         收到 <count> 个回复后停止
  -C                 创建套接字时调用 connect() 系统调用
  -D                 打印时间戳
  -d                 使用 SO_DEBUG 套接字选项
  -e <identifier>    定义 ping 会话的标识符，SOCK_RAW 默认为随机，
                     SOCK_DGRAM 由内核定义
                     暗示使用 SOCK_RAW（IPv4 仅标识符 0 时）
  -f                 洪泛 ping
  -h                 打印帮助并退出
  -H                 强制反向 DNS 名称解析（适用于数字目的地
                     或 -f），覆盖 -n
  -I <interface>     接口名称或地址
  -i <interval>      发送每个数据包之间的秒数
  -L                 抑制多播数据包的环回
  -l <preload>       等待回复时发送 <preload> 个数据包
  -m <mark>          标记发出的数据包
  -M <pmtud opt>     定义路径 MTU 发现，可以是 <do|dont|want|probe> 之一
  -n                 不进行反向 DNS 名称解析，覆盖 -H
  -O                 报告未完成的回复
  -p <pattern>       填充字节的内容
  -q                 安静输出
  -Q <tclass>        使用服务质量 <tclass> 位
  -s <size>          使用 <size> 作为要发送的数据字节数
  -S <size>          使用 <size> 作为 SO_SNDBUF 套接字选项值
  -t <ttl>           定义生存时间
  -U                 打印用户到用户延迟
  -v                 详细输出
  -V                 打印版本并退出
  -w <deadline>      回复等待 <deadline> 秒
  -W <timeout>       等待响应的时间

IPv4 选项:
  -4                 使用 IPv4
  -b                 允许 ping 广播
  -R                 记录路由
  -T <timestamp>     定义时间戳，可以是 <tsonly|tsandaddr|tsprespec> 之一

IPv6 选项:
  -6                 使用 IPv6
  -F <flowlabel>     定义流标签，默认为随机
  -N <nodeinfo opt>  使用 IPv6 节点信息查询，尝试用 <help> 作为参数

更多详情见 ping(8)。
`,
    examples: [
      { description: "测试与 Google 的网络连通性", code: "ping google.com" },
      { description: "只发送 4 个数据包后停止", code: "ping -c 4 baidu.com" },
      { description: "每秒发送一个包", code: "ping -i 1 192.168.1.1" },
      { description: "指定数据包大小", code: "ping -s 1024 server.local" },
      { description: "查看帮助文档", code: "ping --help" }
    ],
    relatedCommands: ["traceroute", "mtr", "arping", "fping"]
  },
  {
    name: "ifconfig",
    categoryId: "network",
    syntax: "ifconfig [接口] [选项]",
    simpleExplain: "配置和查看网络接口",
    detailExplain: "配置和查看网络接口信息，包括 IP 地址、MAC 地址、MTU、收发包统计、接口状态等。常用操作：ifconfig eth0 up/down 启停接口，ifconfig eth0 192.168.1.10 设置 IP。新系统推荐使用 ip 命令，但 ifconfig 仍被广泛使用。",
    helpOutput: `用法:
  ifconfig [-a] [-v] [-s] <interface> [[<AF>] <address>]
  [add <address>[/<prefixlen>]]
  [del <address>[/<prefixlen>]]
  [[-]broadcast [<address>]]  [[-]pointopoint [<address>]]
  [netmask <address>]  [dstaddr <address>]  [tunnel <address>]
  [outfill <NN>] [keepalive <NN>]
  [hw <HW> <address>]  [mtu <NN>]
  [[-]trailers]  [[-]arp]  [[-]allmulti]
  [multicast]  [[-]promisc]
  [mem_start <NN>]  [io_addr <NN>]  [irq <NN>]  [media <type>]
  [txqueuelen <NN>]
  [name <newname>]
  [[-]dynamic]
  [up|down] ...

  <HW>=硬件类型。
  可能的硬件类型列表:
  <AF>=地址族。默认: inet
  可能的地址族列表:
`,
    examples: [
      { description: "显示所有网络接口的信息", code: "ifconfig -a" },
      { description: "启用网络接口", code: "ifconfig eth0 up" },
      { description: "禁用网络接口", code: "ifconfig eth0 down" },
      { description: "为接口分配 IP 地址", code: "ifconfig eth0 192.168.1.50 netmask 255.255.255.0" },
      { description: "查看帮助文档", code: "ifconfig --help" }
    ],
    relatedCommands: ["ip", "ip addr", "netstat", "iwconfig"]
  },
  {
    name: "curl",
    categoryId: "network",
    syntax: "curl [选项] URL",
    simpleExplain: "命令行网络数据传输工具",
    detailExplain: "命令行数据传输工具，支持 HTTP、HTTPS、FTP、SCP 等多种协议。常用参数：-X 指定请求方法，-d 发送数据，-H 添加请求头，-o 输出到文件，-L 跟随重定向，-I 仅取响应头，-s 静默模式。广泛用于 API 调试、文件下载、接口测试。",
    helpOutput: `用法: curl [options...] <url>
 -d, --data <data>          HTTP POST 数据
 -f, --fail                 HTTP 错误时快速失败且无输出
 -h, --help <category>      获取命令帮助
 -i, --include              在输出中包含协议响应头
 -o, --output <file>        写入文件而非标准输出
 -O, --remote-name          将输出写入以远程文件名命名的文件
 -s, --silent               静默模式
 -T, --upload-file <file>   将本地 FILE 传输到目标
 -u, --user <user:password> 服务器用户名和密码
 -A, --user-agent <name>    向服务器发送 User-Agent <name>
 -v, --verbose              使操作更详细
 -V, --version              显示版本号并退出

这不是完整的帮助，此菜单已按类别精简。
使用 "--help category" 获取所有类别的概览。
获取所有选项请使用手册或 "--help all"。
`,
    examples: [
      { description: "获取网页内容", code: "curl https://example.com" },
      { description: "发送 POST 请求（JSON 数据）", code: "curl -X POST -H \"Content-Type: application/json\" -d '{\"name\":\"test\"}' https://api.example.com/users" },
      { description: "下载文件并保存", code: "curl -O https://example.com/file.zip" },
      { description: "只显示响应头信息", code: "curl -I https://google.com" },
      { description: "查看帮助文档", code: "curl --help" }
    ],
    relatedCommands: ["wget", "httpie", "axios", "httpie"]
  },
  {
    name: "wget",
    categoryId: "network",
    syntax: "wget [选项] URL",
    simpleExplain: "从网络下载文件",
    detailExplain: "非交互式网络文件下载工具，支持 HTTP、HTTPS、FTP 协议。常用参数：-c 断点续传，-r 递归下载，-P 指定保存目录，-b 后台下载，--limit-rate 限速，-m 镜像网站。适合大文件下载、批量抓取和自动化脚本。",
    helpOutput: `GNU Wget 1.21.4，一个非交互式网络下载工具。
用法: wget [OPTION]... [URL]...

长选项的必选参数对短选项同样必选。

启动:
  -V,  --version                   显示 Wget 版本并退出
  -h,  --help                      打印此帮助
  -b,  --background                启动后转入后台
  -e,  --execute=COMMAND           执行 \`.wgetrc' 风格的命令

日志和输入文件:
  -o,  --output-file=FILE          将日志消息写入 FILE
  -a,  --append-output=FILE        将消息追加到 FILE
  -d,  --debug                     打印大量调试信息
  -q,  --quiet                     安静模式（无输出）
  -v,  --verbose                   详细模式（默认）
  -nv, --no-verbose                关闭详细模式，但不安静
       --report-speed=TYPE         以 TYPE 输出带宽。TYPE 可以是 bits
  -i,  --input-file=FILE           下载本地或外部 FILE 中找到的 URL
  -F,  --force-html                将输入文件视为 HTML
  -B,  --base=URL                  将 HTML 输入文件链接 (-i -F)
                                     相对于 URL 解析
       --config=FILE               指定要使用的配置文件
       --no-config                 不读取任何配置文件
       --rejected-log=FILE         将 URL 被拒绝的原因记录到 FILE

下载:
  -t,  --tries=NUMBER              设置重试次数为 NUMBER（0 为无限）
       --retry-connrefused         即使连接被拒绝也重试
       --retry-on-host-error       将主机错误视为非致命的临时错误
       --retry-on-http-error=ERRORS    要重试的 HTTP 错误的逗号分隔列表
  -O,  --output-document=FILE      将文档写入 FILE
  -nc, --no-clobber                跳过会下载到
                                     已存在文件的下载（覆盖它们）
       --no-netrc                  不尝试从 .netrc 获取凭据
  -c,  --continue                  继续获取部分下载的文件
       --start-pos=OFFSET          从零基位置 OFFSET 开始下载
       --progress=TYPE             选择进度条类型
       --show-progress             在任何详细模式下显示进度条
  -N,  --timestamping              除非比本地文件新，否则不重新获取
       --no-if-modified-since      在时间戳模式下不使用条件
                                     if-modified-since get 请求
       --no-use-server-timestamps  不按服务器上的时间戳设置
                                     本地文件的时间戳
  -S,  --server-response           打印服务器响应
       --spider                    不下载任何内容
  -T,  --timeout=SECONDS           将所有超时值设置为 SECONDS
       --dns-timeout=SECS          将 DNS 查找超时设置为 SECS
       --connect-timeout=SECS      设置 t`,
    examples: [
      { description: "下载单个文件", code: "wget https://example.com/large_file.iso" },
      { description: "断点续传", code: "wget -c https://example.com/big_file.zip" },
      { description: "递归下载整个网站", code: "wget -r -np https://docs.example.com/" },
      { description: "限制下载速度", code: "wget --limit-rate=200k http://example.com/file.tar.gz" },
      { description: "查看帮助文档", code: "wget --help" }
    ],
    relatedCommands: ["curl", "axel", "aria2c", "lftp"]
  },
  {
    name: "ssh",
    categoryId: "network",
    syntax: "ssh [选项] 用户@主机",
    simpleExplain: "安全远程登录主机",
    detailExplain: "通过加密通道远程登录到目标主机执行命令或建立隧道。常用参数：-p 指定端口，-i 指定私钥，-L/-R/-D 本地/远程/动态端口转发，-N 不执行远程命令，-C 启用压缩。所有传输均加密，是远程管理 Linux 服务器的标准方式。",
    helpOutput: `未知选项 -- -
用法: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface] [-b bind_address]
           [-c cipher_spec] [-D [bind_address:]port] [-E log_file]
           [-e escape_char] [-F configfile] [-I pkcs11] [-i identity_file]
           [-J destination] [-L address] [-l login_name] [-m mac_spec]
           [-O ctl_cmd] [-o option] [-P tag] [-p port] [-R address]
           [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]]
           destination [command [argument ...]]
       ssh [-Q query_option]
`,
    examples: [
      { description: "远程登录到服务器", code: "ssh user@192.168.1.100" },
      { description: "指定端口登录", code: "ssh -p 2222 user@example.com" },
      { description: "使用密钥文件登录", code: "ssh -i ~/.ssh/id_rsa admin@server.com" },
      { description: "在远程服务器上执行一条命令", code: "ssh user@host 'df -h && free -m'" },
      { description: "查看帮助文档", code: "ssh --help" }
    ],
    relatedCommands: ["scp", "sftp", "telnet", "mosh"]
  },
  {
    name: "scp",
    categoryId: "network",
    syntax: "scp [选项] 源 目标",
    simpleExplain: "安全远程拷贝文件",
    detailExplain: "基于 SSH 协议在本地与远程主机之间加密复制文件，支持本地到远程、远程到本地、远程到远程三种方向。常用参数：-P 指定端口，-r 递归复制目录，-p 保留权限和时间戳，-i 指定私钥。适合单次加密文件传输。",
    helpOutput: `scp: 未知选项 -- -
用法: scp [-346ABCOpqRrsTv] [-c cipher] [-D sftp_server_path] [-F ssh_config]
           [-i identity_file] [-J destination] [-l limit] [-o ssh_option]
           [-P port] [-S program] [-X sftp_option] source ... target
`,
    examples: [
      { description: "上传本地文件到远程服务器", code: "scp localfile.txt user@remote:/home/user/" },
      { description: "从远程服务器下载文件到本地", code: "scp user@remote:/path/file.txt ./local_dir/" },
      { description: "递归复制整个目录", code: "scp -r ./project/ user@server:/opt/apps/" },
      { description: "指定端口传输", code: "scp -P 2222 config.yml deploy@host:/etc/app/" },
      { description: "查看帮助文档", code: "scp --help" }
    ],
    relatedCommands: ["ssh", "rsync", "sftp", "ftp"]
  },
  {
    name: "netstat",
    categoryId: "network",
    syntax: "netstat [选项]",
    simpleExplain: "查看网络连接状态",
    detailExplain: "显示网络连接、路由表、接口统计等信息。常用参数：-t TCP 连接，-u UDP 连接，-l 监听端口，-n 显示数字地址，-p 显示进程，-r 路由表。在新系统上逐渐被更快的 ss 命令取代，但仍是经典排查工具。",
    helpOutput: `用法: netstat [-vWeenNcCF] [<Af>] -r         netstat {-V|--version|-h|--help}
       netstat [-vWnNcaeol] [<Socket> ...]
       netstat { [-vWeenNac] -i | [-cnNe] -M | -s [-6tuw] }

        -r, --route              显示路由表
        -i, --interfaces         显示接口表
        -g, --groups             显示多播组成员关系
        -s, --statistics         显示网络统计信息（类似 SNMP）
        -M, --masquerade         显示伪装连接

        -v, --verbose            详细模式
        -W, --wide               不截断 IP 地址
        -n, --numeric            不解析名称
        --numeric-hosts          不解析主机名
        --numeric-ports          不解析端口名
        --numeric-users          不解析用户名
        -N, --symbolic           解析硬件名称
        -e, --extend             显示其他/更多信息
        -p, --programs           显示套接字的 PID/程序名
        -o, --timers             显示计时器
        -c, --continuous         持续列表

        -l, --listening          显示监听服务器套接字
        -a, --all                显示所有套接字（默认: 已连接）
        -F, --fib                显示转发信息库（默认）
        -C, --cache              显示路由缓存而非 FIB
        -Z, --context            显示套接字的 SELinux 安全上下文

  <Socket>={-t|--tcp} {-u|--udp} {-U|--udplite} {-S|--sctp} {-w|--raw}
           {-x|--unix} --ax25 --ipx --netrom
  <AF>=使用 '-6|-4' 或 '-A <af>' 或 '--<af>'；默认: inet
  可能的地址族列表（支持路由）:
`,
    examples: [
      { description: "显示所有 TCP 连接", code: "netstat -tn" },
      { description: "显示所有监听的端口", code: "netstat -tlnp" },
      { description: "显示路由表", code: "netstat -rn" },
      { description: "持续显示网络接口统计信息", code: "netstat -c" },
      { description: "查看帮助文档", code: "netstat --help" }
    ],
    relatedCommands: ["ss", "lsof", "ip", "nmap"]
  },
  {
    name: "ss",
    categoryId: "network",
    syntax: "ss [选项]",
    simpleExplain: "查看网络连接状态（netstat替代）",
    detailExplain: "显示套接字统计信息，直接从内核读取数据，性能优于 netstat。常用参数：-t TCP，-u UDP，-l 监听套接字，-n 不解析名称，-p 显示进程，-m 内存使用，-s 汇总统计。适合高并发服务器快速排查连接状态。",
    helpOutput: `用法: ss [ OPTIONS ]
       ss [ OPTIONS ] [ FILTER ]
   -h, --help          此消息
   -V, --version       输出版本信息
   -n, --numeric       不解析服务名
   -r, --resolve       解析主机名
   -a, --all           显示所有套接字
   -l, --listening     显示监听套接字
   -o, --options       显示计时器信息
   -e, --extended      显示详细套接字信息
   -m, --memory        显示套接字内存使用
   -p, --processes     显示使用套接字的进程
   -T, --threads       显示使用套接字的线程
   -i, --info          显示内部 TCP 信息
       --tipcinfo      显示内部 tipc 套接字信息
   -s, --summary       显示套接字使用摘要
       --tos           显示 tos 和优先级信息
       --cgroup        显示 cgroup 信息
   -b, --bpf           显示 bpf 过滤器套接字信息
   -E, --events        在套接字被销毁时持续显示
   -Z, --context       显示任务的 SELinux 安全上下文
   -z, --contexts      显示任务和套接字的 SELinux 安全上下文
   -N, --net           切换到指定的网络命名空间名称

   -4, --ipv4          仅显示 IPv4 套接字
   -6, --ipv6          仅显示 IPv6 套接字
   -0, --packet        显示 PACKET 套接字
   -t, --tcp           仅显示 TCP 套接字
   -M, --mptcp         仅显示 MPTCP 套接字
   -S, --sctp          仅显示 SCTP 套接字
   -u, --udp           仅显示 UDP 套接字
   -d, --dccp          仅显示 DCCP 套接字
   -w, --raw           仅显示 RAW 套接字
   -x, --unix          仅显示 Unix 域套接字
       --tipc          仅显示 TIPC 套接字
       --vsock         仅显示 vsock 套接字
       --xdp           仅显示 XDP 套接字
   -f, --family=FAMILY 显示 FAMILY 类型的套接字
       FAMILY := {inet|inet6|link|unix|netlink|vsock|tipc|xdp|help}

   -K, --kill          强制关闭套接字，显示已关闭的套接字
   -H, --no-header     抑制标题行
   -O, --oneline       套接字数据打印在单行上
       --inet-sockopt  显示各种 inet 套接字选项

   -A, --query=QUERY, --socket=QUERY
       QUERY := {all|inet|tcp|mptcp|udp|raw|unix|unix_dgram|unix_stream|unix_seqpacket|packet|packet_raw|packet_dgram|netlink|dccp|sctp|vsock_stream|vsock_dgram|tipc|xdp}[,QUERY]

   -D, --diag=FILE     将 TCP 套接字的原始信息转储到 FILE
   -F, --filter=FILE   从 FILE 读取过滤信息
       FILTER := [ state STATE-FILTER ] [ EXPRESSION ]
       STATE-FILTER := {all|connected|synchronized|bucket|big|TCP-STATES}
         TCP-STATES := {established|syn-sent|syn-recv|fin-wait-{1,2}|time-wait|closed|close-wait|last-ack|listening|closing}
          connected := {established|syn-sent|syn-recv|fin-wait-{1,2}|time-wait|close-wait|last-ack|closing}
       synchronized := {established|syn-recv|fin-wait-{1,2}|time-wait|close-wait|last-ack|closing}
`,
    examples: [
      { description: "显示所有 TCP 连接", code: "ss -tn" },
      { description: "显示所有监听端口及对应进程", code: "ss -tlnp" },
      { description: "显示 UDP 连接", code: "ss -uln" },
      { description: "统计各状态下的连接数量", code: "ss -s" },
      { description: "查看帮助文档", code: "ss --help" }
    ],
    relatedCommands: ["netstat", "lsof", "ip", "nmap"]
  },
  {
    name: "nslookup",
    categoryId: "network",
    syntax: "nslookup [选项] 域名",
    simpleExplain: "DNS域名查询工具",
    detailExplain: "向 DNS 服务器查询域名与 IP 地址的映射关系，支持交互式和非交互式两种模式。常用：nslookup domain 查询 A 记录，nslookup domain 8.8.8.8 指定 DNS 服务器，set type=MX 查询邮件记录。常用于 DNS 故障排查和记录验证。",
    helpOutput: `*** 无效选项: -help

`,
    examples: [
      { description: "查询域名的 IP 地址", code: "nslookup google.com" },
      { description: "指定 DNS 服务器查询", code: "nslookup example.com 114.114.114.114" },
      { description: "查询 MX 记录", code: "nslookup -type=MX gmail.com" },
      { description: "交互模式查询", code: "nslookup" },
      { description: "查看帮助文档", code: "nslookup --help" }
    ],
    relatedCommands: ["dig", "host", "whois", "route"]
  },
  {
    name: "dig",
    categoryId: "network",
    syntax: "dig [选项] 域名 [查询类型]",
    simpleExplain: "DNS 查询工具，支持详细解析记录",
    detailExplain: "DNS 查询工具，输出完整的 DNS 查询过程和响应详情。常用参数：@server 指定 DNS 服务器，-x 反向查询（IP 到域名），+short 只输出简短结果，+trace 显示完整解析链路，-t 指定查询记录类型（A、MX、NS 等）。适合网络管理员排查 DNS 故障和分析解析过程。",
    helpOutput: `无效选项: --help
用法:  dig [@global-server] [domain] [q-type] [q-class] {q-opt}
            {global-d-opt} host [@local-server] {local-d-opt}
            [ host [@local-server] {local-d-opt} [...]]

使用 "dig -h"（或 "dig -h | more"）获取完整的选项列表
`,
    examples: [
      { description: "查询域名的 A 记录", code: "dig example.com" },
      { description: "简洁输出", code: "dig +short google.com", output: "142.250.80.46" },
      { description: "追踪完整的 DNS 解析链路", code: "dig +trace example.com" },
      { description: "查询指定类型的 DNS 记录", code: "dig TXT _dmarc.google.com" },
      { description: "查看帮助文档", code: "dig --help" }
    ],
    relatedCommands: ["nslookup", "host", "whois", "dnstracer"]
  },
  {
    name: "traceroute",
    categoryId: "network",
    syntax: "traceroute [选项] 目标主机",
    simpleExplain: "追踪数据包到目标主机的路由路径",
    detailExplain: "追踪数据包从本机到目标主机所经过的所有路由节点。利用递增的 TTL 值触发中间路由器返回 ICMP 超时消息，逐跳显示路径上每个路由器的 IP 和往返延迟。常用参数：-n 不解析主机名以加快显示，-w 设置等待超时，-q 设置每跳探测次数，-I 使用 ICMP 替代 UDP。用于排查网络延迟和路由故障。",
    helpOutput: `Usage: traceroute [ -46dFITnreAVV ] [ -f first_ttl ] [ -g gate,... ]
       [ -i iface ] [ -m max_ttl ] [ -N squeries ] [ -p port ]
       [ -t tos ] [ -l flow_label ] [ -w waittime ] [ -q nqueries ]
       [ -s src_addr ] [ -z sendwait ] [ --fwmark=num ] host [ packetlen ]

Options:
  -4, -6       强制使用 IPv4 或 IPv6
  -d           启用套接字调试
  -f FIRST_TTL 设置起始 TTL（默认 1）
  -g GATE      使用源路由
  -I           使用 ICMP ECHO 探测
  -T           使用 TCP SYN 探测
  -i IFACE     指定网络接口
  -m MAX_TTL   设置最大跳数（默认 30）
  -N NQUERIES  同时发送的探测数
  -n           不解析 IP 为主机名
  -p PORT      设置目标端口
  -q NQUERIES  每跳发送的探测数（默认 3）
  -r           绕过路由表
  -s SRC_ADDR  指定源地址
  -w WAITTIME  等待响应时间（秒，默认 5）
  -z SENDWAIT  探测间延迟（毫秒）`,
    examples: [
      { description: "追踪到目标主机的完整路径", code: "traceroute google.com" },
      { description: "使用 ICMP 进行追踪", code: "traceroute -I baidu.com" },
      { description: "指定最大跳数", code: "traceroute -m 15 example.com" },
      { description: "不进行 DNS 反解", code: "traceroute -n target.host" },
      { description: "查看帮助文档", code: "traceroute --help" }
    ],
    relatedCommands: ["ping", "mtr", "tracepath", "pathping"]
  },
  {
    name: "route",
    categoryId: "network",
    syntax: "route [选项] [命令]",
    simpleExplain: "查看和修改系统路由表",
    detailExplain: "查看和操作内核 IP 路由表。route 或 route -n 显示当前路由规则，add/del 子命令添加或删除静态路由条目。常用参数：-n 以数字形式显示地址，net 指定目标网络，gw 指定网关，dev 指定出口接口。在新系统中已被 ip route 替代，但仍广泛用于老旧环境。",
    helpOutput: `用法: route [-nNvee] [-FC] [<AF>]           显示内核路由表
       route [-v] [-FC] {add|del|flush} ...  修改指定 AF 的路由表。

       route {-h|--help} [<AF>]              显示指定 AF 的详细用法语法。
       route {-V|--version}                  显示版本/作者信息并退出。

        -v, --verbose            显示详细信息
        -n, --numeric            不解析名称
        -e, --extend             显示其他/更多信息
        -F, --fib                显示转发信息库（默认）
        -C, --cache              显示路由缓存而非 FIB

  <AF>=使用 -4, -6, '-A <af>' 或 '--<af>'；默认: inet
  支持路由的地址族列表:`,
    examples: [
      { description: "显示内核路由表", code: "route -n" },
      { description: "添加默认网关", code: "route add default gw 192.168.1.1" },
      { description: "添加到指定网段的路由", code: "route add -net 10.0.0.0 netmask 255.255.0.0 gw 192.168.1.254" },
      { description: "删除路由条目", code: "route del -net 192.168.2.0 netmask 255.255.255.0" },
      { description: "查看帮助文档", code: "route --help" }
    ],
    relatedCommands: ["ip route", "ifconfig", "netstat", "arp"]
  },
  {
    name: "ip",
    categoryId: "network",
    syntax: "ip [选项] 对象 {命令}",
    simpleExplain: "网络配置工具，管理地址、路由和网卡",
    detailExplain: "现代 Linux 网络配置的核心命令，整合了 ifconfig、route、arp 等工具的功能。常用子命令：ip addr 管理地址，ip route 管理路由表，ip link 管理网络接口，ip neigh 管理 ARP 表，ip -s link 查看接口流量统计。支持 IPv4/IPv6 双栈，是 systemd 时代网络管理的首选工具。",
    helpOutput: `用法: ip [ 选项 ] 对象 { 命令 | help }
       ip [ -force ] -batch 文件名
其中  对象 := { address | addrlabel | amt | fou | help | ila | ioam | l2tp |
                   link | macsec | maddress | monitor | mptcp | mroute | mrule |
                   neighbor | neighbour | netconf | netns | nexthop | ntable |
                   ntbl | route | rule | sr | tap | tcpmetrics |
                   token | tunnel | tuntap | vrf | xfrm }
       选项 := { -V[ersion] | -s[tatistics] | -d[etails] | -r[esolve] |
                    -h[uman-readable] | -iec | -j[son] | -p[retty] |
                    -f[amily] { inet | inet6 | mpls | bridge | link } |
                    -4 | -6 | -M | -B | -0 |
                    -l[oops] { maximum-addr-flush-attempts } | -br[ief] |
                    -o[neline] | -t[imestamp] | -ts[hort] | -b[atch] [文件名] |
                    -rc[vbuf] [大小] | -n[etns] 名称 | -N[umeric] | -a[ll] |
                    -c[olor]}`,
    examples: [
      { description: "显示所有网络接口的 IP 地址", code: "ip addr show" },
      { description: "显示路由表", code: "ip route show" },
      { description: "启用/禁用网络接口", code: "ip link set eth0 up" },
      { description: "添加 IP 地址到接口", code: "ip addr add 192.168.1.50/24 dev eth0" },
      { description: "查看帮助文档", code: "ip --help" }
    ],
    relatedCommands: ["ifconfig", "route", "netstat", "ss"]
  },
  {
    name: "nc",
    categoryId: "network",
    syntax: "nc [选项] 主机 端口",
    simpleExplain: "网络连接和数据传输的命令行工具",
    detailExplain: "多功能网络工具 netcat，可作为客户端连接服务器、监听端口提供服务、传输文件或扫描端口。常用参数：-l 监听模式，-p 指定本地端口，-z 端口扫描模式，-v 显示详细信息，-u 使用 UDP，-e 将输入输出绑定到程序。常用于网络调试、临时服务搭建和端口连通性测试。",
    helpOutput: `nc: 无效选项 -- '-'
用法: nc [-46CDdFhklNnrStUuvZz] [-I 长度] [-i 间隔] [-M ttl]
	  [-m 最小ttl] [-O 长度] [-P 代理用户名] [-p 源端口]
	  [-q 秒数] [-s 源地址] [-T 关键字] [-V rtable] [-W 接收限制]
	  [-w 超时] [-X 代理协议] [-x 代理地址[:端口]]
	  [目标] [端口]`,
    examples: [
      { description: "扫描端口是否开放", code: "nc -zv google.com 80" },
      { description: "在本机 8888 端口启动简易聊天服务器", code: "nc -l -p 8888" },
      { description: "连接到聊天服务器", code: "nc localhost 8888" },
      { description: "在两台机器间传输文件（接收端）", code: "nc -l -p 9999 > received_file.zip" },
      { description: "查看帮助文档", code: "nc --help" }
    ],
    relatedCommands: ["socat", "nmap", "telnet", "curl"]
  },
  {
    name: "ftp",
    categoryId: "network",
    syntax: "ftp [选项] 主机",
    simpleExplain: "FTP 文件传输客户端",
    detailExplain: "传统 FTP 文件传输协议客户端，用于在本地与远程主机之间上传下载文件。常用命令：open 连接服务器，get/put 下载上传单个文件，mget/mput 批量传输，binary 切换二进制模式，prompt 关闭交互确认。由于明文传输不安全，生产环境建议改用 sftp/scp，仅适用于受信任的内部网络或老旧系统。",
    helpOutput: `用法: ftp [选项] [主机[:端口]]

选项:
  -4             只使用 IPv4
  -6             只使用 IPv6
  -A             强制主动模式
  -p             使用被动模式（默认）
  -d             启用调试
  -e             禁用编辑命令
  -g             禁用文件名通配
  -i             交互传输时关闭提示
  -n             不自动登录
  -r SEC         每 SEC 秒重试连接
  -t             启用数据包追踪
  -u RBUF        设置接收缓冲区大小
  -v             显示远程服务器响应
  -V             禁用进度条

交互命令: ls, cd, get, put, mget, mput, mkdir, rmdir, delete, rename, bye`,
    examples: [
      { description: "连接到 FTP 服务器", code: "ftp ftp.example.com" },
      { description: "下载文件", code: "get remote_file.txt" },
      { description: "上传文件", code: "put local_file.txt" },
      { description: "匿名登录 FTP 服务器", code: "ftp anonymous@ftp.gnu.org" },
      { description: "查看帮助文档", code: "ftp --help" }
    ],
    relatedCommands: ["sftp", "lftp", "curl", "wget"]
  },
  {
    name: "arp",
    categoryId: "network",
    syntax: "arp [选项]",
    simpleExplain: "查看和管理 ARP 缓存表",
    detailExplain: "查看和管理内核 ARP 缓存表，记录 IP 地址与 MAC 地址的对应关系。arp 或 arp -n 显示当前缓存，-d 删除指定条目，-s 添加静态映射。用于排查局域网内 IP 冲突、MAC 地址欺骗和二层通信故障。在新系统中可由 ip neigh 替代。",
    helpOutput: `用法:
  arp [-vn]  [<HW>] [-i <if>] [-a] [<主机名>]             <-显示 ARP 缓存
  arp [-v]          [-i <if>] -d  <主机> [pub]               <-删除 ARP 条目
  arp [-vnD] [<HW>] [-i <if>] -f  [<文件名>]            <-从文件添加条目
  arp [-v]   [<HW>] [-i <if>] -s  <主机> <hwaddr> [temp]            <-添加条目
  arp [-v]   [<HW>] [-i <if>] -Ds <主机> <if> [netmask <nm>] pub          <-''-

        -a                       以替代（BSD）风格显示（所有）主机
        -e                       以默认（Linux）风格显示（所有）主机
        -s, --set                设置新的 ARP 条目
        -d, --delete             删除指定条目
        -v, --verbose            显示详细信息
        -n, --numeric            不解析名称
        -i, --device             指定网络接口（如 eth0）
        -D, --use-device         从给定设备读取 <hwaddr>
        -A, -p, --protocol       指定协议族
        -f, --file               从文件或 /etc/ethers 读取新条目

  <HW>=使用 '-H <hw>' 指定硬件地址类型。默认: ether
  支持 ARP 的硬件类型列表:`,
    examples: [
      { description: "显示 ARP 缓存表", code: "arp -a" },
      { description: "删除指定的 ARP 条目", code: "arp -d 192.168.1.5" },
      { description: "手动添加 ARP 条目", code: "arp -s 192.168.1.100 00:aa:bb:cc:dd:ee" },
      { description: "显示 ARP 表的数值格式", code: "arp -vn" },
      { description: "查看帮助文档", code: "arp --help" }
    ],
    relatedCommands: ["ip neigh", "arping", "ifconfig", "netstat"]
  },
  {
    name: "host",
    categoryId: "network",
    syntax: "host [选项] 名称",
    simpleExplain: "DNS 查询工具，查询域名解析",
    detailExplain: "轻量级 DNS 查询工具，输入域名返回 IP，输入 IP 反查域名。常用参数：-t 指定记录类型（A、MX、NS、TXT 等），-a 显示全部记录，-l 列出域内所有主机（AXFR）。输出比 dig 简洁，适合脚本调用和快速查询。",
    helpOutput: `host: 非法选项 -- -
用法: host [-aCdilrTvVw] [-c class] [-N ndots] [-t type] [-W time]
            [-R number] [-m flag] [-p port] 主机名 [服务器]
       -a 等价于 -v -t ANY
       -A 类似 -a 但省略 RRSIG, NSEC, NSEC3
       -c 指定非 IN 数据的查询类
       -C 比较权威名称服务器上的 SOA 记录
       -d 等价于 -v
       -l 使用 AXFR 列出域中所有主机
       -m 设置内存调试标志 (trace|record|usage)
       -N 更改根查找前允许的点数
       -p 指定要查询的服务器端口
       -r 禁用递归处理
       -R 指定 UDP 数据包重试次数
       -s SERVFAIL 响应应停止查询
       -t 指定查询类型
       -T 启用 TCP/IP 模式
       -U 启用 UDP 模式
       -v 启用详细输出
       -V 打印版本号并退出
       -w 指定永久等待回复
       -W 指定等待回复的时长
       -4 仅使用 IPv4 查询传输
       -6 仅使用 IPv6 查询传输`,
    examples: [
      { description: "查询域名的 IP 地址", code: "host google.com" },
      { description: "反向查询（IP 查域名）", code: "host 8.8.8.8" },
      { description: "查询 MX 记录", code: "host -t MX gmail.com" },
      { description: "查询 SOA 记录", code: "host -t SOA example.com" },
      { description: "查看帮助文档", code: "host --help" }
    ],
    relatedCommands: ["dig", "nslookup", "whois", "dnsmasq"]
  },
  {
    name: "whois",
    categoryId: "network",
    syntax: "whois [选项] 域名/IP",
    simpleExplain: "查询域名注册和归属信息",
    detailExplain: "查询域名的注册信息，包括注册人、注册商、注册时间、过期时间和域名服务器等。直接执行 whois domain.com 即可，常用参数：-h 指定查询服务器，-p 指定端口。常用于域名抢注监控、归属权调查和取证分析。",
    helpOutput: `用法: whois [选项]... OBJECT...

选项:
  -h HOST       查询指定 whois 服务器
  -p PORT       指定端口（默认 43）
  -a            搜索所有数据库
  -g SOURCE:FIRST-LAST  从 RIPE 数据库搜索
  -i ATTR[,ATTR] 反向查询
  -l            返回一级详细对象
  -L            返回所有相关对象
  -m            返回一级 mnt-by 对象
  -M            返回所有 mnt-by 对象
  -r            关闭递归查询
  -R            关闭过滤
  -T TYPE       限制查询对象类型
  -K            仅返回主键
  -x            精确匹配
  -b            显示带宽滥用信息
  -B            关闭过滤（显示全部）
  -G            分组关联对象
  -O            返回对象
  -q            返回服务器信息
  -t TYPE       返回指定类型的模板
  -v TYPE       返回指定类型的详细模板`,
    examples: [
      { description: "查询域名的注册信息", code: "whois example.com" },
      { description: "查询 IP 地址的归属信息", code: "whois 8.8.8.8" },
      { description: "查询结果只显示简要信息", code: "whois -H github.com" },
      { description: "使用指定的 whois 服务器查询", code: "whois -h whois.apnic.net 202.100.1.1" },
      { description: "查看帮助文档", code: "whois --help" }
    ],
    relatedCommands: ["dig", "nslookup", "host", "nicinfo"]
  },
  {
    name: "nmap",
    categoryId: "network",
    syntax: "nmap [选项] 目标",
    simpleExplain: "网络探测和安全端口扫描工具",
    detailExplain: "网络扫描与安全审计工具，可探测目标主机的开放端口、运行服务和操作系统类型。常用参数：-sS TCP SYN 扫描（半开扫描），-sU UDP 扫描，-O 操作系统识别，-sV 服务版本探测，-A 综合扫描，-p 指定端口范围。是渗透测试和资产管理的基础工具。",
    helpOutput: `用法: nmap [扫描类型] [选项] {目标规格}

扫描类型:
  -sL           列表扫描（仅列出目标）
  -sP/-sn       Ping 扫描（不端口扫描）
  -sS           TCP SYN 扫描（半开扫描）
  -sT           TCP 全连接扫描
  -sU           UDP 扫描
  -sV           探测服务版本
  -O            操作系统探测
  -A            全面扫描（OS+版本+脚本+traceroute）

选项:
  -p PORTS      指定端口范围（如 1-1000, 80,443）
  --top-ports N 扫描最常见的 N 个端口
  -F            快速扫描（100 个常见端口）
  -T0-T5        时间模板（0=极慢, 5=极快）
  -v            详细输出
  -n            不做 DNS 解析
  -oN FILE      输出到普通文件
  -oX FILE      输出为 XML
  -oG FILE      输出为 grep 友好格式
  --script S    使用 NSE 脚本
  -Pn           跳过主机发现（直接扫描端口）`,
    examples: [
      { description: "扫描常见端口", code: "nmap -F 192.168.1.1" },
      { description: "全面扫描所有端口并检测操作系统", code: "nmap -O -sS -p- target.com" },
      { description: "扫描整个子网的主机存活情况", code: "nmap -sn 192.168.1.0/24" },
      { description: "扫描并尝试检测服务版本", code: "nmap -sV 127.0.0.1" },
      { description: "查看帮助文档", code: "nmap --help" }
    ],
    relatedCommands: ["nc", "masscan", "zenmap", "arp-scan"]
  },
  {
    name: "iptables",
    categoryId: "network",
    syntax: "iptables [选项] 命令 [规则]",
    simpleExplain: "配置 Linux 防火墙规则",
    detailExplain: "Linux 内核 netfilter 防火墙的规则管理工具，按表（filter、nat、mangle、raw）和链（INPUT、OUTPUT、FORWARD 等）组织规则。常用动作：ACCEPT 放行、DROP 丢弃、REJECT 拒绝并回应。参数 -A 追加规则，-D 删除规则，-L 列出规则，-F 清空链，-t 指定表。是服务器安全防护的核心组件。",
    helpOutput: `用法: iptables [-t table] {-A|-C|-D} chain rule-specification
       iptables [-t table] -I chain [rulenum] rule-specification
       iptables [-t table] -R chain rulenum rule-specification
       iptables [-t table] -D chain rulenum
       iptables [-t table] -S [chain [rulenum]]
       iptables [-t table] {-F|-L|-Z} [chain [rulenum]] [选项]
       iptables [-t table] -N chain
       iptables [-t table] -X [chain]
       iptables [-t table] -P chain target
       iptables [-t table] -E old-chain-name new-chain-name

选项:
  -t TABLE      指定表（filter, nat, mangle, raw）
  -A CHAIN      追加规则到链末尾
  -I CHAIN N    插入规则到指定位置
  -D CHAIN N    删除指定规则
  -L            列出所有规则
  -F            清空所有规则
  -P CHAIN TGT  设置链默认策略
  -N CHAIN      创建新链
  -X CHAIN      删除自定义链
  -p PROTO      匹配协议（tcp, udp, icmp）
  -s ADDR       匹配源地址
  -d ADDR       匹配目标地址
  --sport PORT  匹配源端口
  --dport PORT  匹配目标端口
  -j TARGET     跳转到目标（ACCEPT, DROP, REJECT, LOG）
  -i IFACE      匹配入接口
  -o IFACE      匹配出接口
  -v            详细输出
  -n            数字格式（不解析名称）`,
    examples: [
      { description: "查看当前防火墙规则", code: "iptables -L -n -v" },
      { description: "允许 SSH 入站连接", code: "iptables -A INPUT -p tcp --dport 22 -j ACCEPT" },
      { description: "禁止来自某 IP 的所有访问", code: "iptables -A INPUT -s 1.2.3.4 -j DROP" },
      { description: "设置默认策略为拒绝所有入站流量", code: "iptables -P INPUT DROP" },
      { description: "查看帮助文档", code: "iptables --help" }
    ],
    relatedCommands: ["ufw", "firewalld", "nftables", "shorewall"],
    dangerLevel: "danger",
  },
  {
    name: "rsync",
    categoryId: "network",
    syntax: "rsync [选项] 源 目标",
    simpleExplain: "高效远程文件同步和备份工具",
    detailExplain: "高效的文件同步与备份工具，通过比较源和目标的差异只传输变化部分，支持本地和远程（基于 SSH 或 rsync 协议）传输。常用参数：-a 归档模式（保留权限、属主、时间等），-v 显示详细过程，-z 传输时压缩，-P 显示进度并支持断点续传，--delete 删除目标中多余的文件，-e 指定远程 shell。是远程备份和镜像的首选工具。",
    helpOutput: `rsync  版本 3.2.7  协议版本 31
版权所有 (C) 1996-2022，作者 Andrew Tridgell、Wayne Davison 等人。
网站: https://rsync.samba.org/
功能:
    64-bit files, 64-bit inums, 64-bit timestamps, 64-bit long ints,
    socketpairs, symlinks, symtimes, hardlinks, hardlink-specials,
    hardlink-symlinks, IPv6, atimes, batchfiles, inplace, append, ACLs,
    xattrs, optional secluded-args, iconv, prealloc, stop-at, no crtimes
优化:
    SIMD-roll, no asm-roll, openssl-crypto, no asm-MD5
校验和列表:
    xxh128 xxh3 xxh64 (xxhash) md5 md4 sha1 none
压缩列表:
    zstd lz4 zlibx zlib none
守护进程认证列表:
    sha512 sha256 sha1 md5 md4

rsync 不提供任何担保。这是自由软件，欢迎您在特定条件下重新分发。详见 GNU
通用公共许可证获取详细信息。

rsync 是一个文件传输程序，能够通过快速差异算法进行高效的远程更新。

用法: rsync [选项]... SRC [SRC]... DEST
  或   rsync [选项]... SRC [SRC]... [USER@]HOST:DEST
  或   rsync [选项]... SRC [SRC]... [USER@]HOST::DEST
  或   rsync [选项]... SRC [SRC]... rsync://[USER@]HOST[:PORT]/DEST
  或   rsync [选项]... [USER@]HOST:SRC [DEST]
  或   rsync [选项]... [USER@]HOST::SRC [DEST]
  或   rsync [选项]... rsync://[USER@]HOST[:PORT]/SRC [DEST]
使用 ':' 的方式通过远程 shell 连接，而使用 '::' 和 'rsync://' 的方式连接
到 rsync 守护进程，并要求 SRC 或 DEST 以模块名开头。

选项
--verbose, -v            增加详细程度
--info=FLAGS             细粒度信息详细程度
--debug=FLAGS            细粒度调试详细程度
--stderr=e|a|c           更改 stderr 输出模式（默认: errors）
--quiet, -q              抑制非错误消息
--no-motd                抑制守护进程模式的 MOTD
--checksum, -c           基于校验和跳过，而非修改时间和大小
--archive, -a            归档模式等于 -rlptgoD（不含 -A,-X,-U,-N,-H）
--no-OPTION              关闭隐含的选项（如 --no-D）
--recursive, -r          递归进入目录
--relative, -R           使用相对路径名
--no-implied-dirs        不随 --relative 发送隐含目录
--backup, -b             创建备份（见 --suffix 和 --backup-dir）
--backup-dir=DIR         将备份创建到基于 DIR 的层次结构中
--suffix=SUFFIX          备份后缀（不带 --backup-dir 时默认 ~）
--update, -u             跳过接收端较新的文件
--inplace                就地更新目标文件
--append                 将数据追加到较短的文件
--append-verify          --append 并对文件中的旧数据进行校验和
--dirs, -d               传输目录而不递归
--old-dirs, --old-d      与旧版 rsync 通信时类似 --dirs
--mkpath                 创建目标缺失的路径组件
--links, -l              将符号链接作为符号链接复制
--copy-links, -L         将符号链接转换为引用的文件/目录
--copy-unsafe-links      仅 "`,
    examples: [
      { description: "将本地目录同步到远程服务器", code: "rsync -avz ./project/ user@server:/backup/project/" },
      { description: "从远程服务器拉取文件到本地", code: "rsync -avz user@server:/var/log/ ./logs/" },
      { description: "本地目录间同步（删除目标多余文件）", code: "rsync -avz --delete ./src/ ./dst/" },
      { description: "显示传输进度和速度", code: "rsync -avz --progress ./data/ user@server:/data/" },
      { description: "查看帮助文档", code: "rsync --help" }
    ],
    relatedCommands: ["scp", "ssh", "wget", "cp"]
  },
  {
    name: "mosh",
    categoryId: "network",
    syntax: "mosh 用户@主机",
    simpleExplain: "支持断线重连的远程终端连接工具",
    detailExplain: "移动 shell 客户端，基于 UDP 协议，在 IP 地址变化、网络抖动或短暂断网时仍能保持会话不中断。本地回显机制使输入响应更快，适合在移动网络或不稳定环境下远程登录。要求服务端安装 mosh-server，且双方通过 SSH 完成初始认证后切换到 UDP 通道。",
    helpOutput: `用法: mosh [选项] [--] [user@]host [命令...]
       mosh-server [选项]

选项:
  --client=PATH        指定 mosh-client 路径
  --server=COMMAND     指定 mosh-server 命令
  --ssh=COMMAND        指定 ssh 命令及参数
  --port=PORT[:PORT2]  指定 UDP 端口范围
  --bind-server={ssh|any|IP}  绑定地址
  -6                   强制使用 IPv6
  -4                   强制使用 IPv4
  --predict=MODE       预测模式: adaptive, always, never, experimental
  --family=AF          地址族: ipv4, ipv6, all
  --no-ssh-pty         不分配 ssh pty
  --no-init             不发送初始化序列
  --local               不使用 ssh 连接（本地）
  -v                    详细输出
  -V                    显示版本`,
    examples: [
      { description: "连接到远程服务器", code: "mosh user@server.com" },
      { description: "指定 SSH 端口连接", code: "mosh --ssh='ssh -p 2222' user@server.com" },
      { description: "指定 mosh 的 UDP 端口范围", code: "mosh --port=60001 user@server.com" },
      { description: "查看帮助文档", code: "mosh --help" }
    ],
    relatedCommands: ["ssh", "screen", "tmux", "scp"]
  },
  {
    name: "sftp",
    categoryId: "network",
    syntax: "sftp 用户@主机",
    simpleExplain: "基于 SSH 的安全文件传输客户端",
    detailExplain: "基于 SSH 加密通道的交互式文件传输客户端，提供与 FTP 类似的命令（ls、cd、get、put 等）。常用参数：-P 指定端口，-b 批处理模式从文件读取命令，-r 递归传输目录。传输过程全程加密，支持公钥认证，是替代传统 FTP 传输敏感数据的标准方案。",
    helpOutput: `未知选项 -- -
用法: sftp [-46AaCfNpqrv] [-B 缓冲区大小] [-b 批处理文件] [-c 加密算法]
          [-D sftp服务器命令] [-F ssh配置] [-i 身份文件]
          [-J 目标] [-l 限制] [-o ssh选项] [-P 端口]
          [-R 请求数] [-S 程序] [-s 子系统 | sftp服务器]
          [-X sftp选项] 目标`,
    examples: [
      { description: "连接到远程 SFTP 服务器", code: "sftp user@server.com" },
      { description: "上传本地文件到远程", code: "sftp> put local.txt /remote/path/" },
      { description: "从远程下载文件到本地", code: "sftp> get /remote/file.txt ./local/" },
      { description: "查看远程目录内容", code: "sftp> ls /var/log/" },
      { description: "查看帮助文档", code: "sftp --help" }
    ],
    relatedCommands: ["scp", "ssh", "ftp", "rsync"]
  },
  {
    name: "ncat",
    categoryId: "network",
    syntax: "ncat [选项] [主机] [端口]",
    simpleExplain: "netcat 增强版网络工具",
    detailExplain: "netcat 的增强版（Nmap 项目），支持 SSL/TLS 加密、代理、代理链、访问控制等高级特性。常用参数：-l 监听模式，--ssl 启用加密，--proxy 指定代理，-e 绑定程序到连接，--allow 限制访问来源。常用于加密隧道、临时服务搭建和复杂网络调试场景。",
    helpOutput: `用法: ncat [选项...] [主机名] [端口]

选项:
  -4, -6            强制 IPv4/IPv6
  -l                监听模式
  -p PORT           指定源端口
  -s ADDR           指定源地址
  -u                UDP 模式
  -v                详细输出
  -w SECS           连接超时
  -z                零 I/O 模式（仅端口扫描）
  --ssl             使用 SSL
  --ssl-cert FILE   SSL 证书
  --ssl-key FILE    SSL 私钥
  --exec CMD        连接后执行命令
  --sh-exec CMD     通过 shell 执行命令
  --allow ADDR      仅允许指定地址连接
  --deny ADDR       拒绝指定地址
  --max-conns N     最大连接数
  -k                保持监听（多次连接）
  -n                不做 DNS 解析
  -d                从 stdin 读取分离
  --recv-only       仅接收数据
  --send-only       仅发送数据
  -c CMD            同 --sh-exec
  -e CMD            同 --exec`,
    examples: [
      { description: "监听 8080 端口", code: "ncat -l 8080" },
      { description: "连接到远程主机的 80 端口", code: "ncat example.com 80" },
      { description: "使用 SSL 加密连接", code: "ncat --ssl server.com 443" },
      { description: "在两台机器间传输文件", code: "ncat -l 1234 > file.txt  # 接收方\nncat sender-ip 1234 < file.txt  # 发送方" },
      { description: "查看帮助文档", code: "ncat --help" }
    ],
    relatedCommands: ["nc", "socat", "telnet", "curl"]
  },
  {
    name: "socat",
    categoryId: "network",
    syntax: "socat [选项] 地址1 地址2",
    simpleExplain: "双向数据流转发工具",
    detailExplain: "双向数据流中继工具，可在任意两类数据通道之间建立连接（如 TCP 到串口、UNIX 套接字到网络端口、文件到管道）。命令格式为 socat ADDR1 ADDR2，常用选项：-d 调试输出，fork 多连接处理，openssl: 启用 SSL。功能比 ncat 更强大也更复杂，适合网络工程师处理协议转换和端口转发。",
    helpOutput: `2026/06/17 05:12:31 socat[3300] E 未知选项 "--help"；使用选项 "-h" 获取帮助`,
    examples: [
      { description: "将本地 8080 端口转发到远程 80 端口", code: "socat TCP-LISTEN:8080,fork TCP:remote-server:80" },
      { description: "通过 SOCKS5 代理连接", code: "socat TCP:target:80 SOCKS5:proxy:target:80" },
      { description: "将 UNIX 套接字暴露为 TCP 端口", code: "socat TCP-LISTEN:9000,fork UNIX-CONNECT:/var/run/docker.sock" },
      { description: "查看帮助文档", code: "socat --help" }
    ],
    relatedCommands: ["ncat", "nc", "ssh", "iptables"]
  },
  {
    name: "tcpdump",
    categoryId: "network",
    syntax: "tcpdump [选项]",
    simpleExplain: "抓取和分析网络数据包",
    detailExplain: "抓取和分析流经网卡的数据包，基于 BPF 过滤表达式精确匹配流量。常用参数：-i 指定接口，-n 不解析主机名，-nn 不解析端口名，-c 抓取指定数量后退出，-w 写入 pcap 文件，-r 读取 pcap 文件，host/port/net 过滤条件。是网络排障、协议分析和安全审计的基础工具。",
    helpOutput: `用法: tcpdump [-aAdDefhIJKlLnNOpqStuUvxX#] [ -B size ] [ -c count ]
       [ -C file_size ] [ -E algo:secret ] [ -F file ] [ -G seconds ]
       [ -i interface ] [ -j tstamptype ] [ -M secret ] [ --number ]
       [ -Q in|out|inout ] [ -r file ] [ -s snaplen ] [ --time-stamp-precision precision ]
       [ --immediate-mode ] [ -T type ] [ --version ] [ -V file ]
       [ -w file ] [ -W filecount ] [ -E spi@ipaddr algo:secret ]
       [ -y datalinktype ] [ -z postrotate-command ] [ -Z user ]
       [ expression ]

选项:
  -i IFACE     指定监听接口
  -c N         收到 N 个包后停止
  -w FILE      将原始包写入文件
  -r FILE      从文件读取包
  -n           不解析地址为名称
  -nn          也不解析端口
  -v / -vv     详细/更详细输出
  -s SNAPLEN   设置抓包长度
  -A           以 ASCII 打印包内容
  -X           以十六进制+ASCII 打印
  -e           显示链路层头部
  -q           安静模式
  -F FILE      从文件读取过滤表达式
  -Z USER      以指定用户运行（dropprivs）
  -D           列出可用接口`,
    examples: [
      { description: "抓取 eth0 网卡上的所有数据包", code: "tcpdump -i eth0" },
      { description: "只抓取 80 端口的 HTTP 流量", code: "tcpdump -i eth0 port 80" },
      { description: "抓取并保存到文件（用 Wireshark 分析）", code: "tcpdump -i eth0 -w capture.pcap" },
      { description: "抓取来自特定 IP 的数据包", code: "tcpdump -i eth0 src 192.168.1.100" },
      { description: "查看帮助文档", code: "tcpdump --help" }
    ],
    relatedCommands: ["wireshark", "nmap", "ss", "netstat"]
  },
  {
    name: "nethogs",
    categoryId: "network",
    syntax: "nethogs [选项]",
    simpleExplain: "按进程显示网络流量使用",
    detailExplain: "按进程维度实时显示网络带宽占用情况，能定位到具体程序而非仅显示连接。常用参数：-d 设置刷新间隔，-p 指定监控的进程，-t 以追踪模式输出便于脚本处理，device 指定网卡。适合排查服务器上某个进程异常消耗带宽的问题。",
    helpOutput: `用法: nethogs [-V] [-b] [-d seconds] [-t] [-p] [-a] [-C] [device [device [device ...]]]

选项:
  -d SECS       刷新间隔（秒）
  -v MODE       视图模式: 0=KB/s 1=total 2=bytes 3=kb/s
  -t            tracemode 模式
  -b            bughunt 模式
  -p            按进程嗅探（默认）
  -a            监听所有设备
  -C            捕获 TCP/UDP
  -P PID        显示指定进程
  -l            显示命令行
  -V            显示版本
  device        指定网络设备`,
    examples: [
      { description: "实时显示各进程的网络流量", code: "nethogs" },
      { description: "监控指定网卡", code: "nethogs eth0" },
      { description: "设置刷新间隔为 2 秒", code: "nethogs -d 2" },
      { description: "以 KB 为单位显示流量", code: "nethogs -k" },
      { description: "查看帮助文档", code: "nethogs --help" }
    ],
    relatedCommands: ["iftop", "nload", "ss", "netstat"]
  },
  {
    name: "iftop",
    categoryId: "network",
    syntax: "iftop [选项]",
    simpleExplain: "实时显示网络带宽使用情况",
    detailExplain: "实时显示网络连接的带宽使用情况，按连接对（本机与远端 IP）展示当前流量。常用参数：-i 指定接口，-n 不解析主机名，-N 不解析端口名，-P 显示端口，-B 以字节为单位显示。适合快速判断网络拥堵的来源连接，但不区分具体进程。",
    helpOutput: `用法: iftop [-hnbNBPblMJ] [-i interface] [-f filter code]
       [-F net/mask] [-G net/mask6] [-s seconds]

选项:
  -h            显示帮助
  -n            不解析主机名
  -N            不解析端口号
  -B            以 bytes 显示带宽
  -P            显示端口号
  -p            混杂模式
  -b            不显示流量条
  -i IFACE      指定监听接口
  -f FILTER     设置 pcap 过滤器
  -F NET/MASK   只显示指定网段流量
  -G NET6/MASK6 IPv6 网段
  -l            显示并统计 localhost 流量
  -s SECS      指定单次抓取秒数后退出
  -c LINE      限制显示行数
  -L LEN       监听长度
  -m LIMIT     带宽刻度上限
  -B           bytes 模式
  -o OLD        旧版 2s 平均`,
    examples: [
      { description: "实时显示 eth0 网卡的流量", code: "iftop -i eth0" },
      { description: "不解析主机名（显示IP）", code: "iftop -n" },
      { description: "按流量排序显示", code: "iftop -B" },
      { description: "查看帮助文档", code: "iftop --help" }
    ],
    relatedCommands: ["nethogs", "nload", "ip", "ss"]
  },
  {
    name: "ethtool",
    categoryId: "network",
    syntax: "ethtool [选项] 网卡",
    simpleExplain: "查看和配置网卡参数",
    detailExplain: "查看和配置网卡底层参数，包括链路速率、双工模式、自协商、唤醒功能、卸载特性等。常用参数：无参数显示当前配置，-s 修改速率/双工，-k 查看卸载特性，-K 修改卸载特性，-g 查看 ring 缓冲区大小，-i 显示驱动信息。用于排查网卡性能和链路协商问题。",
    helpOutput: `用法: ethtool [选项] devname
       ethtool [选项] -s devname [speed N] [duplex half|full] [port tp|aui|bnc|mii|fibre]
       [autoneg on|off] [phyad N] [xcvr internal|external] [wol p|u|m|b|a|g|s|d...]
       [sopass x:x:x:x:x:x] [msglvl N]

选项:
  -s            设置网卡参数
  -a            显示暂停参数
  -A            设置暂停参数
  -c            显示中断合并
  -C            设置中断合并
  -g            显示 RX/TX 环形缓冲区
  -G            设置 RX/TX 环形缓冲区
  -i            显示驱动信息
  -d            寄存器转储
  -e            EEPROM 转储
  -E            写入 EEPROM
  -k            显示卸载功能
  -K            修改卸载功能
  -p            闪烁网卡 LED
  -r            重启协商
  -S            显示统计信息
  -t            自检
  -n/-N         显示/设置 NFC 规则
  -l/-L         显示/设置通道数
  --show-priv-flags  显示私有标志`,
    examples: [
      { description: "查看网卡的基本信息", code: "ethtool eth0", output: "Speed: 1000Mb/s\nDuplex: Full\nAuto-negotiation: on" },
      { description: "查看网卡驱动和固件信息", code: "ethtool -i eth0" },
      { description: "查看网卡统计信息（丢包等）", code: "ethtool -S eth0" },
      { description: "关闭网卡的自动协商并设为千兆全双工", code: "ethtool -s eth0 autoneg off speed 1000 duplex full" },
      { description: "查看帮助文档", code: "ethtool --help" }
    ],
    relatedCommands: ["ip", "ifconfig", "mii-tool", "iwconfig"]
  },
  {
    name: "mtr",
    categoryId: "network",
    syntax: "mtr [选项] 主机",
    simpleExplain: "结合 ping 和 traceroute 的网络诊断工具",
    detailExplain: "结合 ping 和 traceroute 的网络诊断工具，持续探测到目标的每一跳并实时显示延迟和丢包率。常用参数：-n 不解析主机名，-c 设置探测次数后退出，-r 报告模式，-u 使用 UDP，-T 使用 TCP，-i 设置间隔。比单独使用 traceroute 更直观，是定位网络丢包节点的常用工具。",
    helpOutput: `用法: mtr [-hvrwctglspniu46] [-m COUNT] [-s PACKETSIZE] [-t TIMEOUT]
      [-f FIRSTTTL] [-m MAXTTL] [--tcp] [--udp] [--sctp] [--port PORT]
      [--address ADDR] [--interface NAME] HOSTNAME

选项:
  -4             使用 IPv4
  -6             使用 IPv6
  -c COUNT       发送 N 个 ping 后退出
  -r            报告模式（非交互）
  -w            宽报告格式
  -s SIZE       设置包大小
  -t TIMEOUT    设置超时
  -f FIRST_TTL  设置起始 TTL
  -m MAX_TTL    设置最大 TTL
  -p PORT       设置目标端口
  -i SECS       设置 ping 间隔
  -n            不解析主机名
  -u            使用 UDP
  -T            使用 TCP SYN
  -a FIELD      解析 AS 号
  -j            JSON 输出
  -x            XML 输出
  -C            CSV 输出
  -l            显示主机名
  -s            显示包大小
  -b            显示 IP 和主机名
  -z            显示 AS 号`,
    examples: [
      { description: "诊断到目标主机的网络路径", code: "mtr google.com" },
      { description: "以报告模式输出（发送10个包）", code: "mtr -r -c 10 google.com" },
      { description: "不解析主机名（显示IP）", code: "mtr -n google.com" },
      { description: "使用 TCP 协议探测", code: "mtr --tcp google.com" },
      { description: "查看帮助文档", code: "mtr --help" }
    ],
    relatedCommands: ["ping", "traceroute", "tracepath", "nmap"]
  },
  {
    name: "iwconfig",
    categoryId: "network",
    syntax: "iwconfig [接口]",
    simpleExplain: "配置无线网卡参数",
    detailExplain: "配置无线网卡参数的工具，包括 SSID、工作模式（Managed/Ad-hoc/Master）、频段、速率、加密密钥等。常用参数：essid 指定网络名，mode 设置模式，key 设置 WEP 密钥，freq 指定频率，txpower 设置发射功率。在新系统中已逐步被 iw 替代，但仍常见于传统环境。",
    helpOutput: `用法: iwconfig [interface]
       iwconfig interface [essid {NN|on|off}]
       [nwid {NN|on|off}]
       [freq N.NNNN[k|M|G]]
       [channel N]
       [sens N]
       [mode {managed|ad-hoc|master|...}]
       [ap NN:NN:NN:NN:NN:NN]
       [nick NN]
       [rate {N|auto|fixed}]
       [rts {N|auto|fixed|off}]
       [frag {N|auto|fixed|off}]
       [txpower N {mW|dBm}]
       [enc {NNNN-NNNN|off}]
       [power {period N|timeout N}]
       [retry {limit N|lifetime N}]
       [modu {11g|CCK|OFDMg|...}]
       [commit]

选项:
  interface     指定无线网卡
  essid         设置网络名（SSID）
  mode          设置工作模式
  ap            指定接入点 MAC
  channel       设置频道
  freq          设置频率
  rate          设置传输速率
  txpower       设置发射功率
  key/enc       设置加密密钥
  power         设置电源管理`,
    examples: [
      { description: "查看所有无线网卡状态", code: "iwconfig" },
      { description: "查看指定无线网卡信息", code: "iwconfig wlan0" },
      { description: "连接到指定 WiFi 网络", code: "iwconfig wlan0 essid 'MyWiFi'" },
      { description: "设置无线网卡为监听模式", code: "iwconfig wlan0 mode monitor" },
      { description: "查看帮助文档", code: "iwconfig --help" }
    ],
    relatedCommands: ["ifconfig", "ip", "ethtool", "iw"]
  },
  {
    name: "ab",
    categoryId: "network",
    syntax: "ab [选项] URL",
    simpleExplain: "Apache HTTP 压力测试工具",
    detailExplain: "Apache HTTP 服务器压力测试工具，模拟大量并发请求评估服务器性能。常用参数：-n 总请求数，-c 并发数，-t 持续时间，-k 启用 keep-alive，-H 添加请求头，-p 指定 POST 数据文件。输出包括每秒请求数（RPS）、平均响应时间、失败请求数等指标，适合快速基准测试。",
    helpOutput: `用法: ab [选项] [http[s]://]hostname[:port]/path

选项:
  -n requests     总请求数
  -c concurrency  并发请求数
  -t timelimit    最大测试时间（秒）
  -s timeout      单次请求超时（秒）
  -b windowsize   TCP 发送/接收缓冲区大小
  -B address      绑定源地址
  -p postfile     POST 数据文件
  -u putfile      PUT 数据文件
  -T content-type POST/PUT 的 Content-Type
  -v verbosity    详细级别（2+ 显示警告+信息）
  -w              以 HTML 表格输出结果
  -i              使用 HEAD 请求
  -x attributes   HTML 表格 tr 属性
  -y attributes   HTML 表格 td 属性
  -z attributes   HTML 表格 th 属性
  -C cookie-name=value  添加 Cookie
  -H header       添加自定义请求头
  -A auth-username:password  基本认证
  -P proxy-auth-username:password  代理认证
  -X proxy:port   使用代理
  -V              显示版本
  -k              启用 HTTP keep-alive
  -h              显示帮助`,
    examples: [
      { description: "发送 1000 个请求，并发 100", code: "ab -n 1000 -c 100 http://example.com/" },
      { description: "带自定义 Header 的压力测试", code: "ab -n 500 -c 50 -H 'Authorization: Bearer token' http://api.example.com/" },
      { description: "测试 POST 请求", code: "ab -n 100 -c 10 -p data.json -T 'application/json' http://api.example.com/submit" },
      { description: "设置请求超时时间", code: "ab -n 1000 -c 100 -t 30 http://example.com/" },
      { description: "查看帮助文档", code: "ab --help" }
    ],
    relatedCommands: ["curl", "wget", "wrk", "siege"]
  },
  {
    name: "speedtest-cli",
    categoryId: "network",
    syntax: "speedtest-cli",
    simpleExplain: "测试网络上下行带宽速度",
    detailExplain: "命令行网速测试工具，自动选择最近的 Speedtest 服务器测试下载速度、上传速度和网络延迟。常用参数：--simple 简洁输出，--server 指定服务器 ID，--list 列出可用服务器，--share 生成结果分享链接。适合在无图形界面的服务器上验证带宽是否达标。",
    helpOutput: `用法: speedtest-cli [选项]

选项:
  -h, --help            显示帮助
  --no-download         不测试下载速度
  --no-upload           不测试上传速度
  --single              仅使用单连接（默认多连接）
  --bytes               以 bytes 显示（默认 bits）
  --share               生成结果分享图片链接
  --simple              简洁输出（仅三行结果）
  --csv                 CSV 格式输出
  --csv-delimiter CSV_DELIMITER  CSV 分隔符
  --csv-header          CSV 输出头
  --json                JSON 格式输出
  --list                列出 Speedtest 服务器
  --server SERVER       指定测试服务器 ID
  --exclude EXCLUDE     排除指定服务器 ID
  --mini MINI           指定 mini 服务器 URL
  --source SOURCE       绑定源 IP
  --timeout TIMEOUT     HTTP 超时（秒）
  --secure              使用 HTTPS
  --version             显示版本`,
    examples: [
      { description: "运行网速测试", code: "speedtest-cli", output: "Download: 95.23 Mbit/s\nUpload: 48.67 Mbit/s" },
      { description: "以字节为单位显示结果", code: "speedtest-cli --bytes" },
      { description: "只测试下载速度", code: "speedtest-cli --no-upload" },
      { description: "生成分享结果图片链接", code: "speedtest-cli --share" },
      { description: "查看帮助文档", code: "speedtest-cli --help" }
    ],
    relatedCommands: ["ping", "curl", "wget", "iftop"]
  },

  // ==================== 权限管理 ====================
  {
    name: "chmod",
    categoryId: "permission",
    syntax: "chmod [选项] 模式 文件...",
    simpleExplain: "修改文件或目录的访问权限",
    detailExplain: "修改文件或目录的访问权限，权限分为读（r=4）、写（w=2）、执行（x=1），分别针对属主、属组和其他用户。支持符号模式（u+x、g-w、o=r）和数字模式（如 755）。常用参数：-R 递归修改子目录，-v 显示变更详情，+x 添加执行权限。常用于让脚本可执行或调整配置文件访问控制。",
    helpOutput: `用法: chmod [选项]... MODE[,MODE]... FILE...
  或:  chmod [选项]... OCTAL-MODE FILE...
  或:  chmod [选项]... --reference=RFILE FILE...
将每个 FILE 的模式更改为 MODE。
使用 --reference 时，将每个 FILE 的模式更改为 RFILE 的模式。

  -c, --changes          类似 verbose，但仅在发生更改时报告
  -f, --silent, --quiet  抑制大多数错误消息
  -v, --verbose          为每个处理的文件输出诊断信息
      --no-preserve-root  不特殊对待 '/'（默认）
      --preserve-root    拒绝递归操作 '/'
      --reference=RFILE  使用 RFILE 的模式而不是指定 MODE 值。
                         如果是符号链接，RFILE 总是被解引用。
  -R, --recursive        递归地更改文件和目录
      --help        显示此帮助并退出
      --version     输出版本信息并退出

每个 MODE 的形式为 '[ugoa]*([-+=]([rwxXst]*|[ugo]))+|[-+=][0-7]+'。

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/chmod>
或通过本地命令获取: info '(coreutils) chmod invocation'
`,
    examples: [
      { description: "给脚本添加执行权限", code: "chmod +x run.sh" },
      { description: "设置为 755 权限", code: "chmod 755 app.js" },
      { description: "移除其他用户的写权限", code: "chmod o-w sensitive.txt" },
      { description: "递归修改目录及内部所有文件的权限", code: "chmod -R 644 public_html/" },
      { description: "查看帮助文档", code: "chmod --help" }
    ],
    relatedCommands: ["chown", "chgrp", "umask", "stat"],
    dangerLevel: "warning",
  },
  {
    name: "chown",
    categoryId: "permission",
    syntax: "chown [选项] 用户[:组] 文件...",
    simpleExplain: "更改文件或目录的所有者",
    detailExplain: "修改文件或目录的属主和属组，语法为 chown owner:group file。常用参数：-R 递归修改子目录，-v 显示变更详情，--reference 参照其他文件的属主，-h 修改符号链接本身。只有 root 用户有权将文件转让给其他用户，普通用户只能改属于自己的文件到自己的组。",
    helpOutput: `用法: chown [选项]... [OWNER][:[GROUP]] FILE...
  或:  chown [选项]... --reference=RFILE FILE...
将每个 FILE 的所有者和/或组更改为 OWNER 和/或 GROUP。
使用 --reference 时，将每个 FILE 的所有者和组更改为 RFILE 的所有者和组。

  -c, --changes          类似 verbose，但仅在发生更改时报告
  -f, --silent, --quiet  抑制大多数错误消息
  -v, --verbose          为每个处理的文件输出诊断信息
      --dereference      影响每个符号链接的引用目标（这是
                         默认行为），而不是符号链接本身
  -h, --no-dereference   影响符号链接而不是任何被引用的文件
                         （仅在可以更改符号链接所有权的系统上
                         有用）
      --from=CURRENT_OWNER:CURRENT_GROUP
                         仅当每个文件的当前所有者和/或组匹配此处
                         指定的值时，才更改其所有者和/或组。
                         二者均可省略，省略的属性不需要匹配
      --no-preserve-root  不特殊对待 '/'（默认）
      --preserve-root    拒绝递归操作 '/'
      --reference=RFILE  使用 RFILE 的所有者和组而不是指定
                         OWNER:GROUP 值。RFILE 总是被解引用。
  -R, --recursive        递归地操作文件和目录

以下选项在同时指定 -R 选项时修改层次结构的遍历方式。
如果指定了多个，只有最后一个生效。

  -H                     如果命令行参数是指向目录的符号链接，
                         则遍历它
  -L                     遍历遇到的每个指向目录的符号链接
  -P                     不遍历任何符号链接（默认）

      --help        显示此帮助并退出
      --version     输出版本信息并退出

如果省略 OWNER 则不变。如果省略 GROUP 则不变，但如果符号 OWNER
后跟 ':' 则更改为登录组。
OWNER 和 GROUP 可以是数字或符号形式。

示例:
  chown root /u        将 /u 的所有者更改为 "root"。
  chown root:staff /u  同上，但同时将其组更改为 "staff"。
  chown -hR root /u    将 /u 及其子文件的所有者更改为 "root"。

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/chown>
或通过本地命令获取: info '(coreutils) chown invocation'
`,
    examples: [
      { description: "将文件所有者改为 www-data 用户", code: "chown www-data:www-data /var/www/html/index.html" },
      { description: "只改变所有者不变组", code: "chown alice project.tar.gz" },
      { description: "递归改变目录下所有文件的所有者", code: "chown -R mysql:mysql /var/lib/mysql/" },
      { description: "参照另一个文件设置所有权", code: "chown --reference=config.old config.new" },
      { description: "查看帮助文档", code: "chown --help" }
    ],
    relatedCommands: ["chmod", "chgrp", "usermod", "stat"],
    dangerLevel: "warning",
  },
  {
    name: "chgrp",
    categoryId: "permission",
    syntax: "chgrp [选项] 组名 文件...",
    simpleExplain: "更改文件或目录的所属组",
    detailExplain: "单独修改文件或目录的所属用户组，不影响属主。语法为 chgrp group file，支持组名或 GID。常用参数：-R 递归修改子目录，-v 显示变更详情，--reference 参照其他文件。功能与 chown :group 相同，普通用户只能将文件改到自己所属的组。",
    helpOutput: `用法: chgrp [选项]... GROUP FILE...
  或:  chgrp [选项]... --reference=RFILE FILE...
将每个 FILE 的组更改为 GROUP。
使用 --reference 时，将每个 FILE 的组更改为 RFILE 的组。

  -c, --changes          类似 verbose，但仅在发生更改时报告
  -f, --silent, --quiet  抑制大多数错误消息
  -v, --verbose          为每个处理的文件输出诊断信息
      --dereference      影响每个符号链接的引用目标（这是
                         默认行为），而不是符号链接本身
  -h, --no-dereference   影响符号链接而不是任何被引用的文件
                         （仅在可以更改符号链接所有权的系统上
                         有用）
      --no-preserve-root  不特殊对待 '/'（默认）
      --preserve-root    拒绝递归操作 '/'
      --reference=RFILE  使用 RFILE 的组而不是指定 GROUP。
                         如果是符号链接，RFILE 总是被解引用。
  -R, --recursive        递归地操作文件和目录

以下选项在同时指定 -R 选项时修改层次结构的遍历方式。
如果指定了多个，只有最后一个生效。

  -H                     如果命令行参数是指向目录的符号链接，
                         则遍历它
  -L                     遍历遇到的每个指向目录的符号链接
  -P                     不遍历任何符号链接（默认）

      --help        显示此帮助并退出
      --version     输出版本信息并退出

示例:
  chgrp staff /u      将 /u 的组更改为 "staff"。
  chgrp -hR staff /u  将 /u 及其子文件的组更改为 "staff"。

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/chgrp>
或通过本地命令获取: info '(coreutils) chgrp invocation'
`,
    examples: [
      { description: "将文件所属组改为 developers", code: "chgrp developers app.js" },
      { description: "递归改变目录的所属组", code: "chgrp -R docker /opt/container/" },
      { description: "使用 GID 来指定组", code: "chgrp 1001 shared_file.txt" },
      { description: "查看帮助文档", code: "chgrp --help" }
    ],
    relatedCommands: ["chown", "chmod", "groups", "groupmod"]
  },
  {
    name: "sudo",
    categoryId: "permission",
    syntax: "sudo [选项] 命令",
    simpleExplain: "以管理员权限执行命令",
    detailExplain: "让普通用户以 root 或其他用户身份执行单条命令，比直接用 root 登录更安全。常用 sudo command 执行需要特权的命令，-u user 指定以哪个用户身份执行，-k 清除缓存的密码，-l 列出当前用户可执行的特权命令。权限规则通过 /etc/sudoers 配置。",
    helpOutput: `sudo - 以其他用户身份执行命令

用法: sudo -h | -K | -k | -V
用法: sudo -v [-ABkNnS] [-g group] [-h host] [-p prompt] [-u user]
用法: sudo -l [-ABkNnS] [-g group] [-h host] [-p prompt] [-U user]
            [-u user] [command [arg ...]]
用法: sudo [-ABbEHkNnPS] [-r role] [-t type] [-C num] [-D directory]
            [-g group] [-h host] [-p prompt] [-R directory] [-T timeout]
            [-u user] [VAR=value] [-i | -s] [command [arg ...]]
用法: sudo -e [-ABkNnS] [-r role] [-t type] [-C num] [-D directory]
            [-g group] [-h host] [-p prompt] [-R directory] [-T timeout]
            [-u user] file ...

选项:
  -A, --askpass                 使用辅助程序进行密码提示
  -b, --background              在后台运行命令
  -B, --bell                    提示时响铃
  -C, --close-from=num          关闭所有 >= num 的文件描述符
  -D, --chdir=directory         在运行命令前更改工作目录
  -E, --preserve-env            运行命令时保留用户环境
      --preserve-env=list       保留指定的环境变量
  -e, --edit                    编辑文件而不是运行命令
  -g, --group=group             以指定的组名或 ID 运行命令
  -H, --set-home                将 HOME 变量设置为目标用户的主目录
  -h, --help                    显示帮助消息并退出
  -h, --host=host               在指定主机上运行命令（如果插件支持）
  -i, --login                   以目标用户身份运行登录 shell；也可
                                指定命令
  -K, --remove-timestamp        完全删除时间戳文件
  -k, --reset-timestamp         使时间戳文件失效
  -l, --list                    列出用户权限或检查特定命令；
                                使用两次以获取更长格式
  -n, --non-interactive         非交互模式，不使用任何提示
  -P, --preserve-groups         保留组向量而不是设置为目标用户的组
  -p, --prompt=prompt           使用指定的密码提示
  -R, --chroot=directory        在运行命令前更改根目录
  -r, --role=role               创建具有指定角色的 SELinux 安全上下文
  -S, --stdin                   从标准输入读取密码
  -s, --shell                   以目标用户身份运行 shell；也可
                                指定命令
  -t, --type=type               创建具有指定类型的 SELinux 安全上下文
  -T, --command-timeout=timeout 在指定时间限制后终止命令
  -U, --other-user=user         在列表模式下，显示指定用户的权限
  -u, --user=user               以指定的用户名或 ID 运行命令（或编辑文件）
  -V, --version                `,
    examples: [
      { description: "以 root 权限更新系统软件包", code: "sudo apt update" },
      { description: "以 root 身份切换到指定用户执行命令", code: "sudo -u postgres pg_dump database" },
      { description: "以 root 身份打开一个交互式 shell", code: "sudo -i" },
      { description: "查看当前用户的 sudo 权限", code: "sudo -l" },
      { description: "查看帮助文档", code: "sudo --help" }
    ],
    relatedCommands: ["su", "doas", "pkexec", "run0"]
  },
  {
    name: "su",
    categoryId: "permission",
    syntax: "su [选项] [用户]",
    simpleExplain: "切换当前登录用户身份",
    detailExplain: "切换当前登录用户身份到指定用户（默认切换到 root），需要目标用户的密码。常用 su - username 完整切换并加载目标用户的环境变量和工作目录，-c command 以目标用户身份执行一条命令后返回。与 sudo 不同，su 是持续切换身份而非单条命令提权。",
    helpOutput: `
用法:
 su [options] [-] [<user> [<argument>...]]

将有效用户 ID 和组 ID 更改为 <user> 的。
单独的 - 等同于 -l。如果未指定 <user>，则假定为 root。

选项:
 -m, -p, --preserve-environment      不重置环境变量
 -w, --whitelist-environment <list>  不重置指定的变量

 -g, --group <group>             指定主组
 -G, --supp-group <group>        指定附加组

 -, -l, --login                  使 shell 成为登录 shell
 -c, --command <command>         使用 -c 将单个命令传递给 shell
 --session-command <command>     使用 -c 将单个命令传递给 shell
                                   并且不创建新会话
 -f, --fast                      将 -f 传递给 shell（用于 csh 或 tcsh）
 -s, --shell <shell>             如果 /etc/shells 允许，则运行 <shell>
 -P, --pty                       创建新的伪终端

 -h, --help                      显示此帮助
 -V, --version                   显示版本

更多详情见 su(1)。
`,
    examples: [
      { description: "切换到 root 用户", code: "su -" },
      { description: "切换到指定用户", code: "su - postgres" },
      { description: "以指定用户身份执行一条命令", code: "su -c 'whoami' mysql" },
      { description: "切换用户但不加载环境变量", code: "su testuser" },
      { description: "查看帮助文档", code: "su --help" }
    ],
    relatedCommands: ["sudo", "login", "newgrp", "runuser"]
  },
  {
    name: "umask",
    categoryId: "permission",
    syntax: "umask [模式]",
    simpleExplain: "设置新建文件的默认权限掩码",
    detailExplain: "设置或显示新建文件和目录的默认权限掩码，采用减法机制从最大权限中扣除掩码位。例如掩码 022 表示新建文件权限为 644、目录为 755。直接执行 umask 查看当前值，umask 022 设置新值，-S 以符号形式显示。常用于统一团队新文件的默认权限。",
    helpOutput: `用法: umask [-p] [-S] [mode]

umask 是 shell 内建命令，设置文件创建时的默认权限掩码。

选项:
  -p     以可复用命令格式输出（可重新执行）
  -S     以符号形式显示（如 u=rwx,g=rx,o=rx）

参数 mode 为八进制数字（如 022）或符号形式（如 u=rwx,g=rx,o=rx）。
不带参数时显示当前 umask 值。`,
    examples: [
      { description: "查看当前的 umask 设置", code: "umask", output: "0022" },
      { description: "设置新建文件默认权限为 600", code: "umask 077" },
      { description: "临时设置 umask 并创建文件测试", code: "umask 077; touch secret.txt" },
      { description: "用符号方式设置 umask", code: "umask u=rwx,g=rx,o=" },
      { description: "查看帮助文档", code: "umask --help" }
    ],
    relatedCommands: ["chmod", "chown", "install", "mknod"]
  },
  {
    name: "chattr",
    categoryId: "permission",
    syntax: "chattr [选项] 模式 文件...",
    simpleExplain: "设置文件的特殊属性（如防删）",
    detailExplain: "修改文件或目录的扩展属性，提供超越传统权限的保护。常用 +i 设置不可变属性（即使 root 也无法修改、删除、重命名或建立链接），+a 设置只追加属性（只能向文件追加内容），-i/-a 移除对应属性。常用于保护关键系统文件防误删或防篡改。",
    helpOutput: `用法: chattr [-RVf] [-+=aAcCdDeijPsStTuFx] [-p project] [-v version] files...
`,
    examples: [
      { description: "设置文件为不可变", code: "chattr +i /etc/resolv.conf" },
      { description: "移除不可变属性", code: "chattr -i /etc/resolv.conf" },
      { description: "设置只允许追加内容（适合日志文件）", code: "chattr +a /var/log/important.log" },
      { description: "递归设置目录属性", code: "chattr -R +i /critical/system/files/" },
      { description: "查看帮助文档", code: "chattr --help" }
    ],
    relatedCommands: ["lsattr", "chmod", "chown", "setfacl"]
  },
  {
    name: "lsattr",
    categoryId: "permission",
    syntax: "lsattr [选项] 文件...",
    simpleExplain: "查看文件的特殊属性",
    detailExplain: "显示文件或目录的扩展属性，是 chattr 的配套查看工具。输出中 i 表示不可变、a 表示只追加、e 表示区段格式等。常用 lsattr file 查看单个文件属性，-R 递归查看目录下所有文件，-a 显示包括隐藏文件在内的所有文件。",
    helpOutput: `lsattr: 无效选项 -- '-'
用法: lsattr [-RVadlpv] [files...]
`,
    examples: [
      { description: "查看文件的特殊属性", code: "lsattr /etc/passwd" },
      { description: "递归显示目录下所有文件的属性", code: "lsattr -R /boot/" },
      { description: "以长格式显示", code: "lsattr -v /etc/shadow" },
      { description: "只显示具有指定属性的文件", code: "lsattr -a" },
      { description: "查看帮助文档", code: "lsattr --help" }
    ],
    relatedCommands: ["chattr", "stat", "getfacl", "file"]
  },
  {
    name: "getfacl",
    categoryId: "permission",
    syntax: "getfacl [选项] 文件...",
    simpleExplain: "查看文件的 ACL 访问控制列表",
    detailExplain: "显示文件或目录的访问控制列表（ACL），ACL 比传统 owner/group/other 权限更细粒度，可对指定用户或组单独设置权限。常用 getfacl file 查看详细权限条目，-R 递归查看目录，-c 省略注释头。常用于审计复杂权限配置。",
    helpOutput: `用法: getfacl [-dRLPvh] file ...

选项:
  -d, --default       显示默认 ACL
  -R, --recursive     递归显示目录
  -L, --logical       跟随符号链接（默认）
  -P, --physical      不跟随符号链接
  -t, --tabular       表格格式输出
  -n, --numeric       数字格式显示 ID
  -e, --all-effective 显示所有有效权限
  -E, --no-effective  不显示有效权限
  -c, --omit-header   不显示注释头
  --absolute-names    不去除前导斜杠
  -v, --version       显示版本
  -h, --help          显示帮助`,
    examples: [
      { description: "查看文件的 ACL 权限详情", code: "getfacl project.doc" },
      { description: "递归查看目录 ACL", code: "getfacl -R shared_dir/" },
      { description: "不显示注释头信息", code: "getfacl -q /etc/config" },
      { description: "只显示有效的 ACL 条目", code: "getfacl -e sensitive_file" },
      { description: "查看帮助文档", code: "getfacl --help" }
    ],
    relatedCommands: ["setfacl", "chmod", "chacl", "lsattr"]
  },
  {
    name: "setfacl",
    categoryId: "permission",
    syntax: "setfacl [选项] 规则 文件...",
    simpleExplain: "设置文件的 ACL 访问控制权限",
    detailExplain: "设置或修改文件和目录的 ACL 权限，实现细粒度访问控制。常用 -m u:bob:rw 为用户 bob 设置读写权限，-m g:team:rx 为组设置权限，-x 删除指定条目，-b 清除所有 ACL，-R 递归应用，--set 完全替换 ACL。常用于多用户协作场景下的精确授权。",
    helpOutput: `用法: setfacl [-bkndRLPvh] [{-m|-x} acl_spec] [{-M|-X} acl_file] file ...

选项:
  -m, --modify=acl        修改 ACL
  -M, --modify-file=file  从文件读取 ACL 规则修改
  -x, --remove=acl        删除指定 ACL 条目
  -X, --remove-file=file  从文件读取要删除的 ACL
  -b, --remove-all        删除所有扩展 ACL
  -k, --remove-default    删除默认 ACL
  --set=acl               设置 ACL（替换现有）
  --set-file=file         从文件读取 ACL 设置
  --mask                  重新计算有效权限掩码
  -n, --no-mask           不重新计算掩码
  -d, --default           操作默认 ACL
  -R, --recursive         递归操作
  -L, --logical           跟随符号链接
  -P, --physical          不跟随符号链接
  -v, --version           显示版本
  -h, --help              显示帮助`,
    examples: [
      { description: "为用户 bob 单独授予读权限", code: "setfacl -m u:bob:r report.pdf" },
      { description: "为 test 组授予读写权限", code: "setfacl -m g:test:rw shared_data/" },
      { description: "递归设置目录的 ACL", code: "setfacl -R -m g:devteam:rwx /opt/project/" },
      { description: "删除指定用户的 ACL 条目", code: "setfacl -x u:bob report.pdf" },
      { description: "查看帮助文档", code: "setfacl --help" }
    ],
    relatedCommands: ["getfacl", "chmod", "chacl", "chown"]
  },
  {
    name: "visudo",
    categoryId: "permission",
    syntax: "visudo",
    simpleExplain: "安全编辑 sudoers 配置文件",
    detailExplain: "专门用于安全编辑 /etc/sudoers 文件的工具，保存前自动进行语法检查，防止配置错误导致 sudo 失效。应始终使用 visudo 而非普通编辑器修改 sudoers，-f file 可指定其他 sudoers 文件，-c 仅检查语法不保存。常用于配置用户或组的提权规则。",
    helpOutput: `visudo - 安全地编辑 sudoers 文件

用法: visudo [-chqsV] [[-f] sudoers ]

选项:
  -c, --check              仅检查模式
  -f, --file=sudoers       指定 sudoers 文件位置
  -h, --help               显示帮助消息并退出
  -I, --no-includes        不编辑包含文件
  -q, --quiet              更简洁（安静）的语法错误消息
  -s, --strict             严格语法检查
  -V, --version            显示版本信息并退出

`,
    examples: [
      { description: "编辑 sudoers 文件", code: "sudo visudo" },
      { description: "检查 sudoers 文件语法", code: "sudo visudo -c" },
      { description: "使用指定编辑器打开", code: "sudo EDITOR=vim visudo" },
      { description: "编辑指定的 sudoers 片段文件", code: "sudo visudo -f /etc/sudoers.d/custom" },
      { description: "查看帮助文档", code: "visudo --help" }
    ],
    relatedCommands: ["sudo", "su", "chmod", "chown"]
  },
  {
    name: "capsh",
    categoryId: "permission",
    syntax: "capsh [选项]",
    simpleExplain: "管理 Linux 进程能力（capabilities）",
    detailExplain: "查看和操作 Linux capabilities（能力），将 root 权限拆分为数十种细粒度权限（如 CAP_NET_BIND_SERVICE 绑定特权端口、CAP_SYS_ADMIN 系统管理）。常用 --print 显示当前进程能力集，--drop=CAP_xxx 移除指定能力，--caps 设置能力。常用于容器和服务最小权限配置。",
    helpOutput: `用法: capsh [args ...]
  --addamb=xxx   将 xxx,... 能力添加到 ambient 集合
  --cap-uid=<n>  使用 libcap cap_setuid() 更改 uid
  --caps=xxx     按 cap_from_text() 设置 caps
  --chroot=path  chroot(2) 到此路径
  --current      显示当前 caps 和 IAB 向量
  --decode=xxx   将十六进制字符串解码为 caps 列表
  --delamb=xxx   从 ambient 集合中移除 xxx,... 能力
  --drop=xxx     从 bounding 集合中丢弃 xxx,... caps
  --explain=xxx  解释能力 xxx 允许什么
  --forkfor=<n>  fork 并使子进程休眠 <n> 秒
  --gid=<n>      将 gid 设置为 <n>（提示: id <username>）
  --groups=g,... 设置附加组
  --has-a=xxx    如果能力 xxx 不在 ambient 中则退出 1
  --has-b=xxx    如果能力 xxx 未被丢弃则退出 1
  --has-ambient  如果不支持 ambient 向量则退出 1
  --has-i=xxx    如果能力 xxx 不可继承则退出 1
  --has-p=xxx    如果能力 xxx 不被允许则退出 1
  --has-no-new-privs  如果权限未受限则退出 1
  --help, -h     显示此消息（或尝试 'man capsh'）
  --iab=...      使用 cap_iab_from_text() 设置 iab
  --inh=xxx      设置 xxx,.. 可继承集合
  --inmode=<xxx> 如果当前模式不是 <xxx> 则退出 1
  --is-uid=<n>   如果 uid != <n> 则退出 1
  --is-gid=<n>   如果 gid != <n> 则退出 1
  --keep=<n>     将 keep-capability 位设置为 <n>
  --killit=<n>   向子进程发送 signal(n)
  --license      显示许可证信息
  --mode         显示当前 libcap 模式
  --mode=<xxx>   将 libcap 模式设置为 <xxx>
  --modes        列出 libcap 命名模式
  --no-new-privs 设置粘性进程权限限制器
  --noamb        重置（丢弃）所有 ambient 能力
  --noenv        不修复环境变量（用于 --user）
  --print        显示能力相关状态
  --quiet        如果是第一个参数则跳过最大 cap 检查
  --secbits=<n>  为 securebits 写入新值
  --shell=/xx/yy 使用 /xx/yy 代替 /bin/bash 用于 --
  --strict       切换 --caps、--drop 和 --inh 修复
  --suggest=text 在能力描述中搜索 text
  --supports=xxx 如果不支持能力 xxx 则退出 1
  --uid=<n>      将 uid 设置为 <n>（提示: id <username>）
  --user=<name>  将 uid、gid 和组设置为该用户的值
  ==             使用 -- 的参数重新执行(capsh)
  =+             使用 -+ 的参数 cap_launch capsh
  --             剩余参数用于 /bin/bash
  -+             使用剩余参数 cap_launch /bin/bash
                 （不带 -- [capsh] 将简单地 exit(0)）
`,
    examples: [
      { description: "查看当前进程的所有能力", code: "capsh --print" },
      { description: "以指定能力运行命令", code: "sudo capsh --caps='cap_net_raw+eip' -- -c 'ping 8.8.8.8'" },
      { description: "丢弃所有能力后运行 Shell", code: "capsh --drop=all -- -c 'id'" },
      { description: "查看支持的所有能力", code: "capsh --supports" },
      { description: "查看帮助文档", code: "capsh --help" }
    ],
    relatedCommands: ["sudo", "chmod", "setfacl", "selinux"]
  },
  {
    name: "semanage",
    categoryId: "permission",
    syntax: "semanage [选项]",
    simpleExplain: "管理 SELinux 策略配置",
    detailExplain: "配置 SELinux 策略的工具，用于管理文件安全上下文、端口标签、用户角色、登录映射等。常用子命令：fcontext 管理文件上下文规则，port 管理端口标签，login 管理用户映射，user 管理角色，-a 添加、-m 修改、-d 删除、-l 列出。SELinux 拒绝访问时常用此工具放行。",
    helpOutput: `用法: semanage {login|user|port|interface|fcontext|translation|boolean|...} ...

子命令:
  login       管理 SELinux 用户映射
  user        管理 SELinux 用户
  port        管理端口定义
  interface   管理网络接口定义
  fcontext    管理文件上下文定义
  translation 管理 MCS/MLS 标签翻译
  boolean     管理 SELinux 布尔值
  node        管理节点定义
  ibpkey      管理 InfiniBand pkey
  ibendport   管理 InfiniBand 端口

通用选项:
  -a, --add        添加
  -d, --delete     删除
  -m, --modify     修改
  -l, --list       列出
  -C, --locallist  列出本地自定义
  -D, --deleteall  删除所有本地自定义
  -t, --type       指定 SELinux 类型
  -r, --range      指定 MLS/MCS 范围
  -R, --role       指定角色
  -s, --seuser     指定 SELinux 用户
  -p, --proto      指定协议（tcp/udp）
  -n, --noreload   不重新加载策略
  -S, --store      指定策略存储
  -h, --help       显示帮助`,
    examples: [
      { description: "查看所有端口策略", code: "sudo semanage port -l" },
      { description: "给 HTTP 服务添加自定义端口", code: "sudo semanage port -a -t http_port_t -p tcp 8080" },
      { description: "查看文件上下文策略", code: "sudo semanage fcontext -l" },
      { description: "删除自定义端口规则", code: "sudo semanage port -d -t http_port_t -p tcp 8080" },
      { description: "查看帮助文档", code: "semanage --help" }
    ],
    relatedCommands: ["selinux", "getenforce", "chcon", "restorecon"]
  },

  // ==================== 系统信息 ====================
  {
    name: "uname",
    categoryId: "system",
    syntax: "uname [选项]",
    simpleExplain: "显示系统内核和主机信息",
    detailExplain: "显示系统内核和操作系统信息。常用 -a 显示全部信息（内核名、主机名、内核版本、编译信息、硬件架构等），-r 仅显示内核版本号，-m 显示硬件架构（如 x86_64），-n 显示主机名，-s 显示内核名。常用于排查驱动或软件兼容性问题。",
    helpOutput: `用法: uname [选项]...
打印某些系统信息。不带选项时，等同于 -s。

  -a, --all                打印所有信息，按以下顺序，
                             但如果 -p 和 -i 未知则省略:
  -s, --kernel-name        打印内核名称
  -n, --nodename           打印网络节点主机名
  -r, --kernel-release     打印内核发行版本
  -v, --kernel-version     打印内核版本
  -m, --machine            打印机器硬件名称
  -p, --processor          打印处理器类型（不可移植）
  -i, --hardware-platform  打印硬件平台（不可移植）
  -o, --operating-system   打印操作系统
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/uname>
或通过本地命令获取: info '(coreutils) uname invocation'
`,
    examples: [
      { description: "显示所有系统信息", code: "uname -a" },
      { description: "只显示内核名称", code: "uname -s", output: "Linux" },
      { description: "显示内核版本号", code: "uname -r" },
      { description: "显示处理器架构", code: "uname -m", output: "x86_64" },
      { description: "查看帮助文档", code: "uname --help" }
    ],
    relatedCommands: ["hostname", "lsb_release", "arch", "cat /proc/version"]
  },
  {
    name: "hostname",
    categoryId: "system",
    syntax: "hostname [选项] [名称]",
    simpleExplain: "查看或设置系统主机名",
    detailExplain: "显示或设置系统主机名。直接执行显示当前主机名，hostname newname 临时设置主机名（重启失效），-f 显示 FQDN 完整域名，-I 显示所有 IP 地址，-d 显示域名。永久修改需写入 /etc/hostname 或使用 hostnamectl set-hostname。常用于网络配置和集群节点标识。",
    helpOutput: `用法: hostname [-b] {hostname|-F file}         设置主机名（从文件）
       hostname [-a|-A|-d|-f|-i|-I|-s|-y]       显示格式化名称
       hostname                                 显示主机名

       {yp,nis,}domainname {nisdomain|-F file}  设置 NIS 域名（从文件）
       {yp,nis,}domainname                      显示 NIS 域名

       dnsdomainname                            显示 dns 域名

       hostname -V|--version|-h|--help          打印信息并退出

程序名:
       {yp,nis,}domainname=hostname -y
       dnsdomainname=hostname -d

程序选项:
    -a, --alias            别名
    -A, --all-fqdns        所有长主机名（FQDN）
    -b, --boot             如果没有可用主机名则设置默认主机名
    -d, --domain           DNS 域名
    -f, --fqdn, --long     长主机名（FQDN）
    -F, --file             从给定文件读取主机名或 NIS 域名
    -i, --ip-address       主机名的地址
    -I, --all-ip-addresses 主机的所有地址
    -s, --short            短主机名
    -y, --yp, --nis        NIS/YP 域名

描述:
   此命令可以获取或设置主机名或 NIS 域名。您也可以
   获取 DNS 域或 FQDN（完全限定域名）。
   除非您使用 bind 或 NIS 进行主机查找，否则您可以在
   /etc/hosts 文件中更改 FQDN（完全限定域名）和 DNS 域名
   （它是 FQDN 的一部分）。
`,
    examples: [
      { description: "查看当前主机名", code: "hostname", output: "my-server-01" },
      { description: "查看完整域名", code: "hostname -f" },
      { description: "查看主机所有 IP 地址", code: "hostname -I" },
      { description: "临时修改主机名", code: "hostname new-name" },
      { description: "查看帮助文档", code: "hostname --help" }
    ],
    relatedCommands: ["uname", "hostnamectl", "dnsdomainname", "nisdomainname"]
  },
  {
    name: "uptime",
    categoryId: "system",
    syntax: "uptime [选项]",
    simpleExplain: "查看系统运行时间和负载",
    detailExplain: "显示系统运行时长、当前登录用户数和系统平均负载。输出包含当前时间、已连续运行时间、登录用户数、过去 1/5/15 分钟的平均负载。负载值超过 CPU 核心数通常表示系统过载。常用于快速判断服务器运行状态和负载状况。",
    helpOutput: `
用法:
 uptime [options]

选项:
 -p, --pretty   以美观格式显示运行时间
 -h, --help     显示此帮助并退出
 -s, --since    系统启动时间
 -V, --version  输出版本信息并退出

更多详情见 uptime(1)。
`,
    examples: [
      { description: "显示系统运行时间和负载", code: "uptime" },
      { description: "只显示自启动以来的秒数", code: "uptime -s" },
      { description: "以简洁格式显示", code: "uptime -p" },
      { description: "查看帮助文档", code: "uptime --help" }
    ],
    relatedCommands: ["w", "top", "free", "who"]
  },
  {
    name: "free",
    categoryId: "system",
    syntax: "free [选项]",
    simpleExplain: "查看内存和交换空间使用情况",
    detailExplain: "显示系统内存和 swap 交换分区使用情况。默认以 KB 为单位，-h 以人类可读格式显示（自动转 MB/GB），-m/-g 指定单位，-s N 每 N 秒刷新一次，-t 显示合计。输出包含 total/used/free/shared/buff/cache/available，available 是实际可用内存。常用于排查内存不足问题。",
    helpOutput: `
用法:
 free [options]

选项:
 -b, --bytes         以字节为单位显示输出
     --kilo          以千字节为单位显示输出
     --mega          以兆字节为单位显示输出
     --giga          以吉字节为单位显示输出
     --tera          以太字节为单位显示输出
     --peta          以拍字节为单位显示输出
 -k, --kibi          以 kibibytes 为单位显示输出
 -m, --mebi          以 mebibytes 为单位显示输出
 -g, --gibi          以 gibibytes 为单位显示输出
     --tebi          以 tebibytes 为单位显示输出
     --pebi          以 pebibytes 为单位显示输出
 -h, --human         显示人类可读的输出
     --si            使用 1000 的幂而不是 1024
 -l, --lohi          显示详细的低端和高端内存统计
 -L, --line          在单行上显示输出
 -t, --total         显示 RAM + swap 的总和
 -v, --committed     显示已提交内存和提交限制
 -s N, --seconds N   每 N 秒重复打印一次
 -c N, --count N     重复打印 N 次后退出
 -w, --wide          宽格式输出

     --help     显示此帮助并退出
 -V, --version  输出版本信息并退出

更多详情见 free(1)。
`,
    examples: [
      { description: "以人类友好的格式显示内存信息", code: "free -h" },
      { description: "以 MB 为单位显示", code: "free -m" },
      { description: "每秒刷新显示", code: "free -s 2" },
      { description: "显示总汇总信息", code: "free -t" },
      { description: "查看帮助文档", code: "free --help" }
    ],
    relatedCommands: ["top", "vmstat", "ps", "pmap"]
  },
  {
    name: "df",
    categoryId: "system",
    syntax: "df [选项]",
    simpleExplain: "查看文件系统磁盘空间使用",
    detailExplain: "显示文件系统的磁盘空间使用情况。默认显示所有挂载文件系统，-h 以人类可读格式显示，-T 显示文件系统类型，-i 显示 inode 使用情况，-t type 过滤指定文件系统类型，-x type 排除指定类型。常用于排查磁盘空间不足和 inode 耗尽问题。",
    helpOutput: `用法: df [选项]... [FILE]...
显示每个 FILE 所在文件系统的信息，
默认显示所有文件系统。

长选项的必选参数对短选项同样必选。
  -a, --all             包括伪文件系统、重复文件系统、不可访问的文件系统
  -B, --block-size=SIZE  打印前按 SIZE 缩放大小；例如，
                           '-BM' 以 1,048,576 字节为单位打印大小；
                           参见下文的 SIZE 格式
  -h, --human-readable  以 1024 的幂打印大小（例如 1023M）
  -H, --si              以 1000 的幂打印大小（例如 1.1G）
  -i, --inodes          列出 inode 信息而不是块使用情况
  -k                    类似 --block-size=1K
  -l, --local           限制只列出本地文件系统
      --no-sync         获取使用信息前不调用 sync（默认）
      --output[=FIELD_LIST]  使用 FIELD_LIST 定义的输出格式，
                               如果省略 FIELD_LIST 则打印所有字段。
  -P, --portability     使用 POSIX 输出格式
      --sync            获取使用信息前调用 sync
      --total           省略所有对可用空间无关紧要的条目，
                          并生成总计
  -t, --type=TYPE       限制只列出 TYPE 类型的文件系统
  -T, --print-type      打印文件系统类型
  -x, --exclude-type=TYPE   限制只列出非 TYPE 类型的文件系统
  -v                    （忽略）
      --help        显示此帮助并退出
      --version     输出版本信息并退出

显示值的单位依次取自 --block-size 以及 DF_BLOCK_SIZE、BLOCK_SIZE 和
BLOCKSIZE 环境变量中第一个可用的 SIZE。
否则，单位默认为 1024 字节（如果设置了 POSIXLY_CORRECT 则为 512）。

SIZE 参数是整数和可选单位（例如: 10K 即 10*1024）。
单位为 K,M,G,T,P,E,Z,Y,R,Q（1024 的幂）或 KB,MB,...（1000 的幂）。
也可使用二进制前缀: KiB=K, MiB=M，以此类推。

FIELD_LIST 是要包含的列的逗号分隔列表。有效的
字段名为: 'source'、'fstype'、'itotal'、'iused'、'iavail'、'ipcent'、
'size'、'used'、'avail'、'pcent'、'file' 和 'target'（参见 info 页）。

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/df>
或通过本地命令获取: info '(coreutils) df invocation'
`,
    examples: [
      { description: "以人类易读格式显示磁盘使用情况", code: "df -h" },
      { description: "显示 inode 使用情况", code: "df -hi" },
      { description: "只显示本地文件系统", code: "df -hl" },
      { description: "指定显示某种文件系统类型", code: "df -t ext4" },
      { description: "查看帮助文档", code: "df --help" }
    ],
    relatedCommands: ["du", "lsblk", "fdisk", "mount"]
  },
  {
    name: "du",
    categoryId: "system",
    syntax: "du [选项] [目录/文件]",
    simpleExplain: "查看目录或文件的磁盘占用",
    detailExplain: "统计文件或目录占用的磁盘空间。默认以 KB 为单位递归统计，-h 人类可读格式，-s 仅显示总计不展开子目录，-d N 或 --max-depth=N 限制递归深度，-a 显示所有文件而不仅是目录，--exclude 排除匹配模式。常用于定位占用空间大的目录。",
    helpOutput: `用法: du [选项]... [FILE]...
  或:  du [选项]... --files0-from=F
汇总一组 FILE 的设备使用情况，对目录递归处理。

长选项的必选参数对短选项同样必选。
  -0, --null            以 NUL 而非换行符结束每行输出
  -a, --all             为所有文件写入计数，而不仅仅是目录
      --apparent-size   打印表观大小而不是设备使用情况；虽然
                          表观大小通常更小，但由于（'稀疏'）文件中的
                          空洞、内部碎片、间接块等原因，
                          它可能更大
  -B, --block-size=SIZE  打印前按 SIZE 缩放大小；例如，
                           '-BM' 以 1,048,576 字节为单位打印大小；
                           参见下文的 SIZE 格式
  -b, --bytes           等同于 '--apparent-size --block-size=1'
  -c, --total           生成总计
  -D, --dereference-args  仅解引用命令行中列出的符号链接
  -d, --max-depth=N     仅当目录（或使用 --all 时的文件）在命令行
                          参数以下 N 层或更少时才打印其总计；
                          --max-depth=0 等同于 --summarize
      --files0-from=F   汇总文件 F 中指定的以 NUL 结尾的
                          文件名的设备使用情况；
                          如果 F 是 -，则从标准输入读取文件名
  -H                    等同于 --dereference-args (-D)
  -h, --human-readable  以人类可读格式打印大小（例如 1K 234M 2G）
      --inodes          列出 inode 使用信息而不是块使用情况
  -k                    类似 --block-size=1K
  -L, --dereference     解引用所有符号链接
  -l, --count-links     如果是硬链接则多次计数大小
  -m                    类似 --block-size=1M
  -P, --no-dereference  不跟随任何符号链接（这是默认行为）
  -S, --separate-dirs   对于目录，不包含子目录的大小
      --si              类似 -h，但使用 1000 的幂而不是 1024
  -s, --summarize       仅显示每个参数的总计
  -t, --threshold=SIZE  如果为正数则排除小于 SIZE 的条目，
                          如果为负数则排除大于 SIZE 的条目
      --time            显示目录或其任何子目录中任何文件的
                          最后修改时间
      --time=WORD       以 WORD 显示时间而不是修改时间:
                          atime、access、use、ctime 或 status
      --time-style=STYLE  使用 STYLE 显示时间，可以是:
                            full-iso、long-iso、iso 或 +FORMAT；
                            FORMAT 的解释方式与 'date' 相同
  -X, --exclude-from=FILE  排除匹配 FILE 中任何模式的文件
      --exclude=PATTERN    排除匹配 PATTERN 的文件
`,
    examples: [
      { description: "以人类易读格式显示当前目录总大小", code: "du -sh ." },
      { description: "显示每个子目录的大小并排序", code: "du -sh * | sort -rh | head -10" },
      { description: "递归显示所有文件和目录的大小", code: "du -ah /var/log/" },
      { description: "排除某些目录不计入统计", code: "du -sh --exclude='*.git' project/" },
      { description: "查看帮助文档", code: "du --help" }
    ],
    relatedCommands: ["df", "ncdu", "ls", "find"]
  },
  {
    name: "who",
    categoryId: "system",
    syntax: "who [选项]",
    simpleExplain: "查看当前登录的用户列表",
    detailExplain: "显示当前登录到系统的所有用户信息。输出包含用户名、终端设备、登录时间、来源主机。常用 -b 显示上次系统启动时间，-q 仅显示用户名和总数，-m 仅显示当前终端用户，--count 统计登录数。常用于审计系统访问情况。",
    helpOutput: `用法: who [选项]... [ FILE | ARG1 ARG2 ]
打印当前已登录用户的信息。

  -a, --all         等同于 -b -d --login -p -r -t -T -u
  -b, --boot        最后一次系统启动时间
  -d, --dead        打印死进程
  -H, --heading     打印列标题行
  -l, --login       打印系统登录进程
      --lookup      尝试通过 DNS 规范化主机名
  -m                仅与 stdin 关联的主机名和用户
  -p, --process     打印由 init 产生的活动进程
  -q, --count       所有登录名和已登录用户数
  -r, --runlevel    打印当前运行级别
  -s, --short       仅打印名称、终端和时间（默认）
  -t, --time        打印最后一次系统时钟更改
  -T, -w, --mesg    添加用户消息状态为 +、- 或 ?
  -u, --users       列出已登录用户
      --message     等同于 -T
      --writable    等同于 -T
      --help        显示此帮助并退出
      --version     输出版本信息并退出

如果未指定 FILE，则使用 /var/run/utmp。常用 /var/log/wtmp 作为 FILE。
如果给定 ARG1 ARG2，则假定为 -m: 'am i' 或 'mom likes' 是常见的用法。

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译错误至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/who>
或通过本地命令获取: info '(coreutils) who invocation'
`,
    examples: [
      { description: "显示当前所有登录用户", code: "who" },
      { description: "显示系统启动时间", code: "who -b" },
      { description: "显示死掉的进程", code: "who -d" },
      { description: "显示所有登录用户的计数", code: "who -q" },
      { description: "查看帮助文档", code: "who --help" }
    ],
    relatedCommands: ["w", "users", "last", "finger"]
  },
  {
    name: "w",
    categoryId: "system",
    syntax: "w [选项] [用户]",
    simpleExplain: "查看登录用户及其活动",
    detailExplain: "显示当前登录用户及其活动信息，是 who 的增强版。输出顶部显示系统当前时间、运行时长、用户数、平均负载，下方每行包含用户名、终端、来源主机、登录时间、空闲时间、JCPU、PCPU 和当前正在执行的进程。常用于排查用户行为和系统占用。",
    helpOutput: `
用法:
 w [options] [user]

选项:
 -h, --no-header     不打印标题
 -u, --no-current    忽略当前进程用户名
 -s, --short         短格式
 -f, --from          显示远程主机名字段
 -o, --old-style     旧式输出
 -i, --ip-addr       显示 IP 地址而不是主机名（如果可能）
 -p, --pids          显示 WHAT 中进程的 PID

     --help     显示此帮助并退出
 -V, --version  输出版本信息并退出

更多详情见 w(1)。
`,
    examples: [
      { description: "显示所有登录用户及其活动", code: "w" },
      { description: "不显示头部信息", code: "w -h" },
      { description: "只显示指定用户的信息", code: "w alice" },
      { description: "以旧格式输出", code: "w -o" },
      { description: "查看帮助文档", code: "w --help" }
    ],
    relatedCommands: ["who", "uptime", "users", "finger"]
  },
  {
    name: "lsb_release",
    categoryId: "system",
    syntax: "lsb_release [选项]",
    simpleExplain: "查看 Linux 发行版详细信息",
    detailExplain: "显示 Linux 发行版信息。常用 -a 显示全部信息（发行版名称、版本号、代号、描述），-d 仅显示描述行，-r 显示版本号，-c 显示代号，-i 显示发行版 ID。部分发行版需安装 lsb-core 包。常用于确认系统版本以选择正确的软件包或配置。",
    helpOutput: `用法: lsb_release [options]

选项:
  -h, --help         显示此帮助消息并退出
  -v, --version      显示此系统支持的 LSB 模块
  -i, --id           显示发行商 ID
  -d, --description  显示此发行版的描述
  -r, --release      显示此发行版的版本号
  -c, --codename     显示此发行版的代号
  -a, --all          显示上述所有信息
  -s, --short        以短格式显示请求的信息
`,
    examples: [
      { description: "显示发行版的全部信息", code: "lsb_release -a" },
      { description: "只显示发行版描述信息", code: "lsb_release -d" },
      { description: "只显示版本号", code: "lsb_release -r" },
      { description: "只显示代号名称", code: "lsb_release -c" },
      { description: "查看帮助文档", code: "lsb_release --help" }
    ],
    relatedCommands: ["uname", "cat /etc/os-release", "hostnamectl", "rpm -q"]
  },
  {
    name: "lscpu",
    categoryId: "system",
    syntax: "lscpu [选项]",
    simpleExplain: "查看 CPU 架构和详细信息",
    detailExplain: "显示 CPU 架构和详细信息。输出包含 CPU 型号、架构、字节序、CPU 数量、每个核心的线程数、核心数、插座数、主频、缓存各级大小、虚拟化支持、标志位等。无需参数即可查看完整信息，常用于性能调优和软件编译优化配置。",
    helpOutput: `
用法:
 lscpu [选项]

显示 CPU 架构信息。

选项:
 -a, --all               同时显示在线和离线 CPU（-e 的默认值）
 -b, --online            仅显示在线 CPU（-p 的默认值）
 -B, --bytes             以字节为单位显示大小，而非人类可读格式
 -C, --caches[=<列表>]   以扩展可读格式显示缓存信息
 -c, --offline           仅显示离线 CPU
 -J, --json              默认或扩展格式使用 JSON
 -e, --extended[=<列表>] 以扩展可读格式输出
 -p, --parse[=<列表>]    以可解析格式输出
 -s, --sysroot <目录>    使用指定目录作为系统根目录
 -x, --hex               打印十六进制掩码而非 CPU 列表
 -y, --physical          打印物理 ID 而非逻辑 ID
     --hierarchic[=when] 在摘要中使用子节（auto、never、always）
     --output-all        为 -e、-p 或 -C 打印所有可用列

 -h, --help              显示此帮助
 -V, --version           显示版本

-e 或 -p 的可用输出列:
      BOGOMIPS  CPU 速度的粗略测量
           CPU  逻辑 CPU 编号
          CORE  逻辑核心编号
        SOCKET  逻辑插槽编号
       CLUSTER  逻辑集群编号
          NODE  逻辑 NUMA 节点编号
          BOOK  逻辑 book 编号
        DRAWER  逻辑 drawer 编号
         CACHE  显示 CPU 间如何共享缓存
  POLARIZATION  虚拟硬件上的 CPU 调度模式
       ADDRESS  CPU 的物理地址
    CONFIGURED  显示 hypervisor 是否已分配该 CPU
        ONLINE  显示 Linux 当前是否使用该 CPU
           MHZ  显示 CPU 的当前 MHz
      SCALMHZ%  显示 CPU 频率的缩放百分比
        MAXMHZ  显示 CPU 的最大 MHz
        MINMHZ  显示 CPU 的最小 MHz
     MODELNAME  显示 CPU 型号名称

-C 的可用输出列:
      ALL-SIZE  所有系统缓存的大小
         LEVEL  缓存级别
          NAME  缓存名称
      ONE-SIZE  单个缓存的大小
          TYPE  缓存类型
          WAYS  相联度
  ALLOC-POLICY  分配策略
  WRITE-POLICY  写策略
      PHY-LINE  每个缓存标记的物理缓存行数
          SETS  缓存中的组数；同组的缓存行具有相同缓存索引
 COHERENCY-SIZE  从内存传输到缓存的最小数据量（字节）

更多详情见 lscpu(1)。
`,
    examples: [
      { description: "显示 CPU 的完整信息", code: "lscpu" },
      { description: "以可解析格式输出", code: "lscpu -p" },
      { description: "只显示缓存信息", code: "lscpu -C" },
      { description: "查看帮助文档", code: "lscpu --help" }
    ],
    relatedCommands: ["uname -m", "nproc", "cat /proc/cpuinfo", "hwinfo"]
  },
  {
    name: "vmstat",
    categoryId: "system",
    syntax: "vmstat [选项] [间隔 [次数]]",
    simpleExplain: "查看系统虚拟内存和进程统计",
    detailExplain: "报告虚拟内存、进程、IO、CPU 等系统综合状态。常用 vmstat 1 每秒刷新一次，vmstat 1 5 刷新 5 次后退出，-a 显示活跃/非活跃内存，-d 显示磁盘统计，-s 以事件计数形式显示。输出中 r 列表示等待运行的进程数，b 列表示阻塞进程数。常用于排查系统性能瓶颈。",
    helpOutput: `
用法:
 vmstat [选项] [延迟 [次数]]

选项:
 -a, --active           活动/非活动内存
 -f, --forks            自启动以来的 fork 次数
 -m, --slabs            slabinfo
 -n, --one-header       不重复显示标题
 -s, --stats            事件计数器统计
 -d, --disk             磁盘统计
 -D, --disk-sum         汇总磁盘统计
 -p, --partition <设备>  分区特定统计
 -S, --unit <字符>      定义显示单位
 -w, --wide             宽格式输出
 -t, --timestamp        显示时间戳
 -y, --no-first         跳过第一行输出

 -h, --help     显示此帮助并退出
 -V, --version  输出版本信息并退出

更多详情见 vmstat(8)。
`,
    examples: [
      { description: "显示一次系统概要统计", code: "vmstat" },
      { description: "每 2 秒刷新显示一次，共显示 5 次", code: "vmstat 2 5" },
      { description: "显示 slab 内核对象缓存信息", code: "vmstat -m" },
      { description: "显示磁盘统计信息", code: "vmstat -d" },
      { description: "查看帮助文档", code: "vmstat --help" }
    ],
    relatedCommands: ["top", "iostat", "mpstat", "free"]
  },
  {
    name: "iostat",
    categoryId: "system",
    syntax: "iostat [选项] [间隔 [次数]]",
    simpleExplain: "查看磁盘 I/O 统计信息",
    detailExplain: "报告 CPU 使用率和磁盘 IO 统计信息。常用 iostat 1 每秒刷新，-x 显示扩展统计（await 平均 IO 等待、util 设备利用率等），-d 仅显示磁盘，-c 仅显示 CPU，-m 以 MB 为单位，-p 显示分区级统计。常用于排查磁盘 IO 性能问题和判断是否磁盘瓶颈。",
    helpOutput: `用法: iostat [ options ] [ <interval> [ <count> ] ]

选项:
  -c            显示 CPU 使用统计
  -d            显示设备使用统计
  -h            人类可读格式（NFS）
  -j            以 JSON 格式输出
  -k            以 KB/s 显示
  -m            以 MB/s 显示
  -N            显示注册设备映射器名
  -n            显示 NFS 统计
  -p [device]   显示块设备及分区
  -s            显示短路输出
  -t            显示时间戳
  -T            显示仅总计
  -x            显示扩展统计
  -y            跳过首条输出
  -z            跳过无活动设备
  --dec=N       小数位数（0-2）
  --human       人类可读格式
  --pretty      美化输出
  -V, --version 显示版本`,
    examples: [
      { description: "显示 CPU 和所有设备的 IO 统计", code: "iostat" },
      { description: "每 3 秒刷新显示，共 10 次", code: "iostat 3 10" },
      { description: "以人类易读格式显示", code: "iostat -h" },
      { description: "只显示指定设备", code: "iostat -p sda" },
      { description: "查看帮助文档", code: "iostat --help" }
    ],
    relatedCommands: ["vmstat", "mpstat", "iotop", "sar"]
  },
  {
    name: "mpstat",
    categoryId: "system",
    syntax: "mpstat [选项] [间隔 [次数]]",
    simpleExplain: "查看各 CPU 核心使用情况",
    detailExplain: "报告每个 CPU 核心的使用率统计。常用 mpstat -P ALL 1 每秒显示所有核心利用率，输出区分 %usr 用户态、%sys 系统态、%iowait IO 等待、%idle 空闲、%soft 软中断等。常用于分析 CPU 负载分布不均、软中断过高或多核性能问题。",
    helpOutput: `用法: mpstat [ options ] [ <interval> [ <count> ] ]

选项:
  -A            等同于 -I SUM -u ALL
  -I {SUM|CPU|ALL|SCPU}  显示中断统计
  -N {ALL|node} 显示指定 NUMA 节点
  -n            显示网络统计
  -o JSON       JSON 格式输出
  -P {ALL|cpu}  显示指定 CPU
  -T            显示仅总计
  -u            显示 CPU 使用统计
  -V            显示版本
  -h            人类可读格式
  --dec=N       小数位数（0-2）

interval 两次输出间隔秒数
count   输出次数`,
    examples: [
      { description: "显示每个 CPU 核心的使用统计", code: "mpstat -P ALL" },
      { description: "每 5 秒刷新一次", code: "mpstat 5" },
      { description: "显示 CPU 0 和 CPU 1 的统计", code: "mpstat -P 0,1" },
      { description: "查看帮助文档", code: "mpstat --help" }
    ],
    relatedCommands: ["vmstat", "iostat", "top", "sar"]
  },
  {
    name: "dmesg",
    categoryId: "system",
    syntax: "dmesg [选项]",
    simpleExplain: "查看内核启动和运行日志",
    detailExplain: "显示内核环形缓冲区中的日志信息，记录硬件检测、驱动加载、内核错误、OOM 事件等启动和运行时事件。常用 -T 显示人类可读时间戳，--level=err 过滤指定级别，-w 实时跟踪新日志，-c 读取并清空缓冲区。常用于排查硬件故障、驱动问题和内核崩溃。",
    helpOutput: `
用法:
 dmesg [选项]

显示或控制内核环形缓冲区。

选项:
 -C, --clear                 清除内核环形缓冲区
 -c, --read-clear            读取并清除所有消息
 -D, --console-off           禁止向控制台打印消息
 -E, --console-on            允许向控制台打印消息
 -F, --file <文件>           使用文件代替内核日志缓冲区
 -f, --facility <列表>       限制输出为指定的设施
 -H, --human                 人类可读输出
 -J, --json                  使用 JSON 输出格式
 -k, --kernel                显示内核消息
 -L, --color[=<when>]        对消息着色（auto、always 或 never）
                               默认启用着色
 -l, --level <列表>          限制输出为指定的级别
 -n, --console-level <级别>  设置打印到控制台的消息级别
 -P, --nopager               不通过分页器输出
 -p, --force-prefix          强制在多行消息的每行输出时间戳
 -r, --raw                   打印原始消息缓冲区
     --noescape              不转义不可打印字符
 -S, --syslog                强制使用 syslog(2) 而非 /dev/kmsg
 -s, --buffer-size <大小>    查询内核环形缓冲区的缓冲区大小
 -u, --userspace             显示用户空间消息
 -w, --follow                等待新消息
 -W, --follow-new            等待并仅打印新消息
 -x, --decode                将设施和级别解码为可读字符串
 -d, --show-delta            显示打印消息间的时间差
 -e, --reltime               以可读格式显示本地时间和时间差
 -T, --ctime                 显示人类可读时间戳（可能不准确！）
 -t, --notime                不显示消息的任何时间戳
     --time-format <格式>    使用给定格式显示时间戳:
                               [delta|reltime|ctime|notime|iso]
挂起/恢复会使 ctime 和 iso 时间戳不准确。
     --since <时间>          显示指定时间之后的行
     --until <时间>          显示指定时间之前的行

 -h, --help                  显示此帮助
 -V, --version               显示版本

支持的日志设施:
    kern - 内核消息
    user - 随机用户级消息
    mail - 邮件系统
  daemon - 系统守护进程
    auth - 安全/授权消息
  syslog - syslogd 内部生成的消息
     lpr - 行式打印机子系统
    news - 网络新闻子系统

支持的日志级别（优先级）:
   emerg - 系统不可用
   alert - 必须立即采取行动
    crit - 严重条件
     err - 错误条件
    warn - 警告条件
  notice - 正常但重要的条件
    info - 信息性
   debug - 调试级消息

更多详情见 dmesg(1)。
`,
    examples: [
      { description: "查看所有内核消息", code: "dmesg | head -20" },
      { description: "实时跟踪新的内核消息", code: "dmesg -w" },
      { description: "显示人类可读的时间戳", code: "dmesg -T" },
      { description: "只显示错误级别的消息", code: "dmesg -l err,crit,alert,emerg" },
      { description: "查看帮助文档", code: "dmesg --help" }
    ],
    relatedCommands: ["journalctl", "lspci", "lsusb", "kern.log"]
  },
  {
    name: "journalctl",
    categoryId: "system",
    syntax: "journalctl [选项]",
    simpleExplain: "查看 systemd 系统日志",
    detailExplain: "查询 systemd 日志的命令行工具，集中管理系统的所有日志。常用 -u service 查看指定服务日志，--since/--until 按时间过滤，-p err 按优先级过滤，-f 实时跟踪新日志，-b 查看本次启动日志，-k 仅查看内核日志，--no-pager 不分页输出。常用于排查服务和系统问题。",
    helpOutput: `journalctl [选项...] [匹配...]

查询日志。

[0m源选项:
     --system                显示系统日志
     --user                  显示当前用户的用户日志
  -M --machine=CONTAINER     在本地容器上操作
  -m --merge                 显示所有可用日志的条目
  -D --directory=PATH        显示目录中的日志文件
     --file=PATH             显示日志文件
     --root=PATH             在备用文件系统根上操作
     --image=PATH            以磁盘镜像作为文件系统根进行操作
     --image-policy=POLICY   指定磁盘镜像解析策略
     --namespace=NAMESPACE   显示指定日志命名空间的日志数据

[0m过滤选项:
  -S --since=DATE            显示不早于指定日期的条目
  -U --until=DATE            显示不晚于指定日期的条目
  -c --cursor=CURSOR         显示从指定游标开始的条目
     --after-cursor=CURSOR   显示指定游标之后的条目
     --cursor-file=FILE      显示 FILE 中游标之后的条目并更新 FILE
  -b --boot[=ID]             显示当前启动或指定启动
  -u --unit=UNIT             显示指定单元的日志
     --user-unit=UNIT        显示指定用户单元的日志
  -t --identifier=STRING     显示具有指定 syslog 标识符的条目
  -p --priority=RANGE        显示指定优先级的条目
     --facility=FACILITY...  显示指定设施的条目
  -g --grep=PATTERN          显示 MESSAGE 匹配 PATTERN 的条目
     --case-sensitive[=BOOL] 强制区分或不区分大小写匹配
  -k --dmesg                 显示当前启动的内核消息日志

[0m输出控制选项:
  -o --output=STRING         更改日志输出模式（short、short-precise、
                               short-iso、short-iso-precise、short-full、
                               short-monotonic、short-unix、verbose、export、
                               json、json-pretty、json-sse、json-seq、cat、
                               with-unit）
     --output-fields=LIST    选择在 verbose/export/json 模式下打印的字段
  -n --lines[=[+]INTEGER]    要显示的日志条目数
  -r --reverse               最新的条目优先显示
     --show-cursor           在所有条目后打印游标
     --utc                   以协调世界时（UTC）表示时间
  -x --catalog               在可用处添加消息说明
     --no-hostname           抑制主机名字段的输出
     --no-full               省略字段
  -a --all                   显示所有字段，包括长字段和不可打印字段
  -f --follow                跟踪日志
     --no-tail               显示所有行，即使在跟踪模式
     --truncate-newline      在第一个换行符处截断条目
  -q --quiet                 不显示信息消息和权限 `,
    examples: [
      { description: "查看最近 20 条系统日志", code: "journalctl -n 20" },
      { description: "实时跟踪最新日志", code: "journalctl -f" },
      { description: "只查看 nginx 服务的日志", code: "journalctl -u nginx" },
      { description: "查看今天产生的日志", code: "journalctl --since today" },
      { description: "只显示错误和警告级别的日志", code: "journalctl -p err" },
      { description: "查看帮助文档", code: "journalctl --help" }
    ],
    relatedCommands: ["dmesg", "systemctl", "logger", "rsyslog"]
  },
  {
    name: "date",
    categoryId: "system",
    syntax: "date [选项] [+格式]",
    simpleExplain: "显示或设置系统日期时间",
    detailExplain: "显示或设置系统日期时间。直接执行显示当前时间，+%Y-%m-%d 自定义格式输出，-s \"2024-01-01 10:00:00\" 设置时间（需 root），-u 显示 UTC 时间，-d \"yesterday\" 显示指定日期，-r file 显示文件修改时间。常用于脚本时间戳生成和系统时间校准。",
    helpOutput: `用法: date [选项]... [+FORMAT]
  或:  date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]
以指定格式显示日期和时间。
使用 -s 或 [MMDDhhmm[[CC]YY][.ss]] 时，设置日期和时间。

长选项的必选参数对短选项同样必选。
  -d, --date=STRING          显示 STRING 描述的时间，而非 'now'
      --debug                标注解析的日期，
                              并将可疑用法警告到 stderr
  -f, --file=DATEFILE        类似 --date；对 DATEFILE 的每一行执行一次
  -I[FMT], --iso-8601[=FMT]  以 ISO 8601 格式输出日期/时间。
                               FMT='date' 仅日期（默认），
                               'hours'、'minutes'、'seconds' 或 'ns'
                               表示日期和时间到指定精度。
                               示例: 2006-08-14T02:34:56-06:00
  --resolution               输出时间戳的可用分辨率
                               示例: 0.000000001
  -R, --rfc-email            以 RFC 5322 格式输出日期和时间。
                               示例: Mon, 14 Aug 2006 02:34:56 -0600
      --rfc-3339=FMT         以 RFC 3339 格式输出日期/时间。
                               FMT='date'、'seconds' 或 'ns'
                               表示日期和时间到指定精度。
                               示例: 2006-08-14 02:34:56-06:00
  -r, --reference=FILE       显示 FILE 的最后修改时间
  -s, --set=STRING           设置 STRING 描述的时间
  -u, --utc, --universal     打印或设置协调世界时（UTC）
      --help        显示此帮助并退出
      --version     输出版本信息并退出

所有指定要显示日期的选项互斥。
即: --date、--file、--reference、--resolution。

FORMAT 控制输出。可解释的序列有:

  %%   字面量 %
  %a   区域设置的缩写星期名（如 Sun）
  %A   区域设置的完整星期名（如 Sunday）
  %b   区域设置的缩写月份名（如 Jan）
  %B   区域设置的完整月份名（如 January）
  %c   区域设置的日期和时间（如 Thu Mar  3 23:05:25 2005）
  %C   世纪；类似 %Y，但省略最后两位（如 20）
  %d   月份中的日（如 01）
  %D   日期；等同于 %m/%d/%y
  %e   月份中的日，空格填充；等同于 %_d
  %F   完整日期；类似 %+4Y-%m-%d
  %g   ISO 周编号年份的后两位（见 %G）
  %G   ISO 周编号的年份（见 %V）；通常仅与 %V 一起使用
  %h   等同于 %b
  %H   小时（00..23）
  %I   小时（01..12）
  %j   年中的日（001..366）
  %k   小时，空格填充（ 0..23）；等同于 %_H
  %l   小时，空格填充（ 1..12）；等同于 %_I
  %m   月份（01..12）
  %M   分钟（00..59）
  %n   换行符
  %N   纳秒（000000000..999999999）
  %p   区域设置中等同于 AM 或 PM 的表示；未知则为空
  %P   类似 %p，但小写
  %q   季度（1..4）
  %r   区域设置的 12 小时制时间（如`,
    examples: [
      { description: "显示当前日期和时间", code: "date" },
      { description: "以指定格式显示时间", code: "date '+%Y-%m-%d_%H:%M:%S'" },
      { description: "显示 Unix 时间戳", code: "date +%s" },
      { description: "将时间戳转换为可读日期", code: "date -d @1736919000" },
      { description: "查看帮助文档", code: "date --help" }
    ],
    relatedCommands: ["cal", "timedatectl", "hwclock", "tzselect"]
  },
  {
    name: "cal",
    categoryId: "system",
    syntax: "cal [选项] [[月] 年]",
    simpleExplain: "显示月历或年历",
    detailExplain: "显示日历。直接执行显示当月日历，cal 2024 显示整年日历，cal 3 2024 显示 2024 年 3 月，-3 显示上月、当月、下月，-y 显示整年，-j 以一年中的第几天（儒略日）显示，-m 以周一为每周起始。常用于快速查看日期和编写脚本时确认星期。",
    helpOutput: `用法: cal [options] [[[day] month] year]

选项:
  -1, --one          只显示当前月（默认）
  -3, --three        显示上月/本月/下月
  -s, --sunday       周日为每周第一天
  -m, --monday       周一为每周第一天
  -j, --julian       显示儒略历（年内天数）
  -y, --year         显示全年日历
  -Y, --twelve       显示全年日历
  -w, --week[=NUM]   显示周数
  -v, --vertical     垂直显示
      --color[=WHEN] 颜色: auto, always, never
  -c, --columns N    每行月数
  -r, --reform VAL   历法改革日期
  -V, --version      显示版本
  -h, --help         显示帮助`,
    examples: [
      { description: "显示当前月份的日历", code: "cal" },
      { description: "显示 2025 年整年的日历", code: "cal 2025" },
      { description: "显示 2025 年 2 月的日历", code: "cal 2 2025" },
      { description: "显示本周视图", code: "cal -3" },
      { description: "查看帮助文档", code: "cal --help" }
    ],
    relatedCommands: ["date", "timedatectl", "calendar", "gcal"]
  },
  {
    name: "timedatectl",
    categoryId: "system",
    syntax: "timedatectl [命令]",
    simpleExplain: "管理系统时间和时区设置",
    detailExplain: "查询和修改系统时间、时区及 NTP 同步状态。常用子命令：status 显示当前时间配置，set-timezone 设置时区，set-ntp 开启或关闭网络时间同步。在 systemd 系统上是管理时间的标准工具。",
    helpOutput: `timedatectl [选项...] 命令 ...

查询或更改系统时间和日期设置。

命令:
  status                   显示当前时间设置
  show                     显示 systemd-timedated 的属性
  set-time TIME            设置系统时间
  set-timezone ZONE        设置系统时区
  list-timezones           显示已知时区
  set-local-rtc BOOL       控制 RTC 是否使用本地时间
  set-ntp BOOL             启用或禁用网络时间同步

systemd-timesyncd 命令:
  timesync-status          显示 systemd-timesyncd 的状态
  show-timesync            显示 systemd-timesyncd 的属性
  ntp-servers INTERFACE SERVER…
                           设置接口特定的 NTP 服务器
  revert INTERFACE         恢复接口特定的 NTP 服务器

选项:
  -h --help                显示此帮助信息
     --version             显示软件包版本
     --no-pager            不通过分页器输出
     --no-ask-password     不提示输入密码
  -H --host=[USER@]HOST    在远程主机上操作
  -M --machine=CONTAINER   在本地容器上操作
     --adjust-system-clock 更改本地 RTC 模式时调整系统时钟
     --monitor             监控 systemd-timesyncd 的状态
  -p --property=NAME       仅显示此名称的属性
  -a --all                 显示所有属性，包括空的
     --value               显示属性时仅打印值

详情见 timedatectl(1) 手册页。
`,
    examples: [
      { description: "显示完整的时间和时区信息", code: "timedatectl status" },
      { description: "列出所有可用的时区", code: "timedatectl list-timezones" },
      { description: "设置时区为上海时间", code: "timedatectl set-timezone Asia/Shanghai" },
      { description: "开启 NTP 自动同步时间", code: "timedatectl set-ntp true" },
      { description: "查看帮助文档", code: "timedatectl --help" }
    ],
    relatedCommands: ["date", "cal", "hwclock", "ntpdate"]
  },
  {
    name: "locale",
    categoryId: "system",
    syntax: "locale [选项]",
    simpleExplain: "查看和设置系统语言区域",
    detailExplain: "显示或设置系统的语言和地区相关环境变量，影响字符编码、日期格式、货币符号等。不带参数时显示当前 locale 设置，-a 列出系统支持的所有 locale，-m 列出可用的字符映射。终端乱码通常是 locale 配置不当导致。",
    helpOutput: `用法: locale [选项...] NAME
  或:  locale [选项...] [-a|-m]
获取区域设置相关信息。

 系统信息:
  -a, --all-locales          写出可用区域设置的名称
  -m, --charmaps             写出可用字符映射的名称

 修改输出格式:
  -c, --category-name        写出所选类别的名称
  -k, --keyword-name         写出所选关键字的名称
  -v, --verbose              打印更多信息

  -?, --help                 显示此帮助列表
      --usage                显示简短用法信息
  -V, --version              打印程序版本

错误报告说明请见:
<https://bugs.launchpad.net/ubuntu/+source/glibc/+bugs>。
`,
    examples: [
      { description: "显示当前所有 locale 设置", code: "locale" },
      { description: "列出系统所有可用的 locale", code: "locale -a" },
      { description: "显示某个 locale 变量的详细信息", code: "locale -k LC_MONETARY" },
      { description: "临时修改语言为中文 UTF-8", code: "export LANG=zh_CN.UTF-8" },
      { description: "查看帮助文档", code: "locale --help" }
    ],
    relatedCommands: ["localectl", "charset", "iconv", "env"]
  },
  {
    name: "lsmem",
    categoryId: "system",
    syntax: "lsmem [选项]",
    simpleExplain: "列出系统的内存使用信息",
    detailExplain: "显示系统物理内存的范围、大小和在线状态。默认输出内存块摘要，--summary 以易读格式显示总内存，--json 输出 JSON 格式便于脚本处理。常用于确认可用内存总量和内存块分布。",
    helpOutput: `
用法:
 lsmem [选项]

列出可用内存范围及其在线状态。

选项:
 -J, --json           使用 JSON 输出格式
 -P, --pairs          使用 key="value" 输出格式
 -a, --all            列出每个单独的内存块
 -b, --bytes          以字节而非人类可读格式打印 SIZE
 -n, --noheadings     不打印标题
 -o, --output <列表>  输出列
     --output-all     输出所有列
 -r, --raw            使用原始输出格式
 -S, --split <列表>   按指定列拆分范围
 -s, --sysroot <目录> 使用指定目录作为系统根目录
     --summary[=when] 打印摘要信息（never、always 或 only）

 -h, --help           显示此帮助
 -V, --version        显示版本

可用输出列:
      RANGE  内存范围的起始和结束地址
       SIZE  内存范围的大小
      STATE  内存范围的在线状态
  REMOVABLE  内存是否可移除
      BLOCK  内存块编号或块范围
       NODE  内存的 NUMA 节点
      ZONES  内存范围的有效区域

更多详情见 lsmem(1)。
`,
    examples: [
      { description: "列出所有内存信息", code: "lsmem" },
      { description: "以字节为单位显示内存大小", code: "lsmem -b" },
      { description: "以 MB 为单位显示", code: "lsmem --output-size=MB" },
      { description: "只显示摘要信息", code: "lsmem -s" },
      { description: "查看帮助文档", code: "lsmem --help" }
    ],
    relatedCommands: ["free", "top", "vmstat", "cat /proc/meminfo"]
  },
  {
    name: "lsusb",
    categoryId: "system",
    syntax: "lsusb [选项]",
    simpleExplain: "列出已连接的USB设备",
    detailExplain: "列出所有连接到 USB 总线的设备，包括厂商 ID、产品 ID 和设备名称。-v 显示详细信息，-s 指定总线或设备号过滤，-t 以树形结构显示。排查 USB 设备识别问题时首选。",
    helpOutput: `用法: lsusb [options]

选项:
  -v, --verbose          显示详细信息
  -s [[bus]:][devnum]    指定总线/设备号
  -d vendor:[product]    指定厂商/产品 ID
  -D device              显示指定设备文件信息
  -t                     树形显示
  -V, --version          显示版本
  -h, --help             显示帮助

不带参数时列出所有 USB 设备。`,
    examples: [
      { description: "列出所有 USB 设备", code: "lsusb" },
      { description: "显示设备详细信息", code: "lsusb -v" },
      { description: "只查看指定总线的设备", code: "lsusb -s 001" },
      { description: "查看指定厂商的设备", code: "lsusb -d 8087:" },
      { description: "查看帮助文档", code: "lsusb --help" }
    ],
    relatedCommands: ["lspci", "lsblk", "dmesg", "usb-devices"]
  },
  {
    name: "lspci",
    categoryId: "system",
    syntax: "lspci [选项]",
    simpleExplain: "列出PCI总线上的设备",
    detailExplain: "列出所有 PCI 总线设备，包括显卡、网卡、声卡等。-v 显示详细信息，-k 显示内核驱动，-nn 同时显示数字和文本名称。安装驱动或排查硬件问题时常用作第一步。",
    helpOutput: `用法: lspci [<switches>]

选项:
  -v              详细信息
  -vv             更详细信息
  -vvv            最详细信息
  -k              显示内核驱动
  -x              显示配置空间前 64 字节
  -xxx            显示配置空间前 256 字节
  -xxxx           显示配置空间前 4096 字节
  -b              以总线为中心视图
  -d [vendor]:[device]  指定厂商/设备 ID
  -m              机器可读格式
  -mm             合并机器可读格式
  -t              树形显示
  -i FILE         使用指定 PCI ID 数据库
  -n              不解析名称（显示数字）
  -nn             同时显示名称和数字
  -q              在线查询 PCI ID
  -P              按桥路径排序
  -PP             按总线层级排序
  -s [[[[domain]:]bus]:][slot][.[func]]  过滤设备
  -x              十六进制转储`,
    examples: [
      { description: "列出所有 PCI 设备", code: "lspci" },
      { description: "显示设备详细信息", code: "lspci -v" },
      { description: "以树形结构显示设备关系", code: "lspci -t" },
      { description: "只显示网卡设备", code: "lspci | grep -i network" },
      { description: "查看帮助文档", code: "lspci --help" }
    ],
    relatedCommands: ["lsusb", "lsblk", "lshw", "dmidecode"]
  },
  {
    name: "dmidecode",
    categoryId: "system",
    syntax: "dmidecode [选项]",
    simpleExplain: "读取并显示硬件信息",
    detailExplain: "从 SMBIOS/DMI 表读取硬件详细信息，包括主板型号、CPU 规格、内存条品牌序列号、BIOS 版本等。-t 按类型过滤（如 memory、bios、processor），需要 root 权限。是硬件信息查询的核心工具。",
    helpOutput: `用法: dmidecode [OPTIONS]

选项:
  -d, --dev-mem FILE    指定内存设备文件（默认 /dev/mem）
  -h, --help            显示帮助
  -q, --quiet           安静模式
  -s, --string KEYWORD  显示指定 DMI 字符串
  -t, --type TYPE       显示指定类型
  -H, --handle HANDLE   仅显示指定 handle
  -u, --dump            转储未解码内容
      --dump-bin FILE   转储到二进制文件
      --from-dump FILE  从二进制文件读取
      --no-sysfs        不使用 sysfs
      --oem-string N    显示指定 OEM 字符串
  -V, --version         显示版本

TYPE 类型: bios, system, baseboard, chassis, processor, memory, cache,
           connector, slot, all`,
    examples: [
      { description: "显示所有硬件信息", code: "sudo dmidecode" },
      { description: "只查看 BIOS 信息", code: "sudo dmidecode -t bios" },
      { description: "只查看内存信息", code: "sudo dmidecode -t memory" },
      { description: "只查看处理器信息", code: "sudo dmidecode -t processor" },
      { description: "查看帮助文档", code: "dmidecode --help" }
    ],
    relatedCommands: ["lshw", "lspci", "lsusb", "cat /proc/cpuinfo"]
  },
  {
    name: "sensors",
    categoryId: "system",
    syntax: "sensors [选项]",
    simpleExplain: "读取硬件温度和传感器数据",
    detailExplain: "读取主板、CPU、显卡等硬件的温度、风扇转速和电压传感器数据。首次使用需运行 sensors-detect 检测传感器。常用于监控硬件温度，排查过热导致的死机或重启。",
    helpOutput: `用法: sensors [options] [chips]

选项:
  -c, --config-file FILE  指定配置文件
  -s, --set               执行 set 语句（需 root）
  -f, --fahrenheit        以华氏度显示
  -r, --raw               显示原始值
  -u, --unknown           显示未知芯片
  -v, --version           显示版本
  -h, --help              显示帮助
  -j, --json              JSON 格式输出
  -A, --no-adapter        不显示适配器名
      --bus-list          简化总线列表

不带参数时显示所有传感器读数。`,
    examples: [
      { description: "显示所有传感器数据", code: "sensors" },
      { description: "以摄氏度显示温度", code: "sensors -C" },
      { description: "只显示核心温度", code: "sensors | grep -i core" },
      { description: "检测可用传感器芯片", code: "sensors-detect" },
      { description: "查看帮助文档", code: "sensors --help" }
    ],
    relatedCommands: ["top", "htop", "dmidecode", "cat /proc/acpi"]
  },
  {
    name: "nproc",
    categoryId: "system",
    syntax: "nproc",
    simpleExplain: "显示可用的CPU核心数",
    detailExplain: "输出当前进程可用的 CPU 核心数。--all 显示系统全部核心数，--ignore=N 排除指定数量核心。编译时常用于设置并行任务数，如 make -j$(nproc)。",
    helpOutput: `用法: nproc [选项]...
打印当前进程可用的处理单元数量，
该数量可能少于在线处理器数量

      --all      打印已安装的处理器数量
      --ignore=N  如果可能，排除 N 个处理单元
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/nproc>
或本地通过: info '(coreutils) nproc invocation'
`,
    examples: [
      { description: "显示可用 CPU 核心数", code: "nproc", output: "8" },
      { description: "显示所有 CPU 核心数（含离线）", code: "nproc --all" },
      { description: "编译时使用所有核心", code: "make -j$(nproc)" },
      { description: "忽略一个核心留给系统用", code: "make -j$(nproc --ignore=1)" },
      { description: "查看帮助文档", code: "nproc --help" }
    ],
    relatedCommands: ["lscpu", "top", "htop", "cat /proc/cpuinfo"]
  },
  {
    name: "arch",
    categoryId: "system",
    syntax: "arch",
    simpleExplain: "显示系统的CPU架构类型",
    detailExplain: "输出系统硬件架构名称，如 x86_64、aarch64、armv7l 等，与 uname -m 输出一致。下载软件包时用于确认所需架构版本。",
    helpOutput: `用法: arch [选项]...
打印机器架构。

      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/arch>
或本地通过: info '(coreutils) arch invocation'
`,
    examples: [
      { description: "显示系统架构", code: "arch", output: "x86_64" },
      { description: "与 uname -m 等效", code: "uname -m" },
      { description: "判断是否为 64 位系统", code: "[ $(arch) = x86_64 ] && echo '64位'" },
      { description: "在脚本中根据架构选择软件包", code: "case $(arch) in x86_64) pkg=amd64 ;; aarch64) pkg=arm64 ;; esac" },
      { description: "查看帮助文档", code: "arch --help" }
    ],
    relatedCommands: ["uname", "lscpu", "dpkg", "rpm"]
  },
  {
    name: "printenv",
    categoryId: "system",
    syntax: "printenv [变量名]",
    simpleExplain: "打印当前所有环境变量",
    detailExplain: "打印环境变量值。不带参数时显示所有环境变量，指定变量名时只输出该变量的值。常用于脚本中检查特定环境变量配置。",
    helpOutput: `用法: printenv [选项]... [变量]...
打印指定环境变量的值。
如果未指定变量，则打印所有变量的名称和值对。

  -0, --null     每行输出以 NUL 结尾，而非换行符
      --help        显示此帮助并退出
      --version     输出版本信息并退出

注意: 你的 shell 可能有自己的 printenv 版本，通常会覆盖
此处描述的版本。请参阅你的 shell 文档
了解其支持的选项详情。

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/printenv>
或本地通过: info '(coreutils) printenv invocation'
`,
    examples: [
      { description: "显示所有环境变量", code: "printenv" },
      { description: "查看 PATH 变量", code: "printenv PATH" },
      { description: "查看当前用户", code: "printenv USER", output: "zhangsan" },
      { description: "查看家目录路径", code: "printenv HOME" },
      { description: "查看帮助文档", code: "printenv --help" }
    ],
    relatedCommands: ["env", "export", "set", "echo"]
  },
  {
    name: "env",
    categoryId: "system",
    syntax: "env [选项] [命令]",
    simpleExplain: "在指定环境下运行命令",
    detailExplain: "显示所有环境变量，或在修改环境变量后执行指定命令。-i 以空环境运行命令，-u 取消指定变量后运行。常用于临时修改环境变量运行程序，如 env LANG=zh_CN.UTF-8 command。",
    helpOutput: `用法: env [选项]... [-] [NAME=VALUE]... [COMMAND [ARG]...]
在环境中将每个 NAME 设为 VALUE 并运行 COMMAND。

长选项的必选参数对短选项同样必选。
  -i, --ignore-environment  以空环境开始
  -0, --null           每行输出以 NUL 结尾，而非换行符
  -u, --unset=NAME     从环境中移除变量
  -C, --chdir=DIR      将工作目录更改为 DIR
  -S, --split-string=S  处理并将 S 拆分为独立参数；
                        用于在 shebang 行传递多个参数
      --block-signal[=SIG]    阻止将 SIG 信号传递给 COMMAND
      --default-signal[=SIG]  将 SIG 信号的处理重置为默认
      --ignore-signal[=SIG]   将 SIG 信号的处理设为何也不做
      --list-signal-handling  将非默认的信号处理列表输出到 stderr
  -v, --debug          为每个处理步骤打印详细信息
      --help        显示此帮助并退出
      --version     输出版本信息并退出

单独的 - 等同于 -i。如果没有 COMMAND，打印结果环境。

SIG 可以是信号名称如 'PIPE'，或信号编号如 '13'。
不带 SIG 时，包含所有已知信号。多个信号可用
逗号分隔。空的 SIG 参数为空操作。

退出状态:
  125  如果 env 命令本身失败
  126  如果找到 COMMAND 但无法调用
  127  如果找不到 COMMAND
  -    其他情况下为 COMMAND 的退出状态

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
翻译错误报告至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/env>
或本地通过: info '(coreutils) env invocation'
`,
    examples: [
      { description: "显示所有环境变量", code: "env" },
      { description: "临时设置变量后运行命令", code: "env LANG=zh_CN.UTF-8 ./myapp" },
      { description: "清空所有环境变量运行命令", code: "env -i /bin/bash" },
      { description: "取消某个变量后运行命令", code: "env -u LD_LIBRARY_PATH ./program" },
      { description: "查看帮助文档", code: "env --help" }
    ],
    relatedCommands: ["printenv", "export", "set", "bash"]
  },
  {
    name: "export",
    categoryId: "system",
    syntax: "export 变量名=值",
    simpleExplain: "设置或导出环境变量",
    detailExplain: "将 Shell 变量导出为环境变量，使其能被子进程继承。不带参数时列出所有已导出变量，-p 显示所有导出变量，-n 取消导出属性。常用于设置 PATH、JAVA_HOME 等供后续程序使用。",
    helpOutput: `export: export [-fn] [name[=value] ...] 或 export -p
    为 shell 变量设置导出属性。
    
    标记每个 NAME 以便自动导出到后续执行命令的环境中。如果提供了 VALUE，则在导出前赋值 VALUE。
    
    选项:
      -f	指向 shell 函数
      -n	移除每个 NAME 的导出属性
      -p	显示所有已导出变量和函数的列表
    
    参数 \`--' 禁用进一步的选项处理。
    
    退出状态:
    除非给出了无效选项或 NAME 无效，否则返回成功。
`,
    examples: [
      { description: "设置一个环境变量", code: "export JAVA_HOME=/usr/lib/jvm/java-17" },
      { description: "将目录追加到 PATH", code: "export PATH=$PATH:/opt/bin" },
      { description: "查看所有已导出的变量", code: "export -p" },
      { description: "设置代理环境变量", code: "export http_proxy=http://proxy.example.com:8080" },
      { description: "查看帮助文档", code: "help export" }
    ],
    relatedCommands: ["printenv", "env", "set", "unset"]
  },
  {
    name: "set",
    categoryId: "system",
    syntax: "set [选项]",
    simpleExplain: "显示或设置Shell变量",
    detailExplain: "不带参数时显示所有 Shell 变量和函数。带参数时控制 Shell 行为：-e 出错即退出，-x 启用调试输出，-u 引用未定义变量报错。常用于脚本中控制执行行为。",
    helpOutput: `set: set [-abefhkmnptuvxBCEHPT] [-o option-name] [--] [-] [arg ...]
    设置或取消 shell 选项和位置参数的值。
    
    更改 shell 属性和位置参数的值，或
    显示 shell 变量的名称和值。
    
    选项:
      -a  标记被修改或创建的变量以供导出。
      -b  立即通知作业终止。
      -e  如果命令以非零状态退出则立即退出。
      -f  禁用文件名生成（通配）。
      -h  记住命令查找时的位置。
      -k  所有赋值参数都放入命令的环境中，
          而不仅仅是命令名之前的那些。
      -m  启用作业控制。
      -n  读取命令但不执行。
      -o option-name
          设置与 option-name 对应的变量:
              allexport    等同于 -a
              braceexpand  等同于 -B
              emacs        使用 emacs 风格的行编辑界面
              errexit      等同于 -e
              errtrace     等同于 -E
              functrace    等同于 -T
              hashall      等同于 -h
              histexpand   等同于 -H
              history      启用命令历史
              ignoreeof    shell 读取 EOF 时不会退出
              interactive-comments
                           允许在交互式命令中出现注释
              keyword      等同于 -k
              monitor      等同于 -m
              noclobber    等同于 -C
              noexec       等同于 -n
              noglob       等同于 -f
              nolog        当前接受但被忽略
              notify       等同于 -b
              nounset      等同于 -u
              onecmd       等同于 -t
              physical     等同于 -P
              pipefail     管道的返回值是最后一个以非零状态退出的
                           命令的状态，如果没有命令以非零状态退出则为零
              posix        在默认操作与 Posix 标准不同时更改 bash 的行为
                           以匹配标准
              privileged   等同于 -p
              verbose      等同于 -v
              vi           使用 vi 风格的行编辑界面
              xtrace       等同于 -x
      -p  当真实用户 ID 和有效用户 ID 不匹配时启用。
          禁用 $ENV 文件的处理和 shell 函数的导入。
          关闭此选项会使有效 uid 和 gid 设置为真实 uid 和 gid。
      -t  读取并执行一条命令后退出。
      -u  替换时将未设置的变量视为错误。
      -v  读取时打印 shell 输入行。
      -x  执行时打印命令及其参数。
      -B  shell 将执行花括号展开`,
    examples: [
      { description: "显示所有 Shell 变量和函数", code: "set" },
      { description: "开启调试模式，显示每条执行的命令", code: "set -x" },
      { description: "脚本中遇到错误立即退出", code: "set -e" },
      { description: "使用未定义变量时报错", code: "set -u" },
      { description: "查看帮助文档", code: "help set" }
    ],
    relatedCommands: ["export", "unset", "env", "shopt"]
  },
  {
    name: "unset",
    categoryId: "system",
    syntax: "unset 变量名",
    simpleExplain: "删除指定的环境变量",
    detailExplain: "删除已设置的环境变量或 Shell 变量，删除后当前 Shell 和子进程均无法访问。-v 删除变量（默认），-f 删除函数。常用于清理不再需要的环境变量。",
    helpOutput: `unset: unset [-f] [-v] [-n] [name ...]
    取消 shell 变量和函数的值和属性。
    
    对每个 NAME，移除对应的变量或函数。
    
    选项:
      -f	将每个 NAME 视为 shell 函数
      -v	将每个 NAME 视为 shell 变量
      -n	将每个 NAME 视为名称引用，并取消变量本身
    		而非它所引用的变量
    
    不带选项时，unset 先尝试取消变量，如果失败，
    再尝试取消函数。
    
    某些变量无法取消；另见 \`readonly'。
    
    退出状态:
    除非给出了无效选项或 NAME 是只读的，否则返回成功。
`,
    examples: [
      { description: "删除一个环境变量", code: "unset JAVA_HOME" },
      { description: "删除多个变量", code: "unset http_proxy https_proxy" },
      { description: "删除一个函数", code: "unset -f my_func" },
      { description: "确认变量已被删除", code: "unset MY_VAR && echo $MY_VAR" },
      { description: "查看帮助文档", code: "help unset" }
    ],
    relatedCommands: ["export", "set", "env", "printenv"]
  },
  {
    name: "alias",
    categoryId: "system",
    syntax: "alias 别名=命令",
    simpleExplain: "给命令设置别名",
    detailExplain: "为命令定义别名，简化常用命令输入。不带参数时列出所有别名，定义格式为 alias name='command'。常用于缩短命令，如 alias ll='ls -l'。",
    helpOutput: `alias: alias [-p] [name[=value] ... ]
    定义或显示别名。
    
    不带参数时，\`alias' 以可重用的形式 \`alias NAME=VALUE' 在标准输出上
    打印别名列表。
    
    否则，为每个给定了 VALUE 的 NAME 定义别名。
    VALUE 末尾的空格会导致在别名展开时检查下一个词是否进行
    别名替换。
    
    选项：
      -p	以可重用的格式打印所有已定义的别名
    
    退出状态：
    除非为某个未定义别名的 NAME 提供了参数，否则 alias 返回 true。
`,
    examples: [
      { description: "给 ls -l 起别名 ll", code: "alias ll='ls -l'" },
      { description: "查看所有已设置的别名", code: "alias" },
      { description: "给 rm 加安全确认", code: "alias rm='rm -i'" },
      { description: "给 grep 加颜色高亮", code: "alias grep='grep --color=auto'" },
      { description: "查看帮助文档", code: "help alias" }
    ],
    relatedCommands: ["unalias", "bash", "source", "type"]
  },
  {
    name: "unalias",
    categoryId: "system",
    syntax: "unalias 别名",
    simpleExplain: "取消已设置的命令别名",
    detailExplain: "删除已定义的命令别名。-a 删除所有别名。删除后该短名称不再有效，需使用命令全名。常用于临时取消别名以执行原命令。",
    helpOutput: `unalias: unalias [-a] name [name ...]
    从已定义的别名列表中移除每个 NAME。
    
    选项：
      -a	移除所有别名定义
    
    除非 NAME 不是已存在的别名，否则返回成功。
`,
    examples: [
      { description: "取消 ll 别名", code: "unalias ll" },
      { description: "取消所有别名", code: "unalias -a" },
      { description: "取消 rm 的安全别名", code: "unalias rm" },
      { description: "确认别名已删除", code: "unalias ll && type ll" },
      { description: "查看帮助文档", code: "help unalias" }
    ],
    relatedCommands: ["alias", "bash", "source", "type"]
  },
  {
    name: "history",
    categoryId: "system",
    syntax: "history [选项]",
    simpleExplain: "显示历史命令记录",
    detailExplain: "列出当前 Shell 中执行过的命令历史记录。-c 清空历史，-d 删除指定行，N 显示最近 N 条。可用 !编号 重新执行历史命令，!! 执行上一条命令。常用于查找和复用之前执行过的命令。",
    helpOutput: `history: history [-c] [-d offset] [n] or history -anrw [filename] or history -ps arg [arg...]
    显示或操作历史列表。
    
    显示带行号的历史列表，在每个修改过的条目前加上 \`*'。
    参数 N 只列出最后 N 条记录。
    
    选项：
      -c	通过删除所有条目来清空历史列表
      -d offset	删除位于位置 OFFSET 的历史条目。负偏移量
    		从历史列表末尾倒数
    
      -a	将本次会话的历史行追加到历史文件
      -n	从历史文件读取所有尚未读取的历史行
    		并追加到历史列表
      -r	读取历史文件并将内容追加到历史
    		列表
      -w	将当前历史写入历史文件
    
      -p	对每个 ARG 执行历史展开并显示结果
    		而不存储到历史列表
      -s	将 ARG 作为一个单独条目追加到历史列表
    
    如果给出了 FILENAME，则将其用作历史文件。否则，
    如果 HISTFILE 有值，则使用它，否则使用 ~/.bash_history。
    
    如果设置了 HISTTIMEFORMAT 变量且非空，则其值被用作
    strftime(3) 的格式字符串，用于打印与每个显示的历史条目关联的
    时间戳。否则不打印时间戳。
    
    退出状态：
    除非给出了无效选项或发生错误，否则返回成功。
`,
    examples: [
      { description: "显示所有历史命令", code: "history" },
      { description: "只显示最近 10 条", code: "history 10" },
      { description: "清除所有历史记录", code: "history -c" },
      { description: "重新执行第 100 条命令", code: "!100" },
      { description: "查看帮助文档", code: "help history" }
    ],
    relatedCommands: ["alias", "bash", "fc", "ctrl+r"]
  },
  {
    name: "sysctl",
    categoryId: "system",
    syntax: "sysctl [选项] [变量]",
    simpleExplain: "查看和修改内核参数",
    detailExplain: "读取和修改 Linux 内核运行时参数，如网络转发、文件描述符上限、内存策略等。-a 显示所有参数，-w 临时修改参数，-p 从配置文件加载。修改前需确认参数含义，错误配置可能导致系统不稳定。",
    helpOutput: `
用法：
 sysctl [选项] [变量[=值] ...]

选项：
  -a, --all            显示所有变量
  -A                   -a 的别名
  -X                   -a 的别名
      --deprecated     在列表中包含已弃用的参数
      --dry-run        打印键和值但不写入
  -b, --binary         打印值时不带换行
  -e, --ignore         忽略未知变量错误
  -N, --names          打印变量名不带值
  -n, --values         只打印给定变量的值
  -p, --load[=<文件>]  从文件读取值
  -f                   -p 的别名
      --system         从所有系统目录读取值
  -r, --pattern <表达式>
                       选择匹配表达式的设置
  -q, --quiet          不回显变量设置
  -w, --write          启用向变量写入值
  -o                   无操作
  -x                   无操作
  -d                   -h 的别名

 -h, --help     显示此帮助并退出
 -V, --version  输出版本信息并退出

更多详情见 sysctl(8)。
`,
    examples: [
      { description: "查看所有内核参数", code: "sysctl -a" },
      { description: "查看 IP 转发状态", code: "sysctl net.ipv4.ip_forward" },
      { description: "开启 IP 转发", code: "sudo sysctl -w net.ipv4.ip_forward=1" },
      { description: "从配置文件加载参数", code: "sudo sysctl -p" },
      { description: "查看帮助文档", code: "sysctl --help" }
    ],
    relatedCommands: ["proc", "modprobe", "iptables", "ulimit"],
    dangerLevel: "warning"
  },

  // ==================== 磁盘管理 ====================
  {
    name: "fdisk",
    categoryId: "disk",
    syntax: "fdisk [选项] 设备",
    simpleExplain: "管理磁盘分区表",
    detailExplain: "管理磁盘分区表，支持创建、删除、调整分区。-l 列出所有磁盘分区，交互模式下可使用 m 查看帮助、n 新建分区、d 删除分区、w 保存退出。常用于 MBR 分区表的磁盘管理。",
    helpOutput: `Usage: fdisk [options] <disk>
       fdisk -l [<disk>...]

Options:
  -b SECTOR_SIZE      指定扇区大小（512, 1024, 2048, 4096）
  -B NUM              保留前 NUM 个扇区
  -c[=MODE]           兼容模式: dos, nondos
  -L, --color[=WHEN]  颜色: auto, never, always
  -l                  列出分区表后退出
  -x                  额外信息（含详情）
  -n                  不创建空分区
  -o FIELD            输出指定字段
  -s PARTITION        显示分区大小（块）
  -t TYPE             仅显示指定类型分区
  -u[=UNIT]           单位: cylinders, sectors
  -C NUM              指定柱面数
  -H NUM              指定磁头数
  -S NUM              指定每磁道扇区数
  -w, --wipe WHEN     擦除签名: auto, never, always
  -W, --wipe-partitions WHEN  擦除分区签名
  -v                  显示版本
  -h                  显示帮助

交互命令: m(帮助), p(打印), n(新建), d(删除), w(保存), q(退出),
          t(改类型), a(激活), l(类型列表)`,
    examples: [
      { description: "列出所有分区表", code: "fdisk -l" },
      { description: "进入交互模式对磁盘分区", code: "fdisk /dev/sdb" },
      { description: "创建一个新的 GPT 分区表", code: "fdisk /dev/sdc" },
      { description: "查看帮助文档", code: "fdisk --help" }
    ],
    relatedCommands: ["parted", "mkfs", "lsblk", "cfdisk"],
    dangerLevel: "danger",
  },
  {
    name: "mkfs",
    categoryId: "disk",
    syntax: "mkfs [选项] 设备",
    simpleExplain: "创建文件系统（格式化分区）",
    detailExplain: "在分区上创建文件系统，使操作系统能存储和组织文件。-t 指定文件系统类型（如 ext4、xfs、ntfs），如 mkfs -t ext4 /dev/sda1。常用于格式化新建分区或 U 盘。",
    helpOutput: `
用法：
 mkfs [选项] [-t <类型>] [文件系统选项] <device> [<size>]

创建一个 Linux 文件系统。

选项：
 -t, --type=<类型>  文件系统类型；未指定时使用 ext2
     fs-options     传给实际文件系统构建器的参数
     <device>       要使用的设备路径
     <size>         设备上要使用的块数
 -V, --verbose      解释正在执行的操作；
                      多次指定 -V 将导致空运行
 -h, --help         显示此帮助
 -V, --version      显示版本

更多详情见 mkfs(8)。
`,
    examples: [
      { description: "将分区格式化为 ext4 文件系统", code: "mkfs.ext4 /dev/sdb1" },
      { description: "格式化为 xfs 文件系统", code: "mkfs.xfs -f /dev/sdc1" },
      { description: "格式化为 FAT32", code: "mkfs.vfat -F 32 /dev/sdd1" },
      { description: "快速格式化", code: "mkfs.ext4 -T largefile4 /dev/sde1" },
      { description: "查看帮助文档", code: "mkfs --help" }
    ],
    relatedCommands: ["fdisk", "fsck", "mount", "tune2fs"],
    dangerLevel: "danger",
  },
  {
    name: "mount",
    categoryId: "disk",
    syntax: "mount [选项] 设备 挂载点",
    simpleExplain: "挂载文件系统到目录",
    detailExplain: "将设备挂载到指定目录，使该目录成为访问设备文件的入口。-t 指定文件系统类型，-o 指定挂载选项（如 ro 只读、remount 重新挂载），-a 挂载 /etc/fstab 中所有条目。硬盘分区、U 盘、网络共享均需挂载后才能访问。",
    helpOutput: `
用法：
 mount [-lhV]
 mount -a [选项]
 mount [选项] [--source] <source> | [--target] <directory>
 mount [选项] <source> <directory>
 mount <operation> <mountpoint> [<target>]

挂载文件系统。

选项：
 -a, --all               挂载 fstab 中提到的所有文件系统
 -c, --no-canonicalize   不规范化路径
 -f, --fake              空运行；跳过 mount(2) 系统调用
 -F, --fork              为每个设备派生子进程（与 -a 一起使用）
 -T, --fstab <path>      /etc/fstab 的替代文件
 -i, --internal-only     不调用 mount.<type> 辅助程序
 -l, --show-labels       同时显示文件系统标签
 -m, --mkdir[=<mode>]    '-o X-mount.mkdir[=<mode>]' 的别名
 -n, --no-mtab           不写入 /etc/mtab
     --options-mode <mode>
                         如何处理从 fstab 加载的选项
     --options-source <source>
                         挂载选项来源
     --options-source-force
                         强制使用 fstab/mtab 中的选项
     --onlyonce          检查文件系统是否已挂载
 -o, --options <list>    以逗号分隔的挂载选项列表
 -O, --test-opts <list>  限制文件系统集合（与 -a 一起使用）
 -r, --read-only         以只读方式挂载文件系统（同 -o ro）
 -t, --types <list>      限制文件系统类型集合
     --source <src>      显式指定源（路径、标签、uuid）
     --target <target>   显式指定挂载点
     --target-prefix <path>
                         指定用于所有挂载点的路径
 -v, --verbose           说明正在执行的操作
 -w, --rw, --read-write  以读写方式挂载文件系统（默认）
 -N, --namespace <ns>    在另一个命名空间中执行挂载

 -h, --help              显示此帮助
 -V, --version           显示版本

源：
 -L, --label <label>     LABEL=<label> 的同义词
 -U, --uuid <uuid>       UUID=<uuid> 的同义词
 LABEL=<label>           通过文件系统标签指定设备
 UUID=<uuid>             通过文件系统 UUID 指定设备
 PARTLABEL=<label>       通过分区标签指定设备
 PARTUUID=<uuid>         通过分区 UUID 指定设备
 ID=<id>                 通过 udev 硬件 ID 指定设备
 <device>                通过路径指定设备
 <directory>             绑定挂载的挂载点（见 --bind/rbind）
 <file>                  用于 loopdev 设置的常规文件

操作：
 -B, --bind              将子树挂载到其他位置（同 -o bind）
 -M, --move              将子树移动到其他位置
 -R, --rbind             将子树及其所有子挂载挂载到其他位置
 --make-shared           将子树标记为共享
 --make-slave            将子树标记为从属
 --make-private          将子树标记为私有
 --make-unbindable       将子树标记为不可绑定
 --make-rshared          递归地将整个子树标记为共享
 --make-rslave           递归地将整个子树标记为从属
 --make-rprivate         递归地标`,
    examples: [
      { description: "将 /dev/sdb1 挂载到 /mnt/data 目录", code: "mount /dev/sdb1 /mnt/data" },
      { description: "挂载 ISO 镜像文件", code: "mount -o loop ubuntu.iso /mnt/cdrom" },
      { description: "以只读方式挂载", code: "mount -o ro /dev/sdc1 /mnt/readonly" },
      { description: "挂载 NFS 网络共享目录", code: "mount -t nfs 192.168.1.100:/share /mnt/nfs_share" },
      { description: "查看帮助文档", code: "mount --help" }
    ],
    relatedCommands: ["umount", "fstab", "automount", "bindfs"]
  },
  {
    name: "umount",
    categoryId: "disk",
    syntax: "umount [选项] 挂载点/设备",
    simpleExplain: "卸载已挂载的文件系统",
    detailExplain: "卸载已挂载的设备，卸载前确保数据全部写入完毕，避免数据丢失。-f 强制卸载，-l 懒卸载（设备空闲时卸载），-a 卸载所有设备。常用于安全移除 U 盘或断开网络共享。",
    helpOutput: `
用法：
 umount [-hV]
 umount -a [选项]
 umount [选项] <source> | <directory>

卸载文件系统。

选项：
 -a, --all               卸载所有文件系统
 -A, --all-targets       卸载给定设备在当前命名空间中的所有挂载点
 -c, --no-canonicalize   不规范化路径
 -d, --detach-loop       如果挂载的是 loop 设备，同时释放该 loop 设备
     --fake              空运行；跳过 umount(2) 系统调用
 -f, --force             强制卸载（用于不可达的 NFS 系统）
 -i, --internal-only     不调用 umount.<type> 辅助程序
 -n, --no-mtab           不写入 /etc/mtab
 -l, --lazy              立即分离文件系统，稍后清理
 -O, --test-opts <list>  限制文件系统集合（与 -a 一起使用）
 -R, --recursive         递归卸载目标及其所有子项
 -r, --read-only         卸载失败时，尝试以只读方式重新挂载
 -t, --types <list>      限制文件系统类型集合
 -v, --verbose           说明正在执行的操作
 -q, --quiet             抑制“未挂载”错误消息
 -N, --namespace <ns>    在另一个命名空间中执行卸载

 -h, --help              显示此帮助
 -V, --version           显示版本

更多详情见 umount(8)。
`,
    examples: [
      { description: "卸载 /mnt/data 目录", code: "umount /mnt/data" },
      { description: "通过设备路径卸载", code: "umount /dev/sdb1" },
      { description: "强制卸载（慎用）", code: "umount -l /mnt/busy" },
      { description: "卸载所有 NFS 类型的文件系统", code: "umount -a -t nfs" },
      { description: "查看帮助文档", code: "umount --help" }
    ],
    relatedCommands: ["mount", "fuser", "lsof", "lazy unmount"],
    dangerLevel: "warning",
  },
  {
    name: "fsck",
    categoryId: "disk",
    syntax: "fsck [选项] 设备",
    simpleExplain: "检查并修复文件系统",
    detailExplain: "检查并修复文件系统错误，如损坏的数据块、丢失的 inode 等。-A 检查 /etc/fstab 中所有分区，-y 自动修复，-t 指定文件系统类型。系统异常关机后启动时通常自动运行。",
    helpOutput: `
用法：
 fsck [选项] -- [fs-options] [<filesystem> ...]

检查并修复 Linux 文件系统。

选项：
 -A         检查所有文件系统
 -C [<fd>]  显示进度条；文件描述符用于 GUI
 -l         锁定设备以保证独占访问
 -M         不检查已挂载的文件系统
 -N         不执行，只显示将执行的操作
 -P         并行检查文件系统，包括根文件系统
 -R         跳过根文件系统；仅与 '-A' 一起使用时有用
 -r [<fd>]  报告每个已检查设备的统计信息；
            文件描述符用于 GUI
 -s         串行化检查操作
 -T         启动时不显示标题
 -t <type>  指定要检查的文件系统类型；
            <type> 可以是逗号分隔的列表
 -V         说明正在执行的操作

 -?, --help     显示此帮助
     --version  显示版本

有关可用的 fs-options，请参见具体的 fsck.* 命令。
更多详情见 fsck(8)。
`,
    examples: [
      { description: "检查分区的文件系统", code: "fsck /dev/sda1" },
      { description: "自动修复发现的问题", code: "fsck -y /dev/sdb1" },
      { description: "强制检查", code: "fsck -f /dev/sdc1" },
      { description: "指定文件系统类型", code: "fsck -t ext4 /dev/sdd1" },
      { description: "查看帮助文档", code: "fsck --help" }
    ],
    relatedCommands: ["mkfs", "dumpe2fs", "tune2fs", "badblocks"],
    dangerLevel: "warning",
  },
  {
    name: "blkid",
    categoryId: "disk",
    syntax: "blkid [选项] [设备]",
    simpleExplain: "查看块设备的UUID和类型",
    detailExplain: "显示块设备的 UUID、文件系统类型和卷标等属性。UUID 不随设备名变化，配置 /etc/fstab 时使用 UUID 比设备名更稳定。常用于获取分区唯一标识以配置挂载。",
    helpOutput: `
用法：
 blkid --label <label> | --uuid <uuid>

 blkid [--cache-file <file>] [-ghlLv] [--output <format>] [--match-tag <tag>] 
       [--match-token <token>] [<dev> ...]

 blkid -p [--match-tag <tag>] [--offset <offset>] [--size <size>] 
       [--output <format>] <dev> ...

 blkid -i [--match-tag <tag>] [--output <format>] <dev> ...

选项：
 -c, --cache-file <file>    从 <file> 读取而非从默认缓存文件读取
                              （-c /dev/null 表示不使用缓存）
 -d, --no-encoding          不对非打印字符进行编码
 -g, --garbage-collect      对 blkid 缓存进行垃圾回收
 -o, --output <format>      输出格式；可以是以下之一：
                              value、device、export 或 full；（默认：full）
 -k, --list-filesystems     列出所有已知的文件系统/RAID 并退出
 -s, --match-tag <tag>      显示指定的标签（默认显示所有标签）
 -t, --match-token <token>  查找具有特定 token（NAME=value 对）的设备
 -l, --list-one             只查找由 -t 指定 token 的第一个设备
 -L, --label <label>        将 LABEL 转换为设备名
 -U, --uuid <uuid>          将 UUID 转换为设备名

底层探测选项：
 -p, --probe                底层超级块探测（绕过缓存）
 -i, --info                 收集有关 I/O 限制的信息
 -H, --hint <value>         为探测函数设置提示
 -S, --size <size>          覆盖设备大小
 -O, --offset <offset>      在给定偏移处探测
 -u, --usages <list>        按 "usage" 过滤（如 -u filesystem,raid）
 -n, --match-types <list>   按文件系统类型过滤（如 -n vfat,ext3）
 -D, --no-part-details      不打印来自分区表的信息

 -h, --help                 显示此帮助
 -V, --version              显示版本

参数：
 <size> 和 <offset> 参数后可跟以下后缀：
   GiB、TiB、PiB、EiB、ZiB 和 YiB（"iB" 是可选的）

 <dev> 指定要探测的设备（默认：所有设备）

更多详情见 blkid(8)。
`,
    examples: [
      { description: "显示所有块设备的信息", code: "blkid" },
      { description: "只显示指定设备的信息", code: "blkid /dev/sda2" },
      { description: "只显示 UUID", code: "blkid -s UUID -o value /dev/sda1" },
      { description: "显示更详细的信息", code: "blkid -p /dev/sdb1" },
      { description: "查看帮助文档", code: "blkid --help" }
    ],
    relatedCommands: ["lsblk", "fdisk -l", "fstab", "libuuid"]
  },
  {
    name: "lsblk",
    categoryId: "disk",
    syntax: "lsblk [选项]",
    simpleExplain: "列出所有块设备信息",
    detailExplain: "以树形结构列出所有块设备及其分区、大小、挂载点等信息。-f 显示文件系统信息，-o 指定输出列，-d 只显示设备不显示分区。比 fdisk -l 更直观，常用于查看磁盘和分区布局。",
    helpOutput: `
用法：
 lsblk [选项] [<device> ...]

列出块设备信息。

选项：
 -A, --noempty        不打印空设备
 -D, --discard        打印 discard 能力
 -E, --dedup <column> 按 <column> 去重输出
 -I, --include <list> 只显示指定主设备号的设备
 -J, --json           使用 JSON 输出格式
 -M, --merge          合并子树的父设备（适用于 RAID、多路径）
 -O, --output-all     输出所有列
 -P, --pairs          使用 key="value" 输出格式
 -S, --scsi           输出 SCSI 设备信息
 -N, --nvme           输出 NVMe 设备信息
 -v, --virtio         输出 virtio 设备信息
 -T, --tree[=<column>] 使用树形格式输出
 -a, --all            打印所有设备
 -b, --bytes          以字节而非人类可读格式打印 SIZE
 -d, --nodeps         不打印从属或持有设备
 -e, --exclude <list> 按主设备号排除设备（默认：RAM 磁盘）
 -f, --fs             输出文件系统信息
 -i, --ascii          只使用 ascii 字符
 -l, --list           使用列表格式输出
 -m, --perms          输出权限信息
 -n, --noheadings     不打印标题
 -o, --output <list>  输出列
 -p, --paths          打印完整设备路径
 -r, --raw            使用原始输出格式
 -s, --inverse        反向依赖
 -t, --topology       输出拓扑信息
 -w, --width <num>    以字符数指定输出宽度
 -x, --sort <column>  按 <column> 排序输出
 -y, --shell          使用可作为 shell 变量标识符的列名
 -z, --zoned          打印区域相关信息
     --sysroot <dir>  使用指定目录作为系统根

 -h, --help           显示此帮助
 -V, --version        显示版本

可用输出列：
    ALIGNMENT  对齐偏移
      ID-LINK  最短的 udev /dev/disk/by-id 链接名
           ID  udev ID（基于 ID-LINK）
     DISC-ALN  discard 对齐偏移
          DAX  支持 dax 的设备
    DISC-GRAN  discard 粒度
     DISK-SEQ  磁盘序列号
     DISC-MAX  discard 最大字节数
    DISC-ZERO  discard 清零数据
      FSAVAIL  文件系统可用大小
      FSROOTS  已挂载的文件系统根
       FSSIZE  文件系统大小
       FSTYPE  文件系统类型
       FSUSED  文件系统已用大小
       FSUSE%  文件系统使用百分比
        FSVER  文件系统版本
        GROUP  组名
         HCTL  SCSI 的 主机:通道:目标:Lun
      HOTPLUG  可移动或热插拔设备（usb、pcmcia、...）
        KNAME  内部内核设备名
        LABEL  文件系统 LABEL
      LOG-SEC  逻辑扇区大小
      MAJ:MIN  主:次 设备号
       MIN-IO  最小 I/O 大小
         MODE  设备节点权限
        MODEL  设备标识符
           MQ  设备队列
         NAME  设备名
       OPT-IO  最佳 I/O 大小
        OWNER  用户名
    PARTFLAGS  分区标志
    PA`,
    examples: [
      { description: "以树形结构显示所有块设备", code: "lsblk" },
      { description: "显示 UUID 和文件系统类型", code: "lsblk -f" },
      { description: "以 JSON 格式输出", code: "lsblk -J" },
      { description: "只显示指定设备", code: "lsblk /dev/sda" },
      { description: "查看帮助文档", code: "lsblk --help" }
    ],
    relatedCommands: ["blkid", "fdisk", "df", "tree"]
  },
  {
    name: "dd",
    categoryId: "disk",
    syntax: "dd [选项]",
    simpleExplain: "按块复制和转换文件",
    detailExplain: "按字节复制数据，可复制磁盘、制作启动 U 盘、备份分区表。常用参数：if 指定输入文件，of 指定输出文件，bs 设置块大小，count 指定块数。功能强大但参数错误可能造成数据丢失，使用时需仔细核对。",
    helpOutput: `用法: dd [OPERAND]...
  或:  dd OPTION
复制文件，根据操作数进行转换和格式化。

  bs=BYTES        每次读写最多 BYTES 字节（默认：512）；
                  覆盖 ibs 和 obs
  cbs=BYTES       每次转换 BYTES 字节
  conv=CONVS      按逗号分隔的符号列表转换文件
  count=N         只复制 N 个输入块
  ibs=BYTES       每次最多读取 BYTES 字节（默认：512）
  if=FILE         从 FILE 读取而非从 stdin
  iflag=FLAGS     按逗号分隔的符号列表读取
  obs=BYTES       每次写入 BYTES 字节（默认：512）
  of=FILE         写入到 FILE 而非 stdout
  oflag=FLAGS     按逗号分隔的符号列表写入
  seek=N          （或 oseek=N）跳过 N 个 obs 大小的输出块
  skip=N          （或 iseek=N）跳过 N 个 ibs 大小的输入块
  status=LEVEL    打印到 stderr 的信息级别；
                  'none' 抑制除错误消息外的所有内容，
                  'noxfer' 抑制最终传输统计信息，
                  'progress' 显示周期性传输统计信息

N 和 BYTES 后可跟以下乘法后缀：
c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, xM=M,
GB=1000*1000*1000, G=1024*1024*1024，T、P、E、Z、Y、R、Q 以此类推。
也可使用二进制前缀：KiB=K, MiB=M，以此类推。
如果 N 以 'B' 结尾，则按字节计数而非按块。

每个 CONV 符号可以是：

  ascii     从 EBCDIC 转为 ASCII
  ebcdic    从 ASCII 转为 EBCDIC
  ibm       从 ASCII 转为备用 EBCDIC
  block     用空格填充以换行结尾的记录到 cbs 大小
  unblock   将 cbs 大小记录中的尾部空格替换为换行
  lcase     将大写转为小写
  ucase     将小写转为大写
  sparse    尝试跳过而非写入全 NUL 输出块
  swab      交换每对输入字节
  sync      用 NUL 填充每个输入块到 ibs 大小；与
            block 或 unblock 一起使用时，用空格而非 NUL 填充
  excl      如果输出文件已存在则失败
  nocreat   不创建输出文件
  notrunc   不截断输出文件
  noerror   读错误后继续
  fdatasync  完成前物理写入输出文件数据
  fsync     同上，但同时写入元数据

每个 FLAG 符号可以是：

  append    追加模式（仅对输出有意义；建议 conv=notrunc）
  direct    对数据使用直接 I/O
  directory  除非是目录否则失败
  dsync     对数据使用同步 I/O
  sync      同上，但也用于元数据
  fullblock  累积完整的输入块（仅 iflag）
  nonblock  使用非阻塞 I/O
  noatime   不更新访问时间
  nocache   请求丢弃缓存。另见 oflag=sync
  noctty    不从文件分配控制终端
  nofollow  不跟随符号链接

向运行中的 'dd' 进程发送 USR1 信号会使其
向标准错误打印 I/O 统计信息，然后继续复制。

Option`,
    examples: [
      { description: "制作启动 U 盘", code: "dd if=ubuntu.iso of=/dev/sdb bs=4M status=progress" },
      { description: "备份整个磁盘为镜像文件", code: "dd if=/dev/sda of=disk_backup.img bs=64K" },
      { description: "安全擦除硬盘数据", code: "dd if=/dev/urandom of=/dev/sdb bs=1M" },
      { description: "测试磁盘写入速度", code: "dd if=/dev/zero of=testfile bs=1M count=1024 oflag=dsync" },
      { description: "查看帮助文档", code: "dd --help" }
    ],
    relatedCommands: ["cp", "cat", "rsync", "shred"],
    dangerLevel: "danger",
  },
  {
    name: "parted",
    categoryId: "disk",
    syntax: "parted [选项] 设备",
    simpleExplain: "高级磁盘分区工具",
    detailExplain: "磁盘分区工具，支持 GPT 分区表和超过 2TB 的大硬盘，可调整分区大小。-l 列出所有分区，交互模式下支持 mkpart 新建分区、resizepart 调整分区、rm 删除分区。是现代大容量硬盘分区的首选工具。",
    helpOutput: `Usage: parted [OPTION]... [DEVICE [COMMAND [PARAMETER]...]...]

Options:
  -h, --help           显示帮助
  -l, --list           列出所有块设备分区
  -i, --interactive    交互模式
  -s, --script         脚本模式（不提示）
  -v, --version        显示版本
  -a ALIGNMENT         对齐: cylinder, minimal, optimal, none
  -m, --machine        机器可读输出
  -j, --json           JSON 输出

Commands:
  mklabel LABEL-TYPE       创建磁盘标签（gpt, msdos）
  mkpart PART-TYPE FS-TYPE START END  创建分区
  rm NUMBER                删除分区
  print                    打印分区表
  resizepart NUMBER END    调整分区大小
  name NUMBER NAME         命名分区
  set NUMBER FLAG STATE    设置标志
  unit UNIT                设置默认单位
  rescue START END         恢复丢失分区
  move NUMBER START END    移动分区`,
    examples: [
      { description: "进入交互模式对磁盘分区", code: "parted /dev/sdb" },
      { description: "创建 GPT 分区表", code: "parted /dev/sdb mklabel gpt" },
      { description: "创建新分区", code: "parted /dev/sdb mkpart primary ext4 0% 50%" },
      { description: "打印分区信息", code: "parted /dev/sdb print" },
      { description: "查看帮助文档", code: "parted --help" }
    ],
    relatedCommands: ["fdisk", "cfdisk", "gparted", "mkfs"]
  },
  {
    name: "mkswap",
    categoryId: "disk",
    syntax: "mkswap [选项] 设备",
    simpleExplain: "创建交换分区",
    detailExplain: "在指定设备或文件上建立 swap 交换区，将其格式化为 swap 格式以便系统使用。常用参数：-c 在建立前检查坏块，-L 设置卷标，-p 指定页面大小，-U 设置 UUID。典型用法是先创建 swap 分区或文件，再用 mkswap 初始化，最后用 swapon 启用。",
    helpOutput: `
用法：
 mkswap [选项] device [size]

设置 Linux 交换区。

选项：
 -c, --check               创建交换区前检查坏块
 -f, --force               允许交换区大小大于设备
 -q, --quiet               抑制输出和警告消息
 -p, --pagesize SIZE       指定页大小（字节）
 -L, --label LABEL         指定标签
 -v, --swapversion NUM     指定交换空间版本号
 -U, --uuid UUID           指定要使用的 uuid
 -e, --endianness=<value>  指定要使用的字节序（native、little 或 big）
     --verbose             详细输出
     --lock[=<mode>]       使用独占设备锁（yes、no 或 nonblock）
 -h, --help                显示此帮助
 -V, --version             显示版本

更多详情见 mkswap(8)。
`,
    examples: [
      { description: "将分区格式化为 swap 格式", code: "mkswap /dev/sdb1" },
      { description: "创建 swap 文件", code: "dd if=/dev/zero of=/swapfile bs=1M count=4096 && mkswap /swapfile" },
      { description: "指定 UUID 创建 swap", code: "mkswap -U custom-uuid /dev/sdc1" },
      { description: "查看帮助文档", code: "mkswap --help" }
    ],
    relatedCommands: ["swapon", "swapoff", "free", "dd"],
    dangerLevel: "warning",
  },
  {
    name: "swapon",
    categoryId: "disk",
    syntax: "swapon [选项] 设备",
    simpleExplain: "启用交换分区",
    detailExplain: "启用指定的 swap 分区或 swap 文件，让系统在物理内存不足时使用该交换空间。常用参数：-a 启用 /etc/fstab 中所有 swap 项，-s 显示当前 swap 使用情况，-p 设置优先级（数值越大越优先使用）。通常在 mkswap 初始化之后执行。",
    helpOutput: `
用法：
 swapon [选项] [<spec>]

启用设备和文件用于分页和交换。

选项：
 -a, --all                启用 /etc/fstab 中的所有交换区
 -d, --discard[=<policy>] 启用交换 discard（如果设备支持）
 -e, --ifexists           静默跳过不存在的设备
 -f, --fixpgsz            必要时重新初始化交换空间
 -o, --options <list>     以逗号分隔的交换选项列表
 -p, --priority <prio>    指定交换设备的优先级
 -s, --summary            显示已用交换设备的摘要（已弃用）
 -T, --fstab <path>       /etc/fstab 的替代文件
     --show[=<columns>]   以可定义的表格显示摘要
     --noheadings         不打印表标题（与 --show 一起使用）
     --raw                使用原始输出格式（与 --show 一起使用）
     --bytes              在 --show 输出中以字节显示交换大小
 -v, --verbose            详细模式

 -h, --help               显示此帮助
 -V, --version            显示版本

<spec> 参数：
 -L <label>             LABEL=<label> 的同义词
 -U <uuid>              UUID=<uuid> 的同义词
 LABEL=<label>          通过交换区标签指定设备
 UUID=<uuid>            通过交换区 UUID 指定设备
 PARTLABEL=<label>      通过分区标签指定设备
 PARTUUID=<uuid>        通过分区 UUID 指定设备
 <device>               要使用的设备名
 <file>                 要使用的文件名

可用的 discard 策略类型（用于 --discard）：
 once    : 仅执行单次区域 discard
 pages   : 释放的页在重用前被 discard
如果未选择策略，则两种 discard 类型均启用（默认）。

可用输出列：
 NAME   设备文件或分区路径
 TYPE   设备类型
 SIZE   交换区大小
 USED   已用字节数
 PRIO   交换优先级
 UUID   交换 uuid
 LABEL  交换标签

更多详情见 swapon(8)。
`,
    examples: [
      { description: "启用 swap 分区", code: "swapon /dev/sdb1" },
      { description: "启用 swap 文件", code: "swapon /swapfile" },
      { description: "查看当前所有 swap 设备", code: "swapon --show" },
      { description: "启用所有 swap 设备", code: "swapon -a" },
      { description: "查看帮助文档", code: "swapon --help" }
    ],
    relatedCommands: ["swapoff", "mkswap", "free", "fstab"]
  },
  {
    name: "swapoff",
    categoryId: "disk",
    syntax: "swapoff [选项] 设备",
    simpleExplain: "禁用交换分区",
    detailExplain: "停用指定的 swap 分区或文件，禁用前系统会先把 swap 中的数据搬回物理内存。常用参数：-a 停用所有 swap，-v 显示详细信息。常用于关闭 swap 或调整 swap 配置前，需确保内存足够容纳搬回的数据。",
    helpOutput: `
用法：
 swapoff [选项] [<spec>]

禁用设备和文件用于分页和交换。

选项：
 -a, --all              禁用 /proc/swaps 中的所有交换区
 -v, --verbose          详细模式

 -h, --help             显示此帮助
 -V, --version          显示版本

<spec> 参数：
 -L <label>             要使用的设备的 LABEL
 -U <uuid>              要使用的设备的 UUID
 LABEL=<label>          要使用的设备的 LABEL
 UUID=<uuid>            要使用的设备的 UUID
 <device>               要使用的设备名
 <file>                 要使用的文件名

更多详情见 swapoff(8)。
`,
    examples: [
      { description: "禁用指定的 swap 分区", code: "swapoff /dev/sdb1" },
      { description: "禁用所有 swap 设备", code: "swapoff -a" },
      { description: "禁用 swap 文件", code: "swapoff /swapfile" },
      { description: "查看帮助文档", code: "swapoff --help" }
    ],
    relatedCommands: ["swapon", "mkswap", "free", "fstab"]
  },
  {
    name: "dumpe2fs",
    categoryId: "disk",
    syntax: "dumpe2fs [选项] 设备",
    simpleExplain: "查看ext文件系统详细信息",
    detailExplain: "输出 ext2/ext3/ext4 文件系统的详细信息，包括超级块、块组描述符、inode 数量、块大小、挂载次数等。常用参数：-h 只显示超级块信息，-b 显示坏块列表。常用于诊断文件系统问题和检查文件系统参数。",
    helpOutput: `dumpe2fs 1.47.0 (5-Feb-2023)
dumpe2fs: 无效选项 -- '-'
用法: dumpe2fs [-bfghimxV] [-o superblock=<num>] [-o blocksize=<num>] device
`,
    examples: [
      { description: "查看 ext4 文件系统的详细信息", code: "dumpe2fs /dev/sda1" },
      { description: "只显示超级块信息", code: "dumpe2fs -h /dev/sda1" },
      { description: "显示块组描述信息", code: "dumpe2fs /dev/sda1 | grep -i 'group'" },
      { description: "查看帮助文档", code: "dumpe2fs --help" }
    ],
    relatedCommands: ["tune2fs", "fsck", "mkfs.ext4", "blkid"]
  },
  {
    name: "ncdu",
    categoryId: "disk",
    syntax: "ncdu [目录]",
    simpleExplain: "交互式磁盘使用分析工具",
    detailExplain: "扫描指定目录并以交互式界面按大小排序显示各文件和子目录的磁盘占用情况，支持方向键浏览和删除操作。常用参数：-x 不跨越文件系统边界，-r 只读模式（禁止删除），-e 显示扩展信息。常用于快速定位占用磁盘空间的大文件或目录。",
    helpOutput: `Usage: ncdu [options] dir

Options:
  -h,--help          显示帮助
  -v,--version       显示版本
  -f FILE            从文件加载导出数据
  -0,-1,-2           UI 扫描模式
  -q                 安静模式（减少更新频率）
  -x                 不跨越文件系统
  -e                 启用扩展信息（权限、属主）
  -r                 只读模式
  --si               使用 1000 而非 1024
  --exclude PATTERN  排除匹配模式
  -X, --exclude-from FILE  从文件读取排除模式
  --color SCHEME     颜色: off, dark, dark-bg
  -o FILE            导出扫描结果到文件
  -O FILE            同 -o
  -L                 跟随符号链接
  --confirm-quit     退出时确认
  --ignore-config    忽略配置文件`,
    examples: [
      { description: "分析当前目录的磁盘使用", code: "ncdu" },
      { description: "分析指定目录", code: "ncdu /home/user" },
      { description: "不扫描隐藏文件", code: "ncdu --exclude-hidden /home" },
      { description: "导出扫描结果到文件", code: "ncdu -o /tmp/scan_result" },
      { description: "查看帮助文档", code: "ncdu --help" }
    ],
    relatedCommands: ["du", "df", "ls", "find"]
  },
  {
    name: "hdparm",
    categoryId: "disk",
    syntax: "hdparm [选项] 设备",
    simpleExplain: "查看和设置硬盘参数",
    detailExplain: "查看和设置 SATA/IDE 硬盘参数，可显示硬盘型号、序列号、缓存大小，测试读取速度，开启或关闭 DMA 模式等。常用参数：-i 显示硬盘基本信息，-I 显示详细信息，-t 测试磁盘读取速度，-T 测试缓存读取速度。修改参数有数据丢失风险，需谨慎使用。",
    helpOutput: `Usage: hdparm [options] [device ...]

Options:
  -a   获取/设置预读扇区数
  -A   获取/设置 IDE 预读标志
  -b   获取/设置总线状态
  -B   获取/设置高级电源管理
  -c   获取/设置 IDE 中断控制
  -C   检查 IDE 电源模式
  -d   获取/设置 DMA 标志
  -D   启用/禁用缺陷管理
  -E   设置 CD/DVD 速度
  -f   同步并退出
  -g   显示驱动器几何信息
  -h   显示帮助
  -i   显示驱动器标识信息
  -I   显示详细标识信息
  -k   获取/设置 keep_settings 标志
  -K   设置驱动器 keep_features 标志
  -L   设置驱动器锁
  -m   获取/设置多扇区计数
  -M   获取/设置声学管理
  -n   获取/设置 ignore_write_errors
  -N   获取/设置最大可见扇区数
  -p   尝试重新设置 PIO 模式
  -P   设置驱动器最大扇区数
  -q   安静模式
  -Q   获取/设置 NCQ 队列深度
  -r   获取/设置只读标志
  -R   注册接口
  -s   设置电源待机超时
  -S   设置待机超时
  -t   测试磁盘读取速度
  -T   测试缓存读取速度
  -u   获取/设置 interrupt-unmask 标志
  -v   显示当前设置
  -w   执行设备复位
  -W   获取/设置写缓存
  -y   强制 IDE 待机
  -Y   强制 IDE 睡眠
  -z   重新读取分区表
  -Z   禁用 Seagate 自动省电
  --security-help  安全选项帮助`,
    examples: [
      { description: "查看硬盘基本信息", code: "sudo hdparm -i /dev/sda" },
      { description: "测试硬盘读取速度", code: "sudo hdparm -tT /dev/sda" },
      { description: "查看硬盘电源管理状态", code: "sudo hdparm -C /dev/sda" },
      { description: "开启 DMA 传输模式", code: "sudo hdparm -d1 /dev/sda" },
      { description: "查看帮助文档", code: "hdparm --help" }
    ],
    relatedCommands: ["smartctl", "fdisk", "lsblk", "badblocks"]
  },
  {
    name: "smartctl",
    categoryId: "disk",
    syntax: "smartctl [选项] 设备",
    simpleExplain: "查看硬盘SMART健康信息",
    detailExplain: "读取硬盘的 SMART（自监测分析报告技术）数据，包括温度、通电时间、坏扇区计数、错误日志等。常用参数：-a 显示所有 SMART 信息，-H 显示健康状态，-t 运行自检测试，-l 查指定日志。常用于提前发现硬盘健康隐患，避免数据丢失。",
    helpOutput: `Usage: smartctl [options] device

Options:
  -h, --help           显示帮助
  -V, --version        显示版本
  -i, --info           显示设备信息
  -a, --all            显示所有 SMART 信息
  -x, --xall           显示所有信息（含非 SMART）
  -H, --health         显示健康状态
  -c, --capabilities   显示 SMART 能力
  -A, --attributes     显示 SMART 属性
  -l TYPE              显示日志: error, selftest, selective, directory, background, scttemp, scterc, sataphy
  -t TEST              执行测试: offline, short, long, conveyance, select
  -X, --abort          中止测试
  -d TYPE              指定设备类型: ata, scsi, sat, auto
  -T TYPE              容错模式: normal, conservative, permissive, verypermissive
  -b TYPE              自动离线模式: on, off
  -s VALUE             启用/禁用 SMART: on, off
  -o VALUE             自动离线测试: on, off
  -S VALUE             自动保存: on, off
  -n MODE              无检查模式: sleep, standby, idle
  -f                   退出时格式化输出
  -r TYPE              报告: ioctl
  -v N,OPTION          供应商属性选项
  -F TYPE              固件 bug 修复
  -P TYPE              预设
  -B TYPE              固件 bug`,
    examples: [
      { description: "查看硬盘整体健康状态", code: "sudo smartctl -H /dev/sda" },
      { description: "显示所有 SMART 信息", code: "sudo smartctl -a /dev/sda" },
      { description: "查看硬盘温度", code: "sudo smartctl -A /dev/sda | grep Temperature" },
      { description: "运行硬盘自检", code: "sudo smartctl -t long /dev/sda" },
      { description: "查看帮助文档", code: "smartctl --help" }
    ],
    relatedCommands: ["hdparm", "lsblk", "fdisk", "badblocks"]
  },
  {
    name: "losetup",
    categoryId: "disk",
    syntax: "losetup [选项] 循环设备 文件",
    simpleExplain: "设置和管理循环设备",
    detailExplain: "将普通文件（如 ISO 镜像）关联到循环设备 /dev/loopX，使其可以像真实硬盘一样被挂载和访问。常用参数：-a 列出所有循环设备，-d 卸载指定循环设备，-f 查找空闲循环设备，-o 设置偏移量。常用于挂载 ISO 镜像或访问磁盘镜像文件。",
    helpOutput: `
用法：
 losetup [选项] [<loopdev>]
 losetup [选项] -f | <loopdev> <file>

设置和控制 loop 设备。

选项：
 -a, --all                     列出所有已使用的设备
 -d, --detach <loopdev>...     分离一个或多个设备
 -D, --detach-all              分离所有已使用的设备
 -f, --find                    查找第一个未使用的设备
 -c, --set-capacity <loopdev>  调整设备大小
 -j, --associated <file>       列出与 <file> 关联的所有设备
 -L, --nooverlap               避免设备间可能的冲突

 -o, --offset <num>            从文件中偏移 <num> 处开始
     --sizelimit <num>         设备限制为文件的 <num> 字节
 -b, --sector-size <num>       将逻辑扇区大小设为 <num>
 -P, --partscan                创建分区的 loop 设备
 -r, --read-only               设置只读 loop 设备
     --direct-io[=<on|off>]    以 O_DIRECT 打开后备文件
     --show                    设置后打印设备名（与 -f 一起使用）
 -v, --verbose                 详细模式

 -J, --json                    使用 JSON --list 输出格式
 -l, --list                    列出所有或指定设备的信息（默认）
 -n, --noheadings              不打印 --list 输出的标题
 -O, --output <cols>           指定 --list 要输出的列
     --output-all              输出所有列
     --raw                     使用原始 --list 输出格式

 -h, --help                    显示此帮助
 -V, --version                 显示版本

可用输出列：
         NAME  loop 设备名
    AUTOCLEAR  已设置 autoclear 标志
    BACK-FILE  设备后备文件
     BACK-INO  后备文件 inode 号
 BACK-MAJ:MIN  后备文件主:次 设备号
      MAJ:MIN  loop 设备主:次 号
       OFFSET  距开头的偏移
     PARTSCAN  已设置 partscan 标志
           RO  只读设备
    SIZELIMIT  文件大小限制（字节）
          DIO  以 direct-io 访问后备文件
      LOG-SEC  逻辑扇区大小（字节）

更多详情见 losetup(8)。
`,
    examples: [
      { description: "查看所有循环设备", code: "losetup -a" },
      { description: "将 ISO 文件关联到循环设备", code: "sudo losetup /dev/loop0 ubuntu.iso" },
      { description: "自动寻找空闲循环设备并关联", code: "sudo losetup -f ubuntu.iso" },
      { description: "解除循环设备关联", code: "sudo losetup -d /dev/loop0" },
      { description: "查看帮助文档", code: "losetup --help" }
    ],
    relatedCommands: ["mount", "mkfs", "dd", "fdisk"]
  },
  {
    name: "tune2fs",
    categoryId: "disk",
    syntax: "tune2fs [选项] 设备",
    simpleExplain: "调整ext文件系统参数",
    detailExplain: "调整 ext2/ext3/ext4 文件系统的参数，如保留空间比例、文件系统标签、自检间隔、最大挂载次数等。常用参数：-l 列出文件系统参数，-L 设置卷标，-m 设置保留块百分比，-i 设置自检间隔，-c 设置最大挂载次数。操作可能影响文件系统，务必谨慎。",
    helpOutput: `tune2fs 1.47.0 (5-Feb-2023)
`,
    examples: [
      { description: "查看文件系统参数", code: "sudo tune2fs -l /dev/sda1" },
      { description: "设置文件系统标签", code: "sudo tune2fs -L mydata /dev/sda1" },
      { description: "将 ext2 转换为 ext3", code: "sudo tune2fs -j /dev/sda1" },
      { description: "设置每 30 天自检一次", code: "sudo tune2fs -i 30d /dev/sda1" },
      { description: "查看帮助文档", code: "tune2fs --help" }
    ],
    relatedCommands: ["dumpe2fs", "fsck", "mkfs.ext4", "resize2fs"],
    dangerLevel: "warning"
  },
  {
    name: "resize2fs",
    categoryId: "disk",
    syntax: "resize2fs [选项] 设备 [大小]",
    simpleExplain: "调整ext文件系统大小",
    detailExplain: "扩大或缩小 ext2/ext3/ext4 文件系统的大小，通常在调整分区大小后使用，让文件系统填满新的分区空间。常用参数：-d 调试模式，-f 强制执行，-M 缩小到最小尺寸，-p 显示进度。扩大文件系统可在线执行，缩小需先卸载。",
    helpOutput: `resize2fs 1.47.0 (5-Feb-2023)
resize2fs: 无效选项 -- '-'
用法: resize2fs [-d debug_flags] [-f] [-F] [-M] [-P] [-p] device [-b|-s|new_size] [-S RAID-stride] [-z undo_file]

`,
    examples: [
      { description: "扩大文件系统到分区最大容量", code: "sudo resize2fs /dev/sda1" },
      { description: "将文件系统缩小到指定大小", code: "sudo resize2fs /dev/sda1 50G" },
      { description: "强制调整前先检查", code: "sudo resize2fs -p /dev/sda1" },
      { description: "查看最小可缩小到多少", code: "sudo resize2fs -P /dev/sda1" },
      { description: "查看帮助文档", code: "resize2fs --help" }
    ],
    relatedCommands: ["tune2fs", "fdisk", "lvextend", "fsck"]
  },
  {
    name: "badblocks",
    categoryId: "disk",
    syntax: "badblocks [选项] 设备",
    simpleExplain: "检查磁盘坏道",
    detailExplain: "扫描磁盘上的每个扇区，找出无法正常读写的坏道。常用参数：-v 显示详细进度，-w 写模式测试（会破坏数据），-n 非破坏性读写测试，-s 显示进度条。发现坏道意味着硬盘可能即将损坏，应及时备份数据。",
    helpOutput: `badblocks: 无效选项 -- '-'
用法: badblocks [-b block_size] [-i input_file] [-o output_file] [-svwnfBX]
       [-c blocks_at_once] [-d delay_factor_between_reads] [-e max_bad_blocks]
       [-p num_passes] [-t test_pattern [-t test_pattern [...]]]
       device [last_block [first_block]]
`,
    examples: [
      { description: "只读模式扫描坏道", code: "sudo badblocks -s /dev/sda" },
      { description: "非破坏性读写测试", code: "sudo badblocks -n /dev/sda" },
      { description: "将坏道列表保存到文件", code: "sudo badblocks -o bad.txt /dev/sda" },
      { description: "指定扫描的起止块", code: "sudo badblocks -s /dev/sda 1000000 0" },
      { description: "查看帮助文档", code: "badblocks --help" }
    ],
    relatedCommands: ["fsck", "smartctl", "hdparm", "e2fsck"]
  },
  {
    name: "sync",
    categoryId: "disk",
    syntax: "sync",
    simpleExplain: "将缓存数据写入磁盘",
    detailExplain: "强制将内存中缓存的文件数据立即写入磁盘。Linux 为提高性能会将数据先放在内存缓存中稍后写入，sync 命令确保数据落盘。常用参数：-f 同步文件系统，-d 仅同步文件数据（不同步元数据）。常在关机、拔出存储设备或重要写入后使用以确保数据安全。",
    helpOutput: `用法: sync [选项] [文件]...
将缓存的写入同步到持久存储

如果指定了一个或多个文件，仅同步这些文件，
或它们所在的文件系统。

  -d, --data             仅同步文件数据，不同步不需要的元数据
  -f, --file-system      同步包含这些文件的文件系统
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译错误请至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/sync>
或通过本地命令获取: info '(coreutils) sync invocation'
`,
    examples: [
      { description: "将所有缓存数据写入磁盘", code: "sync" },
      { description: "拔 U 盘前确保数据写入", code: "sync && sudo eject /dev/sdb" },
      { description: "重启前同步数据", code: "sync && sudo reboot" },
      { description: "显示同步进度信息", code: "sync -v" },
      { description: "查看帮助文档", code: "sync --help" }
    ],
    relatedCommands: ["fsck", "mount", "umount", "dd"]
  },

  // ==================== 压缩解压 ====================
  {
    name: "tar",
    categoryId: "compress",
    syntax: "tar [选项] 文件...",
    simpleExplain: "打包和解包文件",
    detailExplain: "将多个文件和目录打包成单个归档文件，tar 本身只负责打包不压缩，通常配合 gzip 或 bzip2 一起使用实现打包压缩。常用参数：-c 创建归档，-x 解包，-t 列出内容，-v 显示过程，-f 指定文件名，-z 用 gzip 压缩/解压，-j 用 bzip2，-J 用 xz。常用于备份和软件分发包。",
    helpOutput: `用法: tar [选项]... [文件]...
GNU 'tar' 将多个文件一起保存到单个磁带或磁盘归档中，并且可以
从归档中恢复单个文件。

示例:
  tar -cf archive.tar foo bar  # 从文件 foo 和 bar 创建 archive.tar。
  tar -tvf archive.tar         # 详细列出 archive.tar 中的所有文件。
  tar -xf archive.tar          # 从 archive.tar 中提取所有文件。

 主操作模式:
  -A, --catenate, --concatenate   将 tar 文件追加到归档中
  -c, --create               创建新归档
      --delete               从归档中删除（不可用于磁带！）
  -d, --diff, --compare      查找归档与文件系统之间的差异
  -r, --append               将文件追加到归档末尾
      --test-label           测试归档卷标并退出
  -t, --list                 列出归档内容
  -u, --update               仅追加比归档中副本更新的文件
  -x, --extract, --get       从归档中提取文件

 操作修饰符:

      --check-device         创建增量归档时检查设备号
                             （默认）
  -g, --listed-incremental=FILE   处理新 GNU 格式增量备份
  -G, --incremental          处理旧 GNU 格式增量备份
      --hole-detection=TYPE  检测空洞的技术
      --ignore-failed-read   遇到不可读文件时不以非零状态退出
      --level=NUMBER         创建的列表增量归档的转储级别
      --no-check-device      创建增量归档时不检查设备号
      --no-seek              归档不可定位
  -n, --seek                 归档可定位
      --occurrence[=NUMBER]  仅处理归档中每个文件的第 NUMBER 次出现；
                             此选项仅在与子命令 --delete、
                             --diff、--extract 或 --list 之一一起使用，
                             且通过命令行或 -T 选项给出文件列表时
                             有效；NUMBER 默认为 1
      --sparse-version=MAJOR[.MINOR]
                             设置使用的稀疏格式版本（隐含
                             --sparse）
  -S, --sparse               高效处理稀疏文件

 本地文件名选择:
      --add-file=FILE        将指定 FILE 添加到归档中（当其名称
                             以连字符开头时有用）
  -C, --directory=DIR        切换到目录 DIR
      --exclude=PATTERN      排除匹配 PATTERN 的文件
      --exclude-backups      排除备份和锁文件
      --exclude-caches       排除包含 CACHEDIR.TAG 的目录内容，
                             但标签文件本身除外
      --exclude-caches-all   排除包含 CACHEDIR.TAG 的目录
      --exclude-caches-under 排除 d`,
    examples: [
      { description: "打包并压缩为 .tar.gz", code: "tar -czf backup.tar.gz /home/user/project/" },
      { description: "解压 .tar.gz 文件", code: "tar -xzf backup.tar.gz" },
      { description: "打包并压缩为 .tar.bz2", code: "tar -cjf archive.tar.bz2 documents/" },
      { description: "查看压缩包内容（不解压）", code: "tar -tzf backup.tar.gz" },
      { description: "查看帮助文档", code: "tar --help" }
    ],
    relatedCommands: ["gzip", "bzip2", "zip", "7z"]
  },
  {
    name: "gzip",
    categoryId: "compress",
    syntax: "gzip [选项] 文件...",
    simpleExplain: "压缩文件为gzip格式",
    detailExplain: "压缩文件以节省磁盘空间和网络传输时间，压缩后原文件被替换为 .gz 文件，是 Linux 上最常用的压缩格式。常用参数：-d 解压，-k 保留原文件，-r 递归压缩目录，-1 到 -9 设置压缩级别（数字越大压缩率越高但越慢）。常用于日志文件压缩和配合 tar 使用。",
    helpOutput: `用法: gzip [选项]... [文件]...
压缩或解压文件（默认为就地压缩文件）。

长选项的必选参数对短选项同样必选。

  -c, --stdout      写入标准输出，保持原文件不变
  -d, --decompress  解压
  -f, --force       强制覆盖输出文件并压缩链接
  -h, --help        显示此帮助
  -k, --keep        保留（不删除）输入文件
  -l, --list        列出压缩文件内容
  -L, --license     显示软件许可证
  -n, --no-name     不保存或恢复原始名称和时间戳
  -N, --name        保存或恢复原始名称和时间戳
  -q, --quiet       抑制所有警告
  -r, --recursive   递归处理目录
      --rsyncable   创建对 rsync 友好的归档
  -S, --suffix=SUF  在压缩文件上使用后缀 SUF
      --synchronous 同步输出（系统崩溃时更安全，但更慢）
  -t, --test        测试压缩文件完整性
  -v, --verbose     详细模式
  -V, --version     显示版本号
  -1, --fast        更快地压缩
  -9, --best        更好地压缩

如果没有 FILE，或 FILE 为 -，则读取标准输入。

报告错误请至 <bug-gzip@gnu.org>。
`,
    examples: [
      { description: "压缩文件", code: "gzip access.log" },
      { description: "保留原文件同时压缩", code: "gzip -k important_data.csv" },
      { description: "指定压缩级别（1 最快，9 最小）", code: "gzip -9 large_file.bin" },
      { description: "递归压缩目录下所有文件", code: "gzip -r logs/" },
      { description: "查看帮助文档", code: "gzip --help" }
    ],
    relatedCommands: ["gunzip", "bzip2", "xz", "zcat"]
  },
  {
    name: "gunzip",
    categoryId: "compress",
    syntax: "gunzip [选项] 文件...",
    simpleExplain: "解压gzip压缩文件",
    detailExplain: "将 .gz 文件解压还原成原始文件，等价于 gzip -d。常用参数：-k 保留 .gz 原文件，-r 递归解压，-S 指定后缀名，-f 强制覆盖。常用于解压 gzip 压缩的文件。",
    helpOutput: `用法: /usr/bin/gunzip [选项]... [文件]...
解压文件（默认为就地解压）。

长选项的必选参数对短选项同样必选。

  -c, --stdout      写入标准输出，保持原文件不变
  -f, --force       强制覆盖输出文件并压缩链接
  -k, --keep        保留（不删除）输入文件
  -l, --list        列出压缩文件内容
  -n, --no-name     不保存或恢复原始名称和时间戳
  -N, --name        保存或恢复原始名称和时间戳
  -q, --quiet       抑制所有警告
  -r, --recursive   递归处理目录
  -S, --suffix=SUF  在压缩文件上使用后缀 SUF
      --synchronous 同步输出（系统崩溃时更安全，但更慢）
  -t, --test        测试压缩文件完整性
  -v, --verbose     详细模式
      --help        显示此帮助并退出
      --version     显示版本信息并退出

如果没有 FILE，或 FILE 为 -，则读取标准输入。

报告错误请至 <bug-gzip@gnu.org>。
`,
    examples: [
      { description: "解压 .gz 文件", code: "gunzip access.log.gz" },
      { description: "保留压缩文件同时解压", code: "gunzip -k archive.gz" },
      { description: "递归解压目录下所有 .gz 文件", code: "gunzip -r logs/" },
      { description: "查看帮助文档", code: "gunzip --help" }
    ],
    relatedCommands: ["gzip", "zcat", "bunzip2", "unxz"]
  },
  {
    name: "bzip2",
    categoryId: "compress",
    syntax: "bzip2 [选项] 文件...",
    simpleExplain: "高压缩比压缩文件",
    detailExplain: "压缩文件，压缩率高于 gzip 但压缩速度更慢，适合对文件大小敏感、不太在乎压缩时间的场景。常用参数：-d 解压，-k 保留原文件，-1 到 -9 设置压缩级别，-f 强制覆盖。压缩后生成 .bz2 文件，原文件默认被删除。",
    helpOutput: `bzip2，一个块排序文件压缩器。版本 1.0.8，13-Jul-2019。

   用法: bzip2 [标志和输入文件，顺序任意]

   -h --help           打印此消息
   -d --decompress     强制解压
   -z --compress       强制压缩
   -k --keep           保留（不删除）输入文件
   -f --force          覆盖已存在的输出文件
   -t --test           测试压缩文件完整性
   -c --stdout         输出到标准输出
   -q --quiet          抑制非关键错误消息
   -v --verbose        详细模式（第二次 -v 提供更多信息）
   -L --license        显示软件版本和许可证
   -V --version        显示软件版本和许可证
   -s --small          使用更少内存（最多 2500k）
   -1 .. -9            设置块大小为 100k .. 900k
   --fast              -1 的别名
   --best              -9 的别名

   如果以 \`bzip2' 调用，默认动作为压缩。
              以 \`bunzip2' 调用，默认动作为解压。
              以 \`bzcat' 调用，默认动作为解压到标准输出。

   如果未给出文件名，bzip2 从标准输入压缩或解压
   到标准输出。可以组合短标志，因此 \`-v -4' 与 -v4 或 -4v 相同，以此类推。

`,
    examples: [
      { description: "压缩文件为 .bz2 格式", code: "bzip2 big_file.txt" },
      { description: "保留原文件同时压缩", code: "bzip2 -k data.csv" },
      { description: "使用最高压缩级别", code: "bzip2 -9 archive.dat" },
      { description: "解压 bzip2 文件", code: "bzip2 -d compressed.bz2" },
      { description: "查看帮助文档", code: "bzip2 --help" }
    ],
    relatedCommands: ["bunzip2", "gzip", "xz", "bzcat"]
  },
  {
    name: "bunzip2",
    categoryId: "compress",
    syntax: "bunzip2 [选项] 文件...",
    simpleExplain: "解压bzip2压缩文件",
    detailExplain: "将 .bz2 文件解压还原成原始文件，等价于 bzip2 -d。常用参数：-k 保留 .bz2 原文件，-f 强制覆盖。常用于解压 bzip2 压缩的文件。",
    helpOutput: `bzip2，一个块排序文件压缩器。版本 1.0.8，13-Jul-2019。

   用法: bunzip2 [标志和输入文件，顺序任意]

   -h --help           打印此消息
   -d --decompress     强制解压
   -z --compress       强制压缩
   -k --keep           保留（不删除）输入文件
   -f --force          覆盖已存在的输出文件
   -t --test           测试压缩文件完整性
   -c --stdout         输出到标准输出
   -q --quiet          抑制非关键错误消息
   -v --verbose        详细模式（第二次 -v 提供更多信息）
   -L --license        显示软件版本和许可证
   -V --version        显示软件版本和许可证
   -s --small          使用更少内存（最多 2500k）
   -1 .. -9            设置块大小为 100k .. 900k
   --fast              -1 的别名
   --best              -9 的别名

   如果以 \`bzip2' 调用，默认动作为压缩。
              以 \`bunzip2' 调用，默认动作为解压。
              以 \`bzcat' 调用，默认动作为解压到标准输出。

   如果未给出文件名，bzip2 从标准输入压缩或解压
   到标准输出。可以组合短标志，因此 \`-v -4' 与 -v4 或 -4v 相同，以此类推。

`,
    examples: [
      { description: "解压 .bz2 文件", code: "bunzip2 archive.bz2" },
      { description: "保留压缩文件同时解压", code: "bunzip2 -k archive.bz2" },
      { description: "查看帮助文档", code: "bunzip2 --help" }
    ],
    relatedCommands: ["bzip2", "bzcat", "gunzip", "unxz"]
  },
  {
    name: "zip",
    categoryId: "compress",
    syntax: "zip [选项] 压缩包名 文件...",
    simpleExplain: "创建ZIP压缩包",
    detailExplain: "将文件压缩为 zip 格式，这是跨平台的压缩标准，Windows、Mac、Linux 都能直接打开。zip 压缩时会保留原文件，适合与 Windows 用户交换文件。常用参数：-r 递归压缩目录，-e 加密压缩包，-9 最高压缩率，-j 不保留目录路径。常用于跨平台文件分发。",
    helpOutput: `版权所有 (c) 1990-2008 Info-ZIP - 输入 'zip "-L"' 查看软件许可证。
Zip 3.0 (2008年7月5日)。用法:
zip [-options] [-b path] [-t mmddyyyy] [-n suffixes] [zipfile list] [-xi list]
  默认动作是从列表中添加或替换 zipfile 条目，列表
  可以包含特殊名称 - 来压缩标准输入。
  如果省略 zipfile 和列表，zip 将标准输入压缩到标准输出。
  -f   刷新: 仅已更改的文件  -u   更新: 仅已更改或新文件
  -d   删除 zipfile 中的条目    -m   移入 zipfile（删除 OS 文件）
  -r   递归进入目录     -j   丢弃（不记录）目录名
  -0   仅存储                   -l   将 LF 转换为 CR LF（-ll CR LF 转 LF）
  -1   更快压缩              -9   更好压缩
  -q   安静操作              -v   详细操作/打印版本信息
  -c   添加单行注释        -z   添加 zipfile 注释
  -@   从标准输入读取名称        -o   使 zipfile 与最新条目一样旧
  -x   排除以下名称  -i   仅包含以下名称
  -F   修复 zipfile（-FF 更努力尝试） -D   不添加目录条目
  -A   调整自解压可执行文件   -J   丢弃 zipfile 前缀（unzipsfx）
  -T   测试 zipfile 完整性       -X   排除额外的文件属性
  -y   将符号链接存储为链接而非引用的文件
  -e   加密                      -n   不压缩这些后缀
  -h2  显示更多帮助
  
`,
    examples: [
      { description: "将多个文件压缩为 zip 包", code: "zip archive.zip file1.txt file2.txt" },
      { description: "递归压缩整个目录", code: "zip -r project.zip project_folder/" },
      { description: "添加文件到已有的 zip 包", code: "zip -u archive.zip newfile.txt" },
      { description: "加密压缩", code: "zip -e secret.zip confidential.pdf" },
      { description: "查看帮助文档", code: "zip --help" }
    ],
    relatedCommands: ["unzip", "gzip", "tar", "7z"]
  },
  {
    name: "unzip",
    categoryId: "compress",
    syntax: "unzip [选项] 压缩包",
    simpleExplain: "解压ZIP压缩文件",
    detailExplain: "将 .zip 压缩包中的文件解压出来，可解压到当前目录或指定目标目录。常用参数：-d 指定目标目录，-l 列出压缩包内容而不解压，-o 覆盖已存在文件，-q 静默模式。常用于解压 zip 格式的压缩文件。",
    helpOutput: `UnZip 6.00 of 20 April 2009, by Debian. 最初由 Info-ZIP 开发。

用法: unzip [-Z] [-opts[modifiers]] file[.zip] [list] [-x xlist] [-d exdir]
  默认动作是将列表中的文件（xlist 中的除外）解压到 exdir；
  file[.zip] 可以是通配符。-Z => ZipInfo 模式（输入 "unzip -Z" 查看用法）。

  -p  将文件解压到管道，无消息     -l  列出文件（短格式）
  -f  刷新已存在的文件，不创建    -t  测试压缩归档数据
  -u  更新文件，必要时创建      -z  仅显示归档注释
  -v  详细列出/显示版本信息       -T  将归档时间戳设为最新
  -x  排除后续文件（在 xlist 中）   -d  将文件解压到 exdir
修饰符:
  -n  永不覆盖已存在文件         -q  安静模式（-qq => 更安静）
  -o  不提示直接覆盖文件      -a  自动转换任何文本文件
  -j  丢弃路径（不创建目录）   -aa 将所有文件视为文本
  -U  对所有非 ASCII Unicode 使用转义  -UU 忽略任何 Unicode 字段
  -C  不区分大小写匹配文件名     -L  将（某些）名称转为小写
  -X  恢复 UID/GID 信息                   -V  保留 VMS 版本号
  -K  保留 setuid/setgid/tacky 权限   -M  通过 "more" 分页器管道
  -O CHARSET  为 DOS、Windows 和 OS/2 归档指定字符编码
  -I CHARSET  为 UNIX 和其他归档指定字符编码

输入 "unzip -hh" 或 unzip.txt 获取更多帮助。示例:
  unzip data1 -x joe   => 从 zipfile data1.zip 中提取除 joe 外的所有文件
  unzip -p foo | more  => 通过管道将 foo.zip 的内容发送到 more 程序
  unzip -fo foo ReadMe => 如果归档文件更新，则安静地替换已存在的 ReadMe
`,
    examples: [
      { description: "解压 zip 文件到当前目录", code: "unzip archive.zip" },
      { description: "解压到指定目录", code: "unzip archive.zip -d /target/path/" },
      { description: "查看压缩包内容（不解压）", code: "unzip -l archive.zip" },
      { description: "只解压特定文件", code: "unzip archive.zip \"*.txt\"" },
      { description: "查看帮助文档", code: "unzip --help" }
    ],
    relatedCommands: ["zip", "tar", "7z", "jar"]
  },
  {
    name: "xz",
    categoryId: "compress",
    syntax: "xz [选项] 文件...",
    simpleExplain: "高压缩比压缩文件",
    detailExplain: "压缩文件，压缩率最高但压缩速度也最慢，适合需要极致压缩的场景，如发布大型软件源码包。常用参数：-d 解压，-k 保留原文件，-1 到 -9 设置压缩级别，-z 压缩（默认操作）。压缩后生成 .xz 文件，原文件默认被删除。",
    helpOutput: `用法: xz [选项]... [文件]...
以 .xz 格式压缩或解压文件。

  -z, --compress      强制压缩
  -d, --decompress    强制解压
  -t, --test          测试压缩文件完整性
  -l, --list          列出 .xz 文件的信息
  -k, --keep          保留（不删除）输入文件
  -f, --force         强制覆盖输出文件并（解）压缩链接
  -c, --stdout        写入标准输出且不删除输入文件
  -0 ... -9           压缩预设级别；默认为 6；使用 7-9 前请考虑
                      压缩器和解压器的内存使用！
  -e, --extreme       尝试通过使用更多 CPU 时间来提高压缩比；
                      不影响解压器内存需求
  -T, --threads=NUM   最多使用 NUM 个线程；默认为 1；设为 0
                      则使用与处理器核心数相同的线程数
  -q, --quiet         抑制警告；指定两次也抑制错误
  -v, --verbose       详细模式；指定两次以获得更详细的输出
  -h, --help          显示此简短帮助并退出
  -H, --long-help     显示长帮助（也列出高级选项）
  -V, --version       显示版本号并退出

如果没有 FILE，或 FILE 为 -，则读取标准输入。

报告错误请至 <xz@tukaani.org>（英文或芬兰文）。
XZ Utils 主页: <https://tukaani.org/xz/>
`,
    examples: [
      { description: "压缩文件为 .xz 格式", code: "xz huge_file.bin" },
      { description: "保留原文件同时压缩", code: "xz -k data.tar" },
      { description: "使用极速压缩", code: "xz -0 quick_compress.dat" },
      { description: "使用极限压缩", code: "xz -9e massive_database.sql" },
      { description: "查看帮助文档", code: "xz --help" }
    ],
    relatedCommands: ["unxz", "xzcat", "gzip", "bzip2"]
  },
  {
    name: "unxz",
    categoryId: "compress",
    syntax: "unxz [选项] 文件...",
    simpleExplain: "解压xz压缩文件",
    detailExplain: "将 .xz 文件解压还原成原始文件，等价于 xz -d。常用参数：-k 保留 .xz 原文件，-f 强制覆盖。常用于解压 xz 压缩的文件，如内核源码包等。",
    helpOutput: `用法: unxz [选项]... [文件]...
以 .xz 格式压缩或解压文件。

  -z, --compress      强制压缩
  -d, --decompress    强制解压
  -t, --test          测试压缩文件完整性
  -l, --list          列出 .xz 文件的信息
  -k, --keep          保留（不删除）输入文件
  -f, --force         强制覆盖输出文件并（解）压缩链接
  -c, --stdout        写入标准输出且不删除输入文件
  -0 ... -9           压缩预设级别；默认为 6；使用 7-9 前请考虑
                      压缩器和解压器的内存使用！
  -e, --extreme       尝试通过使用更多 CPU 时间来提高压缩比；
                      不影响解压器内存需求
  -T, --threads=NUM   最多使用 NUM 个线程；默认为 1；设为 0
                      则使用与处理器核心数相同的线程数
  -q, --quiet         抑制警告；指定两次也抑制错误
  -v, --verbose       详细模式；指定两次以获得更详细的输出
  -h, --help          显示此简短帮助并退出
  -H, --long-help     显示长帮助（也列出高级选项）
  -V, --version       显示版本号并退出

如果没有 FILE，或 FILE 为 -，则读取标准输入。

报告错误请至 <xz@tukaani.org>（英文或芬兰文）。
XZ Utils 主页: <https://tukaani.org/xz/>
`,
    examples: [
      { description: "解压 .xz 文件", code: "unxz archive.xz" },
      { description: "保留压缩文件同时解压", code: "unxz -k archive.xz" },
      { description: "查看帮助文档", code: "unxz --help" }
    ],
    relatedCommands: ["xz", "xzcat", "gunzip", "bunzip2"]
  },
  {
    name: "7z",
    categoryId: "compress",
    syntax: "7z [命令] [选项] 压缩包 文件...",
    simpleExplain: "7-Zip压缩工具",
    detailExplain: "支持 7z、zip、rar、tar、gzip 等几乎所有常见压缩格式的全能压缩工具，7z 格式压缩率极高。常用参数：a 添加到压缩包，x 带完整路径解压，l 列出内容，t 测试完整性。常用于需要处理多种压缩格式或追求高压缩率的场景。",
    helpOutput: `用法: 7z <command> [<switches>...] <archive_name> [<file_names>...]
       [<@listfiles...>]

Commands:
  a      添加文件到压缩包
  b      基准测试
  d      从压缩包删除文件
  e      解压（不保留路径）
  h      计算哈希
  i      显示支持的格式
  l      列出压缩包内容
  rn     重命名压缩包内文件
  t      测试压缩包完整性
  u      更新压缩包内文件
  x      解压（保留完整路径）

Switches:
  -oDIR  解压到指定目录
  -pPWD  设置密码
  -r     递归子目录
  -tFMT  指定格式（zip, 7z, tar, gzip, bzip2, xz）
  -vSIZE 分卷压缩
  -xPATH 排除文件
  -mX=N  压缩级别（0-9）
  -mhe=on 启用头部加密
  -mx=N  压缩级别（0=存储,1=最快,9=超高）
  -sdel  压缩后删除原文件
  -si    从 stdin 读取
  -so    输出到 stdout
  -y     全部回答 yes`,
    examples: [
      { description: "压缩为 7z 格式", code: "7z a archive.7z folder/" },
      { description: "解压 7z 文件", code: "7z x archive.7z" },
      { description: "解压 rar 文件", code: "7z x file.rar" },
      { description: "列出压缩包内容", code: "7z l archive.7z" },
      { description: "查看帮助文档", code: "7z --help" }
    ],
    relatedCommands: ["zip", "unzip", "rar", "tar"]
  },
  {
    name: "zcat",
    categoryId: "compress",
    syntax: "zcat [选项] 文件...",
    simpleExplain: "不解压直接查看gzip文件内容",
    detailExplain: "不解压 .gz 文件即可直接将其内容输出到标准输出，等价于 gunzip -c。常用参数：-f 强制解压（即使文件后缀不是 .gz），-h 显示帮助。常用于查看压缩日志文件内容或配合管道处理压缩数据。",
    helpOutput: `用法: /usr/bin/zcat [选项]... [文件]...
将文件解压到标准输出。

  -f, --force       强制；即使从终端也读取压缩数据
  -l, --list        列出压缩文件内容
  -q, --quiet       抑制所有警告
  -r, --recursive   递归处理目录
  -S, --suffix=SUF  在压缩文件上使用后缀 SUF
      --synchronous 同步输出（系统崩溃时更安全，但更慢）
  -t, --test        测试压缩文件完整性
  -v, --verbose     详细模式
      --help        显示此帮助并退出
      --version     显示版本信息并退出

如果没有 FILE，或 FILE 为 -，则读取标准输入。

报告错误请至 <bug-gzip@gnu.org>。
`,
    examples: [
      { description: "查看 gzip 压缩文件的内容", code: "zcat access.log.gz" },
      { description: "配合 grep 搜索压缩日志", code: "zcat access.log.gz | grep 'error'" },
      { description: "查看多个压缩文件", code: "zcat file1.gz file2.gz" },
      { description: "查看帮助文档", code: "zcat --help" }
    ],
    relatedCommands: ["gzip", "gunzip", "bzcat", "xzcat"]
  },
  {
    name: "bzcat",
    categoryId: "compress",
    syntax: "bzcat [选项] 文件...",
    simpleExplain: "不解压直接查看bzip2文件内容",
    detailExplain: "不解压 .bz2 文件即可直接将其内容输出到标准输出，是 bzip2 版本的 zcat，等价于 bunzip2 -c。常用参数：-f 强制解压。常用于查看 bzip2 压缩的文件内容或配合管道处理压缩数据。",
    helpOutput: `bzip2，一个块排序文件压缩器。版本 1.0.8，13-Jul-2019。

   用法: bzcat [标志和输入文件，顺序任意]

   -h --help           打印此消息
   -d --decompress     强制解压
   -z --compress       强制压缩
   -k --keep           保留（不删除）输入文件
   -f --force          覆盖已存在的输出文件
   -t --test           测试压缩文件完整性
   -c --stdout         输出到标准输出
   -q --quiet          抑制非关键错误消息
   -v --verbose        详细模式（第二次 -v 提供更多信息）
   -L --license        显示软件版本和许可证
   -V --version        显示软件版本和许可证
   -s --small          使用更少内存（最多 2500k）
   -1 .. -9            设置块大小为 100k .. 900k
   --fast              -1 的别名
   --best              -9 的别名

   如果以 \`bzip2' 调用，默认动作为压缩。
              以 \`bunzip2' 调用，默认动作为解压。
              以 \`bzcat' 调用，默认动作为解压到标准输出。

   如果未给出文件名，bzip2 从标准输入压缩或解压
   到标准输出。可以组合短标志，因此 \`-v -4' 与 -v4 或 -4v 相同，以此类推。

`,
    examples: [
      { description: "查看 bzip2 压缩文件的内容", code: "bzcat archive.bz2" },
      { description: "配合 grep 搜索", code: "bzcat log.bz2 | grep 'warning'" },
      { description: "查看帮助文档", code: "bzcat --help" }
    ],
    relatedCommands: ["bzip2", "bunzip2", "zcat", "xzcat"]
  },
  {
    name: "compress",
    categoryId: "compress",
    syntax: "compress [选项] 文件...",
    simpleExplain: "老式Unix压缩工具",
    detailExplain: "Unix 系统上最早的压缩工具之一，压缩后文件后缀为 .Z，压缩率不如 gzip，现在基本已被淘汰。常用参数：-f 强制覆盖，-v 显示压缩率，-r 递归压缩目录，-b 设置压缩位数。主要用于处理历史遗留的 .Z 格式文件。",
    helpOutput: `用法: compress [ -f ] [ -v ] [ -c ] [ -V ] [ -r ] [ -b bits ] [ name ... ]

Options:
  -f       强制压缩（覆盖已存在的 .Z 文件）
  -v       显示压缩比
  -c       输出到标准输出（不改变原文件）
  -V       显示版本
  -r       递归处理目录
  -b BITS  设置压缩位数（9-16，默认 16）
  -d       解压（等同于 uncompress）`,
    examples: [
      { description: "压缩文件为 .Z 格式", code: "compress large_file.txt" },
      { description: "强制压缩", code: "compress -f data.log" },
      { description: "查看帮助文档", code: "compress --help" }
    ],
    relatedCommands: ["uncompress", "gzip", "zip", "zcat"]
  },
  {
    name: "uncompress",
    categoryId: "compress",
    syntax: "uncompress [选项] 文件...",
    simpleExplain: "解压.Z格式文件",
    detailExplain: "解压 compress 命令生成的 .Z 格式文件，等价于 compress -d。常用参数：-f 强制覆盖，-v 显示解压信息，-r 递归解压。常用于处理历史遗留的 .Z 格式压缩文件。",
    helpOutput: `用法: /usr/bin/uncompress [选项]... [文件]...
解压文件（默认为就地解压）。

长选项的必选参数对短选项同样必选。

  -c, --stdout      写入标准输出，保持原文件不变
  -f, --force       强制覆盖输出文件并压缩链接
  -k, --keep        保留（不删除）输入文件
  -l, --list        列出压缩文件内容
  -n, --no-name     不保存或恢复原始名称和时间戳
  -N, --name        保存或恢复原始名称和时间戳
  -q, --quiet       抑制所有警告
  -r, --recursive   递归处理目录
  -S, --suffix=SUF  在压缩文件上使用后缀 SUF
      --synchronous 同步输出（系统崩溃时更安全，但更慢）
  -t, --test        测试压缩文件完整性
  -v, --verbose     详细模式
      --help        显示此帮助并退出
      --version     显示版本信息并退出

如果没有 FILE，或 FILE 为 -，则读取标准输入。

报告错误请至 <bug-gzip@gnu.org>。
`,
    examples: [
      { description: "解压 .Z 文件", code: "uncompress archive.Z" },
      { description: "强制解压", code: "uncompress -f data.log.Z" },
      { description: "查看帮助文档", code: "uncompress --help" }
    ],
    relatedCommands: ["compress", "gunzip", "bunzip2", "zcat"]
  },
  {
    name: "rar",
    categoryId: "compress",
    syntax: "rar [命令] [选项] 压缩包 文件...",
    simpleExplain: "RAR格式压缩工具",
    detailExplain: "创建或管理 RAR 格式压缩包，压缩率高、支持分卷压缩和恢复记录，但 rar 是商业软件，Linux 上通常用 7z 或 unrar 来处理 rar 文件。常用参数：a 添加文件到压缩包，x 带路径解压，-v 分卷压缩，-r 修复压缩包。常用于大文件分卷传输或需要恢复记录的场景。",
    helpOutput: `用法: rar <command> [-<switches>] <archive> [<files>]

Commands:
  a      添加文件到压缩包
  c      添加压缩包注释
  ch     修改压缩包参数
  cw     写入压缩包注释到文件
  d      从压缩包删除文件
  e      解压（不保留路径）
  f      刷新压缩包内文件
  i[err] 检查完整性
  k      锁定压缩包
  l[t,b] 列出内容[t=技术信息,b=裸格式]
  m[f]   移动到压缩包[f=仅文件]
  p      打印到标准输出
  r      修复压缩包
  rc     重建丢失分卷
  rn     重命名压缩包内文件
  rr[N]  添加恢复记录
  rv[N]  创建恢复分卷
  s[name|-] 转换为/取消自解压
  t      测试压缩包
  u      更新压缩包内文件
  x      解压（保留完整路径）

Switches:
  -pPWD   设置密码
  -vSIZE  分卷压缩
  -m0..m5 压缩级别（0=存储,5=最大）
  -r      递归子目录
  -s      创建固实压缩包
  -hpPWD  加密文件名和内容
  -xFILE  排除文件
  -o+     覆盖已存在
  -o-     不覆盖
  -y      全部回答 yes
  -ep     从名称中去除路径
  -ep1    去除基础目录
  -ep2    展开为完整路径
  -ed     不添加空目录
  -e+d    仅添加目录
  -ts     保存时间戳`,
    examples: [
      { description: "压缩为 rar 格式", code: "rar a archive.rar folder/" },
      { description: "分卷压缩（每卷 100MB）", code: "rar a -v100m archive.rar large_file.iso" },
      { description: "解压 rar 文件", code: "rar x archive.rar" },
      { description: "测试压缩包完整性", code: "rar t archive.rar" },
      { description: "查看帮助文档", code: "rar --help" }
    ],
    relatedCommands: ["unrar", "7z", "zip", "tar"]
  },
  {
    name: "lz4",
    categoryId: "compress",
    syntax: "lz4 [选项] 文件",
    simpleExplain: "极速压缩工具",
    detailExplain: "使用 LZ4 算法的压缩/解压工具，压缩和解压速度极快，远超 gzip 和 bzip2，但压缩比相对较低。常用参数：-1 到 -12 设置压缩级别（默认 1），-d 解压，-z 强制压缩，-k 保留原文件，-c 输出到标准输出。常用于实时数据传输、日志压缩等对速度要求高的场景。",
    helpOutput: `用法: lz4 [arg] [input] [output]

Commands:
  -z     强制压缩（默认）
  -d     解压
  -t     测试压缩包完整性
  -l     列出压缩文件信息
  -b#    基准测试文件
  -h/-H  显示帮助

Options:
  -1     快速压缩（默认）
  -9     高压缩比
  -12    最高压缩比
  -f     覆盖已存在文件
  -k     保留原文件
  -c     输出到标准输出
  -v     详细输出
  -q     安静模式
  -r     递归处理目录
  -m     多个文件分别压缩
  -B#    设置块大小（4-7）
  -BD    阻塞模式
  --rm   成功后删除原文件
  --no-frame-crc  禁用帧 CRC 校验
  -V     显示版本`,
    examples: [
      { description: "压缩文件", code: "lz4 logfile logfile.lz4" },
      { description: "解压文件", code: "lz4 -d logfile.lz4 logfile" },
      { description: "高压缩比模式（更慢但更小）", code: "lz4 -9 bigfile bigfile.lz4" },
      { description: "流式压缩（配合管道使用）", code: "tar -cf - mydir/ | lz4 > backup.tar.lz4" },
      { description: "查看帮助文档", code: "lz4 --help" }
    ],
    relatedCommands: ["gzip", "zstd", "bzip2", "tar"]
  },
  {
    name: "zstd",
    categoryId: "compress",
    syntax: "zstd [选项] 文件",
    simpleExplain: "高压缩比的新型压缩工具",
    detailExplain: "Zstandard 压缩工具，由 Facebook 开发，兼顾压缩速度和压缩比，比 gzip 更快更小，正成为 Linux 生态的新标准。常用参数：-1 到 -19 设置压缩级别（默认 3），-d 解压，-T 多线程压缩，--ultra -22 极限压缩。广泛用于内核、软件包压缩等场景。",
    helpOutput: `用法: zstd [args] [FILE(s)] [-o file]

Commands:
  -z     强制压缩
  -d     解压
  -t     测试完整性
  -l     列出压缩文件信息
  -b#    基准测试
  -h/-H  显示帮助

Options:
  -#     压缩级别（1-19，默认 3）
  --ultra 启用超高级别（20-22）
  -T#    使用 # 个线程（0=自动）
  -f     覆盖已存在
  -k     保留原文件
  -c     输出到标准输出
  -o FILE 输出到指定文件
  -r     递归处理目录
  -v     详细输出
  -q     安静模式
  --rm   成功后删除原文件
  --no-check  禁用内容校验
  --long[=N]  启用长距离匹配（窗口最大 N MB）
  --adapt  自适应压缩级别
  --format=zstd/gzip/xz/lz4  指定输出格式
  -D FILE 使用 FILE 作为字典
  --train  训练字典`,
    examples: [
      { description: "压缩文件", code: "zstd data.txt" },
      { description: "解压文件", code: "zstd -d data.txt.zst" },
      { description: "指定压缩级别（1-19）", code: "zstd -15 large_file" },
      { description: "递归压缩目录", code: "tar --zstd -cf archive.tar.zst mydir/" },
      { description: "查看帮助文档", code: "zstd --help" }
    ],
    relatedCommands: ["gzip", "lz4", "xz", "tar"]
  },
  {
    name: "lzma",
    categoryId: "compress",
    syntax: "lzma [选项] 文件",
    simpleExplain: "高压缩比压缩工具",
    detailExplain: "使用 LZMA 算法的压缩工具，压缩比非常高，但速度较慢。常用参数：-1 到 -9 设置压缩级别，-d 解压，-k 保留原文件，-c 输出到标准输出。适合对体积敏感而对时间不敏感的场景，如发布软件源码包。xz 是其继任者，功能更强大。",
    helpOutput: `用法: lzma [选项]... [文件]...
以 .xz 格式压缩或解压文件。

  -z, --compress      强制压缩
  -d, --decompress    强制解压
  -t, --test          测试压缩文件完整性
  -l, --list          列出 .xz 文件的信息
  -k, --keep          保留（不删除）输入文件
  -f, --force         强制覆盖输出文件并（解）压缩链接
  -c, --stdout        写入标准输出且不删除输入文件
  -0 ... -9           压缩预设级别；默认为 6；使用 7-9 前请考虑
                      压缩器和解压器的内存使用！
  -e, --extreme       尝试通过使用更多 CPU 时间来提高压缩比；
                      不影响解压器内存需求
  -T, --threads=NUM   最多使用 NUM 个线程；默认为 1；设为 0
                      则使用与处理器核心数相同的线程数
  -q, --quiet         抑制警告；指定两次也抑制错误
  -v, --verbose       详细模式；指定两次以获得更详细的输出
  -h, --help          显示此简短帮助并退出
  -H, --long-help     显示长帮助（也列出高级选项）
  -V, --version       显示版本号并退出

如果没有 FILE，或 FILE 为 -，则读取标准输入。

报告错误请至 <xz@tukaani.org>（英文或芬兰文）。
XZ Utils 主页: <https://tukaani.org/xz/>
`,
    examples: [
      { description: "压缩文件", code: "lzma bigfile" },
      { description: "解压文件", code: "lzma -d bigfile.lzma" },
      { description: "保留原文件压缩", code: "lzma -k data.tar" },
      { description: "指定压缩级别", code: "lzma -9 archive.tar" },
      { description: "查看帮助文档", code: "lzma --help" }
    ],
    relatedCommands: ["xz", "gzip", "bzip2", "tar"]
  },
  {
    name: "cpio",
    categoryId: "compress",
    syntax: "cpio [选项]",
    simpleExplain: "文件归档工具",
    detailExplain: "从标准输入读取文件列表，将文件打包成归档文件（copy in/out）。支持多种格式：binary、old ASCII、new ASCII、crc、old tar、POSIX.1 tar 等。常用参数：-o 创建归档（copy out），-i 解包（copy in），-t 列出内容，-H 指定格式。常与 find 命令配合使用，也用于处理 RPM 包和内核镜像文件（initramfs）。",
    helpOutput: `用法: cpio [-o|-i|-p] [options]

Modes:
  -o, --create       copy-out 模式（创建压缩包）
  -i, --extract      copy-in 模式（解压）
  -p, --pass-through pass-through 模式（复制）

Options:
  -0                 以 null 分隔文件名
  -a                 重置文件访问时间
  -A                 追加到压缩包
  -b                 交换字节（旧版）
  -B                 块大小 5120 字节
  -c                 旧版可移植 ASCII 格式
  -C SIZE            块大小
  -d                 创建所需目录
  -E FILE            从文件读取模式
  -f                 反向匹配
  -F FILE            指定压缩包文件
  --force-local      归档文件在本地
  -H FORMAT          指定格式（bin, odc, newc, crc, tar, ustar, hpbin, hpodc）
  -i                 解压模式
  -I FILE            从文件读取压缩包
  -l                 创建硬链接
  -L                 跟随符号链接
  -m                 保留修改时间
  -M MESSAGE         切换介质时消息
  -n                 数字 UID/GID
  --no-absolute-filenames  不使用绝对路径
  --no-preserve-owner  不保留属主
  -o                 创建模式
  -O FILE            输出到文件
  -p DIR             pass-through 模式
  --quiet            安静模式
  -r                 交互式重命名
  -R [USER][:.][GROUP]  设置属主
  -s                 交换字节
  -S                 交换半字
  -t                 仅列出
  -u                 无条件覆盖
  -v                 详细输出
  -V                 显示点进度
  --version          显示版本`,
    examples: [
      { description: "将当前目录所有文件打包", code: "find . | cpio -o > archive.cpio" },
      { description: "从归档中解包文件", code: "cpio -id < archive.cpio" },
      { description: "查看归档内容列表", code: "cpio -t < archive.cpio" },
      { description: "打包并用 gzip 压缩", code: "find . | cpio -o | gzip > archive.cpio.gz" },
      { description: "查看帮助文档", code: "cpio --help" }
    ],
    relatedCommands: ["tar", "gzip", "find", "rpm2cpio"]
  },
  {
    name: "shar",
    categoryId: "compress",
    syntax: "shar 文件... > archive.shar",
    simpleExplain: "创建 Shell 自解压包",
    detailExplain: "将多个文件打包成一个 Shell 脚本，运行该脚本即可自动解出所有文件。无需额外解包工具，只要有 Shell 即可解包。注意安全性，不要运行来源不明的 shar 包，因为脚本会执行任意命令。常用于在不保证有 tar/cpio 的环境中分发文件。",
    helpOutput: `用法: shar [OPTION]... FILE ...

Options:
  -o PREFIX          输出文件前缀（生成 .shar 文件）
  -p                 禁止位置参数
  -n                 不输出 'shar:' 前缀
  -q                 安静模式
  -b                 使用 uuencode 编码二进制
  -m                 使用 MIME 编码二进制
  -M                 强制 MIME
  -B                 强制 uuencode
  -T                 不测试归档
  -z                 gzip 压缩文件
  -g LEVEL           gzip 压缩级别
  -j                 bzip2 压缩文件
  -J LEVEL           bzip2 压缩级别
  -Z                 compress 压缩
  -x                 使用 xz 压缩
  -X                 使用 lzma 压缩
  -c                 产生核心转储
  -W                 不验证文件大小
  -Q                 不验证文件大小
  -w                 等待
  -V                 显示版本
  --help             显示帮助`,
    examples: [
      { description: "打包多个文件为自解压脚本", code: "shar file1.txt file2.txt > archive.shar" },
      { description: "打包整个目录", code: "shar mydir/ > mydir.shar" },
      { description: "解包自解压脚本", code: "sh archive.shar" },
      { description: "先查看脚本内容再解包", code: "less archive.shar" },
      { description: "查看帮助文档", code: "shar --help" }
    ],
    relatedCommands: ["tar", "cpio", "ar", "gzip"]
  },
  {
    name: "ar",
    categoryId: "compress",
    syntax: "ar [选项] 归档文件 成员文件",
    simpleExplain: "创建或管理归档文件",
    detailExplain: "创建、修改和提取归档文件，主要用于创建和管理静态库（.a 文件），是 C/C++ 编译工具链的一部分。常用参数：r 插入文件，t 列出内容，x 提取文件，d 删除文件，v 显示详细信息。也用于打包 Debian 软件包（.deb 文件本质是 ar 归档）。",
    helpOutput: `用法: ar [emulation options] [-]{dmpqrstx}[abcDfilMNoOPsSTuvV] [--plugin <name>] [member-name] [count] archive-file file...
       ar -M [<mri-script]
 命令:
  d            - 从归档中删除文件
  m[ab]        - 在归档中移动文件
  p            - 打印归档中找到的文件
  q[f]         - 快速追加文件到归档
  r[ab][f][u]  - 替换已存在的或插入新文件到归档
  s            - 充当 ranlib
  t[O][v]      - 显示归档内容
  x[o]         - 从归档中提取文件
 命令特定修饰符:
  [a]          - 将文件放在 [member-name] 之后
  [b]          - 将文件放在 [member-name] 之前（与 [i] 相同）
  [D]          - 时间戳和 uid/gid 使用零（默认）
  [U]          - 使用实际时间戳和 uid/gid
  [N]          - 使用名称的第 [count] 个实例
  [f]          - 截断插入的文件名
  [P]          - 匹配时使用完整路径名
  [o]          - 保留原始日期
  [O]          - 显示归档中文件的偏移量
  [u]          - 仅替换比当前归档内容更新的文件
 通用修饰符:
  [c]          - 如果必须创建库则不警告
  [s]          - 创建归档索引（参见 ranlib）
  [l <text> ]  - 指定此库的依赖项
  [S]          - 不构建符号表
  [T]          - 已弃用，请改用 --thin
  [v]          - 详细模式
  [V]          - 显示版本号
  @<file>      - 从 <file> 读取选项
  --target=BFDNAME - 将目标对象格式指定为 BFDNAME
  --output=DIRNAME - 指定提取操作的输出目录
  --record-libdeps=<text> - 指定此库的依赖项
  --thin       - 创建瘦归档
 可选:
  --plugin <p> - 加载指定的插件
 模拟选项: 
  无模拟特定选项
ar: 支持的目标: elf64-x86-64 elf32-i386 elf32-iamcu elf32-x86-64 pei-i386 pe-x86-64 pei-x86-64 elf64-little elf64-big elf32-little elf32-big pe-bigobj-x86-64 pe-i386 pdb srec symbolsrec verilog tekhex binary ihex plugin
报告错误请至 <https://sourceware.org/bugzilla/>
`,
    examples: [
      { description: "创建静态库", code: "ar rcs libmath.a add.o sub.o mul.o" },
      { description: "列出归档中的文件", code: "ar t libmath.a" },
      { description: "从归档中提取文件", code: "ar x libmath.a add.o" },
      { description: "查看 .deb 包内容", code: "ar t package.deb" },
      { description: "查看帮助文档", code: "ar --help" }
    ],
    relatedCommands: ["tar", "cpio", "gcc", "dpkg"]
  },

  // ==================== 用户管理 ====================
  {
    name: "useradd",
    categoryId: "user",
    syntax: "useradd [选项] 用户名",
    simpleExplain: "创建新用户账户",
    detailExplain: "创建新用户账号，分配用户 ID、设置家目录、指定默认 shell。常用参数：-m 创建家目录，-s 指定登录 shell，-g 指定主组，-G 指定附加组，-u 指定 UID，-e 设置账号过期日期。配置文件 /etc/login.defs 定义默认行为，修改 /etc/passwd、/etc/shadow 等文件。",
    helpOutput: `用法: useradd [options] LOGIN
       useradd -D
       useradd -D [options]

Options:
      --badname                 不检查错误名称
  -b, --base-dir BASE_DIR       新账户主目录的基目录
      --btrfs-subvolume-home    为主目录使用 BTRFS 子卷
  -c, --comment COMMENT         新账户的 GECOS 字段
  -d, --home-dir HOME_DIR       新账户的主目录
  -D, --defaults                打印或更改默认 useradd 配置
  -e, --expiredate EXPIRE_DATE  新账户的过期日期
  -f, --inactive INACTIVE       新账户的密码不活动期
  -F, --add-subids-for-system   添加系统用户时也向 sub[ud]id 添加条目
  -g, --gid GROUP               新账户主组的名称或 ID
  -G, --groups GROUPS           新账户的附加组列表
  -h, --help                    显示此帮助消息并退出
  -k, --skel SKEL_DIR           使用此替代骨架目录
  -K, --key KEY=VALUE           覆盖 /etc/login.defs 默认值
  -l, --no-log-init             不将用户添加到 lastlog 和
                                faillog 数据库
  -m, --create-home             创建用户的主目录
  -M, --no-create-home          不创建用户的主目录
  -N, --no-user-group           不创建与用户同名的组
  -o, --non-unique              允许创建具有重复
                                （非唯一）UID 的用户
  -p, --password PASSWORD       新账户的加密密码
  -r, --system                  创建系统账户
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -P, --prefix PREFIX_DIR       /etc/* 文件所在的前缀目录
  -s, --shell SHELL             新账户的登录 shell
  -u, --uid UID                 新账户的用户 ID
  -U, --user-group              创建与用户同名的组
  -Z, --selinux-user SEUSER     为 SELinux 用户映射使用特定的 SEUSER
      --extrausers              使用额外用户数据库

`,
    examples: [
      { description: "创建新用户", code: "useradd zhangsan" },
      { description: "创建用户并指定家目录和 shell", code: "useradd -m -s /bin/bash lisi" },
      { description: "创建用户并加入附加组", code: "useradd -G docker,sudo wangwu" },
      { description: "创建系统用户（无登录权限）", code: "useradd -r -s /sbin/nologin nginx" },
      { description: "查看帮助文档", code: "useradd --help" }
    ],
    relatedCommands: ["userdel", "usermod", "adduser", "passwd"]
  },
  {
    name: "userdel",
    categoryId: "user",
    syntax: "userdel [选项] 用户名",
    simpleExplain: "删除用户账户",
    detailExplain: "删除用户账号。默认只删除账号信息，不删除家目录。常用参数：-r 连同家目录和邮件池一起删除，-f 强制删除即使用户仍登录。修改 /etc/passwd、/etc/shadow、/etc/group 等文件。",
    helpOutput: `用法: userdel [options] LOGIN

Options:
  -f, --force                   强制执行某些否则会失败的操作
                                例如删除仍登录的用户
                                或文件，即使不属于该用户
  -h, --help                    显示此帮助消息并退出
  -r, --remove                  删除主目录和邮件池
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -P, --prefix PREFIX_DIR       /etc/* 文件所在的前缀目录
      --extrausers              使用额外用户数据库
  -Z, --selinux-user            删除该用户的任何 SELinux 用户映射

`,
    examples: [
      { description: "删除用户（保留家目录）", code: "userdel zhangsan" },
      { description: "删除用户并连同家目录一起删除", code: "userdel -r lisi" },
      { description: "强制删除正在登录的用户", code: "userdel -f wangwu" },
      { description: "查看帮助文档", code: "userdel --help" }
    ],
    relatedCommands: ["useradd", "usermod", "groupdel", "passwd"],
    dangerLevel: "danger",
  },
  {
    name: "usermod",
    categoryId: "user",
    syntax: "usermod [选项] 用户名",
    simpleExplain: "修改用户账户信息",
    detailExplain: "修改用户账号属性，可改用户名、家目录、默认 shell、加组减组、设账号过期时间等。常用参数：-l 改用户名，-d 改家目录（-m 同时迁移内容），-s 改 shell，-G 设置附加组，-aG 追加附加组，-L 锁定账号，-U 解锁账号。",
    helpOutput: `用法: usermod [options] LOGIN

Options:
  -a, --append                  将用户追加到 -G 选项指定的
                                附加 GROUPS 中，而不将用户
                                从其他组中移除
  -b, --badname                 允许错误名称
  -c, --comment COMMENT         GECOS 字段的新值
  -d, --home HOME_DIR           用户账户的新主目录
  -e, --expiredate EXPIRE_DATE  将账户过期日期设为 EXPIRE_DATE
  -f, --inactive INACTIVE       将过期后密码不活动期
                                设为 INACTIVE
  -g, --gid GROUP               强制使用 GROUP 作为新主组
  -G, --groups GROUPS           新的附加 GROUPS 列表
  -h, --help                    显示此帮助消息并退出
  -l, --login NEW_LOGIN         登录名的新值
  -L, --lock                    锁定用户账户
  -m, --move-home               将主目录内容移动到
                                新位置（仅与 -d 一起使用）
  -o, --non-unique              允许使用重复（非唯一）UID
  -p, --password PASSWORD       使用加密密码作为新密码
  -P, --prefix PREFIX_DIR       /etc/* 文件所在的前缀目录
  -r, --remove                  仅从 -G 选项指定的附加 GROUPS
                                中移除用户，而不将用户
                                从其他组中移除
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -s, --shell SHELL             用户账户的新登录 shell
  -u, --uid UID                 用户账户的新 UID
  -U, --unlock                  解锁用户账户
  -v, --add-subuids FIRST-LAST  添加从属 uid 范围
  -V, --del-subuids FIRST-LAST  移除从属 uid 范围
  -w, --add-subgids FIRST-LAST  添加从属 gid 范围
  -W, --del-subgids FIRST-LAST  移除从属 gid 范围
  -Z, --selinux-user SEUSER     用户账户的新 SELinux 用户映射

`,
    examples: [
      { description: "将用户加入附加组", code: "usermod -aG docker zhangsan" },
      { description: "修改用户的默认 shell", code: "usermod -s /bin/zsh lisi" },
      { description: "修改用户名", code: "usermod -l newname oldname" },
      { description: "锁定用户账号", code: "usermod -L wangwu" },
      { description: "查看帮助文档", code: "usermod --help" }
    ],
    relatedCommands: ["useradd", "userdel", "groupmod", "chage"]
  },
  {
    name: "passwd",
    categoryId: "user",
    syntax: "passwd [选项] [用户名]",
    simpleExplain: "修改用户密码",
    detailExplain: "设置或修改用户密码。普通用户只能改自己的密码，root 可以改任何人的密码且不验证旧密码。常用参数：-l 锁定密码，-u 解锁，-d 删除密码，-e 强制下次登录修改密码，-S 显示密码状态。修改 /etc/shadow 文件。",
    helpOutput: `用法: passwd [options] [LOGIN]

Options:
  -a, --all                     报告所有账户的密码状态
  -d, --delete                  删除指定账户的密码
  -e, --expire                  强制使指定账户的密码过期
  -h, --help                    显示此帮助消息并退出
  -k, --keep-tokens             仅在过期时更改密码
  -i, --inactive INACTIVE       将过期后密码不活动期
                                设为 INACTIVE
  -l, --lock                    锁定指定账户的密码
  -n, --mindays MIN_DAYS        将密码更改前的最短天数
                                设为 MIN_DAYS
  -q, --quiet                   安静模式
  -r, --repository REPOSITORY   在 REPOSITORY 仓库中更改密码
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -S, --status                  报告指定账户的密码状态
  -u, --unlock                  解锁指定账户的密码
  -w, --warndays WARN_DAYS      将过期警告天数设为 WARN_DAYS
  -x, --maxdays MAX_DAYS        将密码更改前的最大天数
                                设为 MAX_DAYS

`,
    examples: [
      { description: "修改当前用户密码", code: "passwd" },
      { description: "root 修改其他用户密码", code: "passwd zhangsan" },
      { description: "锁定用户账号", code: "passwd -l lisi" },
      { description: "强制用户下次登录时修改密码", code: "passwd -e wangwu" },
      { description: "查看帮助文档", code: "passwd --help" }
    ],
    relatedCommands: ["usermod", "useradd", "chage", "shadow"]
  },
  {
    name: "groupadd",
    categoryId: "user",
    syntax: "groupadd [选项] 组名",
    simpleExplain: "创建新用户组",
    detailExplain: "创建新的用户组，用于把多个用户归到一起统一管理权限。常用参数：-g 指定 GID，-r 创建系统组（GID 小于 1000），-f 若组已存在则不报错。配置写入 /etc/group 文件。",
    helpOutput: `用法: groupadd [options] GROUP

Options:
  -f, --force                   如果组已存在则成功退出，
                                且如果 GID 已使用则取消 -g
  -g, --gid GID                 为新组使用 GID
  -h, --help                    显示此帮助消息并退出
  -K, --key KEY=VALUE           覆盖 /etc/login.defs 默认值
  -o, --non-unique              允许创建具有重复
                                （非唯一）GID 的组
  -p, --password PASSWORD       为新组使用此加密密码
  -r, --system                  创建系统账户
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -P, --prefix PREFIX_DI        目录前缀
  -U, --users USERS             此组的用户成员列表
      --extrausers              使用额外用户数据库

`,
    examples: [
      { description: "创建新用户组", code: "groupadd developers" },
      { description: "创建指定 GID 的用户组", code: "groupadd -g 2000 testers" },
      { description: "创建系统组", code: "groupadd -r nginx" },
      { description: "查看帮助文档", code: "groupadd --help" }
    ],
    relatedCommands: ["groupdel", "groupmod", "useradd", "usermod"]
  },
  {
    name: "groupdel",
    categoryId: "user",
    syntax: "groupdel [选项] 组名",
    simpleExplain: "删除用户组",
    detailExplain: "删除指定的用户组。不能删除某个用户的主组（需先删除该用户或修改其主组）。修改 /etc/group 和 /etc/gshadow 文件。常用于清理不再使用的组，配合用户管理维护组结构。",
    helpOutput: `用法: groupdel [options] GROUP

Options:
  -h, --help                    显示此帮助消息并退出
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -P, --prefix PREFIX_DIR       /etc/* 文件所在的前缀目录
  -f, --force                   即使组是某用户的主组也删除
      --extrausers              使用额外用户数据库

`,
    examples: [
      { description: "删除用户组", code: "groupdel developers" },
      { description: "强制删除", code: "groupdel -f testers" },
      { description: "查看帮助文档", code: "groupdel --help" }
    ],
    relatedCommands: ["groupadd", "groupmod", "userdel", "usermod"],
    dangerLevel: "danger",
  },
  {
    name: "id",
    categoryId: "user",
    syntax: "id [选项] [用户名]",
    simpleExplain: "查看用户和组的 ID 信息",
    detailExplain: "显示用户的用户 ID（UID）、主组 ID（GID）以及所属的所有附加组。默认显示当前用户信息。常用参数：-u 只显示 UID，-g 只显示 GID，-G 显示所有附加组 GID，-n 配合上述参数显示名称而非数字，-r 显示真实 ID。",
    helpOutput: `用法: id [选项]... [USER]...
为每个指定的 USER 打印用户和组信息，
或（当省略 USER 时）为当前进程打印。

  -a             忽略，用于与其他版本兼容
  -Z, --context  仅打印进程的安全上下文
  -g, --group    仅打印有效组 ID
  -G, --groups   打印所有组 ID
  -n, --name     打印名称而非数字，用于 -ugG
  -r, --real     打印真实 ID 而非有效 ID，与 -ugG 一起使用
  -u, --user     仅打印有效用户 ID
  -z, --zero     用 NUL 字符分隔条目，而非空格；
                   默认格式中不允许使用
      --help        显示此帮助并退出
      --version     输出版本信息并退出

不带任何选项时，打印一组有用的识别信息。

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译错误请至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/id>
或通过本地命令获取: info '(coreutils) id invocation'
`,
    examples: [
      { description: "查看当前用户的 ID 信息", code: "id", output: "uid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo),998(docker)" },
      { description: "查看指定用户的 ID 信息", code: "id zhangsan" },
      { description: "只显示 UID", code: "id -u" },
      { description: "只显示 GID", code: "id -g" },
      { description: "查看帮助文档", code: "id --help" }
    ],
    relatedCommands: ["whoami", "groups", "finger", "getent"]
  },
  {
    name: "whoami",
    categoryId: "user",
    syntax: "whoami",
    simpleExplain: "显示当前登录用户名",
    detailExplain: "显示当前有效用户名，等效于 id -un。读取 /etc/passwd 中对应 UID 的用户名。在用 sudo 或 su 切换用户后，确认当前身份时非常有用。",
    helpOutput: `用法: whoami [选项]...
打印与当前有效用户 ID 关联的用户名。
等同于 id -un。

      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译错误请至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/whoami>
或通过本地命令获取: info '(coreutils) whoami invocation'
`,
    examples: [
      { description: "显示当前用户名", code: "whoami", output: "alice" },
      { description: "配合其他命令使用", code: "echo \"Current user: $(whoami)\"" },
      { description: "查看帮助文档", code: "whoami --help" }
    ],
    relatedCommands: ["id", "who", "logname", "su"]
  },
  {
    name: "groups",
    categoryId: "user",
    syntax: "groups [用户名]",
    simpleExplain: "查看用户所属的用户组",
    detailExplain: "列出指定用户所属的所有用户组（包括主组和附加组）。无参数时显示当前用户的组。信息来源于 /etc/group 文件。了解用户所属组对于理解文件权限很重要。",
    helpOutput: `用法: groups [选项]... [USERNAME]...
为每个 USERNAME 打印组成员身份，或如果没有指定 USERNAME，则为
当前进程打印（如果组数据库已更改可能不同）。
      --help        显示此帮助并退出
      --version     输出版本信息并退出

GNU coreutils 在线帮助: <https://www.gnu.org/software/coreutils/>
报告翻译错误请至 <https://translationproject.org/team/>
完整文档 <https://www.gnu.org/software/coreutils/groups>
或通过本地命令获取: info '(coreutils) groups invocation'
`,
    examples: [
      { description: "查看当前用户所属的组", code: "groups", output: "alice sudo docker" },
      { description: "查看指定用户所属的组", code: "groups zhangsan", output: "zhangsan developers testers" },
      { description: "查看帮助文档", code: "groups --help" }
    ],
    relatedCommands: ["id", "groupadd", "usermod", "getent"]
  },
  {
    name: "finger",
    categoryId: "user",
    syntax: "finger [选项] [用户名]",
    simpleExplain: "查看用户详细信息",
    detailExplain: "显示用户的登录名、真实姓名、家目录、默认 shell、最近登录时间、未读邮件等信息。常用参数：-s 简短格式，-l 长格式（默认），-p 不显示 plan 信息。信息来自 /etc/passwd 和用户家目录下的 .plan、.project 等文件。",
    helpOutput: `用法: finger [-lmsp] [user ...] [user@host ...]

Options:
  -s    短格式输出（默认）
  -l    长格式输出
  -p    不显示 .plan/.project/.forward 文件
  -m    匹配用户名而非真实姓名
  -h    显示帮助

不带参数时显示当前所有登录用户信息。`,
    examples: [
      { description: "查看指定用户的详细信息", code: "finger zhangsan" },
      { description: "查看所有登录用户的信息", code: "finger" },
      { description: "显示长格式信息", code: "finger -l lisi" },
      { description: "查看帮助文档", code: "finger --help" }
    ],
    relatedCommands: ["id", "who", "w", "pinky"]
  },
  {
    name: "last",
    categoryId: "user",
    syntax: "last [选项] [用户名]",
    simpleExplain: "查看用户登录历史记录",
    detailExplain: "显示所有用户或指定用户的最近登录历史，包括登录用户、终端、来源 IP、登录时间和持续时间。数据来源 /var/log/wtmp 文件。常用参数：-n 指定显示条数，-x 显示关机和运行级别变化，-i 显示 IP。用于安全审计和排查登录问题。",
    helpOutput: `
用法:
 last [options] [<username>...] [<tty>...]

显示最近登录用户的列表。

Options:
 -<number>            显示多少行
 -a, --hostlast       在最后一列显示主机名
 -d, --dns            将 IP 地址反解为主机名
 -f, --file <file>    使用指定文件代替 /var/log/wtmp
 -F, --fulltimes      打印完整的登录和注销时间和日期
 -i, --ip             以数字加点表示法显示 IP 地址
 -n, --limit <number> 显示多少行
 -R, --nohostname     不显示主机名字段
 -s, --since <time>   显示指定时间之后的行
 -t, --until <time>   显示指定时间之前的行
 -p, --present <time> 显示指定时间在场的人员
 -w, --fullnames      显示完整的用户名和域名
 -x, --system         显示系统关机条目和运行级别更改
     --time-format <format>  以指定 <format> 显示时间戳:
                               notime|short|full|iso

 -h, --help           显示此帮助
 -V, --version        显示版本

更多详情见 last(1)。
`,
    examples: [
      { description: "查看所有用户的登录历史", code: "last" },
      { description: "查看指定用户的登录历史", code: "last zhangsan" },
      { description: "只显示最近 5 条记录", code: "last -n 5" },
      { description: "显示完整的登录时间和主机名", code: "last -a" },
      { description: "查看帮助文档", code: "last --help" }
    ],
    relatedCommands: ["who", "w", "lastlog", "finger"]
  },
  {
    name: "newgrp",
    categoryId: "user",
    syntax: "newgrp [组名]",
    simpleExplain: "切换当前用户的有效用户组",
    detailExplain: "切换当前会话的主组（GID），使新创建的文件属于新的组。会启动一个新的子 shell。直接跟组名切换（需是该组成员），加 - 切换到登录时默认组。退出时使用 exit 返回原 shell。",
    helpOutput: `用法: newgrp [-] [group]
`,
    examples: [
      { description: "切换到 docker 组", code: "newgrp docker" },
      { description: "切换到 developers 组", code: "newgrp developers" },
      { description: "查看帮助文档", code: "newgrp --help" }
    ],
    relatedCommands: ["groups", "id", "usermod", "sg"]
  },
  {
    name: "chage",
    categoryId: "user",
    syntax: "chage [选项] 用户名",
    simpleExplain: "管理用户密码过期策略",
    detailExplain: "设置用户密码的过期策略，包括最短使用期限、最长使用期限、过期前警告天数、密码过期后账号失效天数等。常用参数：-l 查看策略，-M 设置最长使用天数，-m 最短使用天数，-W 警告天数，-E 账号过期日期。是安全合规的重要工具。",
    helpOutput: `用法: chage [options] LOGIN

Options:
  -d, --lastday LAST_DAY        将上次密码更改日期设为 LAST_DAY
  -E, --expiredate EXPIRE_DATE  将账户过期日期设为 EXPIRE_DATE
  -h, --help                    显示此帮助消息并退出
  -i, --iso8601                 打印日期时使用 YYYY-MM-DD 格式
  -I, --inactive INACTIVE       将过期后密码不活动期
                                设为 INACTIVE
  -l, --list                    显示账户老化信息
  -m, --mindays MIN_DAYS        将密码更改前的最短天数
                                设为 MIN_DAYS
  -M, --maxdays MAX_DAYS        将密码更改前的最大天数
                                设为 MAX_DAYS
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -W, --warndays WARN_DAYS      将过期警告天数设为 WARN_DAYS

`,
    examples: [
      { description: "查看用户的密码过期信息", code: "chage -l zhangsan" },
      { description: "设置密码 90 天后过期", code: "chage -M 90 zhangsan" },
      { description: "设置密码过期前 7 天警告", code: "chage -W 7 zhangsan" },
      { description: "强制用户下次登录时修改密码", code: "chage -d 0 zhangsan" },
      { description: "查看帮助文档", code: "chage --help" }
    ],
    relatedCommands: ["passwd", "usermod", "shadow", "id"]
  },
  {
    name: "login",
    categoryId: "user",
    syntax: "login [用户名]",
    simpleExplain: "登录系统",
    detailExplain: "登录系统命令，输入用户名和密码后进入工作环境。通常由系统在终端启动时自动调用（如 getty），一般不需要手动执行。常用参数：-f 跳过认证直接登录指定用户（root 专用），-h 指定主机名。登录成功后启动用户的登录 shell。",
    helpOutput: `用法: login [-p] [name]
       login [-p] [-h host] [-f name]
`,
    examples: [
      { description: "以指定用户登录", code: "login zhangsan" },
      { description: "登录时显示系统信息", code: "login -p zhangsan" },
      { description: "不执行启动脚本直接登录", code: "login -f zhangsan" },
      { description: "在远程终端上登录", code: "login -h terminal1 zhangsan" },
      { description: "查看帮助文档", code: "login --help" }
    ],
    relatedCommands: ["logout", "su", "ssh", "who"]
  },
  {
    name: "logout",
    categoryId: "user",
    syntax: "logout",
    simpleExplain: "退出系统登录",
    detailExplain: "退出当前登录的 Shell 会话。仅在登录 shell 中有效（即通过 login 启动的 shell）。在图形界面终端中通常用 exit 代替。退出后若为登录终端，会重新回到登录提示符。",
    helpOutput: `logout 是 shell 内建命令，用于退出当前登录的 Shell 会话。

用法: logout

仅在登录 Shell 中有效（如 SSH 登录、TTY 登录）。
在非登录 Shell 中使用会报错，应改用 exit。

相关: exit, login, who`,
    examples: [
      { description: "退出当前登录", code: "logout" },
      { description: "与 exit 等效", code: "exit" },
      { description: "在脚本中检查是否可以退出", code: "shopt -q login_shell && logout || exit" },
      { description: "快捷键退出", code: "Ctrl+D" },
      { description: "查看帮助文档", code: "help logout" }
    ],
    relatedCommands: ["login", "exit", "su", "who"]
  },
  {
    name: "nologin",
    categoryId: "user",
    syntax: "nologin",
    simpleExplain: "禁止用户登录系统",
    detailExplain: "一个特殊的 Shell 程序，当用户的登录 Shell 被设为 /sbin/nologin 时，该用户无法登录系统，会返回 This account is currently not available 提示。常用于系统服务账户（如 nginx、mysql），防止它们被用来登录系统。",
    helpOutput: `nologin 是一个特殊的 Shell 程序，用于拒绝用户登录。

用法: nologin

当用户的登录 Shell 被设为 /sbin/nologin 时，该用户无法登录系统。
登录尝试会显示提示信息（来自 /etc/nologin.txt）后拒绝。

通常用于系统服务账户（如 mysql, nginx, www-data），
防止这些账户被用来登录系统。

设置方法: usermod -s /sbin/nologin 用户名
创建时指定: useradd -s /sbin/nologin 用户名`,
    examples: [
      { description: "将用户 Shell 设为 nologin 禁止登录", code: "sudo usermod -s /sbin/nologin guest" },
      { description: "创建不能登录的系统用户", code: "sudo useradd -s /sbin/nologin mysql" },
      { description: "自定义拒绝登录提示", code: "echo '此账户已禁用' > /etc/nologin.txt" },
      { description: "临时禁止所有非 root 用户登录", code: "sudo touch /etc/nologin" },
      { description: "查看帮助文档", code: "nologin --help" }
    ],
    relatedCommands: ["usermod", "useradd", "passwd", "login"]
  },
  {
    name: "pwck",
    categoryId: "user",
    syntax: "pwck [选项]",
    simpleExplain: "检查密码文件完整性",
    detailExplain: "检查 /etc/passwd 和 /etc/shadow 文件的完整性和一致性，包括重复的用户名、无效的 UID、缺失的家目录、不一致的密码字段等。常用参数：-r 只读模式只报告不询问，-s 按 UID 排序。是系统维护的重要工具。",
    helpOutput: `用法: pwck [options] [passwd [shadow]]

Options:
  -b, --badname                 允许错误名称
  -h, --help                    显示此帮助消息并退出
  -q, --quiet                   仅报告错误
  -r, --read-only               显示错误和警告
                                但不更改文件
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -s, --sort                    按 UID 排序条目

`,
    examples: [
      { description: "检查密码文件完整性", code: "sudo pwck" },
      { description: "只读模式检查（不提示修复）", code: "sudo pwck -r" },
      { description: "检查指定文件", code: "sudo pwck /etc/passwd /etc/shadow" },
      { description: "静默模式，只显示错误", code: "sudo pwck -q" },
      { description: "查看帮助文档", code: "pwck --help" }
    ],
    relatedCommands: ["grpck", "passwd", "useradd", "usermod"]
  },
  {
    name: "grpck",
    categoryId: "user",
    syntax: "grpck [选项]",
    simpleExplain: "检查组文件完整性",
    detailExplain: "检查 /etc/group 和 /etc/gshadow 文件的完整性和一致性，包括重复的组名、不存在的组成员、不一致的管理员字段等。常用参数：-r 只读模式只报告不询问，-s 按 GID 排序。与 pwck 配合用于系统维护。",
    helpOutput: `用法: grpck [options] [group [gshadow]]

Options:
  -h, --help                    显示此帮助消息并退出
  -r, --read-only               显示错误和警告
                                但不更改文件
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -s, --sort                    按 UID 排序条目
  -S, --silence-warnings        静默有争议/偏执的警告

`,
    examples: [
      { description: "检查组文件完整性", code: "sudo grpck" },
      { description: "只读模式检查", code: "sudo grpck -r" },
      { description: "检查指定文件", code: "sudo grpck /etc/group /etc/gshadow" },
      { description: "静默模式", code: "sudo grpck -q" },
      { description: "查看帮助文档", code: "grpck --help" }
    ],
    relatedCommands: ["pwck", "groupadd", "groupmod", "groups"]
  },
  {
    name: "chsh",
    categoryId: "user",
    syntax: "chsh [选项] [用户名]",
    simpleExplain: "修改用户的登录 Shell",
    detailExplain: "修改用户的默认登录 Shell。常用参数：-s 指定新 shell（必须是 /etc/shells 中列出的合法 shell），-l 列出 /etc/shells 中的可用 shell。普通用户只能修改自己的 shell，root 可修改任何用户的。修改 /etc/passwd 文件。",
    helpOutput: `用法: chsh [options] [LOGIN]

Options:
  -h, --help                    显示此帮助消息并退出
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -s, --shell SHELL             用户账户的新登录 shell

`,
    examples: [
      { description: "修改自己的登录 Shell", code: "chsh -s /bin/zsh" },
      { description: "修改其他用户的 Shell", code: "sudo chsh -s /bin/bash zhangsan" },
      { description: "列出系统可用的 Shell", code: "chsh -l" },
      { description: "查看当前用户的 Shell", code: "echo $SHELL" },
      { description: "查看帮助文档", code: "chsh --help" }
    ],
    relatedCommands: ["bash", "zsh", "usermod", "cat /etc/shells"]
  },
  {
    name: "chfn",
    categoryId: "user",
    syntax: "chfn [选项] [用户名]",
    simpleExplain: "修改用户的个人信息",
    detailExplain: "修改用户的全名、办公室房间号、工作电话、家庭电话等个人信息（finger information）。这些信息存储在 /etc/passwd 的 GECOS 字段中，可用 finger 命令查看。普通用户只能改自己的信息，root 可改任何用户的。",
    helpOutput: `用法: chfn [options] [LOGIN]

Options:
  -f, --full-name FULL_NAME     更改用户的全名
  -h, --home-phone HOME_PHONE   更改用户的家庭电话号码
  -o, --other OTHER_INFO        更改用户的其他 GECOS 信息
  -r, --room ROOM_NUMBER        更改用户的房间号
  -R, --root CHROOT_DIR         要 chroot 进入的目录
  -u, --help                    显示此帮助消息并退出
  -w, --work-phone WORK_PHONE   更改用户的办公电话号码
      --extrausers              使用额外用户数据库

`,
    examples: [
      { description: "交互式修改个人信息", code: "chfn" },
      { description: "修改用户全名", code: "sudo chfn -f '张三' zhangsan" },
      { description: "修改办公电话", code: "sudo chfn -w '010-12345678' zhangsan" },
      { description: "查看用户信息", code: "finger zhangsan" },
      { description: "查看帮助文档", code: "chfn --help" }
    ],
    relatedCommands: ["usermod", "passwd", "chsh", "finger"]
  },

  // ==================== 软件包管理 ====================
  {
    name: "apt",
    categoryId: "package",
    syntax: "apt [命令] [选项] [包名]",
    simpleExplain: "Debian/Ubuntu 软件包管理器",
    detailExplain: "Ubuntu/Debian 系统上的软件包管理工具，提供搜索、安装、更新、卸载软件等功能，自动处理依赖关系。常用子命令：install 安装，remove 卸载，update 刷新软件源索引，upgrade 升级所有包，search 搜索，show 显示包信息。比 apt-get 等老命令输出更友好。",
    helpOutput: `apt 2.8.3 (amd64)
用法: apt [options] command

apt 是一个命令行包管理器，提供搜索、管理以及查询包信息的命令。
它提供与专用 APT 工具（如 apt-get 和 apt-cache）相同的功能，
但默认启用更适合交互式使用的选项。

最常用的命令:
  list - 根据包名列出包
  search - 在包描述中搜索
  show - 显示包详情
  install - 安装包
  reinstall - 重新安装包
  remove - 移除包
  autoremove - 自动移除所有未使用的包
  update - 更新可用包列表
  upgrade - 通过安装/升级包来升级系统
  full-upgrade - 通过移除/安装/升级包来升级系统
  edit-sources - 编辑源信息文件
  satisfy - 满足依赖字符串

有关可用命令的更多信息请参见 apt(8)。
配置选项和语法详见 apt.conf(5)。
有关如何配置源的信息可在 sources.list(5) 中找到。
包和版本选择可通过 apt_preferences(5) 表达。
安全详情可在 apt-secure(8) 中找到。
                                        此 APT 具有超级牛力。
`,
    examples: [
      { description: "更新软件源列表", code: "sudo apt update" },
      { description: "升级所有已安装的软件", code: "sudo apt upgrade" },
      { description: "安装软件包", code: "sudo apt install nginx" },
      { description: "卸载软件包", code: "sudo apt remove nginx" },
      { description: "搜索软件包", code: "apt search text editor" },
      { description: "查看帮助文档", code: "apt --help" }
    ],
    relatedCommands: ["apt-get", "dpkg", "snap", "aptitude"]
  },
  {
    name: "apt-get",
    categoryId: "package",
    syntax: "apt-get [命令] [选项] [包名]",
    simpleExplain: "Debian 系底层包管理工具",
    detailExplain: "Debian 系底层包管理工具，用于安装、升级、卸载软件包并自动处理依赖关系。常用命令：apt-get install 安装包，apt-get update 刷新软件源索引，apt-get upgrade 升级所有已安装包，apt-get remove 卸载包，apt-get autoremove 清理无用依赖。输出格式稳定，适合在脚本中使用；交互场景推荐使用更友好的 apt 命令。",
    helpOutput: `apt 2.8.3 (amd64)
用法: apt-get [options] command
       apt-get [options] install|remove pkg1 [pkg2 ...]
       apt-get [options] source pkg1 [pkg2 ...]

apt-get 是一个命令行接口，用于从经过认证的源检索包
及其信息，以及安装、升级和移除包及其依赖项。

最常用的命令:
  update - 获取新的包列表
  upgrade - 执行升级
  install - 安装新包（pkg 是 libc6 而非 libc6.deb）
  reinstall - 重新安装包（pkg 是 libc6 而非 libc6.deb）
  remove - 移除包
  purge - 移除包和配置文件
  autoremove - 自动移除所有未使用的包
  dist-upgrade - 发行版升级，见 apt-get(8)
  dselect-upgrade - 遵循 dselect 选择
  build-dep - 为源包配置构建依赖
  satisfy - 满足依赖字符串
  clean - 删除下载的归档文件
  autoclean - 删除旧的下载归档文件
  check - 验证没有损坏的依赖
  source - 下载源归档
  download - 将二进制包下载到当前目录
  changelog - 下载并显示指定包的变更日志

有关可用命令的更多信息请参见 apt-get(8)。
配置选项和语法详见 apt.conf(5)。
有关如何配置源的信息可在 sources.list(5) 中找到。
包和版本选择可通过 apt_preferences(5) 表达。
安全详情可在 apt-secure(8) 中找到。
                                        此 APT 具有超级牛力。
`,
    examples: [
      { description: "更新软件源", code: "sudo apt-get update" },
      { description: "安装软件包", code: "sudo apt-get install -y build-essential" },
      { description: "彻底卸载软件（含配置文件）", code: "sudo apt-get purge nginx" },
      { description: "清理不再需要的依赖包", code: "sudo apt-get autoremove" },
      { description: "查看帮助文档", code: "apt-get --help" }
    ],
    relatedCommands: ["apt", "dpkg", "aptitude", "synaptic"]
  },
  {
    name: "yum",
    categoryId: "package",
    syntax: "yum [命令] [选项] [包名]",
    simpleExplain: "CentOS/RHEL 软件包管理器",
    detailExplain: "RedHat/CentOS 系统的软件包管理工具，自动解决依赖关系并从仓库安装、升级、卸载 RPM 包。常用命令：yum install 安装，yum update 升级，yum remove 卸载，yum search 搜索包，yum list 列出可用包。在 CentOS 8+ 上已被 dnf 取代。",
    helpOutput: `用法: yum [options] COMMAND

Commands:
  install PACKAGE     安装软件包
  update [PACKAGE]    更新软件包
  update-to PACKAGE   更新到指定版本
  check-update        检查可用更新
  upgrade             更新（含过时包）
  remove/erase PACKAGE  卸载软件包
  list [PACKAGE]      列出软件包
  info PACKAGE        显示软件包信息
  search KEYWORD      搜索软件包
  provides FILEPATH   查找提供指定文件的包
  clean [TYPE]        清理缓存
  makecache           生成缓存
  groupinstall GROUP  安装软件包组
  groupremove GROUP   卸载软件包组
  grouplist           列出软件包组
  history             显示操作历史
  reinstall PACKAGE   重新安装
  downgrade PACKAGE   降级
  deplist PACKAGE     显示依赖
  repolist            列出已配置仓库
  localinstall RPM    安装本地 RPM

Options:
  -y                  自动回答 yes
  -q                  安静模式
  -v                  详细模式
  --enablerepo REPO   启用仓库
  --disablerepo REPO  禁用仓库
  --exclude PACKAGE   排除包
  --skip-broken       跳过依赖错误
  --nogpgcheck        不检查 GPG 签名
  -C                  完全从缓存运行
  --installroot PATH  设置安装根目录
  -x PACKAGE          排除包`,
    examples: [
      { description: "安装软件包", code: "sudo yum install nginx" },
      { description: "更新所有软件", code: "sudo yum update" },
      { description: "搜索软件包", code: "yum search httpd" },
      { description: "卸载软件包", code: "sudo yum remove nginx" },
      { description: "查看帮助文档", code: "yum --help" }
    ],
    relatedCommands: ["dnf", "rpm", "yum-config-manager", "repoquery"]
  },
  {
    name: "dnf",
    categoryId: "package",
    syntax: "dnf [命令] [选项] [包名]",
    simpleExplain: "新一代 RedHat 系包管理器",
    detailExplain: "Fedora 和 CentOS 8+ 的默认包管理器，是 yum 的下一代替代品，解决了 yum 的性能和内存占用问题。语法与 yum 基本兼容，常用命令包括 dnf install、dnf update、dnf remove、dnf search。支持模块化仓库和更严格的依赖解析。",
    helpOutput: `用法: dnf [options] COMMAND

Commands:
  install PACKAGE     安装软件包
  upgrade [PACKAGE]   更新软件包
  remove PACKAGE      卸载软件包
  autoremove          清理不需要的依赖
  list [PACKAGE]      列出软件包
  info PACKAGE        显示软件包信息
  search KEYWORD      搜索软件包
  provides FILEPATH   查找提供文件的包
  clean [TYPE]        清理缓存
  makecache           生成缓存
  groupinstall GROUP  安装软件包组
  groupremove GROUP   卸载软件包组
  grouplist           列出软件包组
  history             显示操作历史
  reinstall PACKAGE   重新安装
  downgrade PACKAGE   降级
  repolist            列出仓库
  repoquery           查询仓库
  localinstall RPM    安装本地 RPM
  check-update        检查更新
  distro-sync         同步到仓库最新版本

Options:
  -y                  自动回答 yes
  -q                  安静模式
  -v                  详细模式
  --enablerepo REPO   启用仓库
  --disablerepo REPO  禁用仓库
  --exclude PACKAGE   排除包
  --skip-broken       跳过依赖错误
  --nogpgcheck        不检查 GPG 签名
  -C                  完全从缓存运行
  --best              尝试最佳版本
  --allowerasing      允许卸载以解决依赖`,
    examples: [
      { description: "安装软件包", code: "sudo dnf install nginx" },
      { description: "更新所有软件", code: "sudo dnf upgrade" },
      { description: "搜索软件包", code: "dnf search httpd" },
      { description: "查看软件包信息", code: "dnf info nginx" },
      { description: "查看帮助文档", code: "dnf --help" }
    ],
    relatedCommands: ["yum", "rpm", "microdnf", "dnf5"]
  },
  {
    name: "pacman",
    categoryId: "package",
    syntax: "pacman [选项] [包名]",
    simpleExplain: "Arch Linux 软件包管理器",
    detailExplain: "Arch Linux 的包管理工具，负责下载、安装、升级和卸载软件包并自动处理依赖。常用命令：pacman -S 安装包，pacman -Syu 同步仓库并升级系统，pacman -R 卸载，pacman -Q 查询已安装包，pacman -Ss 搜索仓库。以速度快、设计简洁著称。",
    helpOutput: `用法: pacman <operation> [options] [targets]

Operations:
  -S, --sync          从仓库安装/同步
  -R, --remove        卸载软件包
  -Q, --query         查询本地数据库
  -U, --upgrade       安装本地包
  -D, --database      修改数据库
  -T, --deptest       依赖测试
  -F, --files         查询文件数据库

Sync (-S) options:
  -y                  刷新仓库数据库
  -u                  更新所有已安装包
  -s KEYWORD          搜索
  -i                  显示信息
  -l                  列出包内文件
  -g GROUP            列出软件包组
  -c                  清理缓存
  -w                  仅下载不安装
  -dd                 忽略依赖检查

Remove (-R) options:
  -s                  同时删除依赖
  -n                  同时删除配置文件
  -u                  同时删除不再需要的依赖
  -c                  同时删除依赖者

Query (-Q) options:
  -l                  列出包内文件
  -i                  显示信息
  -o FILE             查找文件属于哪个包
  -s KEYWORD          搜索
  -e                  列出显式安装的包
  -m                  列出不再需要的包
  -t                  列出不再被依赖的包

Options:
  --noconfirm         不确认
  --needed            跳过已安装
  --overwrite GLOB    覆盖冲突文件
  --force             强制（已弃用）
  -v                  详细输出`,
    examples: [
      { description: "安装软件包", code: "sudo pacman -S nginx" },
      { description: "更新所有软件", code: "sudo pacman -Syu" },
      { description: "搜索软件包", code: "pacman -Ss text-editor" },
      { description: "卸载软件包", code: "sudo pacman -R nginx" },
      { description: "查看帮助文档", code: "pacman --help" }
    ],
    relatedCommands: ["yay", "paru", "makepkg", "pactree"]
  },
  {
    name: "pip",
    categoryId: "package",
    syntax: "pip [命令] [选项] 包名",
    simpleExplain: "Python 包管理器",
    detailExplain: "Python 包管理工具，从 PyPI（Python Package Index）下载并安装第三方库和工具。常用命令：pip install 安装包，pip uninstall 卸载，pip list 列出已安装包，pip freeze 导出依赖列表，pip install -r requirements.txt 按文件批量安装。支持指定版本和虚拟环境。",
    helpOutput: `
用法:   
  pip <command> [options]

Commands:
  install                     安装包。
  lock                        生成锁定文件。
  download                    下载包。
  uninstall                   卸载包。
  freeze                      以 requirements 格式输出已安装的包。
  inspect                     检查 python 环境。
  list                        列出已安装的包。
  show                        显示已安装包的信息。
  check                       验证已安装的包具有兼容的
依赖。
  config                      管理本地和全局配置。
  search                      在 PyPI 中搜索包。
  cache                       检查和管理 pip 的 wheel 缓存。
  index                       检查可从包
索引获取的信息。
  wheel                       根据您的需求构建 wheel。
  hash                        计算包归档的哈希值。
  completion                  用于命令补全的辅助命令。
  debug                       显示对调试有用的信息。
  help                        显示命令的帮助。

General Options:
  -h, --help                  显示帮助。
  --debug                     让未处理的异常传播到
                              主子程序之外，而不是记录到
                              stderr。
  --isolated                  以隔离模式运行 pip，忽略
                              环境变量和用户配置。
  --require-virtualenv        仅允许 pip 在虚拟环境中运行；
                              否则以错误退出。
  --python <python>           使用指定的 Python 解释器运行 pip。
  -v, --verbose               提供更多输出。选项是累加的，
                              最多可使用 3 次。
  -V, --version               显示版本并退出。
  -q, --quiet                 提供更少输出。选项是累加的，
                              最多可使用 3 次（对应 WARNING、
                              ERROR 和 CRITICAL 日志级别）。
  --log <path>                详细追加日志的路径。
  --no-input                  禁用输入提示。
  --keyring-provider <keyring_provider>
                              如果允许用户输入，则通过 keyring
                              库启用凭据查找。指定要使用哪种
                              机制 [auto, disabled, import,
                              subprocess]。（默认: auto）
  --proxy <proxy>             以以下形式指定代理
                              scheme://[user:passwd@]proxy.server:port。
  --retries <retries>         建立新 HTTP 连接的最大尝试次数。
                              （默认: 5）
  --timeout <sec>             设置套接字超时（默认 15 秒）。`,
    examples: [
      { description: "安装 Python 包", code: "pip install requests" },
      { description: "卸载 Python 包", code: "pip uninstall flask" },
      { description: "查看已安装的包", code: "pip list" },
      { description: "升级包", code: "pip install --upgrade numpy" },
      { description: "查看帮助文档", code: "pip --help" }
    ],
    relatedCommands: ["pip3", "conda", "poetry", "pipenv"]
  },
  {
    name: "npm",
    categoryId: "package",
    syntax: "npm [命令] [包名]",
    simpleExplain: "Node.js 包管理器",
    detailExplain: "Node.js 的默认包管理器，从 npmjs.com 下载安装 JavaScript 包。常用命令：npm install 安装依赖（默认读 package.json），npm install <pkg> 安装指定包，npm run 运行脚本，npm update 升级依赖，npm publish 发布包。通过 package.json 和 package-lock.json 管理依赖。",
    helpOutput: `npm <command>

用法:

npm install        安装项目中的所有依赖
npm install <foo>  将 <foo> 依赖添加到您的项目
npm test           运行此项目的测试
npm run <foo>      运行名为 <foo> 的脚本
npm <command> -h   <command> 的快速帮助
npm -l             显示所有命令的用法信息
npm help <term>    搜索 <term> 的帮助
npm help npm       更详细的概述

所有命令:

    access, adduser, audit, bugs, cache, ci, completion,
    config, dedupe, deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore, find-dupes, fund, get, help,
    help-search, init, install, install-ci-test, install-test,
    link, ll, login, logout, ls, org, outdated, owner, pack,
    ping, pkg, prefix, profile, prune, publish, query, rebuild,
    repo, restart, root, run, sbom, search, set, shrinkwrap,
    star, stars, start, stop, team, test, token, undeprecate,
    uninstall, unpublish, unstar, update, version, view, whoami

在 ini 格式的文件中指定配置:
    /root/.npmrc
或通过命令行: npm <command> --key=value

更多配置信息: npm help config
配置字段: npm help 7 config

npm@11.4.2 /root/.nvm/versions/node/v24.15.0/lib/node_modules/npm
`,
    examples: [
      { description: "初始化一个新项目", code: "npm init -y" },
      { description: "安装依赖包", code: "npm install express" },
      { description: "全局安装工具", code: "npm install -g typescript" },
      { description: "运行项目脚本", code: "npm run build" },
      { description: "查看帮助文档", code: "npm --help" }
    ],
    relatedCommands: ["yarn", "pnpm", "npx", "bun"]
  },
  {
    name: "snap",
    categoryId: "package",
    syntax: "snap [命令] [包名]",
    simpleExplain: "Snap 通用包管理器",
    detailExplain: "Canonical 推出的跨发行版包管理工具，Snap 包自带所有依赖，在支持 Snap 的 Linux 上均可运行。常用命令：snap install 安装，snap remove 卸载，snap list 列出已安装，snap refresh 升级。缺点是启动较慢、占用空间较大，应用运行在沙箱中。",
    helpOutput: `用法: snap [OPTIONS] COMMAND

Commands:
  install SNAP        安装 snap
  remove SNAP         卸载 snap
  refresh [SNAP]      更新 snap
  revert SNAP         回滚到上一版本
  list [SNAP]         列出已安装 snap
  find KEYWORD        搜索 snap
  info SNAP           显示 snap 信息
  enable SNAP         启用 snap
  disable SNAP        禁用 snap
  services            列出服务
  start SERVICE       启动服务
  stop SERVICE        停止服务
  restart SERVICE     重启服务
  logs SNAP           查看日志
  connect SNAP:PLUG SLOT  连接接口
  disconnect SNAP:PLUG SLOT  断开接口
  set SNAP KEY=VALUE  设置配置
  get SNAP KEY        获取配置
  alias SNAP ALIAS    创建别名
  unalias ALIAS       删除别名
  changes             查看变更历史

Options:
  --version           显示版本
  --help              显示帮助
  --no-wait           不等待操作完成
  --unicode=MODE      unicode 模式`,
    examples: [
      { description: "安装 Snap 包", code: "sudo snap install vlc" },
      { description: "查看已安装的 Snap 包", code: "snap list" },
      { description: "更新 Snap 包", code: "sudo snap refresh vlc" },
      { description: "卸载 Snap 包", code: "sudo snap remove vlc" },
      { description: "查看帮助文档", code: "snap --help" }
    ],
    relatedCommands: ["flatpak", "apt", "dpkg", "snapcraft"]
  },
  {
    name: "flatpak",
    categoryId: "package",
    syntax: "flatpak [命令] [选项] [包名]",
    simpleExplain: "Flatpak 沙箱化包管理器",
    detailExplain: "跨发行版的 Linux 桌面应用打包和分发工具，将应用置于沙箱中运行以限制权限并提升安全性。常用命令：flatpak install 安装，flatpak run 运行，flatpak update 升级，flatpak uninstall 卸载。每个应用运行在独立运行时环境中，与 Snap 类似。",
    helpOutput: `用法: flatpak [OPTION...] COMMAND

Commands:
  install REMOTE/APP  安装应用
  update [APP]        更新应用
  uninstall APP       卸载应用
  list                列出已安装应用
  info APP            显示应用信息
  search KEYWORD      搜索应用
  run APP             运行应用
  remote-add NAME URL 添加仓库
  remote-delete NAME  删除仓库
  remote-ls REMOTE    列出仓库内容
  remotes             列出已配置仓库
  override APP        覆盖应用权限
  permission-list     列出权限
  permission-remove   删除权限
  config              获取/设置配置
  mask PATTERN        屏蔽更新
  pin PIN             固定运行时
  history             显示操作历史
  ps                  列出运行中的实例
  kill APP            终止运行中的应用

Options:
  -y, --assumeyes     自动回答 yes
  -v, --verbose       详细输出
  --user              操作用户级安装
  --system           操作系统级安装（默认）
  --installation=NAME  指定安装
  --arch=ARCH         指定架构
  --branch=BRANCH     指定分支
  --help              显示帮助
  --version           显示版本`,
    examples: [
      { description: "安装 Flatpak 应用", code: "flatpak install flathub org.gimp.GIMP" },
      { description: "运行 Flatpak 应用", code: "flatpak run org.gimp.GIMP" },
      { description: "更新所有 Flatpak 应用", code: "flatpak update" },
      { description: "卸载 Flatpak 应用", code: "flatpak uninstall org.gimp.GIMP" },
      { description: "查看帮助文档", code: "flatpak --help" }
    ],
    relatedCommands: ["snap", "apt", "dnf", "flathub"]
  },
  {
    name: "dpkg",
    categoryId: "package",
    syntax: "dpkg [选项] [包名/文件]",
    simpleExplain: "Debian 底层包操作工具",
    detailExplain: "Debian 系的底层包管理工具，直接操作 .deb 文件进行安装、卸载和查询，不自动解决依赖关系。常用命令：dpkg -i 安装 deb 包，dpkg -r 卸载，dpkg -l 列出已安装包，dpkg -L 查看包安装的文件列表。通常配合 apt 使用以处理依赖。",
    helpOutput: `用法: dpkg [<option>...] <command>

Commands:
  -i|--install       <.deb file name>... | -R|--recursive <directory>...
  --unpack           <.deb file name>... | -R|--recursive <directory>...
  -A|--record-avail  <.deb file name>... | -R|--recursive <directory>...
  --configure        <package>... | -a|--pending
  --triggers-only    <package>... | -a|--pending
  -r|--remove        <package>... | -a|--pending
  -P|--purge         <package>... | -a|--pending
  -V|--verify [<package>...]       验证包的完整性。
  --get-selections [<pattern>...]  获取选择列表到 stdout。
  --set-selections                 从 stdin 设置包选择。
  --clear-selections               取消选择每个非必要的包。
  --update-avail [<Packages-file>] 替换可用包信息。
  --merge-avail [<Packages-file>]  与文件中的信息合并。
  --clear-avail                    删除现有的可用信息。
  --forget-old-unavail             忘记未安装的不可用包。
  -s|--status [<package>...]       显示包状态详情。
  -p|--print-avail [<package>...]  显示可用版本详情。
  -L|--listfiles <package>...      列出包"拥有"的文件。
  -l|--list [<pattern>...]         简明列出包。
  -S|--search <pattern>...         查找拥有文件的包。
  -C|--audit [<package>...]        检查损坏的包。
  --yet-to-unpack                  打印已选择安装的包。
  --predep-package                 打印要解包的预依赖。
  --add-architecture <arch>        将 <arch> 添加到架构列表。
  --remove-architecture <arch>     从架构列表中移除 <arch>。
  --print-architecture             打印 dpkg 架构。
  --print-foreign-architectures    打印允许的外部架构。
  --assert-help                    显示断言帮助。
  --assert-<feature>               断言支持指定功能。
  --validate-<thing> <string>      验证 <thing> 的 <string>。
  --compare-versions <a> <op> <b>  比较版本号 - 见下文。
  --force-help                     显示强制帮助。
  -Dh|--debug=help                 显示调试帮助。

  -?, --help                       显示此帮助消息。
      --version                    显示版本。

可验证的事物: pkgname, archname, trigname, version。

对归档使用 dpkg 的 -b, --build, -c, --contents, -e, --control, -I, --info,
  -f, --field, -x, --extract, -X, --vextract, --ctrl-tarfile, --fsys-tarfile
（输入 dpkg-deb --help）。

Options:
  --admindir=<directory>     使用 <directory> 代替 /var/lib/dpkg。
  --root=<directory>         在不同的根目录上安装。
  --instdir=<directory>      更改安装目录而不更改管理目录。
  --pre-invoke=<command>     设置前置调用钩子。
  --post-invoke=<command>    设置后置调用钩子。
  --path-exclude=<pattern>   不安装匹配 shell pat`,
    examples: [
      { description: "安装 .deb 包文件", code: "sudo dpkg -i package.deb" },
      { description: "查看已安装的包列表", code: "dpkg -l" },
      { description: "查看包安装的文件列表", code: "dpkg -L nginx" },
      { description: "卸载包", code: "sudo dpkg -r package-name" },
      { description: "查看帮助文档", code: "dpkg --help" }
    ],
    relatedCommands: ["apt", "apt-get", "alien", "debsums"]
  },
  {
    name: "rpm",
    categoryId: "package",
    syntax: "rpm [选项] [包名/文件]",
    simpleExplain: "RedHat 底层包操作工具",
    detailExplain: "RedHat 系的底层包管理工具，直接操作 .rpm 文件进行安装、卸载、查询和验证，不自动解决依赖关系。常用命令：rpm -i 安装，rpm -e 卸载，rpm -q 查询，rpm -V 验证，rpm -qa 列出所有已安装包。通常配合 yum/dnf 使用以处理依赖。",
    helpOutput: `用法: rpm [OPTION...]

Query options:
  -q, --query         查询模式
  -a, --all           查询所有已安装包
  -f, --file FILE     查询文件属于哪个包
  -i, --info          显示包信息
  -l, --list          列出包内文件
  -R, --requires      显示依赖
  -p, --package       查询未安装的 RPM 文件
  -s                  显示文件状态
  -c, --configfiles   列出配置文件
  -d, --docfiles      列出文档文件
  --changelog         显示变更日志
  --last              按安装时间排序
  --provides          显示提供的能力
  --whatrequires NAME 显示依赖指定能力的包

Install/Upgrade/Remove:
  -i                  安装
  -U                  升级（含安装）
  -F                  仅升级已安装的
  -e                  卸载
  -v                  详细输出
  -h, --hash          显示进度条
  --nodeps            不检查依赖
  --force             强制安装
  --test              仅测试不实际执行
  --replacepkgs       重新安装已安装的包
  --oldpackage        允许降级
  --noscripts         不执行脚本
  --prefix PATH       指定安装路径
  -V, --verify        验证已安装包

Options:
  --import PUBKEY     导入 GPG 公钥
  --checksig          检查签名
  --rebuilddb         重建数据库
  --initdb            初始化数据库`,
    examples: [
      { description: "安装 .rpm 包文件", code: "sudo rpm -ivh package.rpm" },
      { description: "查看已安装的包列表", code: "rpm -qa" },
      { description: "查看包安装的文件列表", code: "rpm -ql nginx" },
      { description: "卸载包", code: "sudo rpm -e package-name" },
      { description: "查看帮助文档", code: "rpm --help" }
    ],
    relatedCommands: ["yum", "dnf", "alien", "rpm2cpio"]
  },
  {
    name: "brew",
    categoryId: "package",
    syntax: "brew [命令] [包名]",
    simpleExplain: "Homebrew 包管理器",
    detailExplain: "macOS（也支持 Linux，称 Linuxbrew）上的第三方包管理器，用于安装系统包管理器未提供的软件。常用命令：brew install 安装，brew uninstall 卸载，brew update 更新仓库，brew upgrade 升级包，brew search 搜索。语法简洁，社区维护大量 formula。",
    helpOutput: `用法: brew [command] [options] [formula ...]

Commands:
  install FORMULA     安装软件包
  uninstall FORMULA   卸载软件包
  update              更新 Homebrew 和软件包列表
  upgrade [FORMULA]   升级软件包
  list/ls             列出已安装包
  search TEXT         搜索软件包
  info FORMULA        显示软件包信息
  show FORMULA        显示 formula 源码
  cat FORMULA         显示 formula 文件
  cleanup             清理旧版本
  doctor              诊断问题
  config              显示配置
  tap REPO            添加第三方仓库
  untap REPO          移除第三方仓库
  tap-info REPO       显示仓库信息
  pin FORMULA         固定版本
  unpin FORMULA       取消固定
  deps FORMULA        显示依赖
  uses FORMULA        显示被哪些包依赖
  outdated            列出过时的包
  services            管理 brew 服务
  reinstall FORMULA   重新安装
  link FORMULA        链接
  unlink FORMULA      取消链接
  bottle FORMULA      创建 bottle

Options:
  -v, --verbose       详细输出
  -q, --quiet         安静模式
  -d, --debug         调试模式
  -f, --force         强制
  -h, --help          显示帮助
  -V, --version       显示版本
  --prefix            显示安装前缀
  --cache             显示缓存路径
  --no-quarantine     不隔离`,
    examples: [
      { description: "安装软件", code: "brew install git" },
      { description: "搜索软件", code: "brew search node" },
      { description: "更新 Homebrew 和所有软件", code: "brew update && brew upgrade" },
      { description: "卸载软件", code: "brew uninstall git" },
      { description: "查看帮助文档", code: "brew --help" }
    ],
    relatedCommands: ["apt", "npm", "pip", "nix"]
  },
  {
    name: "cargo",
    categoryId: "package",
    syntax: "cargo [命令] [选项]",
    simpleExplain: "Rust 包管理与构建工具",
    detailExplain: "Rust 的官方包管理器和构建工具，集依赖管理、编译、测试、文档生成于一体。常用命令：cargo new 创建项目，cargo build 编译，cargo run 编译并运行，cargo test 运行测试，cargo add 添加依赖，cargo doc 生成文档。依赖声明在 Cargo.toml 中。",
    helpOutput: `Rust 的包管理器

[92m[1m用法:[39m[22m [96m[1mcargo[39m[22m [36m[+toolchain] [OPTIONS] [COMMAND][39m
       [96m[1mcargo[39m[22m [36m[+toolchain] [OPTIONS][39m [96m[1m-Zscript[39m[22m [36m<MANIFEST_RS> [ARGS]...[39m

[92m[1mOptions:[39m[22m
  [1m[96m-V[0m, [1m[96m--version[0m                  打印版本信息并退出
      [1m[96m--list[0m                     列出已安装的命令
      [1m[96m--explain[0m[36m [0m[36m<CODE>[0m           提供 rustc 错误消息的详细说明
  [1m[96m-v[0m, [1m[96m--verbose[0m[36m...[0m               使用详细输出（-vv 非常详细/build.rs 输出）
  [1m[96m-q[0m, [1m[96m--quiet[0m                    不打印 cargo 日志消息
      [1m[96m--color[0m[36m [0m[36m<WHEN>[0m             着色 [可能值: auto, always, never]
  [1m[96m-C[0m[36m [0m[36m<DIRECTORY>[0m                 在执行任何操作前切换到 DIRECTORY（仅 nightly）
      [1m[96m--locked[0m                   断言 \`Cargo.lock\` 保持不变
      [1m[96m--offline[0m                  不访问网络运行
      [1m[96m--frozen[0m                   等同于同时指定 --locked 和 --offline
      [1m[96m--config[0m[36m [0m[36m<KEY=VALUE|PATH>[0m  覆盖配置值
  [1m[96m-Z[0m[36m [0m[36m<FLAG>[0m                      Cargo 的不稳定（仅 nightly）标志，详见 'cargo -Z help'
                                 的详情
  [1m[96m-h[0m, [1m[96m--help[0m                     打印帮助

[92m[1mCommands:[39m[22m
    [96m[1mbuild[39m[22m, [96m[1mb[39m[22m    编译当前包
    [96m[1mcheck[39m[22m, [96m[1mc[39m[22m    分析当前包并报告错误，但不构建目标文件
    [96m[1mclean[39m[22m       移除 target 目录
    [96m[1mdoc[39m[22m, [96m[1md[39m[22m      构建此包及其依赖的文档
    [96m[1mnew[39m[22m         创建新的 cargo 包
    [96m[1minit[39m[22m        在现有目录中创建新的 cargo 包
    [96m[1madd[39m[22m         向清单文件添加依赖
    [96m[1mremove[39m[22m      从清单文件移除依赖
    [96m[1mrun[39m[22m, [96m[1mr[39m[22m      运行本地包的二进制文件或示例
    [96m[1mtest[39m[22m, [96m[1mt[39m[22m     运行测试
    [96m[1mbench[39m[22m       运行基准测试
    [96m[1mupdate[39m[22m      更新 Cargo.lock 中列出的依赖
    [96m[1msearch[39m[22m      在注册表中搜索 crate
    [96m[1mpublish[39m[22m     打包并上传此包到注册表
    [96m[1minstall[39m[22m     安装 Rust 二进制文件
    [96m[1muninstall[39m[22m   卸载 Rust 二进制文件
    [36m...[39m         使用 [96m[1m--list[39m[22m 查看所有命令

参见 '[96m[1mcargo help[39m[22m [36m<command>[3`,
    examples: [
      { description: "创建新项目", code: "cargo new my_project" },
      { description: "构建项目", code: "cargo build" },
      { description: "运行项目", code: "cargo run" },
      { description: "安装二进制工具", code: "cargo install ripgrep" },
      { description: "查看帮助文档", code: "cargo --help" }
    ],
    relatedCommands: ["rustup", "rustc", "npm", "pip"]
  },
  {
    name: "gem",
    categoryId: "package",
    syntax: "gem [命令] [包名]",
    simpleExplain: "Ruby 包管理器",
    detailExplain: "Ruby 的包管理工具，用于安装和管理 Ruby 第三方库（称为 gem），从 rubygems.org 下载。常用命令：gem install 安装，gem uninstall 卸载，gem list 列出已安装，gem update 升级，gem search 搜索。通常配合 Bundler 管理项目依赖。",
    helpOutput: `RubyGems 是 Ruby 的包管理器。

  用法:
    gem -h/--help
    gem -v/--version
    gem [全局选项...] command [参数...] [选项...]

  全局选项:
    -C PATH                      如同在 <PATH> 中启动 gem 一样运行
                                 而非当前工作目录

  示例:
    gem install rake
    gem list --local
    gem build package.gemspec
    gem push package-0.0.1.gem
    gem help install

  更多帮助:
    gem help commands            列出所有 'gem' 命令
    gem help examples            显示一些用法示例
    gem help gem_dependencies    gem 依赖文件指南
    gem help platforms           gem 平台指南
    gem help <COMMAND>           显示 COMMAND 的帮助
                                   （例如 'gem help install'）
  更多信息:
    https://guides.rubygems.org
`,
    examples: [
      { description: "安装 Ruby gem", code: "gem install rails" },
      { description: "查看已安装的 gem", code: "gem list" },
      { description: "卸载 gem", code: "gem uninstall rails" },
      { description: "更新所有 gem", code: "gem update" },
      { description: "查看帮助文档", code: "gem --help" }
    ],
    relatedCommands: ["bundler", "ruby", "rvm", "rbenv"]
  },
  {
    name: "conda",
    categoryId: "package",
    syntax: "conda [命令] [包名]",
    simpleExplain: "Conda 包与环境管理器",
    detailExplain: "跨语言包管理器和环境管理器，能创建隔离的虚拟环境并安装 Python 及其他语言的包，是数据科学和机器学习领域的标配。常用命令：conda create 创建环境，conda activate 激活，conda install 安装包，conda env list 列出环境，conda remove 卸载。不同项目可使用不同版本的 Python 和库互不干扰。",
    helpOutput: `用法: conda [COMMAND] [OPTIONS]

Commands:
  create              创建新环境
  install PACKAGE     安装包
  update [PACKAGE]    更新包
  remove PACKAGE      卸载包
  uninstall           同 remove
  list                列出已安装包
  search KEYWORD      搜索可用包
  info                显示 conda 信息
  env list            列出所有环境
  env create          从文件创建环境
  env export          导出环境配置
  env remove          删除环境
  activate ENV        激活环境
  deactivate          退出当前环境
  config              修改配置
  clean               清理缓存
  run ENV COMMAND     在指定环境中运行命令
  init SHELL          初始化 shell 集成
  build               构建包

Options:
  -n, --name ENV      指定环境名
  -p, --prefix PATH   指定环境路径
  -c, --channel CH    指定频道
  --override-channels 不使用默认频道
  -y, --yes           自动回答 yes
  -q, --quiet         安静模式
  -v, --verbose       详细输出
  --dry-run           仅预览
  --no-deps           不安装依赖
  --only-deps         仅安装依赖
  -h, --help          显示帮助
  -V, --version       显示版本`,
    examples: [
      { description: "创建新的虚拟环境", code: "conda create -n myenv python=3.11" },
      { description: "激活虚拟环境", code: "conda activate myenv" },
      { description: "安装包", code: "conda install numpy pandas" },
      { description: "查看所有环境", code: "conda env list" },
      { description: "查看帮助文档", code: "conda --help" }
    ],
    relatedCommands: ["pip", "venv", "virtualenv", "mamba"]
  },
  {
    name: "make",
    categoryId: "package",
    syntax: "make [选项] [目标]",
    simpleExplain: "项目编译构建工具",
    detailExplain: "根据 Makefile 中定义的规则自动判断哪些目标需要重新构建并执行对应命令的构建工具。常用参数：make 默认构建第一个目标，make <target> 构建指定目标，make -j<N> 并行编译，make clean 清理构建产物，make install 安装。是 C/C++ 项目编译的标准工具，也广泛用于其他语言的构建流程。",
    helpOutput: `用法: make [options] [target] ...
Options:
  -b, -m                      为兼容性而忽略。
  -B, --always-make           无条件 make 所有目标。
  -C DIRECTORY, --directory=DIRECTORY
                              在执行任何操作前切换到 DIRECTORY。
  -d                          打印大量调试信息。
  --debug[=FLAGS]             打印各种类型的调试信息。
  -e, --environment-overrides
                              环境变量覆盖 makefile。
  -E STRING, --eval=STRING    将 STRING 作为 makefile 语句求值。
  -f FILE, --file=FILE, --makefile=FILE
                              将 FILE 作为 makefile 读取。
  -h, --help                  打印此消息并退出。
  -i, --ignore-errors         忽略配方中的错误。
  -I DIRECTORY, --include-dir=DIRECTORY
                              在 DIRECTORY 中搜索包含的 makefile。
  -j [N], --jobs[=N]          同时允许 N 个任务；无参数时为无限任务。
  -k, --keep-going            当某些目标无法制作时继续。
  -l [N], --load-average[=N], --max-load[=N]
                              除非负载低于 N，否则不启动多个任务。
  -L, --check-symlink-times   使用符号链接和目标之间的最新 mtime。
  -n, --just-print, --dry-run, --recon
                              不实际运行任何配方；仅打印它们。
  -o FILE, --old-file=FILE, --assume-old=FILE
                              将 FILE 视为非常旧，不重新制作。
  -O[TYPE], --output-sync[=TYPE]
                              按 TYPE 同步并行任务的输出。
  -p, --print-data-base       打印 make 的内部数据库。
  -q, --question              不运行配方；退出状态表示是否为最新。
  -r, --no-builtin-rules      禁用内置隐式规则。
  -R, --no-builtin-variables  禁用内置变量设置。
  -s, --silent, --quiet       不回显配方。
  --no-silent                 回显配方（禁用 --silent 模式）。
  -S, --no-keep-going, --stop
                              关闭 -k。
  -t, --touch                 touch 目标而非重新制作它们。
  --trace                     打印跟踪信息。
  -v, --version               打印 make 的版本号并退出。
  -w, --print-directory       打印当前目录。
  --no-print-directory        关闭 -w，即使它是隐式启用的。
  -W FILE, --what-if=FILE, --new-file=FILE, --assume-new=FILE
                              将 FILE 视为无限新。
  --warn-undefined-variables  当引用未定义的变量时发出警告。

此程序为 x86_64-pc-linux-gnu 构建
报告错误请至 <bug-make@gnu.org>

`,
    examples: [
      { description: "编译项目", code: "make" },
      { description: "使用 4 个并行任务编译", code: "make -j4" },
      { description: "安装编译好的程序", code: "sudo make install" },
      { description: "清理编译产物", code: "make clean" },
      { description: "查看帮助文档", code: "make --help" }
    ],
    relatedCommands: ["cmake", "gcc", "nproc", "autoreconf"]
  },
  {
    name: "cmake",
    categoryId: "package",
    syntax: "cmake [选项] 路径",
    simpleExplain: "跨平台构建系统生成器",
    detailExplain: "跨平台的构建系统生成器，根据 CMakeLists.txt 配置文件生成 Makefile、Ninja、Visual Studio 等构建文件，本身不直接编译代码。常用命令：cmake <dir> 生成构建文件，cmake --build 编译，cmake install 安装。通过变量和选项支持多平台、多编译器，是大型 C/C++ 项目的标配。",
    helpOutput: `用法

  cmake [options] <path-to-source>
  cmake [options] <path-to-existing-build>
  cmake [options] -S <path-to-source> -B <path-to-build>

指定源目录以在当前工作目录中为其（重新）生成构建系统。
指定现有的构建目录以重新生成其构建系统。

Options
  -S <path-to-source>          = 显式指定源目录。
  -B <path-to-build>           = 显式指定构建目录。
  -C <initial-cache>           = 预加载脚本以填充缓存。
  -D <var>[:<type>]=<value>    = 创建或更新 cmake 缓存条目。
  -U <globbing_expr>           = 从 CMake 缓存中移除匹配条目。
  -G <generator-name>          = 指定构建系统生成器。
  -T <toolset-name>            = 如果生成器支持，指定工具集名称。
  -A <platform-name>           = 如果生成器支持，指定平台名称。
  --toolchain <file>           = 指定工具链文件
                                 [CMAKE_TOOLCHAIN_FILE]。
  --install-prefix <directory> = 指定安装目录
                                 [CMAKE_INSTALL_PREFIX]。
  -Wdev                        = 启用开发者警告。
  -Wno-dev                     = 抑制开发者警告。
  -Werror=dev                  = 将开发者警告变为错误。
  -Wno-error=dev               = 将开发者警告变为非错误。
  -Wdeprecated                 = 启用弃用警告。
  -Wno-deprecated              = 抑制弃用警告。
  -Werror=deprecated           = 将弃用的宏和函数警告
                                 变为错误。
  -Wno-error=deprecated        = 将弃用的宏和函数警告
                                 变为非错误。
  --preset <preset>,--preset=<preset>
                               = 指定配置预设。
  --list-presets[=<type>]      = 列出可用预设。
  -E                           = CMake 命令模式。
  -L[A][H]                     = 列出非高级缓存变量。
  --fresh                      = 配置全新的构建树，移除任何
                                 现有缓存文件。
  --build <dir>                = 构建 CMake 生成的项目二叉树。
  --install <dir>              = 安装 CMake 生成的项目二叉
                                 树。
  --open <dir>                 = 在关联的应用程序中打开生成的
                                 项目。
  -N                           = 仅查看模式。
  -P <file>                    = 处理脚本模式。
  --find-package               = 旧版 pkg-config 类模式。请勿使用。
  --graphviz=<file>            = 生成依赖关系的 graphviz，详见
                                 CMakeGraphVizOptions.cmake。
  --system-information [file]  = 转储有关此系统的信息。
  --log-level=<ERROR|WARNING|NOTICE|STATUS|VERBOSE|DEBUG|TRA`,
    examples: [
      { description: "在 build 目录中生成 Makefile", code: "cmake -B build" },
      { description: "指定安装路径", code: "cmake -DCMAKE_INSTALL_PREFIX=/usr/local .." },
      { description: "生成后编译", code: "cmake --build build" },
      { description: "安装编译结果", code: "cmake --install build" },
      { description: "查看帮助文档", code: "cmake --help" }
    ],
    relatedCommands: ["make", "gcc", "pkg-config", "ninja"]
  },
  {
    name: "nix",
    categoryId: "package",
    syntax: "nix [选项] 命令",
    simpleExplain: "Nix 声明式包管理器",
    detailExplain: "采用函数式思路的包管理器，每次安装都创建新的系统代（generation），互不干扰，支持一键回滚到任意历史版本。多个版本的软件可共存于不同 profile 中，从根本上避免依赖冲突。常用命令：nix-env 安装用户包，nix-shell 创建临时环境，nix-collect-garbage 清理旧代。配置声明在 configuration.nix 中。",
    helpOutput: `用法: nix [OPTIONS] COMMAND

Commands:
  build               构建 Nix 表达式
  develop             进入开发 shell
  flake               管理 Nix flakes
  profile             管理用户 profile
  run                 运行 Nix 应用
  search              搜索包
  shell               进入临时 shell
  store               管理 Nix 存储
  copy                复制路径到存储
  edit                编辑 Nix 表达式
  eval                求值 Nix 表达式
  fmt                 格式化 Nix 文件
  log                 显示构建日志
  path-info           显示路径信息
  realisation         实现派生
  registry            管理 flake 注册表
  key                 管理密钥
  upgrade-nix         升级 Nix 本身

Options:
  --help              显示帮助
  --version           显示版本
  -v, --verbose       详细输出
  -L, --print-build-logs  打印构建日志
  --quiet             安静模式
  --debug             调试模式
  --offline           离线模式
  --refresh           刷新缓存
  --max-jobs N        最大并行任务数
  --cores N           使用的核心数
  --keep-going        出错继续
  --keep-failed       保留失败构建
  --fallback          失败时回退到本地构建
  -j N                并行任务数
  --extra-experimental-features FEAT  启用实验特性`,
    examples: [
      { description: "安装一个包", code: "nix-env -iA nixpkgs.git" },
      { description: "查看已安装的包", code: "nix-env -q" },
      { description: "回滚到上一个系统状态", code: "nix-env --rollback" },
      { description: "进入临时 Shell 环境", code: "nix-shell -p python3" },
      { description: "查看帮助文档", code: "nix --help" }
    ],
    relatedCommands: ["apt", "yum", "guix", "docker"]
  },
  {
    name: "guix",
    categoryId: "package",
    syntax: "guix [选项] 命令",
    simpleExplain: "Guix 声明式包管理器",
    detailExplain: "GNU 项目推出的包管理器，与 Nix 类似但用 Guile Scheme 编写配置，追求完全自由和可复现的构建。每个包的构建过程是确定性的，支持事务式升级和回滚。常用命令：guix install 安装，guix remove 卸载，guix upgrade 升级，guix environment 创建开发环境，guix pull 更新仓库。",
    helpOutput: `用法: guix [OPTION] COMMAND [ARGS...]

Commands:
  package             管理 profile 中的包
  install PACKAGE     安装包
  remove PACKAGE      卸载包
  upgrade [PACKAGE]   升级包
  list-generations    列出 profile 代次
  roll-back           回滚到上一代
  search KEYWORD      搜索包
  show PACKAGE        显示包信息
  build PACKAGE       构建包（不安装）
  environment PACKAGE 创建开发环境
  shell PACKAGE       进入开发 shell
  gc                  垃圾回收
  pull                更新 Guix
  time-machine        使用指定版本 Guix
  system              声明式系统管理
  home                声明式 home 管理
  container           管理容器
  pack                创建打包
  challenge           验证构建可复现性
  graph               绘制依赖图
  size                显示包大小
  refresh             更新包定义
  lint                检查包定义
  import              导入包定义
  hash                计算文件哈希
  download            下载文件
  edit PACKAGE        编辑包定义
  describe            显示 Guix 信息
  archive             创建归档

Options:
  --help              显示帮助
  --version           显示版本
  -v, --verbose       详细输出
  --quiet             安静模式
  --no-substitutes    不使用替代品
  --no-grafts         不使用 grafts
  --max-jobs=N        最大并行任务数
  --cores=N           使用的核心数
  --keep-going        出错继续
  --keep-failed       保留失败构建
  --dry-run           仅预览
  --fallback          失败时回退`,
    examples: [
      { description: "安装一个包", code: "guix install git" },
      { description: "查看可用的包", code: "guix package -A python" },
      { description: "回滚到上一代配置", code: "guix package --roll-back" },
      { description: "创建一个容器环境", code: "guix shell --container python numpy" },
      { description: "查看帮助文档", code: "guix --help" }
    ],
    relatedCommands: ["nix", "apt", "conda", "docker"]
  },
  {
    name: "yarn",
    categoryId: "package",
    syntax: "yarn [命令]",
    simpleExplain: "快速可靠的 JavaScript 包管理器",
    detailExplain: "Facebook 开发的 JavaScript 包管理器，与 npm 互为替代，通过 yarn.lock 锁文件保证依赖一致性。常用命令：yarn install 安装依赖，yarn add 添加包，yarn remove 移除包，yarn upgrade 升级，yarn workspace 管理多包仓库（monorepo）。支持离线安装和并行下载，速度较快。",
    helpOutput: `Yarn 包管理器 - 4.14.1

  $ yarn <command>

通用命令

  yarn add [--json] [-F,--fixed] [-E,--exact] [-T,--tilde] [-C,--caret] [-D,--dev] [-P,--peer] [-O,--optional] [--prefer-dev] [-i,--interactive] [--cached] [--mode #0] ...
    向项目添加依赖

  yarn bin [-v,--verbose] [--json] [name]
    获取二进制脚本的路径

  yarn cache clean [--mirror] [--all]
    移除共享缓存文件

  yarn config [--no-defaults] [--json] ...
    显示当前配置

  yarn config get [--why] [--json] [--no-redacted] <name>
    读取配置设置

  yarn config set [--json] [-H,--home] <name> <value>
    更改配置设置

  yarn config unset [-H,--home] <name>
    取消设置配置设置

  yarn dedupe [-s,--strategy #0] [-c,--check] [--json] [--mode #0] ...
    对重叠范围的依赖进行去重

  yarn dlx [-p,--package #0] [-q,--quiet] <command> ...
    在临时环境中运行包

  yarn exec <commandName> ...
    执行 shell 脚本

  yarn explain [--json] [code]
    解释错误代码

  yarn explain peer-requirements [hash]
    解释一组 peer 依赖

  yarn info [-A,--all] [-R,--recursive] [-X,--extra #0] [--cache] [--dependents] [--manifest] [--name-only] [--virtuals] [--json] ...
    查看与包相关的信息

  yarn init [-p,--private] [-w,--workspace] [-i,--install] [-n,--name #0]
    创建新包

  yarn init [-p,--private] [-w,--workspace] [-i,--install] [-n,--name #0] <initializer> ...
    创建新包

  yarn install [--json] [--immutable] [--immutable-cache] [--refresh-lockfile] [--check-cache] [--check-resolutions] [--inline-builds] [--mode #0]
    安装项目依赖

  yarn link [-A,--all] [-p,--private] [-r,--relative] ...
    将本地项目连接到另一个项目

  yarn node ...
    运行 node（已设置钩子）

  yarn npm audit [-A,--all] [-R,--recursive] [--environment #0] [--json] [--no-deprecations] [--severity #0] [--exclude #0] [--ignore #0]
    对已安装的包执行漏洞审计

  yarn pack [--install-if-needed] [-n,--dry-run] [--json] [-o,--out #0]
    从活动工作区生成 tarball

  yarn patch [-u,--update] [--json] <package>
    准备要修补的包

  yarn patch-commit [-s,--save] <patchFolder>
    从目录生成补丁

  yarn rebuild ...
    重建项目的原生包

  yarn remove [-A,--all] [--mode #0] ...
    从项目中移除依赖

  yarn run [--inspect] [--inspect-brk] [-T,--top-level] [-B,--binaries-only] [--require #0] <scriptName> ...
    运行 package.json 中定义的脚本

  yarn set resolution <descriptor> <resolution>
    强制执行包解析

  yarn set version [--yarn-path] [--only-if-needed] <version>
    锁定项目使用的 Yarn 版本

  yarn set version from sources [--path #0] [--repository #0] [--branch #0] [--pl`,
    examples: [
      { description: "安装项目所有依赖", code: "yarn" },
      { description: "添加一个依赖包", code: "yarn add lodash" },
      { description: "添加开发依赖", code: "yarn add -D jest" },
      { description: "运行脚本命令", code: "yarn run build" },
      { description: "查看帮助文档", code: "yarn --help" }
    ],
    relatedCommands: ["npm", "pnpm", "node", "npx"]
  },
  {
    name: "pnpm",
    categoryId: "package",
    syntax: "pnpm [命令]",
    simpleExplain: "高效的 Node.js 包管理器",
    detailExplain: "高性能的 JavaScript 包管理器，通过硬链接和符号链接在全局 store 中共享依赖，多个项目复用同一份包以节省磁盘空间。常用命令：pnpm install 安装依赖，pnpm add 添加包，pnpm remove 移除，pnpm update 升级。严格隔离依赖，避免幽灵依赖问题，支持 workspace 管理 monorepo。",
    helpOutput: `版本 10.28.1（编译为二进制；捆绑 Node.js v24.15.0）
用法: pnpm [command] [flags]
       pnpm [ -h | --help | -v | --version ]

以下是各种情况下常用的 pnpm 命令，使用 'pnpm help -a' 列出所有命令

管理您的依赖:
      add                  安装一个包及其依赖的任何包。
                           默认情况下，任何新包都作为
                           prod 依赖安装
   i, install              为项目安装所有依赖
  ln, link                 将本地项目连接到另一个项目
  rm, remove               从 node_modules 和项目的
                           package.json 中移除包
      unlink               取消链接包。类似 yarn unlink 但 pnpm
                           在移除外部链接后重新安装
                           依赖
  up, update               根据指定范围将包更新到
                           最新版本

审查您的依赖:
      audit                检查已安装包的已知安全问题
  ls, list                 以树形结构打印所有已安装包的
                           版本及其依赖
      outdated             检查过时的包
      why                  显示所有依赖于指定
                           包的包

运行您的脚本:
      create               从 "create-*" 或 "@foo/create-*"
                           起始套件创建项目
      dlx                  从注册表获取包而不将其
                           安装为依赖，热加载它，并运行
                           它暴露的任何默认命令二进制文件
      exec                 在项目范围内执行 shell 命令
      run                  运行已定义的包脚本

其他:
   c, config               管理 pnpm 配置文件
      init                 创建 package.json 文件
      publish              将包发布到注册表
      self-update          将 pnpm 更新到最新版本

Options:
  -r, --recursive          为工作区中的每个项目运行命令。`,
    examples: [
      { description: "安装项目依赖", code: "pnpm install" },
      { description: "添加一个依赖包", code: "pnpm add express" },
      { description: "全局安装工具", code: "pnpm add -g typescript" },
      { description: "运行脚本", code: "pnpm run dev" },
      { description: "查看帮助文档", code: "pnpm --help" }
    ],
    relatedCommands: ["npm", "yarn", "node", "npx"]
  },
  {
    name: "composer",
    categoryId: "package",
    syntax: "composer [命令]",
    simpleExplain: "PHP 依赖管理工具",
    detailExplain: "PHP 的标准包管理工具，根据 composer.json 声明项目依赖并自动下载安装所需的 PHP 库，通过 composer.lock 锁定版本。常用命令：composer install 安装依赖，composer require 添加包，composer update 升级依赖，composer create-project 创建项目。Laravel、Symfony 等主流框架均依赖它。",
    helpOutput: `描述:
  列出命令

用法:
  list [options] [--] [<namespace>]

参数:
  namespace                      命名空间名称

选项:
      --raw                      输出原始命令列表
      --format=FORMAT            输出格式 (txt, xml, json, 或 md) [默认: "txt"]
      --short                    跳过描述命令的参数
  -h, --help                     显示给定命令的帮助。未给出命令时显示 list 命令的帮助
  -q, --quiet                    不输出任何消息
  -V, --version                  显示此应用程序版本
      --ansi|--no-ansi           强制（或禁用 --no-ansi）ANSI 输出
  -n, --no-interaction           不询问任何交互问题
      --profile                  显示时间和内存使用信息
      --no-plugins               是否禁用插件。
      --no-scripts               跳过执行 composer.json 文件中定义的所有脚本。
  -d, --working-dir=WORKING-DIR  如果指定，使用给定目录作为工作目录。
      --no-cache                 防止使用缓存
  -v|vv|vvv, --verbose           增加消息的详细程度: 1 为正常输出，2 为更详细的输出，3 为调试

帮助:
  list 命令列出所有命令:
  
    /root/.phpenv/versions/8.5snapshot/bin/composer list
  
  您还可以显示特定命名空间的命令:
  
    /root/.phpenv/versions/8.5snapshot/bin/composer list test
  
  您还可以使用 --format 选项以其他格式输出信息:
  
    /root/.phpenv/versions/8.5snapshot/bin/composer list --format=xml
  
  也可以获取命令的原始列表（用于嵌入命令运行器）:
  
    /root/.phpenv/versions/8.5snapshot/bin/composer list --raw
`,
    examples: [
      { description: "安装项目依赖", code: "composer install" },
      { description: "添加一个依赖包", code: "composer require guzzlehttp/guzzle" },
      { description: "更新所有依赖", code: "composer update" },
      { description: "创建新项目", code: "composer create-project laravel/laravel myapp" },
      { description: "查看帮助文档", code: "composer --help" }
    ],
    relatedCommands: ["php", "npm", "pip", "pecl"]
  },
  {
    name: "gradle",
    categoryId: "package",
    syntax: "gradle [任务]",
    simpleExplain: "Java 构建自动化工具",
    detailExplain: "基于 Groovy 或 Kotlin DSL 的构建工具，比 Maven 更灵活、比 Ant 更规范，是 Android 项目的默认构建系统。常用命令：gradle build 构建项目，gradle test 运行测试，gradle clean 清理，gradle run 运行应用，gradle dependencies 查看依赖树。构建脚本为 build.gradle 或 build.gradle.kts。",
    helpOutput: `
要查看与项目相关的帮助，请使用 gradle help

要查看任务的更多详情，请运行 gradle help --task <task>

要查看可用任务列表，请运行 gradle tasks

用法: gradle [option...] [task...]

-?, -h, --help                     显示此帮助消息。
-a, --no-rebuild                   不重新构建项目依赖。
-b, --build-file                   指定构建文件。[已弃用]
--build-cache                      启用 Gradle 构建缓存。Gradle 将尝试重用先前构建的输出。
--no-build-cache                   禁用 Gradle 构建缓存。
-c, --settings-file                指定设置文件。[已弃用]
--configuration-cache              启用配置缓存。Gradle 将尝试重用先前构建的构建配置。
--no-configuration-cache           禁用配置缓存。
--configuration-cache-problems     配置配置缓存如何处理问题（失败或警告）。默认为失败。
--configure-on-demand              仅配置必要的项目。Gradle 将尝试减少大型多项目构建的配置时间。[孵化中]
--no-configure-on-demand           禁用按需配置。[孵化中]
--console                          指定生成哪种类型的控制台输出。值为 'plain'、'auto'（默认）、'rich' 或 'verbose'。
--continue                         任务失败后继续执行任务。
--no-continue                      任务失败后停止执行任务。
-D, --system-prop                  设置 JVM 的系统属性（例如 -Dmyprop=myvalue）。
-d, --debug                        以调试模式记录日志（包含正常堆栈跟踪）。
--daemon                           使用 Gradle 守护进程运行构建。如果未运行则启动守护进程。
--no-daemon                        不使用 Gradle 守护进程运行构建。如果您已配置 Gradle 默认始终使用守护进程运行，则偶尔有用。
--export-keys                      导出用于依赖验证的公钥。
-F, --dependency-verification      配置依赖验证模式。值为 'strict'、'lenient' 或 'off'。
--foreground                       在前台启动 Gradle 守护进程。
-g, --gradle-user-home             指定 Gradle 用户主目录。默认为 ~/.gradle
-I, --init-script                  指定初始化脚本。
-i, --info                         将日志级别设为 info。
--include-build                    将指定构建包含在复合构建中。
-M, --write-verification-metadata  为项目中使用的依赖生成校验和（逗号分隔列表）
-m, --dry-run                      在所有任务操作禁用的情况下运行构建。
--max-workers                      配置 Gradle 允许使用的并发工作器数量。
--offline                          在不访问`,
    examples: [
      { description: "编译项目", code: "gradle build" },
      { description: "运行测试", code: "gradle test" },
      { description: "清理构建产物", code: "gradle clean" },
      { description: "查看所有可用任务", code: "gradle tasks" },
      { description: "查看帮助文档", code: "gradle --help" }
    ],
    relatedCommands: ["make", "maven", "java", "ant"]
  }
];
