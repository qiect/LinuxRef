export const categories = [
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
export const commands = [
    // ==================== 文件操作 ====================
    {
        name: "ls",
        categoryId: "file",
        syntax: "ls [选项] [目录/文件]",
        simpleExplain: "列出文件夹里的东西，就像打开抽屉看看里面有什么",
        detailExplain: "就像你打开一个抽屉或书架，把里面的所有物品名称列出来让你看清楚。默认只显示文件名，加上参数后还能看到文件大小、修改时间、权限等详细信息，就像给每件物品贴上标签。",
        helpOutput: `Usage: ls [OPTION]... [FILE]...
List information about the FILEs (the current directory by default).
Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

Mandatory arguments to long options are mandatory for short options too.
  -a, --all                  do not ignore entries starting with .
  -A, --almost-all           do not list implied . and ..
      --author               with -l, print the author of each file
  -b, --escape               print C-style escapes for nongraphic characters
      --block-size=SIZE      with -l, scale sizes by SIZE when printing them;
                             e.g., '--block-size=M'; see SIZE format below

  -B, --ignore-backups       do not list implied entries ending with ~
  -c                         with -lt: sort by, and show, ctime (time of last
                             change of file status information);
                             with -l: show ctime and sort by name;
                             otherwise: sort by ctime, newest first

  -C                         list entries by columns
      --color[=WHEN]         color the output WHEN; more info below
  -d, --directory            list directories themselves, not their contents
  -D, --dired                generate output designed for Emacs' dired mode
  -f                         list all entries in directory order
  -F, --classify[=WHEN]      append indicator (one of */=>@|) to entries WHEN
      --file-type            likewise, except do not append '*'
      --format=WORD          across -x, commas -m, horizontal -x, long -l,
                             single-column -1, verbose -l, vertical -C

      --full-time            like -l --time-style=full-iso
  -g                         like -l, but do not list owner
      --group-directories-first
                             group directories before files;
                             can be augmented with a --sort option, but any
                             use of --sort=none (-U) disables grouping

  -G, --no-group             in a long listing, don't print group names
  -h, --human-readable       with -l and -s, print sizes like 1K 234M 2G etc.
      --si                   likewise, but use powers of 1000 not 1024
  -H, --dereference-command-line
                             follow symbolic links listed on the command line
      --dereference-command-line-symlink-to-dir
                             follow each command line symbolic link
                             that points to a directory

      --hide=PATTERN         do not list implied entries matching shell PATTERN
                             (overridden by -a or -A)

      --hyperlink[=WHEN]     hyperlink file names WHEN
      --indicator-style=WORD
                             append indicator with style WORD to entry names:
                             none (default), slash (-p),
                             file-type (--file-type), classify (-F)

  -i, --inode                print the index number of each f`,
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
        simpleExplain: "换一个目录去工作，就像走进不同的房间",
        detailExplain: "就像你在家里从一个房间走到另一个房间——你在卧室时只能看到卧室的东西，走到书房就只能看到书房的东西。cd 就是让你在电脑的「目录房间」之间来回走动。",
        helpOutput: `cd: cd [-L|[-P [-e]] [-@]] [dir]
    Change the shell working directory.
    
    Change the current directory to DIR.  The default DIR is the value of the
    HOME shell variable. If DIR is "-", it is converted to $OLDPWD.
    
    The variable CDPATH defines the search path for the directory containing
    DIR.  Alternative directory names in CDPATH are separated by a colon (:).
    A null directory name is the same as the current directory.  If DIR begins
    with a slash (/), then CDPATH is not used.
    
    If the directory is not found, and the shell option \`cdable_vars' is set,
    the word is assumed to be  a variable name.  If that variable has a value,
    its value is used for DIR.
    
    Options:
      -L	force symbolic links to be followed: resolve symbolic
    		links in DIR after processing instances of \`..'
      -P	use the physical directory structure without following
    		symbolic links: resolve symbolic links in DIR before
    		processing instances of \`..'
      -e	if the -P option is supplied, and the current working
    		directory cannot be determined successfully, exit with
    		a non-zero status
      -@	on systems that support it, present a file with extended
    		attributes as a directory containing the file attributes
    
    The default is to follow symbolic links, as if \`-L' were specified.
    \`..' is processed by removing the immediately previous pathname component
    back to a slash or the beginning of DIR.
    
    Exit Status:
    Returns 0 if the directory is changed, and if $PWD is set successfully when
    -P is used; non-zero otherwise.
`,
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
        simpleExplain: "复制文件，就像用复印机复印一份文档",
        detailExplain: "就像你拿一份重要文件去复印店复印一份副本——原件还在原处不动，多了一份一模一样的复印件放在你指定的地方。可以复制单个文件，也可以整个文件夹一起复制。",
        helpOutput: `Usage: cp [OPTION]... [-T] SOURCE DEST
  or:  cp [OPTION]... SOURCE... DIRECTORY
  or:  cp [OPTION]... -t DIRECTORY SOURCE...
Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.

Mandatory arguments to long options are mandatory for short options too.
  -a, --archive                same as -dR --preserve=all
      --attributes-only        don't copy the file data, just the attributes
      --backup[=CONTROL]       make a backup of each existing destination file
  -b                           like --backup but does not accept an argument
      --copy-contents          copy contents of special files when recursive
  -d                           same as --no-dereference --preserve=links
      --debug                  explain how a file is copied.  Implies -v
  -f, --force                  if an existing destination file cannot be
                                 opened, remove it and try again (this option
                                 is ignored when the -n option is also used)
  -i, --interactive            prompt before overwrite (overrides a previous -n
                                  option)
  -H                           follow command-line symbolic links in SOURCE
  -l, --link                   hard link files instead of copying
  -L, --dereference            always follow symbolic links in SOURCE
  -n, --no-clobber             do not overwrite an existing file and do not fail
                                 (overrides a -u or previous -i option). See also
                                 --update; equivalent to --update=none.
  -P, --no-dereference         never follow symbolic links in SOURCE
  -p                           same as --preserve=mode,ownership,timestamps
      --preserve[=ATTR_LIST]   preserve the specified attributes
      --no-preserve=ATTR_LIST  don't preserve the specified attributes
      --parents                use full source file name under DIRECTORY
  -R, -r, --recursive          copy directories recursively
      --reflink[=WHEN]         control clone/CoW copies. See below
      --remove-destination     remove each existing destination file before
                                 attempting to open it (contrast with --force)
      --sparse=WHEN            control creation of sparse files. See below
      --strip-trailing-slashes  remove any trailing slashes from each SOURCE
                                 argument
  -s, --symbolic-link          make symbolic links instead of copying
  -S, --suffix=SUFFIX          override the usual backup suffix
  -t, --target-directory=DIRECTORY  copy all SOURCE arguments into DIRECTORY
  -T, --no-target-directory    treat DEST as a normal file
  --update[=UPDATE]            control which existing files are updated;
                                 UPDATE={all,none,older(default)}.  See below
  -u                           equivalent to --update[=older]
  -v, --verbose                explain what is being done
  -x, --one-file-system        stay on this file system
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
        simpleExplain: "移动或重命名文件，就像把文件搬到另一个抽屉或换个名字",
        detailExplain: "就像你把一本书从书架的左边移到右边，或者给它重新贴个书名标签。注意：mv 不是复印，是真正的「搬家」，原来的地方就没有了。所以它既可以用来移动文件，也可以用来改名。",
        helpOutput: `Usage: mv [OPTION]... [-T] SOURCE DEST
  or:  mv [OPTION]... SOURCE... DIRECTORY
  or:  mv [OPTION]... -t DIRECTORY SOURCE...
Rename SOURCE to DEST, or move SOURCE(s) to DIRECTORY.

Mandatory arguments to long options are mandatory for short options too.
      --backup[=CONTROL]       make a backup of each existing destination file
  -b                           like --backup but does not accept an argument
      --debug                  explain how a file is copied.  Implies -v
  -f, --force                  do not prompt before overwriting
  -i, --interactive            prompt before overwrite
  -n, --no-clobber             do not overwrite an existing file
If you specify more than one of -i, -f, -n, only the final one takes effect.
      --no-copy                do not copy if renaming fails
      --strip-trailing-slashes  remove any trailing slashes from each SOURCE
                                 argument
  -S, --suffix=SUFFIX          override the usual backup suffix
  -t, --target-directory=DIRECTORY  move all SOURCE arguments into DIRECTORY
  -T, --no-target-directory    treat DEST as a normal file
  --update[=UPDATE]            control which existing files are updated;
                                 UPDATE={all,none,older(default)}.  See below
  -u                           equivalent to --update[=older]
  -v, --verbose                explain what is being done
  -Z, --context                set SELinux security context of destination
                                 file to default type
      --help        display this help and exit
      --version     output version information and exit

UPDATE controls which existing files in the destination are replaced.
'all' is the default operation when an --update option is not specified,
and results in all existing files in the destination being replaced.
'none' is similar to the --no-clobber option, in that no files in the
destination are replaced, but also skipped files do not induce a failure.
'older' is the default operation when --update is specified, and results
in files being replaced if they're older than the corresponding source file.

The backup suffix is '~', unless set with --suffix or SIMPLE_BACKUP_SUFFIX.
The version control method may be selected via the --backup option or through
the VERSION_CONTROL environment variable.  Here are the values:

  none, off       never make backups (even if --backup is given)
  numbered, t     make numbered backups
  existing, nil   numbered if numbered backups exist, simple otherwise
  simple, never   always make simple backups

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/mv>
or available locally via: info '(coreutils) mv invocation'
`,
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
        simpleExplain: "删除文件，就像把废纸扔进碎纸机",
        detailExplain: "就像你把不要的文件扔进碎纸机——文件会被彻底销毁，而且通常无法恢复！所以用 rm 要特别小心，尤其是加 -rf 参数时，就像拿到了一把大铁锤，敲什么碎什么，没有回收站可以捡回来。",
        helpOutput: `Usage: rm [OPTION]... [FILE]...
Remove (unlink) the FILE(s).

  -f, --force           ignore nonexistent files and arguments, never prompt
  -i                    prompt before every removal
  -I                    prompt once before removing more than three files, or
                          when removing recursively; less intrusive than -i,
                          while still giving protection against most mistakes
      --interactive[=WHEN]  prompt according to WHEN: never, once (-I), or
                          always (-i); without WHEN, prompt always
      --one-file-system  when removing a hierarchy recursively, skip any
                          directory that is on a file system different from
                          that of the corresponding command line argument
      --no-preserve-root  do not treat '/' specially
      --preserve-root[=all]  do not remove '/' (default);
                              with 'all', reject any command line argument
                              on a separate device from its parent
  -r, -R, --recursive   remove directories and their contents recursively
  -d, --dir             remove empty directories
  -v, --verbose         explain what is being done
      --help        display this help and exit
      --version     output version information and exit

By default, rm does not remove directories.  Use the --recursive (-r or -R)
option to remove each listed directory, too, along with all of its contents.

To remove a file whose name starts with a '-', for example '-foo',
use one of these commands:
  rm -- -foo

  rm ./-foo

Note that if you use rm to remove a file, it might be possible to recover
some of its contents, given sufficient expertise and/or time.  For greater
assurance that the contents are truly unrecoverable, consider using shred(1).

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/rm>
or available locally via: info '(coreutils) rm invocation'
`,
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
        simpleExplain: "创建新文件夹，就像买个新收纳盒来装东西",
        detailExplain: "就像你想整理桌面，买了一个新的收纳盒（文件夹），用来分类存放各种文件。可以一次建一个，也可以一次性建好多层嵌套的文件夹，就像买了一套俄罗斯套娃。",
        helpOutput: `Usage: mkdir [OPTION]... DIRECTORY...
Create the DIRECTORY(ies), if they do not already exist.

Mandatory arguments to long options are mandatory for short options too.
  -m, --mode=MODE   set file mode (as in chmod), not a=rwx - umask
  -p, --parents     no error if existing, make parent directories as needed,
                    with their file modes unaffected by any -m option.
  -v, --verbose     print a message for each created directory
  -Z                   set SELinux security context of each created directory
                         to the default type
      --context[=CTX]  like -Z, or if CTX is specified then set the SELinux
                         or SMACK security context to CTX
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/mkdir>
or available locally via: info '(coreutils) mkdir invocation'
`,
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
        simpleExplain: "创建空文件或更新文件时间戳，就像新建一张白纸或盖个时间章",
        detailExplain: "就像你拿出一张全新的空白纸准备写字（创建空文件）；如果文件已经存在，touch 就像在上面盖一个新的时间印章——内容不变，但「最后修改时间」变成现在这个时刻。",
        helpOutput: `Usage: touch [OPTION]... FILE...
Update the access and modification times of each FILE to the current time.

A FILE argument that does not exist is created empty, unless -c or -h
is supplied.

A FILE argument string of - is handled specially and causes touch to
change the times of the file associated with standard output.

Mandatory arguments to long options are mandatory for short options too.
  -a                     change only the access time
  -c, --no-create        do not create any files
  -d, --date=STRING      parse STRING and use it instead of current time
  -f                     (ignored)
  -h, --no-dereference   affect each symbolic link instead of any referenced
                         file (useful only on systems that can change the
                         timestamps of a symlink)
  -m                     change only the modification time
  -r, --reference=FILE   use this file's times instead of current time
  -t STAMP               use [[CC]YY]MMDDhhmm[.ss] instead of current time
      --time=WORD        change the specified time:
                           WORD is access, atime, or use: equivalent to -a
                           WORD is modify or mtime: equivalent to -m
      --help        display this help and exit
      --version     output version information and exit

Note that the -d and -t options accept different time-date formats.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/touch>
or available locally via: info '(coreutils) touch invocation'
`,
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
        simpleExplain: "全盘搜索文件，就像请侦探在整个房子里找某样东西",
        detailExplain: "就像你丢了钥匙，请一位超级侦探帮你把整个屋子翻个底朝天找出来。你可以告诉他：「我要找名字带 log 的」「我要找超过 100MB 的文件」「我要找昨天修改过的文件」。find 就是这样一位全能搜索侦探。",
        helpOutput: `Usage: find [-H] [-L] [-P] [-Olevel] [-D debugopts] [path...] [expression]

Default path is the current directory; default expression is -print.
Expression may consist of: operators, options, tests, and actions.

Operators (decreasing precedence; -and is implicit where no others are given):
      ( EXPR )   ! EXPR   -not EXPR   EXPR1 -a EXPR2   EXPR1 -and EXPR2
      EXPR1 -o EXPR2   EXPR1 -or EXPR2   EXPR1 , EXPR2

Positional options (always true):
      -daystart -follow -nowarn -regextype -warn

Normal options (always true, specified before other expressions):
      -depth -files0-from FILE -maxdepth LEVELS -mindepth LEVELS
       -mount -noleaf -xdev -ignore_readdir_race -noignore_readdir_race

Tests (N can be +N or -N or N):
      -amin N -anewer FILE -atime N -cmin N -cnewer FILE -context CONTEXT
      -ctime N -empty -false -fstype TYPE -gid N -group NAME -ilname PATTERN
      -iname PATTERN -inum N -iwholename PATTERN -iregex PATTERN
      -links N -lname PATTERN -mmin N -mtime N -name PATTERN -newer FILE
      -nouser -nogroup -path PATTERN -perm [-/]MODE -regex PATTERN
      -readable -writable -executable
      -wholename PATTERN -size N[bcwkMG] -true -type [bcdpflsD] -uid N
      -used N -user NAME -xtype [bcdpfls]

Actions:
      -delete -print0 -printf FORMAT -fprintf FILE FORMAT -print 
      -fprint0 FILE -fprint FILE -ls -fls FILE -prune -quit
      -exec COMMAND ; -exec COMMAND {} + -ok COMMAND ;
      -execdir COMMAND ; -execdir COMMAND {} + -okdir COMMAND ;

Other common options:
      --help                   display this help and exit
      --version                output version information and exit

Valid arguments for -D:
exec, opt, rates, search, stat, time, tree, all, help
Use '-D help' for a description of the options, or see find(1)

Please see also the documentation at https://www.gnu.org/software/findutils/.
You can report (and track progress on fixing) bugs in the "find"
program via the GNU findutils bug-reporting page at
https://savannah.gnu.org/bugs/?group=findutils or, if
you have no web access, by sending email to <bug-findutils@gnu.org>.
`,
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
        simpleExplain: "创建快捷方式，就像在桌面上放一个指向文件的快捷图标",
        detailExplain: "就像你在电脑桌面上创建一个快捷方式图标——点击它就能打开真实存在的程序。软链接就像 Windows 的快捷方式，是一个「指路牌」；硬链接则更像给同一个人取了两个名字，删掉任何一个另一个还在。",
        helpOutput: `Usage: ln [OPTION]... [-T] TARGET LINK_NAME
  or:  ln [OPTION]... TARGET
  or:  ln [OPTION]... TARGET... DIRECTORY
  or:  ln [OPTION]... -t DIRECTORY TARGET...
In the 1st form, create a link to TARGET with the name LINK_NAME.
In the 2nd form, create a link to TARGET in the current directory.
In the 3rd and 4th forms, create links to each TARGET in DIRECTORY.
Create hard links by default, symbolic links with --symbolic.
By default, each destination (name of new link) should not already exist.
When creating hard links, each TARGET must exist.  Symbolic links
can hold arbitrary text; if later resolved, a relative link is
interpreted in relation to its parent directory.

Mandatory arguments to long options are mandatory for short options too.
      --backup[=CONTROL]      make a backup of each existing destination file
  -b                          like --backup but does not accept an argument
  -d, -F, --directory         allow the superuser to attempt to hard link
                                directories (note: will probably fail due to
                                system restrictions, even for the superuser)
  -f, --force                 remove existing destination files
  -i, --interactive           prompt whether to remove destinations
  -L, --logical               dereference TARGETs that are symbolic links
  -n, --no-dereference        treat LINK_NAME as a normal file if
                                it is a symbolic link to a directory
  -P, --physical              make hard links directly to symbolic links
  -r, --relative              with -s, create links relative to link location
  -s, --symbolic              make symbolic links instead of hard links
  -S, --suffix=SUFFIX         override the usual backup suffix
  -t, --target-directory=DIRECTORY  specify the DIRECTORY in which to create
                                the links
  -T, --no-target-directory   treat LINK_NAME as a normal file always
  -v, --verbose               print name of each linked file
      --help        display this help and exit
      --version     output version information and exit

The backup suffix is '~', unless set with --suffix or SIMPLE_BACKUP_SUFFIX.
The version control method may be selected via the --backup option or through
the VERSION_CONTROL environment variable.  Here are the values:

  none, off       never make backups (even if --backup is given)
  numbered, t     make numbered backups
  existing, nil   numbered if numbered backups exist, simple otherwise
  simple, never   always make simple backups

Using -s ignores -L and -P.  Otherwise, the last option specified controls
behavior when a TARGET is a symbolic link, defaulting to -P.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/ln>
or available locally via: info '(coreutils) ln invocation'
`,
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
        simpleExplain: "告诉你现在站在哪个目录里，就像抬头看门牌号",
        detailExplain: "就像你走进一栋大楼迷路了，看看墙上的门牌号就知道自己目前在几楼几号房间。pwd 会打印出你当前所在目录的完整路径，让你不会在层层嵌套的文件夹中迷失方向。",
        helpOutput: `pwd: pwd [-LP]
    Print the name of the current working directory.
    
    Options:
      -L	print the value of $PWD if it names the current working
    		directory
      -P	print the physical directory, without any symbolic links
    
    By default, \`pwd' behaves as if \`-L' were specified.
    
    Exit Status:
    Returns 0 unless an invalid option is given or the current directory
    cannot be read.
`,
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
        simpleExplain: "以树形图展示目录结构，就像画一张家族族谱图",
        detailExplain: "就像给你画一张家族族谱图，一目了然地展示哪个文件夹下面有哪些子文件夹和文件，层级关系清清楚楚。比单纯的 ls 更直观，一眼就能看懂项目的整体结构。",
        helpOutput: `usage: tree [-acdfghilnpqrstuvxACDFJQNSUX] [-L level [-R]] [-H  baseHREF]
	[-T title] [-o filename] [-P pattern] [-I pattern] [--gitignore]
	[--gitfile[=]file] [--matchdirs] [--metafirst] [--ignore-case]
	[--nolinks] [--hintro[=]file] [--houtro[=]file] [--inodes] [--device]
	[--sort[=]<name>] [--dirsfirst] [--filesfirst] [--filelimit #] [--si]
	[--du] [--prune] [--charset[=]X] [--timefmt[=]format] [--fromfile]
	[--fromtabfile] [--fflinks] [--info] [--infofile[=]file] [--noreport]
	[--version] [--help] [--] [directory ...]
  ------- Listing options -------
  -a            All files are listed.
  -d            List directories only.
  -l            Follow symbolic links like directories.
  -f            Print the full path prefix for each file.
  -x            Stay on current filesystem only.
  -L level      Descend only level directories deep.
  -R            Rerun tree when max dir level reached.
  -P pattern    List only those files that match the pattern given.
  -I pattern    Do not list files that match the given pattern.
  --gitignore   Filter by using .gitignore files.
  --gitfile X   Explicitly read gitignore file.
  --ignore-case Ignore case when pattern matching.
  --matchdirs   Include directory names in -P pattern matching.
  --metafirst   Print meta-data at the beginning of each line.
  --prune       Prune empty directories from the output.
  --info        Print information about files found in .info files.
  --infofile X  Explicitly read info file.
  --noreport    Turn off file/directory count at end of tree listing.
  --charset X   Use charset X for terminal/HTML and indentation line output.
  --filelimit # Do not descend dirs with more than # files in them.
  -o filename   Output to file instead of stdout.
  ------- File options -------
  -q            Print non-printable characters as '?'.
  -N            Print non-printable characters as is.
  -Q            Quote filenames with double quotes.
  -p            Print the protections for each file.
  -u            Displays file owner or UID number.
  -g            Displays file group owner or GID number.
  -s            Print the size in bytes of each file.
  -h            Print the size in a more human readable way.
  --si          Like -h, but use in SI units (powers of 1000).
  --du          Compute size of directories by their contents.
  -D            Print the date of last modification or (-c) status change.
  --timefmt <f> Print and format time according to the format <f>.
  -F            Appends '/', '=', '*', '@', '|' or '>' as per ls -F.
  --inodes      Print inode number of each file.
  --device      Print device ID number to which each file belongs.
  ------- Sorting options -------
  -v            Sort files alphanumerically by version.
  -t            Sort files by last modification time.
  -c            Sort files by last status change time.
  -U            Leave files unsorted.
  -r            Reverse the order of the sort.
  --dirsfirst   List directories before file`,
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
        simpleExplain: "删除空文件夹，就像扔掉一个空的收纳盒",
        detailExplain: "就像你要扔掉一个空的收纳盒子——但如果盒子里还有东西就扔不掉，必须先把东西拿出来。rmdir 只能删除空目录，这其实是一种安全机制，防止你误删还有文件的文件夹。",
        helpOutput: `Usage: rmdir [OPTION]... DIRECTORY...
Remove the DIRECTORY(ies), if they are empty.

      --ignore-fail-on-non-empty
                    ignore each failure to remove a non-empty directory
  -p, --parents     remove DIRECTORY and its ancestors;
                    e.g., 'rmdir -p a/b' is similar to 'rmdir a/b a'

  -v, --verbose     output a diagnostic for every directory processed
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/rmdir>
or available locally via: info '(coreutils) rmdir invocation'
`,
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
        simpleExplain: "查看文件的详细身份证信息",
        detailExplain: "就像你去派出所查一个人的详细户籍信息——不只是名字，还包括出生日期（创建时间）、最近什么时候来过（访问时间）、最后一次修改是什么时候、文件有多大、占用了多少磁盘块等等。比 ls -l 给的信息更全面。",
        helpOutput: `Usage: stat [OPTION]... FILE...
Display file or file system status.

Mandatory arguments to long options are mandatory for short options too.
  -L, --dereference     follow links
  -f, --file-system     display file system status instead of file status
      --cached=MODE     specify how to use cached attributes;
                          useful on remote file systems. See MODE below
  -c  --format=FORMAT   use the specified FORMAT instead of the default;
                          output a newline after each use of FORMAT
      --printf=FORMAT   like --format, but interpret backslash escapes,
                          and do not output a mandatory trailing newline;
                          if you want a newline, include \\n in FORMAT
  -t, --terse           print the information in terse form
      --help        display this help and exit
      --version     output version information and exit

The MODE argument of --cached can be: always, never, or default.
'always' will use cached attributes if available, while
'never' will try to synchronize with the latest attributes, and
'default' will leave it up to the underlying file system.

The valid format sequences for files (without --file-system):

  %a   permission bits in octal (note '#' and '0' printf flags)
  %A   permission bits and file type in human readable form
  %b   number of blocks allocated (see %B)
  %B   the size in bytes of each block reported by %b
  %C   SELinux security context string
  %d   device number in decimal (st_dev)
  %D   device number in hex (st_dev)
  %Hd  major device number in decimal
  %Ld  minor device number in decimal
  %f   raw mode in hex
  %F   file type
  %g   group ID of owner
  %G   group name of owner
  %h   number of hard links
  %i   inode number
  %m   mount point
  %n   file name
  %N   quoted file name with dereference if symbolic link
  %o   optimal I/O transfer size hint
  %s   total size, in bytes
  %r   device type in decimal (st_rdev)
  %R   device type in hex (st_rdev)
  %Hr  major device type in decimal, for character/block device special files
  %Lr  minor device type in decimal, for character/block device special files
  %t   major device type in hex, for character/block device special files
  %T   minor device type in hex, for character/block device special files
  %u   user ID of owner
  %U   user name of owner
  %w   time of file birth, human-readable; - if unknown
  %W   time of file birth, seconds since Epoch; 0 if unknown
  %x   time of last access, human-readable
  %X   time of last access, seconds since Epoch
  %y   time of last data modification, human-readable
  %Y   time of last data modification, seconds since Epoch
  %z   time of last status change, human-readable
  %Z   time of last status change, seconds since Epoch

Valid format sequences for file systems:

  %a   free blocks available to non-superuser
  %b   total data blocks in file system
  %c   total file nodes in file system
  %d   free file nodes in file system
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
        simpleExplain: "识别文件的真实类型，就像验钞机识别钞票真伪",
        detailExplain: "就像一个经验丰富的鉴定专家，不用看文件扩展名，而是通过分析文件内部的「指纹」（魔术数字/头部字节）来判断它到底是什么类型的文件。有时候文件名叫 photo.jpg 但其实是可执行程序，file 一眼就能识破。",
        helpOutput: `Usage: file [OPTION...] [FILE...]
Determine type of FILEs.

      --help                 display this help and exit
  -v, --version              output version information and exit
  -m, --magic-file LIST      use LIST as a colon-separated list of magic
                               number files
  -z, --uncompress           try to look inside compressed files
  -Z, --uncompress-noreport  only print the contents of compressed files
  -b, --brief                do not prepend filenames to output lines
  -c, --checking-printout    print the parsed form of the magic file, use in
                               conjunction with -m to debug a new magic file
                               before installing it
  -e, --exclude TEST         exclude TEST from the list of test to be
                               performed for file. Valid tests are:
                               apptype, ascii, cdf, compress, csv, elf,
                               encoding, soft, tar, json, simh,
                               text, tokens
      --exclude-quiet TEST   like exclude, but ignore unknown tests
  -f, --files-from FILE      read the filenames to be examined from FILE
  -F, --separator STRING     use string as separator instead of \`:'
  -i, --mime                 output MIME type strings (--mime-type and
                               --mime-encoding)
      --apple                output the Apple CREATOR/TYPE
      --extension            output a slash-separated list of extensions
      --mime-type            output the MIME type
      --mime-encoding        output the MIME encoding
  -k, --keep-going           don't stop at the first match
  -l, --list                 list magic strength
  -L, --dereference          follow symlinks (default if POSIXLY_CORRECT is set)
  -h, --no-dereference       don't follow symlinks (default if POSIXLY_CORRECT is not set) (default)
  -n, --no-buffer            do not buffer output
  -N, --no-pad               do not pad output
  -0, --print0               terminate filenames with ASCII NUL
  -p, --preserve-date        preserve access times on files
  -P, --parameter            set file engine parameter limits
                                   bytes 7340032 max bytes to look inside file
                               elf_notes     256 max ELF notes processed
                               elf_phnum    2048 max ELF prog sections processed
                               elf_shnum   32768 max ELF sections processed
                               elf_shsize 134217728 max ELF section size
                                encoding   65536 max bytes to scan for encoding
                                   indir      50 recursion limit for indirection
                                    name      50 use limit for name/use magic
                                   regex    8192 length limit for REGEX searches
  -r, --raw                  don't translate unprintable chars to \\ooo
  -s, --special-files        treat special (block/char devic`,
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
        simpleExplain: "批量给文件改名，就像流水线上统一更换产品标签",
        detailExplain: "就像工厂流水线上的工人，按照统一的规则给一批产品换标签——比如把所有的 .htm 后缀改成 .html，或者在所有文件名前面加上日期前缀。一条命令搞定几十个文件的改名，效率极高。",
        helpOutput: `Usage: rename [ -h|-m|-V ] [ -v|-n ] [ -f ] [ -e|-E perlexpr]*|perlexpr  [ files ]

Options:
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
        simpleExplain: "快速查找文件位置，就像查字典索引而不是逐页翻",
        detailExplain: "就像你查字典时先看索引页而不是从头翻到尾。locate 维护了一份所有文件的索引数据库，搜起来飞快，秒出结果。缺点是数据库不是实时的，刚创建的文件可能搜不到，需要先 updatedb 更新一下索引。",
        helpOutput: `Usage: locate [OPTION]... [PATTERN]...
Search for entries in a mlocate database.

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
        simpleExplain: "找出命令程序的安装位置，就像查某个工具放在哪个工具箱里",
        detailExplain: "就像你问同事「那个锤子放在哪？」，他告诉你「在三号工具箱」。which 告诉你当你输入一个命令时，系统到底是从哪个路径找到这个可执行程序的。这对排查「为什么我的命令找不到」这类问题特别有用。",
        helpOutput: `Usage: /usr/bin/which [-as] args
`,
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
        simpleExplain: "查找命令相关的所有文件（程序、手册、源码）",
        detailExplain: "就像 which 的升级版——不但告诉你程序本体在哪，还顺便告诉你它的使用说明书（man 手册页）在哪、源代码在哪。相当于一次查询就把跟这个命令有关的所有线索都找到了。",
        helpOutput: `
Usage:
 whereis [options] [-BMS <dir>... -f] <name>

Locate the binary, source, and manual-page files for a command.

Options:
 -b         search only for binaries
 -B <dirs>  define binaries lookup path
 -m         search only for manuals and infos
 -M <dirs>  define man and info lookup path
 -s         search only for sources
 -S <dirs>  define sources lookup path
 -f         terminate <dirs> argument list
 -u         search for unusual entries
 -g         interpret name as glob (pathnames pattern)
 -l         output effective lookup paths

 -h, --help     display this help
 -V, --version  display version

For more details see whereis(1).
`,
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
        detailExplain: "就像从完整地址中只取出门牌号一样——给你一个长长的路径，basename 只把最后那个文件名挑出来给你，还能顺便去掉后缀。",
        helpOutput: `Usage: basename NAME [SUFFIX]
  or:  basename OPTION... NAME...
Print NAME with any leading directory components removed.
If specified, also remove a trailing SUFFIX.

Mandatory arguments to long options are mandatory for short options too.
  -a, --multiple       support multiple arguments and treat each as a NAME
  -s, --suffix=SUFFIX  remove a trailing SUFFIX; implies -a
  -z, --zero           end each output line with NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

Examples:
  basename /usr/bin/sort          -> "sort"
  basename include/stdio.h .h     -> "stdio"
  basename -s .h include/stdio.h  -> "stdio"
  basename -a any/str1 any/str2   -> "str1" followed by "str2"

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/basename>
or available locally via: info '(coreutils) basename invocation'
`,
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
        detailExplain: "就像从完整地址中只取出街道名——给你一个完整的文件路径，dirname 把文件名去掉，只留下它所在的目录路径。",
        helpOutput: `Usage: dirname [OPTION] NAME...
Output each NAME with its last non-slash component and trailing slashes
removed; if NAME contains no /'s, output '.' (meaning the current directory).

  -z, --zero     end each output line with NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

Examples:
  dirname /usr/bin/          -> "/usr"
  dirname dir1/str dir2/str  -> "dir1" followed by "dir2"
  dirname stdio.h            -> "."

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/dirname>
or available locally via: info '(coreutils) dirname invocation'
`,
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
        detailExplain: "就像GPS定位到你的真实位置，不管你怎么绕路——即使路径中包含符号链接或 .. 这样的相对引用，realpath 也会帮你解析出最终的绝对路径。",
        helpOutput: `Usage: realpath [OPTION]... FILE...
Print the resolved absolute file name;
all but the last component must exist

  -e, --canonicalize-existing  all components of the path must exist
  -m, --canonicalize-missing   no path components need exist or be a directory
  -L, --logical                resolve '..' components before symlinks
  -P, --physical               resolve symlinks as encountered (default)
  -q, --quiet                  suppress most error messages
      --relative-to=DIR        print the resolved path relative to DIR
      --relative-base=DIR      print absolute paths unless paths below DIR
  -s, --strip, --no-symlinks   don't expand symlinks
  -z, --zero                   end each output line with NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/realpath>
or available locally via: info '(coreutils) realpath invocation'
`,
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
        detailExplain: "就像追踪快递的最终目的地——符号链接就像一个转发地址，readlink 帮你看到它到底指向哪里，而不是停留在转发点。",
        helpOutput: `Usage: readlink [OPTION]... FILE...
Print value of a symbolic link or canonical file name

  -f, --canonicalize            canonicalize by following every symlink in
                                every component of the given name recursively;
                                all but the last component must exist
  -e, --canonicalize-existing   canonicalize by following every symlink in
                                every component of the given name recursively,
                                all components must exist
  -m, --canonicalize-missing    canonicalize by following every symlink in
                                every component of the given name recursively,
                                without requirements on components existence
  -n, --no-newline              do not output the trailing delimiter
  -q, --quiet
  -s, --silent                  suppress most error messages (on by default)
  -v, --verbose                 report error messages
  -z, --zero                    end each output line with NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/readlink>
or available locally via: info '(coreutils) readlink invocation'
`,
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
        detailExplain: "就像搬家时不仅搬东西还顺便换了门锁——install 不仅能复制文件，还能同时设置文件权限、所有者等属性，一步到位。",
        helpOutput: `Usage: install [OPTION]... [-T] SOURCE DEST
  or:  install [OPTION]... SOURCE... DIRECTORY
  or:  install [OPTION]... -t DIRECTORY SOURCE...
  or:  install [OPTION]... -d DIRECTORY...

This install program copies files (often just compiled) into destination
locations you choose.  If you want to download and install a ready-to-use
package on a GNU/Linux system, you should instead be using a package manager
like yum(1) or apt-get(1).

In the first three forms, copy SOURCE to DEST or multiple SOURCE(s) to
the existing DIRECTORY, while setting permission modes and owner/group.
In the 4th form, create all components of the given DIRECTORY(ies).

Mandatory arguments to long options are mandatory for short options too.
      --backup[=CONTROL]  make a backup of each existing destination file
  -b                  like --backup but does not accept an argument
  -c                  (ignored)
  -C, --compare       compare content of source and destination files, and
                        if no change to content, ownership, and permissions,
                        do not modify the destination at all
  -d, --directory     treat all arguments as directory names; create all
                        components of the specified directories
  -D                  create all leading components of DEST except the last,
                        or all components of --target-directory,
                        then copy SOURCE to DEST
      --debug         explain how a file is copied.  Implies -v
  -g, --group=GROUP   set group ownership, instead of process' current group
  -m, --mode=MODE     set permission mode (as in chmod), instead of rwxr-xr-x
  -o, --owner=OWNER   set ownership (super-user only)
  -p, --preserve-timestamps   apply access/modification times of SOURCE files
                        to corresponding destination files
  -s, --strip         strip symbol tables
      --strip-program=PROGRAM  program used to strip binaries
  -S, --suffix=SUFFIX  override the usual backup suffix
  -t, --target-directory=DIRECTORY  copy all SOURCE arguments into DIRECTORY
  -T, --no-target-directory  treat DEST as a normal file
  -v, --verbose       print the name of each created file or directory
      --preserve-context  preserve SELinux security context
  -Z                      set SELinux security context of destination
                            file and each created directory to default type
      --context[=CTX]     like -Z, or if CTX is specified then set the
                            SELinux or SMACK security context to CTX
      --help        display this help and exit
      --version     output version information and exit

The backup suffix is '~', unless set with --suffix or SIMPLE_BACKUP_SUFFIX.
The version control method may be selected via the --backup option or through
the VERSION_CONTROL environment variable.  Here are the values:

  none, off       never make backups (even if --backup is given)
  numbered, t     make numbered backups
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
        detailExplain: "就像用碎纸机把文件碎成粉末——普通的 rm 删除只是把目录标记删了，数据还在磁盘上；shred 会反复覆写文件内容，让数据恢复工具也无力回天。",
        helpOutput: `Usage: shred [OPTION]... FILE...
Overwrite the specified FILE(s) repeatedly, in order to make it harder
for even very expensive hardware probing to recover the data.

If FILE is -, shred standard output.

Mandatory arguments to long options are mandatory for short options too.
  -f, --force    change permissions to allow writing if necessary
  -n, --iterations=N  overwrite N times instead of the default (3)
      --random-source=FILE  get random bytes from FILE
  -s, --size=N   shred this many bytes (suffixes like K, M, G accepted)
  -u             deallocate and remove file after overwriting
      --remove[=HOW]  like -u but give control on HOW to delete;  See below
  -v, --verbose  show progress
  -x, --exact    do not round file sizes up to the next full block;
                   this is the default for non-regular files
  -z, --zero     add a final overwrite with zeros to hide shredding
      --help        display this help and exit
      --version     output version information and exit

Delete FILE(s) if --remove (-u) is specified.  The default is not to remove
the files because it is common to operate on device files like /dev/hda,
and those files usually should not be removed.
The optional HOW parameter indicates how to remove a directory entry:
'unlink' => use a standard unlink call.
'wipe' => also first obfuscate bytes in the name.
'wipesync' => also sync each obfuscated byte to the device.
The default mode is 'wipesync', but note it can be expensive.

CAUTION: shred assumes the file system and hardware overwrite data in place.
Although this is common, many platforms operate otherwise.  Also, backups
and mirrors may contain unremovable copies that will let a shredded file
be recovered later.  See the GNU coreutils manual for details.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/shred>
or available locally via: info '(coreutils) shred invocation'
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
        detailExplain: "就像在一个平行世界里工作——chroot 把指定的目录当作根目录 /，程序在这个新世界里运行，看不到外面的真实文件系统。常用于系统修复、测试环境搭建等场景。",
        helpOutput: `Usage: chroot [OPTION] NEWROOT [COMMAND [ARG]...]
  or:  chroot OPTION
Run COMMAND with root directory set to NEWROOT.

      --groups=G_LIST        specify supplementary groups as g1,g2,..,gN
      --userspec=USER:GROUP  specify user and group (ID or name) to use
      --skip-chdir           do not change working directory to '/'
      --help        display this help and exit
      --version     output version information and exit

If no command is given, run '"$SHELL" -i' (default: '/bin/sh -i').

Exit status:
  125  if the chroot command itself fails
  126  if COMMAND is found but cannot be invoked
  127  if COMMAND cannot be found
  -    the exit status of COMMAND otherwise

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/chroot>
or available locally via: info '(coreutils) chroot invocation'
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
        detailExplain: "就像在迷宫里留下面包屑标记来时的路——pushd 不仅切换到新目录，还会把当前目录记住，方便你之后用 popd 原路返回。",
        helpOutput: `pushd: pushd [-n] [+N | -N | dir]
    Add directories to stack.
    
    Adds a directory to the top of the directory stack, or rotates
    the stack, making the new top of the stack the current working
    directory.  With no arguments, exchanges the top two directories.
    
    Options:
      -n	Suppresses the normal change of directory when adding
    		directories to the stack, so only the stack is manipulated.
    
    Arguments:
      +N	Rotates the stack so that the Nth directory (counting
    		from the left of the list shown by \`dirs', starting with
    		zero) is at the top.
    
      -N	Rotates the stack so that the Nth directory (counting
    		from the right of the list shown by \`dirs', starting with
    		zero) is at the top.
    
      dir	Adds DIR to the directory stack at the top, making it the
    		new current working directory.
    
    The \`dirs' builtin displays the directory stack.
    
    Exit Status:
    Returns success unless an invalid argument is supplied or the directory
    change fails.
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
        detailExplain: "就像沿着面包屑回到迷宫的起点——popd 会从目录栈中取出上次 pushd 保存的目录，让你轻松回到之前的工作位置。",
        helpOutput: `popd: popd [-n] [+N | -N]
    Remove directories from stack.
    
    Removes entries from the directory stack.  With no arguments, removes
    the top directory from the stack, and changes to the new top directory.
    
    Options:
      -n	Suppresses the normal change of directory when removing
    		directories from the stack, so only the stack is manipulated.
    
    Arguments:
      +N	Removes the Nth entry counting from the left of the list
    		shown by \`dirs', starting with zero.  For example: \`popd +0'
    		removes the first directory, \`popd +1' the second.
    
      -N	Removes the Nth entry counting from the right of the list
    		shown by \`dirs', starting with zero.  For example: \`popd -0'
    		removes the last directory, \`popd -1' the next to last.
    
    The \`dirs' builtin displays the directory stack.
    
    Exit Status:
    Returns success unless an invalid argument is supplied or the directory
    change fails.
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
        detailExplain: "就像查看你在迷宫里留下的所有面包屑标记——dirs 会列出所有用 pushd 保存过的目录，让你清楚自己可以在哪些目录之间快速跳转。",
        helpOutput: `dirs: dirs [-clpv] [+N] [-N]
    Display directory stack.
    
    Display the list of currently remembered directories.  Directories
    find their way onto the list with the \`pushd' command; you can get
    back up through the list with the \`popd' command.
    
    Options:
      -c	clear the directory stack by deleting all of the elements
      -l	do not print tilde-prefixed versions of directories relative
    		to your home directory
      -p	print the directory stack with one entry per line
      -v	print the directory stack with one entry per line prefixed
    		with its position in the stack
    
    Arguments:
      +N	Displays the Nth entry counting from the left of the list
    		shown by dirs when invoked without options, starting with
    		zero.
    
      -N	Displays the Nth entry counting from the right of the list
    		shown by dirs when invoked without options, starting with
    		zero.
    
    Exit Status:
    Returns success unless an invalid option is supplied or an error occurs.
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
        detailExplain: "就像给文件拍一个指纹来验证身份——md5sum 会根据文件内容生成一串唯一的字符，只要文件内容有一丁点变化，这串字符就会完全不同。常用来验证文件下载是否完整。",
        helpOutput: `Usage: md5sum [OPTION]... [FILE]...
Print or check MD5 (128-bit) checksums.

With no FILE, or when FILE is -, read standard input.
  -b, --binary          read in binary mode
  -c, --check           read checksums from the FILEs and check them
      --tag             create a BSD-style checksum
  -t, --text            read in text mode (default)
  -z, --zero            end each output line with NUL, not newline,
                          and disable file name escaping

The following five options are useful only when verifying checksums:
      --ignore-missing  don't fail or report status for missing files
      --quiet           don't print OK for each successfully verified file
      --status          don't output anything, status code shows success
      --strict          exit non-zero for improperly formatted checksum lines
  -w, --warn            warn about improperly formatted checksum lines

      --help        display this help and exit
      --version     output version information and exit

The sums are computed as described in RFC 1321.
When checking, the input should be a former output of this program.
The default mode is to print a line with: checksum, a space,
a character indicating input mode ('*' for binary, ' ' for text
or where binary is insignificant), and name for each FILE.

Note: There is no difference between binary mode and text mode on GNU systems.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/md5sum>
or available locally via: info '(coreutils) md5sum invocation'
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
        detailExplain: "就像给文件做DNA鉴定，比MD5更精确——SHA256 生成的校验和更长更安全，几乎不可能出现两个不同文件产生相同校验和的情况，是当前最推荐的文件校验方式。",
        helpOutput: `Usage: sha256sum [OPTION]... [FILE]...
Print or check SHA256 (256-bit) checksums.

With no FILE, or when FILE is -, read standard input.
  -b, --binary          read in binary mode
  -c, --check           read checksums from the FILEs and check them
      --tag             create a BSD-style checksum
  -t, --text            read in text mode (default)
  -z, --zero            end each output line with NUL, not newline,
                          and disable file name escaping

The following five options are useful only when verifying checksums:
      --ignore-missing  don't fail or report status for missing files
      --quiet           don't print OK for each successfully verified file
      --status          don't output anything, status code shows success
      --strict          exit non-zero for improperly formatted checksum lines
  -w, --warn            warn about improperly formatted checksum lines

      --help        display this help and exit
      --version     output version information and exit

The sums are computed as described in FIPS-180-2.
When checking, the input should be a former output of this program.
The default mode is to print a line with: checksum, a space,
a character indicating input mode ('*' for binary, ' ' for text
or where binary is insignificant), and name for each FILE.

Note: There is no difference between binary mode and text mode on GNU systems.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/sha256sum>
or available locally via: info '(coreutils) sha2 utilities'
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
        detailExplain: "就像流水线工人把传送带上的零件一个个递给下一道工序——xargs 把前一个命令的输出变成后一个命令的参数，让两个命令能够无缝协作。",
        helpOutput: `Usage: xargs [OPTION]... COMMAND [INITIAL-ARGS]...
Run COMMAND with arguments INITIAL-ARGS and more arguments read from input.

Mandatory and optional arguments to long options are also
mandatory or optional for the corresponding short option.
  -0, --null                   items are separated by a null, not whitespace;
                                 disables quote and backslash processing and
                                 logical EOF processing
  -a, --arg-file=FILE          read arguments from FILE, not standard input
  -d, --delimiter=CHARACTER    items in input stream are separated by CHARACTER,
                                 not by whitespace; disables quote and backslash
                                 processing and logical EOF processing
  -E END                       set logical EOF string; if END occurs as a line
                                 of input, the rest of the input is ignored
                                 (ignored if -0 or -d was specified)
  -e, --eof[=END]              equivalent to -E END if END is specified;
                                 otherwise, there is no end-of-file string
  -I R                         same as --replace=R
  -i, --replace[=R]            replace R in INITIAL-ARGS with names read
                                 from standard input, split at newlines;
                                 if R is unspecified, assume {}
  -L, --max-lines=MAX-LINES    use at most MAX-LINES non-blank input lines per
                                 command line
  -l[MAX-LINES]                similar to -L but defaults to at most one non-
                                 blank input line if MAX-LINES is not specified
  -n, --max-args=MAX-ARGS      use at most MAX-ARGS arguments per command line
  -o, --open-tty               Reopen stdin as /dev/tty in the child process
                                 before executing the command; useful to run an
                                 interactive application.
  -P, --max-procs=MAX-PROCS    run at most MAX-PROCS processes at a time
  -p, --interactive            prompt before running commands
      --process-slot-var=VAR   set environment variable VAR in child processes
  -r, --no-run-if-empty        if there are no arguments, then do not run COMMAND;
                                 if this option is not given, COMMAND will be
                                 run at least once
  -s, --max-chars=MAX-CHARS    limit length of command line to MAX-CHARS
      --show-limits            show limits on command-line length
  -t, --verbose                print commands before executing them
  -x, --exit                   exit if the size (see -s) is exceeded
      --help                   display this help and exit
      --version                output version information and exit

Please see also the documentation at https://www.gnu.org/software/findutils/.
You can report (and track progress on fixing) bugs in the "xargs"
program via the GNU findutils bug-reporting page at
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
        simpleExplain: "查看文件全部内容，就像一口气读完一本小册子",
        detailExplain: "就像你拿起一本薄薄的笔记本，一页一页从头看到尾，把所有内容都显示在屏幕上。适合查看小型文件的内容，如果文件很大，屏幕上内容会飞速滚动根本看不清——这时候就该用 less 或 more 了。",
        helpOutput: `Usage: cat [OPTION]... [FILE]...
Concatenate FILE(s) to standard output.

With no FILE, or when FILE is -, read standard input.

  -A, --show-all           equivalent to -vET
  -b, --number-nonblank    number nonempty output lines, overrides -n
  -e                       equivalent to -vE
  -E, --show-ends          display $ at end of each line
  -n, --number             number all output lines
  -s, --squeeze-blank      suppress repeated empty output lines
  -t                       equivalent to -vT
  -T, --show-tabs          display TAB characters as ^I
  -u                       (ignored)
  -v, --show-nonprinting   use ^ and M- notation, except for LFD and TAB
      --help        display this help and exit
      --version     output version information and exit

Examples:
  cat f - g  Output f's contents, then standard input, then g's contents.
  cat        Copy standard input to standard output.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/cat>
or available locally via: info '(coreutils) cat invocation'
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
        simpleExplain: "在文本中搜索关键词，就像用荧光笔在书中标记所有关键词出现的地方",
        detailExplain: "就像你拿着一本书和一个荧光笔，把书中所有包含「错误」这个词的行都标记高亮出来。grep 是 Linux 中最常用的文本搜索工具，支持正则表达式，能在海量日志中瞬间定位到你想要的那一行。",
        helpOutput: `Usage: grep [OPTION]... PATTERNS [FILE]...
Search for PATTERNS in each FILE.
Example: grep -i 'hello world' menu.h main.c
PATTERNS can contain multiple patterns separated by newlines.

Pattern selection and interpretation:
  -E, --extended-regexp     PATTERNS are extended regular expressions
  -F, --fixed-strings       PATTERNS are strings
  -G, --basic-regexp        PATTERNS are basic regular expressions
  -P, --perl-regexp         PATTERNS are Perl regular expressions
  -e, --regexp=PATTERNS     use PATTERNS for matching
  -f, --file=FILE           take PATTERNS from FILE
  -i, --ignore-case         ignore case distinctions in patterns and data
      --no-ignore-case      do not ignore case distinctions (default)
  -w, --word-regexp         match only whole words
  -x, --line-regexp         match only whole lines
  -z, --null-data           a data line ends in 0 byte, not newline

Miscellaneous:
  -s, --no-messages         suppress error messages
  -v, --invert-match        select non-matching lines
  -V, --version             display version information and exit
      --help                display this help text and exit

Output control:
  -m, --max-count=NUM       stop after NUM selected lines
  -b, --byte-offset         print the byte offset with output lines
  -n, --line-number         print line number with output lines
      --line-buffered       flush output on every line
  -H, --with-filename       print file name with output lines
  -h, --no-filename         suppress the file name prefix on output
      --label=LABEL         use LABEL as the standard input file name prefix
  -o, --only-matching       show only nonempty parts of lines that match
  -q, --quiet, --silent     suppress all normal output
      --binary-files=TYPE   assume that binary files are TYPE;
                            TYPE is 'binary', 'text', or 'without-match'
  -a, --text                equivalent to --binary-files=text
  -I                        equivalent to --binary-files=without-match
  -d, --directories=ACTION  how to handle directories;
                            ACTION is 'read', 'recurse', or 'skip'
  -D, --devices=ACTION      how to handle devices, FIFOs and sockets;
                            ACTION is 'read' or 'skip'
  -r, --recursive           like --directories=recurse
  -R, --dereference-recursive  likewise, but follow all symlinks
      --include=GLOB        search only files that match GLOB (a file pattern)
      --exclude=GLOB        skip files that match GLOB
      --exclude-from=FILE   skip files that match any file pattern from FILE
      --exclude-dir=GLOB    skip directories that match GLOB
  -L, --files-without-match  print only names of FILEs with no selected lines
  -l, --files-with-matches  print only names of FILEs with selected lines
  -c, --count               print only a count of selected lines per FILE
  -T, --initial-tab         make tabs line up (if needed)
  -Z, --null                print 0 byte after FILE name

Context con`,
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
        simpleExplain: "流编辑器，就像文字处理的流水线自动替换机器",
        detailExplain: "就像一台自动化文字处理流水线——文件内容像水流一样经过 sed 这台机器，机器按你的指令对每一行进行替换、删除、插入等操作，然后输出处理后的结果。最常用的功能就是批量替换文本中的字符串。",
        helpOutput: `Usage: sed [OPTION]... {script-only-if-no-other-script} [input-file]...

  -n, --quiet, --silent
                 suppress automatic printing of pattern space
      --debug
                 annotate program execution
  -e script, --expression=script
                 add the script to the commands to be executed
  -f script-file, --file=script-file
                 add the contents of script-file to the commands to be executed
  --follow-symlinks
                 follow symlinks when processing in place
  -i[SUFFIX], --in-place[=SUFFIX]
                 edit files in place (makes backup if SUFFIX supplied)
  -l N, --line-length=N
                 specify the desired line-wrap length for the \`l' command
  --posix
                 disable all GNU extensions.
  -E, -r, --regexp-extended
                 use extended regular expressions in the script
                 (for portability use POSIX -E).
  -s, --separate
                 consider files as separate rather than as a single,
                 continuous long stream.
      --sandbox
                 operate in sandbox mode (disable e/r/w commands).
  -u, --unbuffered
                 load minimal amounts of data from the input files and flush
                 the output buffers more often
  -z, --null-data
                 separate lines by NUL characters
      --help     display this help and exit
      --version  output version information and exit

If no -e, --expression, -f, or --file option is given, then the first
non-option argument is taken as the sed script to interpret.  All
remaining arguments are names of input files; if no input files are
specified, then the standard input is read.

GNU sed home page: <https://www.gnu.org/software/sed/>.
General help using GNU software: <https://www.gnu.org/gethelp/>.
E-mail bug reports to: <bug-sed@gnu.org>.
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
        simpleExplain: "强大的文本数据处理工具，就像 Excel 的命令行版本",
        detailExplain: "就像 Excel 的命令行版——可以把文本按列拆分、筛选、计算、格式化输出。比如有一张逗号分隔的成绩表，awk 可以轻松算出平均分、过滤不及格的学生、按成绩排序输出。它是文本处理的瑞士军刀。",
        helpOutput: `Usage: awk [POSIX or GNU style options] -f progfile [--] file ...
Usage: awk [POSIX or GNU style options] [--] 'program' file ...
POSIX options:		GNU long options: (standard)
	-f progfile		--file=progfile
	-F fs			--field-separator=fs
	-v var=val		--assign=var=val
Short options:		GNU long options: (extensions)
	-b			--characters-as-bytes
	-c			--traditional
	-C			--copyright
	-d[file]		--dump-variables[=file]
	-D[file]		--debug[=file]
	-e 'program-text'	--source='program-text'
	-E file			--exec=file
	-g			--gen-pot
	-h			--help
	-i includefile		--include=includefile
	-I			--trace
	-l library		--load=library
	-L[fatal|invalid|no-ext]	--lint[=fatal|invalid|no-ext]
	-M			--bignum
	-N			--use-lc-numeric
	-n			--non-decimal-data
	-o[file]		--pretty-print[=file]
	-O			--optimize
	-p[file]		--profile[=file]
	-P			--posix
	-r			--re-interval
	-s			--no-optimize
	-S			--sandbox
	-t			--lint-old
	-V			--version

To report bugs, use the \`gawkbug' program.
For full instructions, see the node \`Bugs' in \`gawk.info'
which is section \`Reporting Problems and Bugs' in the
printed version.  This same information may be found at
https://www.gnu.org/software/gawk/manual/html_node/Bugs.html.
PLEASE do NOT try to report bugs by posting in comp.lang.awk,
or by using a web forum such as Stack Overflow.

gawk is a pattern scanning and processing language.
By default it reads standard input and writes standard output.

Examples:
	awk '{ sum += $1 }; END { print sum }' file
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
        simpleExplain: "查看文件开头几行，就像看书先看前言部分",
        detailExplain: "就像你拿到一本新书，先翻开前几页看看大概讲什么内容。head 默认显示文件的前 10 行，也可以指定显示多少行。当你面对一个巨大的日志文件时，head 可以让你快速了解文件的格式和开头内容。",
        helpOutput: `Usage: head [OPTION]... [FILE]...
Print the first 10 lines of each FILE to standard output.
With more than one FILE, precede each with a header giving the file name.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -c, --bytes=[-]NUM       print the first NUM bytes of each file;
                             with the leading '-', print all but the last
                             NUM bytes of each file
  -n, --lines=[-]NUM       print the first NUM lines instead of the first 10;
                             with the leading '-', print all but the last
                             NUM lines of each file
  -q, --quiet, --silent    never print headers giving file names
  -v, --verbose            always print headers giving file names
  -z, --zero-terminated    line delimiter is NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

NUM may have a multiplier suffix:
b 512, kB 1000, K 1024, MB 1000*1000, M 1024*1024,
GB 1000*1000*1000, G 1024*1024*1024, and so on for T, P, E, Z, Y, R, Q.
Binary prefixes can be used, too: KiB=K, MiB=M, and so on.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/head>
or available locally via: info '(coreutils) head invocation'
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
        simpleExplain: "查看文件末尾几行，就像看书先看结局",
        detailExplain: "就像你追剧忍不住先看最后一集的大结局，tail 让你直接跳到文件的末尾看最后几行。最实用的场景是用 tail -f 实时跟踪日志文件——就像坐在监控室看着屏幕上不断滚动的最新消息。",
        helpOutput: `Usage: tail [OPTION]... [FILE]...
Print the last 10 lines of each FILE to standard output.
With more than one FILE, precede each with a header giving the file name.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -c, --bytes=[+]NUM       output the last NUM bytes; or use -c +NUM to
                             output starting with byte NUM of each file
  -f, --follow[={name|descriptor}]
                           output appended data as the file grows;
                             an absent option argument means 'descriptor'
  -F                       same as --follow=name --retry
  -n, --lines=[+]NUM       output the last NUM lines, instead of the last 10;
                             or use -n +NUM to skip NUM-1 lines at the start
      --max-unchanged-stats=N
                           with --follow=name, reopen a FILE which has not
                             changed size after N (default 5) iterations
                             to see if it has been unlinked or renamed
                             (this is the usual case of rotated log files);
                             with inotify, this option is rarely useful
      --pid=PID            with -f, terminate after process ID, PID dies
  -q, --quiet, --silent    never output headers giving file names
      --retry              keep trying to open a file if it is inaccessible
  -s, --sleep-interval=N   with -f, sleep for approximately N seconds
                             (default 1.0) between iterations;
                             with inotify and --pid=P, check process P at
                             least once every N seconds
  -v, --verbose            always output headers giving file names
  -z, --zero-terminated    line delimiter is NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

NUM may have a multiplier suffix:
b 512, kB 1000, K 1024, MB 1000*1000, M 1024*1024,
GB 1000*1000*1000, G 1024*1024*1024, and so on for T, P, E, Z, Y, R, Q.
Binary prefixes can be used, too: KiB=K, MiB=M, and so on.

With --follow (-f), tail defaults to following the file descriptor, which
means that even if a tail'ed file is renamed, tail will continue to track
its end.  This default behavior is not desirable when you really want to
track the actual name of the file, not the file descriptor (e.g., log
rotation).  Use --follow=name in that case.  That causes tail to track the
named file in a way that accommodates renaming, removal and creation.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/tail>
or available locally via: info '(coreutils) tail invocation'
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
        simpleExplain: "对文本行进行排序，就像把一副扑克牌按顺序理好",
        detailExplain: "就像你手里有一堆乱序的扑克牌，sort 帮你把它们按从小到大（或 A 到 Z）的顺序排得整整齐齐。可以按数字大小排序、按字母顺序排序、倒序排列，甚至按某一列来排序——就像图书管理员整理乱糟糟的书架。",
        helpOutput: `Usage: sort [OPTION]... [FILE]...
  or:  sort [OPTION]... --files0-from=F
Write sorted concatenation of all FILE(s) to standard output.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
Ordering options:

  -b, --ignore-leading-blanks  ignore leading blanks
  -d, --dictionary-order      consider only blanks and alphanumeric characters
  -f, --ignore-case           fold lower case to upper case characters
  -g, --general-numeric-sort  compare according to general numerical value
  -i, --ignore-nonprinting    consider only printable characters
  -M, --month-sort            compare (unknown) < 'JAN' < ... < 'DEC'
  -h, --human-numeric-sort    compare human readable numbers (e.g., 2K 1G)
  -n, --numeric-sort          compare according to string numerical value
  -R, --random-sort           shuffle, but group identical keys.  See shuf(1)
      --random-source=FILE    get random bytes from FILE
  -r, --reverse               reverse the result of comparisons
      --sort=WORD             sort according to WORD:
                                general-numeric -g, human-numeric -h, month -M,
                                numeric -n, random -R, version -V
  -V, --version-sort          natural sort of (version) numbers within text

Other options:

      --batch-size=NMERGE   merge at most NMERGE inputs at once;
                            for more use temp files
  -c, --check, --check=diagnose-first  check for sorted input; do not sort
  -C, --check=quiet, --check=silent  like -c, but do not report first bad line
      --compress-program=PROG  compress temporaries with PROG;
                              decompress them with PROG -d
      --debug               annotate the part of the line used to sort,
                              and warn about questionable usage to stderr
      --files0-from=F       read input from the files specified by
                            NUL-terminated names in file F;
                            If F is - then read names from standard input
  -k, --key=KEYDEF          sort via a key; KEYDEF gives location and type
  -m, --merge               merge already sorted files; do not sort
  -o, --output=FILE         write result to FILE instead of standard output
  -s, --stable              stabilize sort by disabling last-resort comparison
  -S, --buffer-size=SIZE    use SIZE for main memory buffer
  -t, --field-separator=SEP  use SEP instead of non-blank to blank transition
  -T, --temporary-directory=DIR  use DIR for temporaries, not $TMPDIR or /tmp;
                              multiple options specify multiple directories
      --parallel=N          change the number of sorts run concurrently to N
  -u, --unique              with -c, check for strict ordering;
                              without -c, output only the first of an equal run
  -z, --zero-terminated     line delimiter is NUL, not newline
      --help        display this help and exit
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
        simpleExplain: "去除重复的相邻行，就像把连在一起的相同答案合并成一条",
        detailExplain: "就像你在批改试卷时发现好几个同学连续写了完全相同的答案，uniq 把这些重复的答案合并成一条只保留一个。注意：它只会去掉相邻的重复行，所以通常配合 sort 先排序再去重才能去掉所有重复。",
        helpOutput: `Usage: uniq [OPTION]... [INPUT [OUTPUT]]
Filter adjacent matching lines from INPUT (or standard input),
writing to OUTPUT (or standard output).

With no options, matching lines are merged to the first occurrence.

Mandatory arguments to long options are mandatory for short options too.
  -c, --count           prefix lines by the number of occurrences
  -d, --repeated        only print duplicate lines, one for each group
  -D                    print all duplicate lines
      --all-repeated[=METHOD]  like -D, but allow separating groups
                                 with an empty line;
                                 METHOD={none(default),prepend,separate}
  -f, --skip-fields=N   avoid comparing the first N fields
      --group[=METHOD]  show all items, separating groups with an empty line;
                          METHOD={separate(default),prepend,append,both}
  -i, --ignore-case     ignore differences in case when comparing
  -s, --skip-chars=N    avoid comparing the first N characters
  -u, --unique          only print unique lines
  -z, --zero-terminated     line delimiter is NUL, not newline
  -w, --check-chars=N   compare no more than N characters in lines
      --help        display this help and exit
      --version     output version information and exit

A field is a run of blanks (usually spaces and/or TABs), then non-blank
characters.  Fields are skipped before chars.

Note: 'uniq' does not detect repeated lines unless they are adjacent.
You may want to sort the input first, or use 'sort -u' without 'uniq'.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/uniq>
or available locally via: info '(coreutils) uniq invocation'
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
        simpleExplain: "统计文件的字数、行数、字符数，就像作文老师统计作文字数",
        detailExplain: "就像语文老师批改作文时要数一数这篇文章有多少行、多少个字、多少个字符。wc 能同时告诉你这三个统计数据，对于快速了解一个大文件的基本情况非常有用——比如「这个日志文件居然有 10 万行！」",
        helpOutput: `Usage: wc [OPTION]... [FILE]...
  or:  wc [OPTION]... --files0-from=F
Print newline, word, and byte counts for each FILE, and a total line if
more than one FILE is specified.  A word is a non-zero-length sequence of
printable characters delimited by white space.

With no FILE, or when FILE is -, read standard input.

The options below may be used to select which counts are printed, always in
the following order: newline, word, character, byte, maximum line length.
  -c, --bytes            print the byte counts
  -m, --chars            print the character counts
  -l, --lines            print the newline counts
      --files0-from=F    read input from the files specified by
                           NUL-terminated names in file F;
                           If F is - then read names from standard input
  -L, --max-line-length  print the maximum display width
  -w, --words            print the word counts
      --total=WHEN       when to print a line with total counts;
                           WHEN can be: auto, always, only, never
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/wc>
or available locally via: info '(coreutils) wc invocation'
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
        simpleExplain: "按列切割文本，就像切蛋糕一样只取想要的切片",
        detailExplain: "就像一块长条蛋糕，上面有不同的配料，你只想吃其中几种——cut 帮你精确地「切开」你想要的那些列。比如 CSV 文件中每行有很多字段，但你只需要第 1 列和第 3 列，cut 一刀下去就给你提取出来了。",
        helpOutput: `Usage: cut OPTION... [FILE]...
Print selected parts of lines from each FILE to standard output.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -b, --bytes=LIST        select only these bytes
  -c, --characters=LIST   select only these characters
  -d, --delimiter=DELIM   use DELIM instead of TAB for field delimiter
  -f, --fields=LIST       select only these fields;  also print any line
                            that contains no delimiter character, unless
                            the -s option is specified
  -n                      (ignored)
      --complement        complement the set of selected bytes, characters
                            or fields
  -s, --only-delimited    do not print lines not containing delimiters
      --output-delimiter=STRING  use STRING as the output delimiter
                            the default is to use the input delimiter
  -z, --zero-terminated   line delimiter is NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

Use one, and only one of -b, -c or -f.  Each LIST is made up of one
range, or many ranges separated by commas.  Selected input is written
in the same order that it is read, and is written exactly once.
Each range is one of:

  N     N'th byte, character or field, counted from 1
  N-    from N'th byte, character or field, to end of line
  N-M   from N'th to M'th (included) byte, character or field
  -M    from first to M'th (included) byte, character or field

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/cut>
or available locally via: info '(coreutils) cut invocation'
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
        simpleExplain: "字符替换和删除工具，就像打字员把文中的某些字母统一换成别的",
        detailExplain: "就像一个专职的文字校对员，按照你的要求把文章中的某些字符批量替换成别的字符——比如把所有小写字母变大写、把空格换成制表符、或者干脆把某些字符全部删掉。它是一个纯粹的字符转换器。",
        helpOutput: `Usage: tr [OPTION]... STRING1 [STRING2]
Translate, squeeze, and/or delete characters from standard input,
writing to standard output.  STRING1 and STRING2 specify arrays of
characters ARRAY1 and ARRAY2 that control the action.

  -c, -C, --complement    use the complement of ARRAY1
  -d, --delete            delete characters in ARRAY1, do not translate
  -s, --squeeze-repeats   replace each sequence of a repeated character
                            that is listed in the last specified ARRAY,
                            with a single occurrence of that character
  -t, --truncate-set1     first truncate ARRAY1 to length of ARRAY2
      --help        display this help and exit
      --version     output version information and exit

ARRAYs are specified as strings of characters.  Most represent themselves.
Interpreted sequences are:

  \\NNN            character with octal value NNN (1 to 3 octal digits)
  \\\\              backslash
  \\a              audible BEL
  \\b              backspace
  \\f              form feed
  \\n              new line
  \\r              return
  \\t              horizontal tab
  \\v              vertical tab
  CHAR1-CHAR2     all characters from CHAR1 to CHAR2 in ascending order
  [CHAR*]         in ARRAY2, copies of CHAR until length of ARRAY1
  [CHAR*REPEAT]   REPEAT copies of CHAR, REPEAT octal if starting with 0
  [:alnum:]       all letters and digits
  [:alpha:]       all letters
  [:blank:]       all horizontal whitespace
  [:cntrl:]       all control characters
  [:digit:]       all digits
  [:graph:]       all printable characters, not including space
  [:lower:]       all lower case letters
  [:print:]       all printable characters, including space
  [:punct:]       all punctuation characters
  [:space:]       all horizontal or vertical whitespace
  [:upper:]       all upper case letters
  [:xdigit:]      all hexadecimal digits
  [=CHAR=]        all characters which are equivalent to CHAR

Translation occurs if -d is not given and both STRING1 and STRING2 appear.
-t is only significant when translating.  ARRAY2 is extended to length of
ARRAY1 by repeating its last character as necessary.  Excess characters
of ARRAY2 are ignored.  Character classes expand in unspecified order;
while translating, [:lower:] and [:upper:] may be used in pairs to
specify case conversion.  Squeezing occurs after translation or deletion.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/tr>
or available locally via: info '(coreutils) tr invocation'
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
        simpleExplain: "比较两个文件的差异，就像老师对比两份作业找出不同之处",
        detailExplain: "就像老师拿来两份作业放在一起逐行对比，用红笔圈出哪些地方不一样。diff 会精确地告诉你：哪一行被删除了、哪一行新增了、哪一行被修改了。这是程序员日常必备工具——用来查看代码改了什么地方。",
        helpOutput: `Usage: diff [OPTION]... FILES
Compare FILES line by line.

Mandatory arguments to long options are mandatory for short options too.
      --normal                  output a normal diff (the default)
  -q, --brief                   report only when files differ
  -s, --report-identical-files  report when two files are the same
  -c, -C NUM, --context[=NUM]   output NUM (default 3) lines of copied context
  -u, -U NUM, --unified[=NUM]   output NUM (default 3) lines of unified context
  -e, --ed                      output an ed script
  -n, --rcs                     output an RCS format diff
  -y, --side-by-side            output in two columns
  -W, --width=NUM               output at most NUM (default 130) print columns
      --left-column             output only the left column of common lines
      --suppress-common-lines   do not output common lines

  -p, --show-c-function         show which C function each change is in
  -F, --show-function-line=RE   show the most recent line matching RE
      --label LABEL             use LABEL instead of file name and timestamp
                                  (can be repeated)

  -t, --expand-tabs             expand tabs to spaces in output
  -T, --initial-tab             make tabs line up by prepending a tab
      --tabsize=NUM             tab stops every NUM (default 8) print columns
      --suppress-blank-empty    suppress space or tab before empty output lines
  -l, --paginate                pass output through 'pr' to paginate it

  -r, --recursive                 recursively compare any subdirectories found
      --no-dereference            don't follow symbolic links
  -N, --new-file                  treat absent files as empty
      --unidirectional-new-file   treat absent first files as empty
      --ignore-file-name-case     ignore case when comparing file names
      --no-ignore-file-name-case  consider case when comparing file names
  -x, --exclude=PAT               exclude files that match PAT
  -X, --exclude-from=FILE         exclude files that match any pattern in FILE
  -S, --starting-file=FILE        start with FILE when comparing directories
      --from-file=FILE1           compare FILE1 to all operands;
                                    FILE1 can be a directory
      --to-file=FILE2             compare all operands to FILE2;
                                    FILE2 can be a directory

  -i, --ignore-case               ignore case differences in file contents
  -E, --ignore-tab-expansion      ignore changes due to tab expansion
  -Z, --ignore-trailing-space     ignore white space at line end
  -b, --ignore-space-change       ignore changes in the amount of white space
  -w, --ignore-all-space          ignore all white space
  -B, --ignore-blank-lines        ignore changes where lines are all blank
  -I, --ignore-matching-lines=RE  ignore changes where all lines match RE

  -a, --text                      treat all files as text
      --strip-trailing-cr         strip trailing carria`,
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
        simpleExplain: "分流输出，就像水管的三通接头同时向两个方向供水",
        detailExplain: "就像水管的 T 型三通接头——水流进来后，一边继续往下流（显示在屏幕上），另一边分出去存到一个文件里。tee 最经典的用法是在管道中间「偷」一份输出存档，同时不影响后续处理流程。",
        helpOutput: `Usage: tee [OPTION]... [FILE]...
Copy standard input to each FILE, and also to standard output.

  -a, --append              append to the given FILEs, do not overwrite
  -i, --ignore-interrupts   ignore interrupt signals
  -p                        operate in a more appropriate MODE with pipes.
      --output-error[=MODE]   set behavior on write error.  See MODE below
      --help        display this help and exit
      --version     output version information and exit

MODE determines behavior with write errors on the outputs:
  warn           diagnose errors writing to any output
  warn-nopipe    diagnose errors writing to any output not a pipe
  exit           exit on error writing to any output
  exit-nopipe    exit on error writing to any output not a pipe
The default MODE for the -p option is 'warn-nopipe'.
With "nopipe" MODEs, exit immediately if all outputs become broken pipes.
The default operation when --output-error is not specified, is to
exit immediately on error writing to a pipe, and diagnose errors
writing to non pipe outputs.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/tee>
or available locally via: info '(coreutils) tee invocation'
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
        simpleExplain: "分页阅读大文件，就像用电子书阅读器看书可以上下翻页",
        detailExplain: "就像用电子书阅读器看一本厚厚的小说——你可以一页一页往前翻、往后翻、跳到任意页、搜索关键词。比 cat 好用太多了，因为 cat 会把整本书一下子全倒出来，而 less 让你从容地阅读。",
        helpOutput: `
                   SSUUMMMMAARRYY OOFF LLEESSSS CCOOMMMMAANNDDSS

      Commands marked with * may be preceded by a number, _N.
      Notes in parentheses indicate the behavior if _N is given.
      A key preceded by a caret indicates the Ctrl key; thus ^K is ctrl-K.

  h  H                 Display this help.
  q  :q  Q  :Q  ZZ     Exit.
 ---------------------------------------------------------------------------

                           MMOOVVIINNGG

  e  ^E  j  ^N  CR  *  Forward  one line   (or _N lines).
  y  ^Y  k  ^K  ^P  *  Backward one line   (or _N lines).
  f  ^F  ^V  SPACE  *  Forward  one window (or _N lines).
  b  ^B  ESC-v      *  Backward one window (or _N lines).
  z                 *  Forward  one window (and set window to _N).
  w                 *  Backward one window (and set window to _N).
  ESC-SPACE         *  Forward  one window, but don't stop at end-of-file.
  d  ^D             *  Forward  one half-window (and set half-window to _N).
  u  ^U             *  Backward one half-window (and set half-window to _N).
  ESC-)  RightArrow *  Right one half screen width (or _N positions).
  ESC-(  LeftArrow  *  Left  one half screen width (or _N positions).
  ESC-}  ^RightArrow   Right to last column displayed.
  ESC-{  ^LeftArrow    Left  to first column.
  F                    Forward forever; like "tail -f".
  ESC-F                Like F but stop when search pattern is found.
  r  ^R  ^L            Repaint screen.
  R                    Repaint screen, discarding buffered input.
        ---------------------------------------------------
        Default "window" is the screen height.
        Default "half-window" is half of the screen height.
 ---------------------------------------------------------------------------

                          SSEEAARRCCHHIINNGG

  /_p_a_t_t_e_r_n          *  Search forward for (_N-th) matching line.
  ?_p_a_t_t_e_r_n          *  Search backward for (_N-th) matching line.
  n                 *  Repeat previous search (for _N-th occurrence).
  N                 *  Repeat previous search in reverse direction.
  ESC-n             *  Repeat previous search, spanning files.
  ESC-N             *  Repeat previous search, reverse dir. & spanning files.
  ESC-u                Undo (toggle) search highlighting.
  ESC-U                Clear search highlighting.
  &_p_a_t_t_e_r_n          *  Display only matching lines.
        ---------------------------------------------------
        A search pattern may begin with one or more of:
        ^N or !  Search for NON-matching lines.
        ^E or *  Search multiple files (pass thru END OF FILE).
        ^F or @  Start search at FIRST file (for /) or last file (for ?).
        ^K       Highlight matches, but don't move (KEEP position).
        ^R       Don't use REGULAR EXPRESSIONS.
        ^W       WRAP search if no match found.
 -----------------------------------------------------`,
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
        simpleExplain: "简单的分页查看器，就像 less 的简化版翻书工具",
        detailExplain: "就像 less 的老前辈——也能分页显示文件内容，按空格翻下一页。但功能比较简单，不能往回翻页，也不能搜索。现在大家一般都用 less 替代它（因为 less is more，少即是多嘛，这是个程序员笑话）。",
        helpOutput: `
Usage:
 more [options] <file>...

Display the contents of a file in a terminal.

Options:
 -d, --silent          display help instead of ringing bell
 -f, --logical         count logical rather than screen lines
 -l, --no-pause        suppress pause after form feed
 -c, --print-over      do not scroll, display text and clean line ends
 -p, --clean-print     do not scroll, clean screen and display text
 -e, --exit-on-eof     exit on end-of-file
 -s, --squeeze         squeeze multiple blank lines into one
 -u, --plain           suppress underlining and bold
 -n, --lines <number>  the number of lines per screenful
 -<number>             same as --lines
 +<number>             display file beginning from line number
 +/<pattern>           display file beginning from pattern match

 -h, --help            display this help
 -V, --version         display version

For more details see more(1).
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
        simpleExplain: "把多个文件按行合并，就像把两张纸左右拼接在一起",
        detailExplain: "就像你有两张名单纸，想把它们左右拼成一张——第一个人的左边是名单A的名字，右边是名单B的名字。paste 把多个文件的对应行横向拼接在一起，默认用制表符分隔。",
        helpOutput: `Usage: paste [OPTION]... [FILE]...
Write lines consisting of the sequentially corresponding lines from
each FILE, separated by TABs, to standard output.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -d, --delimiters=LIST   reuse characters from LIST instead of TABs
  -s, --serial            paste one file at a time instead of in parallel
  -z, --zero-terminated    line delimiter is NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/paste>
or available locally via: info '(coreutils) paste invocation'
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
        simpleExplain: "格式化文本段落，就像排版工人调整文字让它整齐美观",
        detailExplain: "就像专业的文字排版工人——把一段参差不齐的文字重新排版，让每行的宽度基本一致（默认 75 个字符），看起来整齐舒服。特别适合处理那些行长度乱七八糟的文本文件。",
        helpOutput: `Usage: fmt [-WIDTH] [OPTION]... [FILE]...
Reformat each paragraph in the FILE(s), writing to standard output.
The option -WIDTH is an abbreviated form of --width=DIGITS.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -c, --crown-margin        preserve indentation of first two lines
  -p, --prefix=STRING       reformat only lines beginning with STRING,
                              reattaching the prefix to reformatted lines
  -s, --split-only          split long lines, but do not refill
  -t, --tagged-paragraph    indentation of first line different from second
  -u, --uniform-spacing     one space between words, two after sentences
  -w, --width=WIDTH         maximum line width (default of 75 columns)
  -g, --goal=WIDTH          goal width (default of 93% of width)
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/fmt>
or available locally via: info '(coreutils) fmt invocation'
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
        simpleExplain: "给文本添加行号，就像给书的每一页印上页码",
        detailExplain: "就像出版社给书籍的每一页印上页码——nl 给文件的每一行前面加上行号。比 cat -n 更灵活，可以自定义行号的格式、起始值、步进值等，还可以选择性地给空行或不空行编号。",
        helpOutput: `Usage: nl [OPTION]... [FILE]...
Write each FILE to standard output, with line numbers added.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -b, --body-numbering=STYLE      use STYLE for numbering body lines
  -d, --section-delimiter=CC      use CC for logical page delimiters
  -f, --footer-numbering=STYLE    use STYLE for numbering footer lines
  -h, --header-numbering=STYLE    use STYLE for numbering header lines
  -i, --line-increment=NUMBER     line number increment at each line
  -l, --join-blank-lines=NUMBER   group of NUMBER empty lines counted as one
  -n, --number-format=FORMAT      insert line numbers according to FORMAT
  -p, --no-renumber               do not reset line numbers for each section
  -s, --number-separator=STRING   add STRING after (possible) line number
  -v, --starting-line-number=NUMBER  first line number for each section
  -w, --number-width=NUMBER       use NUMBER columns for line numbers
      --help        display this help and exit
      --version     output version information and exit

Default options are: -bt -d'\\:' -fn -hn -i1 -l1 -n'rn' -s<TAB> -v1 -w6

CC are two delimiter characters used to construct logical page delimiters;
a missing second character implies ':'.  As a GNU extension one can specify
more than two characters, and also specifying the empty string (-d '')
disables section matching.

STYLE is one of:

  a      number all lines
  t      number only nonempty lines
  n      number no lines
  pBRE   number only lines that contain a match for the basic regular
         expression, BRE

FORMAT is one of:

  ln     left justified, no leading zeros
  rn     right justified, no leading zeros
  rz     right justified, leading zeros


GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/nl>
or available locally via: info '(coreutils) nl invocation'
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
        simpleExplain: "倒序显示文件内容，就像从最后一页往前看书",
        detailExplain: "cat 是从头读到尾，tac 恰恰反过来——从最后一行读到第一行。名字就是把 cat 倒过来拼写，很好记。当你想看日志文件的最新内容在最上面时，tac 特别好用。",
        helpOutput: `Usage: tac [OPTION]... [FILE]...
Write each FILE to standard output, last line first.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -b, --before             attach the separator before instead of after
  -r, --regex              interpret the separator as a regular expression
  -s, --separator=STRING   use STRING as the separator instead of newline
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/tac>
or available locally via: info '(coreutils) tac invocation'
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
        simpleExplain: "反转每行中的字符顺序，就像镜面反射每个字",
        detailExplain: "就像照镜子——每个字符的顺序都被反转了。「hello」变成「olleh」，每一行都独立地进行字符级反转。这个命令在日常工作中用得不太多，但在做某些文字游戏或密码学相关的事情时会派上用场。",
        helpOutput: `Usage: rev [options] [file ...]

Reverse lines characterwise.

Options:
 -h, --help     display this help
 -V, --version  display version

For more details see rev(1).
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
        simpleExplain: "更快更强的搜索工具，就像给grep装上了涡轮增压引擎",
        detailExplain: "就像给grep装上了涡轮增压引擎——ripgrep (rg) 用Rust编写，搜索速度极快，自动忽略 .gitignore 中的文件，默认递归搜索，是现代开发者替代 grep 的首选工具。",
        helpOutput: `ripgrep 14.1.0
Andrew Gallant <jamslam@gmail.com>

ripgrep (rg) recursively searches the current directory for lines matching
a regex pattern. By default, ripgrep will respect gitignore rules and
automatically skip hidden files/directories and binary files.

Use -h for short descriptions and --help for more details.

Project home page: https://github.com/BurntSushi/ripgrep

USAGE:
    rg [OPTIONS] PATTERN [PATH ...]
    rg [OPTIONS] -e PATTERN ... [PATH ...]
    rg [OPTIONS] -f PATTERNFILE ... [PATH ...]
    rg [OPTIONS] --files [PATH ...]
    rg [OPTIONS] --type-list
    command | rg [OPTIONS] PATTERN
    rg [OPTIONS] --help
    rg [OPTIONS] --version

POSITIONAL ARGUMENTS:
    <PATTERN>
        A regular expression used for searching. To match a pattern beginning
        with a dash, use the -e/--regexp flag.

        For example, to search for the literal '-foo', you can use this flag:

            rg -e -foo

        You can also use the special '--' delimiter to indicate that no more
        flags will be provided. Namely, the following is equivalent to the
        above:

            rg -- -foo

    <PATH>...
        A file or directory to search. Directories are searched recursively.
        File paths specified on the command line override glob and ignore
        rules.

INPUT OPTIONS:
    -e PATTERN, --regexp=PATTERN
        A pattern to search for. This option can be provided multiple times,
        where all patterns given are searched, in addition to any patterns
        provided by -f/--file. Lines matching at least one of the provided
        patterns are printed. This flag can also be used when searching for
        patterns that start with a dash.

        For example, to search for the literal -foo:

            rg -e -foo

        You can also use the special -- delimiter to indicate that no more
        flags will be provided. Namely, the following is equivalent to the
        above:

            rg -- -foo

        When -f/--file or -e/--regexp is used, then ripgrep treats all
        positional arguments as files or directories to search.

    -f PATTERNFILE, --file=PATTERNFILE
        Search for patterns from the given file, with one pattern per line.
        When this flag is used multiple times or in combination with the
        -e/--regexp flag, then all patterns provided are searched. Empty
        pattern lines will match all input lines, and the newline is not
        counted as part of the pattern.

        A line is printed if and only if it matches at least one of the
        patterns.

        When PATTERNFILE is -, then stdin will be read for the patterns.

        When -f/--file or -e/--regexp is used, then ripgrep treats all
        positional arguments as files or directories to search.

    --pre=COMMAND
        For each input PATH, this flag causes ripgrep to search the standard
        output of COMMAND PATH instead of the contents of PATH. This option
        expects the COMMAND program to either be a path `,
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
        simpleExplain: "超快的代码搜索工具，就像一个训练有素的搜救犬",
        detailExplain: "就像一个训练有素的搜救犬——The Silver Searcher (ag) 比 grep 快很多，自动忽略版本控制目录和二进制文件，专为在代码库中搜索而设计。",
        helpOutput: `Usage: ag [FILE-TYPE] [OPTIONS] PATTERN [PATH]

The Silver Searcher. A code-searching tool similar to ack, but faster.

Options:
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
        simpleExplain: "JSON数据处理工具，就像一个精通翻译的JSON语言专家",
        detailExplain: "就像一个精通翻译的JSON语言专家——jq 能读取、过滤、转换JSON数据，把复杂的JSON结构提取成你想要的格式，是处理API返回数据的必备利器。",
        helpOutput: `jq - commandline JSON processor [version 1.7]

Usage:	jq [options] <jq filter> [file...]
	jq [options] --args <jq filter> [strings...]
	jq [options] --jsonargs <jq filter> [JSON_TEXTS...]

jq is a tool for processing JSON inputs, applying the given filter to
its JSON text inputs and producing the filter's results as JSON on
standard output.

The simplest filter is ., which copies jq's input to its output
unmodified except for formatting. For more advanced filters see
the jq(1) manpage ("man jq") and/or https://jqlang.github.io/jq/.

Example:

	$ echo '{"foo": 0}' | jq .
	{
	  "foo": 0
	}

Command options:
  -n, --null-input          use \`null\` as the single input value;
  -R, --raw-input           read each line as string instead of JSON;
  -s, --slurp               read all inputs into an array and use it as
                            the single input value;
  -c, --compact-output      compact instead of pretty-printed output;
  -r, --raw-output          output strings without escapes and quotes;
      --raw-output0         implies -r and output NUL after each output;
  -j, --join-output         implies -r and output without newline after
                            each output;
  -a, --ascii-output        output strings by only ASCII characters
                            using escape sequences;
  -S, --sort-keys           sort keys of each object on output;
  -C, --color-output        colorize JSON output;
  -M, --monochrome-output   disable colored output;
      --tab                 use tabs for indentation;
      --indent n            use n spaces for indentation (max 7 spaces);
      --unbuffered          flush output stream after each output;
      --stream              parse the input value in streaming fashion;
      --stream-errors       implies --stream and report parse error as
                            an array;
      --seq                 parse input/output as application/json-seq;
  -f, --from-file file      load filter from the file;
  -L directory              search modules from the directory;
      --arg name value      set $name to the string value;
      --argjson name value  set $name to the JSON value;
      --slurpfile name file set $name to an array of JSON values read
                            from the file;
      --rawfile name file   set $name to string contents of file;
      --args                consume remaining arguments as positional
                            string values;
      --jsonargs            consume remaining arguments as positional
                            JSON values;
  -e, --exit-status         set exit status code based on the output;
  -V, --version             show the version;
  --build-configuration     show jq's build configuration;
  -h, --help                show the help;
  --                        terminates argument processing;

Named arguments are also available as $ARGS.named[], while
positional arguments are available as $ARGS.positional[].
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
        simpleExplain: "将文本按列对齐显示，就像把散乱的队伍整理成整齐的方阵",
        detailExplain: "就像把散乱的队伍整理成整齐的方阵——column 把杂乱无章的文本按列排列整齐，让输出看起来像一张规整的表格，特别适合展示数据。",
        helpOutput: `
Usage:
 column [options] [<file>...]

Columnate lists.

Options:
 -t, --table                      create a table
 -n, --table-name <name>          table name for JSON output
 -O, --table-order <columns>      specify order of output columns
 -C, --table-column <properties>  define column
 -N, --table-columns <names>      comma separated columns names
 -l, --table-columns-limit <num>  maximal number of input columns
 -E, --table-noextreme <columns>  don't count long text from the columns to column width
 -d, --table-noheadings           don't print header
 -m, --table-maxout               fill all available space
 -e, --table-header-repeat        repeat header for each page
 -H, --table-hide <columns>       don't print the columns
 -R, --table-right <columns>      right align text in these columns
 -T, --table-truncate <columns>   truncate text in the columns when necessary
 -W, --table-wrap <columns>       wrap text in the columns when necessary
 -L, --keep-empty-lines           don't ignore empty lines
 -J, --json                       use JSON output format for table

 -r, --tree <column>              column to use tree-like output for the table
 -i, --tree-id <column>           line ID to specify child-parent relation
 -p, --tree-parent <column>       parent to specify child-parent relation

 -c, --output-width <width>       width of output in number of characters
 -o, --output-separator <string>  columns separator for table output (default is two spaces)
 -s, --separator <string>         possible table delimiters
 -x, --fillrows                   fill rows before columns

 -h, --help                       display this help
 -V, --version                    display version

For more details see column(1).
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
        simpleExplain: "将Tab转换为空格，就像把折叠的椅子全部展开",
        detailExplain: "就像把折叠的椅子全部展开——expand 把文件中的 Tab 字符替换成空格，确保在不同编辑器中显示效果一致，不会因为Tab宽度设置不同而错位。",
        helpOutput: `Usage: expand [OPTION]... [FILE]...
Convert tabs in each FILE to spaces, writing to standard output.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -i, --initial    do not convert tabs after non blanks
  -t, --tabs=N     have tabs N characters apart, not 8
  -t, --tabs=LIST  use comma separated list of tab positions.
                     The last specified position can be prefixed with '/'
                     to specify a tab size to use after the last
                     explicitly specified tab stop.  Also a prefix of '+'
                     can be used to align remaining tab stops relative to
                     the last specified tab stop instead of the first column
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/expand>
or available locally via: info '(coreutils) expand invocation'
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
        simpleExplain: "将空格转换为Tab，就像把展开的椅子重新折叠起来",
        detailExplain: "就像把展开的椅子重新折叠起来——unexpand 把连续的空格转换回 Tab 字符，可以减小文件体积，也是 expand 的反向操作。",
        helpOutput: `Usage: unexpand [OPTION]... [FILE]...
Convert blanks in each FILE to tabs, writing to standard output.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -a, --all        convert all blanks, instead of just initial blanks
      --first-only  convert only leading sequences of blanks (overrides -a)
  -t, --tabs=N     have tabs N characters apart instead of 8 (enables -a)
  -t, --tabs=LIST  use comma separated list of tab positions.
                     The last specified position can be prefixed with '/'
                     to specify a tab size to use after the last
                     explicitly specified tab stop.  Also a prefix of '+'
                     can be used to align remaining tab stops relative to
                     the last specified tab stop instead of the first column
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/unexpand>
or available locally via: info '(coreutils) unexpand invocation'
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
        simpleExplain: "随机打乱行顺序，就像洗牌一样把顺序打乱",
        detailExplain: "就像洗牌一样把顺序打乱——shuf 会把输入的每一行随机重新排列，常用于随机抽取、抽奖、生成随机序列等场景。",
        helpOutput: `Usage: shuf [OPTION]... [FILE]
  or:  shuf -e [OPTION]... [ARG]...
  or:  shuf -i LO-HI [OPTION]...
Write a random permutation of the input lines to standard output.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -e, --echo                treat each ARG as an input line
  -i, --input-range=LO-HI   treat each number LO through HI as an input line
  -n, --head-count=COUNT    output at most COUNT lines
  -o, --output=FILE         write result to FILE instead of standard output
      --random-source=FILE  get random bytes from FILE
  -r, --repeat              output lines can be repeated
  -z, --zero-terminated     line delimiter is NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/shuf>
or available locally via: info '(coreutils) shuf invocation'
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
        simpleExplain: "比较两个已排序文件的异同，就像找两份名单的相同和不同之处",
        detailExplain: "就像找两份名单的相同和不同之处——comm 会分三列显示：只在文件1中有的、只在文件2中有的、两个文件都有的。前提是两个文件必须先排好序。",
        helpOutput: `Usage: comm [OPTION]... FILE1 FILE2
Compare sorted files FILE1 and FILE2 line by line.

When FILE1 or FILE2 (not both) is -, read standard input.

With no options, produce three-column output.  Column one contains
lines unique to FILE1, column two contains lines unique to FILE2,
and column three contains lines common to both files.

  -1                      suppress column 1 (lines unique to FILE1)
  -2                      suppress column 2 (lines unique to FILE2)
  -3                      suppress column 3 (lines that appear in both files)

      --check-order       check that the input is correctly sorted, even
                            if all input lines are pairable
      --nocheck-order     do not check that the input is correctly sorted
      --output-delimiter=STR  separate columns with STR
      --total             output a summary
  -z, --zero-terminated   line delimiter is NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

Note, comparisons honor the rules specified by 'LC_COLLATE'.

Examples:
  comm -12 file1 file2  Print only lines present in both file1 and file2.
  comm -3 file1 file2  Print lines in file1 not in file2, and vice versa.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/comm>
or available locally via: info '(coreutils) comm invocation'
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
        simpleExplain: "按共同字段合并两文件，就像根据学号把两张表合并成一张",
        detailExplain: "就像根据学号把两张表合并成一张——join 根据两个文件中相同的字段（默认是第一列）把行合并在一起，类似于数据库的 JOIN 操作。",
        helpOutput: `Usage: join [OPTION]... FILE1 FILE2
For each pair of input lines with identical join fields, write a line to
standard output.  The default join field is the first, delimited by blanks.

When FILE1 or FILE2 (not both) is -, read standard input.

  -a FILENUM             also print unpairable lines from file FILENUM, where
                           FILENUM is 1 or 2, corresponding to FILE1 or FILE2
  -e STRING              replace missing (empty) input fields with STRING;
                           I.e., missing fields specified with '-12jo' options
  -i, --ignore-case      ignore differences in case when comparing fields
  -j FIELD               equivalent to '-1 FIELD -2 FIELD'
  -o FORMAT              obey FORMAT while constructing output line
  -t CHAR                use CHAR as input and output field separator
  -v FILENUM             like -a FILENUM, but suppress joined output lines
  -1 FIELD               join on this FIELD of file 1
  -2 FIELD               join on this FIELD of file 2
      --check-order      check that the input is correctly sorted, even
                           if all input lines are pairable
      --nocheck-order    do not check that the input is correctly sorted
      --header           treat the first line in each file as field headers,
                           print them without trying to pair them
  -z, --zero-terminated  line delimiter is NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

Unless -t CHAR is given, leading blanks separate fields and are ignored,
else fields are separated by CHAR.  Any FIELD is a field number counted
from 1.  FORMAT is one or more comma or blank separated specifications,
each being 'FILENUM.FIELD' or '0'.  Default FORMAT outputs the join field,
the remaining fields from FILE1, the remaining fields from FILE2, all
separated by CHAR.  If FORMAT is the keyword 'auto', then the first
line of each file determines the number of fields output for each line.

Important: FILE1 and FILE2 must be sorted on the join fields.
E.g., use "sort -k 1b,1" if 'join' has no options,
or use "join -t ''" if 'sort' has no options.
Note, comparisons honor the rules specified by 'LC_COLLATE'.
If the input is not sorted and some lines cannot be joined, a
warning message will be given.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/join>
or available locally via: info '(coreutils) join invocation'
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
        simpleExplain: "将大文件分割成小文件，就像把一个大蛋糕切成小块",
        detailExplain: "就像把一个大蛋糕切成小块——split 把一个大文件按大小或行数拆分成多个小文件，方便传输或处理。每个小文件会自动命名。",
        helpOutput: `Usage: split [OPTION]... [FILE [PREFIX]]
Output pieces of FILE to PREFIXaa, PREFIXab, ...;
default size is 1000 lines, and default PREFIX is 'x'.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -a, --suffix-length=N   generate suffixes of length N (default 2)
      --additional-suffix=SUFFIX  append an additional SUFFIX to file names
  -b, --bytes=SIZE        put SIZE bytes per output file
  -C, --line-bytes=SIZE   put at most SIZE bytes of records per output file
  -d                      use numeric suffixes starting at 0, not alphabetic
      --numeric-suffixes[=FROM]  same as -d, but allow setting the start value
  -x                      use hex suffixes starting at 0, not alphabetic
      --hex-suffixes[=FROM]  same as -x, but allow setting the start value
  -e, --elide-empty-files  do not generate empty output files with '-n'
      --filter=COMMAND    write to shell COMMAND; file name is $FILE
  -l, --lines=NUMBER      put NUMBER lines/records per output file
  -n, --number=CHUNKS     generate CHUNKS output files; see explanation below
  -t, --separator=SEP     use SEP instead of newline as the record separator;
                            '\\0' (zero) specifies the NUL character
  -u, --unbuffered        immediately copy input to output with '-n r/...'
      --verbose           print a diagnostic just before each
                            output file is opened
      --help        display this help and exit
      --version     output version information and exit

The SIZE argument is an integer and optional unit (example: 10K is 10*1024).
Units are K,M,G,T,P,E,Z,Y,R,Q (powers of 1024) or KB,MB,... (powers of 1000).
Binary prefixes can be used, too: KiB=K, MiB=M, and so on.

CHUNKS may be:
  N       split into N files based on size of input
  K/N     output Kth of N to stdout
  l/N     split into N files without splitting lines/records
  l/K/N   output Kth of N to stdout without splitting lines/records
  r/N     like 'l' but use round robin distribution
  r/K/N   likewise but only output Kth of N to stdout

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/split>
or available locally via: info '(coreutils) split invocation'
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
        simpleExplain: "按内容模式分割文件，就像按章节把一本书拆分成多个小册子",
        detailExplain: "就像按章节把一本书拆分成多个小册子——csplit 根据文件内容的模式（如特定行或正则匹配）来分割文件，比 split 更灵活，可以按内容逻辑拆分。",
        helpOutput: `Usage: csplit [OPTION]... FILE PATTERN...
Output pieces of FILE separated by PATTERN(s) to files 'xx00', 'xx01', ...,
and output byte counts of each piece to standard output.

Read standard input if FILE is -

Mandatory arguments to long options are mandatory for short options too.
  -b, --suffix-format=FORMAT  use sprintf FORMAT instead of %02d
  -f, --prefix=PREFIX        use PREFIX instead of 'xx'
  -k, --keep-files           do not remove output files on errors
      --suppress-matched     suppress the lines matching PATTERN
  -n, --digits=DIGITS        use specified number of digits instead of 2
  -s, --quiet, --silent      do not print counts of output file sizes
  -z, --elide-empty-files    suppress empty output files
      --help        display this help and exit
      --version     output version information and exit

Each PATTERN may be:
  INTEGER            copy up to but not including specified line number
  /REGEXP/[OFFSET]   copy up to but not including a matching line
  %REGEXP%[OFFSET]   skip to, but not including a matching line
  {INTEGER}          repeat the previous pattern specified number of times
  {*}                repeat the previous pattern as many times as possible

A line OFFSET is an integer optionally preceded by '+' or '-'

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/csplit>
or available locally via: info '(coreutils) csplit invocation'
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
        simpleExplain: "转换文件编码，就像把中文翻译成英文一样转换字符编码",
        detailExplain: "就像把中文翻译成英文一样转换字符编码——iconv 把文件从一种字符编码转换为另一种，解决不同系统之间编码不兼容导致的乱码问题。",
        helpOutput: `Usage: iconv [OPTION...] [FILE...]
Convert encoding of given files from one encoding to another.

 Input/Output format specification:
  -f, --from-code=NAME       encoding of original text
  -t, --to-code=NAME         encoding for output

 Information:
  -l, --list                 list all known coded character sets

 Output control:
  -c                         omit invalid characters from output
  -o, --output=FILE          output file
  -s, --silent               suppress warnings
      --verbose              print progress information

  -?, --help                 Give this help list
      --usage                Give a short usage message
  -V, --version              Print program version

Mandatory or optional arguments to long options are also mandatory or optional
for any corresponding short options.

For bug reporting instructions, please see:
<https://bugs.launchpad.net/ubuntu/+source/glibc/+bugs>.
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
        simpleExplain: "将Windows换行符转换为Unix格式，就像把右舵车改成左舵车",
        detailExplain: "就像把右舵车改成左舵车——Windows 用 \\r\\n 换行，Unix/Linux 用 \\n 换行，dos2unix 把 Windows 格式的换行符转换为 Unix 格式，解决脚本在Linux上运行报错的问题。",
        helpOutput: `Usage: dos2unix [options] [file ...]
Convert DOS/MAC text files to Unix format.

Options:
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
        simpleExplain: "将Unix换行符转换为Windows格式，就像把左舵车改成右舵车",
        detailExplain: "就像把左舵车改成右舵车——unix2dos 是 dos2unix 的反向操作，把 Unix 的 \\n 换行符转换为 Windows 的 \\r\\n 格式，方便在Windows环境中使用。",
        helpOutput: `Usage: unix2dos [options] [file ...]
Convert Unix text files to DOS format.

Options:
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
        simpleExplain: "Base64编码/解码工具，就像把信件用特殊密码重新编码",
        detailExplain: "就像把信件用特殊密码重新编码——base64 把二进制数据转换成纯文本格式（只含字母、数字和 +/），方便在只支持文本的环境中传输，比如邮件附件和JSON中嵌入图片。",
        helpOutput: `Usage: base64 [OPTION]... [FILE]
Base64 encode or decode FILE, or standard input, to standard output.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -d, --decode          decode data
  -i, --ignore-garbage  when decoding, ignore non-alphabet characters
  -w, --wrap=COLS       wrap encoded lines after COLS character (default 76).
                          Use 0 to disable line wrapping
      --help        display this help and exit
      --version     output version information and exit

The data are encoded as described for the base64 alphabet in RFC 4648.
When decoding, the input may contain newlines in addition to the bytes of
the formal base64 alphabet.  Use --ignore-garbage to attempt to recover
from any other non-alphabet bytes in the encoded stream.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/base64>
or available locally via: info '(coreutils) base64 invocation'
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
        simpleExplain: "从二进制文件中提取可读文本，就像从矿石中提炼黄金",
        detailExplain: "就像从矿石中提炼黄金——strings 从二进制文件（如可执行程序、图片等）中提取出人类可读的字符串，常用于逆向工程、调试或查看编译后程序中的文本信息。",
        helpOutput: `Usage: strings [option(s)] [file(s)]
 Display printable strings in [file(s)] (stdin by default)
 The options are:
  -a - --all                Scan the entire file, not just the data section [default]
  -d --data                 Only scan the data sections in the file
  -f --print-file-name      Print the name of the file before each string
  -n <number>               Locate & print any sequence of at least <number>
    --bytes=<number>         displayable characters.  (The default is 4).
  -t --radix={o,d,x}        Print the location of the string in base 8, 10 or 16
  -w --include-all-whitespace Include all whitespace as valid string characters
  -o                        An alias for --radix=o
  -T --target=<BFDNAME>     Specify the binary file format
  -e --encoding={s,S,b,l,B,L} Select character size and endianness:
                            s = 7-bit, S = 8-bit, {b,l} = 16-bit, {B,L} = 32-bit
  --unicode={default|show|invalid|hex|escape|highlight}
  -U {d|s|i|x|e|h}          Specify how to treat UTF-8 encoded unicode characters
  -s --output-separator=<string> String used to separate strings in output.
  @<file>                   Read options from <file>
  -h --help                 Display this information
  -v -V --version           Print the program's version number
strings: supported targets: elf64-x86-64 elf32-i386 elf32-iamcu elf32-x86-64 pei-i386 pe-x86-64 pei-x86-64 elf64-little elf64-big elf32-little elf32-big pe-bigobj-x86-64 pe-i386 pdb srec symbolsrec verilog tekhex binary ihex plugin
Report bugs to <https://sourceware.org/bugzilla/>
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
        simpleExplain: "将长行折叠为指定宽度，就像把超长的纸条按固定宽度折起来",
        detailExplain: "就像把超长的纸条按固定宽度折起来——fold 把超过指定宽度的行自动换行，防止内容超出终端显示范围，默认每行80个字符。",
        helpOutput: `Usage: fold [OPTION]... [FILE]...
Wrap input lines in each FILE, writing to standard output.

With no FILE, or when FILE is -, read standard input.

Mandatory arguments to long options are mandatory for short options too.
  -b, --bytes         count bytes rather than columns
  -s, --spaces        break at spaces
  -w, --width=WIDTH   use WIDTH columns instead of 80
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/fold>
or available locally via: info '(coreutils) fold invocation'
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
        simpleExplain: "查看当前运行的进程列表，就像看公司的员工考勤表",
        detailExplain: "就像公司的人事经理拿出一份员工在岗名单——谁在工作（运行中）、谁的工号是多少（PID）、占了多少工位资源（CPU/内存）、谁来启动的这个任务。ps 是了解系统正在做什么的最基本工具。",
        helpOutput: `
Usage:
 ps [options]

 Try 'ps --help <simple|list|output|threads|misc|all>'
  or 'ps --help <s|l|o|t|m|a>'
 for additional help text.

For more details see ps(1).
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
        simpleExplain: "实时监控系统进程，就像机场大屏幕实时显示航班动态",
        detailExplain: "就像机场的实时航班信息大屏幕——不断刷新显示哪些进程正在运行、占用多少 CPU 和内存、已经运行了多久。屏幕每隔几秒自动刷新一次，让你能实时掌握系统的健康状态。按 q 键退出。",
        helpOutput: `
Usage:
 top [options]

Options:
 -b, --batch-mode                run in non-interactive batch mode
 -c, --cmdline-toggle            reverse last remembered 'c' state
 -d, --delay =SECS [.TENTHS]     iterative delay as SECS [.TENTHS]
 -E, --scale-summary-mem =SCALE  set mem as: k,m,g,t,p,e for SCALE
 -e, --scale-task-mem =SCALE     set mem with: k,m,g,t,p for SCALE
 -H, --threads-show              show tasks plus all their threads
 -i, --idle-toggle               reverse last remembered 'i' state
 -n, --iterations =NUMBER        exit on maximum iterations NUMBER
 -O, --list-fields               output all field names, then exit
 -o, --sort-override =FIELD      force sorting on this named FIELD
 -p, --pid =PIDLIST              monitor only the tasks in PIDLIST
 -S, --accum-time-toggle         reverse last remembered 'S' state
 -s, --secure-mode               run with secure mode restrictions
 -U, --filter-any-user =USER     show only processes owned by USER
 -u, --filter-only-euser =USER   show only processes owned by USER
 -w, --width [=COLUMNS]          change print width [,use COLUMNS]
 -1, --single-cpu-toggle         reverse last remembered '1' state

 -h, --help                      display this help text, then exit
 -V, --version                   output version information & exit

For more details see top(1).
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
        simpleExplain: "增强版进程监控器，就像 top 的升级版彩色触摸屏",
        detailExplain: "就像 top 的豪华升级版——有彩色的界面、可以用鼠标点击操作、可以用方向键选中进程、支持树形视图显示。如果你觉得 top 太简陋难用，htop 绝对会让你眼前一亮。不过很多系统需要额外安装。",
        helpOutput: `htop 3.3.0
(C) 2004-2019 Hisham Muhammad. (C) 2020-2024 htop dev team.
Released under the GNU GPLv2+.

-C --no-color                   Use a monochrome color scheme
-d --delay=DELAY                Set the delay between updates, in tenths of seconds
-F --filter=FILTER              Show only the commands matching the given filter
-h --help                       Print this help screen
-H --highlight-changes[=DELAY]  Highlight new and old processes
-M --no-mouse                   Disable the mouse
-n --max-iterations=NUMBER      Exit htop after NUMBER iterations/frame updates
-p --pid=PID[,PID,PID...]       Show only the given PIDs
   --readonly                   Disable all system and process changing features
-s --sort-key=COLUMN            Sort by COLUMN in list view (try --sort-key=help for a list)
-t --tree                       Show the tree view (can be combined with -s)
-u --user[=USERNAME]            Show only processes for a given user (or $USER)
-U --no-unicode                 Do not use unicode but plain ASCII
-V --version                    Print version info

Press F1 inside htop for online help.
See 'man htop' for more information.
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
        simpleExplain: "终止进程，就像给正在运行的程序发一张停工通知单",
        detailExplain: "就像你对着一个正在干活的工人喊「停下！」——kill 向指定的进程发送信号，最常用的是终止信号（SIGTERM 或 SIGKILL）。SIGTERM 像是礼貌地说「请你停下来收拾下班」，而 SIGKILL 则像是直接拔电源——强制立即停止，不给任何反应机会。",
        helpOutput: `
Usage:
 kill [options] <pid> [...]

Options:
 <pid> [...]            send signal to every <pid> listed
 -<signal>, -s, --signal <signal>
                        specify the <signal> to be sent
 -q, --queue <value>    integer value to be sent with the signal
 -l, --list=[<signal>]  list all signal names, or convert one to a name
 -L, --table            list all signal names in a nice table

 -h, --help     display this help and exit
 -V, --version  output version information and exit

For more details see kill(1).
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
        simpleExplain: "把暂停的任务放到后台运行，就像把活儿交给后台部门慢慢做",
        detailExplain: "就像你在前台接待客人时，把一些不需要立刻完成的工作交代给后台部门去慢慢处理——前台终端解放出来可以继续接受其他命令，后台的工作在默默进行。通常配合 Ctrl+Z 先暂停任务再用 bg 放到后台。",
        helpOutput: `bg: bg [job_spec ...]
    Move jobs to the background.
    
    Place the jobs identified by each JOB_SPEC in the background, as if they
    had been started with \`&'.  If JOB_SPEC is not present, the shell's notion
    of the current job is used.
    
    Exit Status:
    Returns success unless job control is not enabled or an error occurs.
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
        simpleExplain: "把后台任务拉回前台，就像把后台部门的活儿拿回自己手上做",
        detailExplain: "就像你之前把一项工作交给了后台部门（bg），现在想亲自过问一下，就用 fg 把它重新调回前台终端。此时终端就被这个任务占据，直到它完成或再次被你放到后台。",
        helpOutput: `fg: fg [job_spec]
    Move job to the foreground.
    
    Place the job identified by JOB_SPEC in the foreground, making it the
    current job.  If JOB_SPEC is not present, the shell's notion of the
    current job is used.
    
    Exit Status:
    Status of command placed in foreground, or failure if an error occurs.
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
        simpleExplain: "查看当前 shell 的后台任务列表，就像查看自己的待办事项清单",
        detailExplain: "就像你口袋里的待办事项清单——记录着你在这个终端里启动了哪些后台任务、它们的编号是多少、状态是正在运行还是暂停了。这是管理前后台任务的必备参考表。",
        helpOutput: `jobs: jobs [-lnprs] [jobspec ...] or jobs -x command [args]
    Display status of jobs.
    
    Lists the active jobs.  JOBSPEC restricts output to that job.
    Without options, the status of all active jobs is displayed.
    
    Options:
      -l	lists process IDs in addition to the normal information
      -n	lists only processes that have changed status since the last
    		notification
      -p	lists process IDs only
      -r	restrict output to running jobs
      -s	restrict output to stopped jobs
    
    If -x is supplied, COMMAND is run after all job specifications that
    appear in ARGS have been replaced with the process ID of that job's
    process group leader.
    
    Exit Status:
    Returns success unless an invalid option is given or an error occurs.
    If -x is used, returns the exit status of COMMAND.
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
        simpleExplain: "让命令断开终端后仍继续运行，就像设定了自动运行的机器人不怕主人离开",
        detailExplain: "就像你安排了一个机器人干活，然后关上门回家——普通的命令在你关闭终端时就会被终止，但 nohup 启动的命令就像一个独立的机器人，不管你是否在线，它都会坚持把活干完。非常适合跑长时间任务。",
        helpOutput: `Usage: nohup COMMAND [ARG]...
  or:  nohup OPTION
Run COMMAND, ignoring hangup signals.

      --help        display this help and exit
      --version     output version information and exit

If standard input is a terminal, redirect it from an unreadable file.
If standard output is a terminal, append output to 'nohup.out' if possible,
'$HOME/nohup.out' otherwise.
If standard error is a terminal, redirect it to standard output.
To save output to FILE, use 'nohup COMMAND > FILE'.

NOTE: your shell may have its own version of nohup, which usually supersedes
the version described here.  Please refer to your shell's documentation
for details about the options it supports.

Exit status:
  125  if the nohup command itself fails
  126  if COMMAND is found but cannot be invoked
  127  if COMMAND cannot be found
  -    the exit status of COMMAND otherwise

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/nohup>
or available locally via: info '(coreutils) nohup invocation'
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
        simpleExplain: "以指定优先级启动进程，就像告诉系统这个任务急不急",
        detailExplain: "就像你去办事大厅排队，有的人拿的是 VIP 号（优先级高，先办理），有的人拿的是普通号（优先级低，慢慢排）。nice 值范围是 -20（最高优先级）到 19（最低优先级），默认是 0。nice 值越大表示越「谦让」，越愿意让别人先执行。",
        helpOutput: `Usage: nice [OPTION] [COMMAND [ARG]...]
Run COMMAND with an adjusted niceness, which affects process scheduling.
With no COMMAND, print the current niceness.  Niceness values range from
-20 (most favorable to the process) to 19 (least favorable to the process).

Mandatory arguments to long options are mandatory for short options too.
  -n, --adjustment=N   add integer N to the niceness (default 10)
      --help        display this help and exit
      --version     output version information and exit

NOTE: your shell may have its own version of nice, which usually supersedes
the version described here.  Please refer to your shell's documentation
for details about the options it supports.

Exit status:
  125  if the nice command itself fails
  126  if COMMAND is found but cannot be invoked
  127  if COMMAND cannot be found
  -    the exit status of COMMAND otherwise

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/nice>
or available locally via: info '(coreutils) nice invocation'
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
        simpleExplain: "调整正在运行进程的优先级，就像中途改变办事的紧急程度",
        detailExplain: "就像一个任务已经开始执行了，但你突然发现它太占资源或者太紧急了——renice 可以中途调整它的优先级。nice 是启动时设定的，renice 是运行中修改的，两者互补。",
        helpOutput: `
Usage:
 renice [-n|--priority|--relative] <priority> [-p|--pid] <pid>...
 renice [-n|--priority|--relative] <priority>  -g|--pgrp <pgid>...
 renice [-n|--priority|--relative] <priority>  -u|--user <user>...

Alter the priority of running processes.

Options:
 -n <num>               specify the nice value
                          If POSIXLY_CORRECT flag is set in environment
                          then the priority is 'relative' to current
                          process priority. Otherwise it is 'absolute'.
 --priority <num>       specify the 'absolute' nice value
 --relative <num>       specify the 'relative' nice value
 -p, --pid              interpret arguments as process ID (default)
 -g, --pgrp             interpret arguments as process group ID
 -u, --user             interpret arguments as username or user ID

 -h, --help             display this help
 -V, --version          display version

For more details see renice(1).
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
        simpleExplain: "按名称查找进程 ID，就像通过姓名查工号",
        detailExplain: "就像人事系统中根据员工姓名查找他的工号——你知道程序叫什么名字（比如 chrome），但不知道它的 PID，pgrep 帮你快速找到。比 ps | grep 更简洁高效，直接返回匹配的 PID 号码。",
        helpOutput: `
Usage:
 pgrep [options] <pattern>

Options:
 -d, --delimiter <string>  specify output delimiter
 -l, --list-name           list PID and process name
 -a, --list-full           list PID and full command line
 -v, --inverse             negates the matching
 -w, --lightweight         list all TID
 -c, --count               count of matching processes
 -f, --full                use full process name to match
 -g, --pgroup <PGID,...>   match listed process group IDs
 -G, --group <GID,...>     match real group IDs
 -i, --ignore-case         match case insensitively
 -n, --newest              select most recently started
 -o, --oldest              select least recently started
 -O, --older <seconds>     select where older than seconds
 -P, --parent <PPID,...>   match only child processes of the given parent
 -s, --session <SID,...>   match session IDs
     --signal <sig>        signal to send (either number or name)
 -t, --terminal <tty,...>  match by controlling terminal
 -u, --euid <ID,...>       match by effective IDs
 -U, --uid <ID,...>        match by real IDs
 -x, --exact               match exactly with the command name
 -F, --pidfile <file>      read PIDs from file
 -L, --logpidfile          fail if PID file is not locked
 -r, --runstates <state>   match runstates [D,S,Z,...]
 -A, --ignore-ancestors    exclude our ancestors from results
 --cgroup <grp,...>        match by cgroup v2 names
 --ns <PID>                match the processes that belong to the same
                           namespace as <pid>
 --nslist <ns,...>         list which namespaces will be considered for
                           the --ns option.
                           Available namespaces: ipc, mnt, net, pid, user, uts

 -h, --help     display this help and exit
 -V, --version  output version information and exit

For more details see pgrep(1).
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
        simpleExplain: "按名称杀死进程，就像点名让人下班",
        detailExplain: "就像 pgrep + kill 的组合拳——先根据进程名找到对应的进程，然后直接发送终止信号把它杀掉。不用先查 PID 再 kill，一步到位。比如 pkill firefox 就能把所有 Firefox 进程都关掉。",
        helpOutput: `
Usage:
 pkill [options] <pattern>

Options:
 -<sig>                    signal to send (either number or name)
 -H, --require-handler     match only if signal handler is present
 -q, --queue <value>       integer value to be sent with the signal
 -e, --echo                display what is killed
 -c, --count               count of matching processes
 -f, --full                use full process name to match
 -g, --pgroup <PGID,...>   match listed process group IDs
 -G, --group <GID,...>     match real group IDs
 -i, --ignore-case         match case insensitively
 -n, --newest              select most recently started
 -o, --oldest              select least recently started
 -O, --older <seconds>     select where older than seconds
 -P, --parent <PPID,...>   match only child processes of the given parent
 -s, --session <SID,...>   match session IDs
     --signal <sig>        signal to send (either number or name)
 -t, --terminal <tty,...>  match by controlling terminal
 -u, --euid <ID,...>       match by effective IDs
 -U, --uid <ID,...>        match by real IDs
 -x, --exact               match exactly with the command name
 -F, --pidfile <file>      read PIDs from file
 -L, --logpidfile          fail if PID file is not locked
 -r, --runstates <state>   match runstates [D,S,Z,...]
 -A, --ignore-ancestors    exclude our ancestors from results
 --cgroup <grp,...>        match by cgroup v2 names
 --ns <PID>                match the processes that belong to the same
                           namespace as <pid>
 --nslist <ns,...>         list which namespaces will be considered for
                           the --ns option.
                           Available namespaces: ipc, mnt, net, pid, user, uts

 -h, --help     display this help and exit
 -V, --version  output version information and exit

For more details see pgrep(1).
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
        simpleExplain: "按进程名杀死所有同名进程，就像通知所有叫这个名字的人都下班",
        detailExplain: "就像广播通知：「所有叫 Tom 的人请下班！」——不管有几个 Tom，全部一起叫停。killall 和 pkill 类似，但 killall 要求进程名必须完全匹配，更严格一些。",
        helpOutput: `Usage: killall [OPTION]... [--] NAME...
Send a signal to processes by name.

Options:
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
        simpleExplain: "周期性重复执行命令，就像每隔几分钟看一次手表确认时间",
        detailExplain: "就像你设置了一个闹钟每隔几秒钟提醒你看一次某个指标——watch 会反复执行同一个命令并把结果刷新显示在屏幕上。比如 watch -n 2 df -h 每 2 秒刷新一次磁盘用量，非常直观地观察变化趋势。",
        helpOutput: `
Usage:
 watch [options] command

Options:
  -b, --beep             beep if command has a non-zero exit
  -c, --color            interpret ANSI color and style sequences
  -C, --no-color         do not interpret ANSI color and style sequences
  -d, --differences[=<permanent>]
                         highlight changes between updates
  -e, --errexit          exit if command has a non-zero exit
  -g, --chgexit          exit when output from command changes
  -q, --equexit <cycles>
                         exit when output from command does not change
  -n, --interval <secs>  seconds to wait between updates
  -p, --precise          attempt run command in precise intervals
  -r, --no-rerun         do not rerun program on window resize
  -t, --no-title         turn off header
  -w, --no-wrap          turn off line wrapping
  -x, --exec             pass command to exec instead of "sh -c"

 -h, --help     display this help and exit
 -v, --version  output version information and exit

For more details see watch(1).
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
        simpleExplain: "虚拟终端管理器，就像随身携带一个可以随时打开的便携工作站",
        detailExplain: "就像一个可以随时打开、关闭、带走的便携式虚拟终端——你在 screen 里启动的任务不会因为 SSH 断开而被杀死。可以创建多个「窗口」，每个窗口运行不同的任务。即使你关掉电脑回家，screen 里的任务仍在服务器上默默运行着。",
        helpOutput: `Usage: screen [options] [cmd [args]]

Screen is a full-screen window manager that multiplexes a physical terminal.

Options:
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
        simpleExplain: "终端复用器，就像在一个屏幕上同时开多个窗口办公",
        detailExplain: "就像一个超级工作站——你可以把一个终端屏幕分割成多个窗格（pane），每个窗格运行不同的命令；也可以创建多个标签页（window），每个标签页是一组窗格布局。最重要的是，tmux 里的任务不受 SSH 断开的影响，下次重新连接一切都在。",
        helpOutput: `usage: tmux [-2CDluvV] [-c shell-command] [-f file] [-L socket-name]
            [-S socket-path] [-T terminal-title] [command [flags]]

Commands:
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
        simpleExplain: "定时任务管理器，就像每天定时响铃的智能闹钟",
        detailExplain: "就像你设定了一个超级智能闹钟——不仅每天早上叫你起床，还能在每个周一上午 9 点自动备份文件、每月 1 号凌晨清理临时文件、每隔 5 分钟检查一次服务状态。crontab 就是 Linux 的「定时任务管家」。",
        helpOutput: `Usage: crontab [options] file
       crontab [options]

Options:
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
        simpleExplain: "系统服务控制器，就像管理公司各部门的总指挥中心",
        detailExplain: "就像一家大公司的总控制中心——可以启动/停止各个部门（服务）、查看各部门运行状态、设置开机自启、查看服务日志。现代 Linux 系统都用 systemd 管理服务，systemctl 就是最核心的控制面板。",
        helpOutput: `systemctl [OPTIONS...] COMMAND ...

Query or send control commands to the system manager.

[0mUnit Commands:
  list-units [PATTERN...]             List units currently in memory
  list-automounts [PATTERN...]        List automount units currently in memory,
                                      ordered by path
  list-paths [PATTERN...]             List path units currently in memory,
                                      ordered by path
  list-sockets [PATTERN...]           List socket units currently in memory,
                                      ordered by address
  list-timers [PATTERN...]            List timer units currently in memory,
                                      ordered by next elapse
  is-active PATTERN...                Check whether units are active
  is-failed [PATTERN...]              Check whether units are failed or
                                      system is in degraded state
  status [PATTERN...|PID...]          Show runtime status of one or more units
  show [PATTERN...|JOB...]            Show properties of one or more
                                      units/jobs or the manager
  cat PATTERN...                      Show files and drop-ins of specified units
  help PATTERN...|PID...              Show manual for one or more units
  list-dependencies [UNIT...]         Recursively show units which are required
                                      or wanted by the units or by which those
                                      units are required or wanted
  start UNIT...                       Start (activate) one or more units
  stop UNIT...                        Stop (deactivate) one or more units
  reload UNIT...                      Reload one or more units
  restart UNIT...                     Start or restart one or more units
  try-restart UNIT...                 Restart one or more units if active
  reload-or-restart UNIT...           Reload one or more units if possible,
                                      otherwise start or restart
  try-reload-or-restart UNIT...       If active, reload one or more units,
                                      if supported, otherwise restart
  isolate UNIT                        Start one unit and stop all others
  kill UNIT...                        Send signal to processes of a unit
  clean UNIT...                       Clean runtime, cache, state, logs or
                                      configuration of unit
  freeze PATTERN...                   Freeze execution of unit processes
  thaw PATTERN...                     Resume execution of a frozen unit
  set-property UNIT PROPERTY=VALUE... Sets one or more properties of a unit
  bind UNIT PATH [PATH]               Bind-mount a path from the host into a
                                      unit's namespace
  mount-image UNIT PATH [PATH [OPTS]] Mount an image from the host into a
                                      unit's namespace
  service-log-level SERVICE [LEVEL]   Get/set logging threshold for service
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
        simpleExplain: "传统服务管理命令，就像老式的手动控制面板",
        detailExplain: "就像 systemctl 的老前辈——在较旧的 Linux 系统上用来管理服务的启停。虽然新系统推荐用 systemctl，但 service 命令在很多场合仍然可用，而且语法更简单直观。",
        helpOutput: `Usage: service < option > | --status-all | [ service_name [ command | --full-restart ] ]
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
        simpleExplain: "一次性定时任务，就像定好今晚 8 点提醒自己做一件事",
        detailExplain: "就像手机上的「提醒」功能——设定一个未来的时间点，到时候系统自动帮你执行一次指定命令。和 crontab 不同，at 只执行一次就结束了，适合「今天下午 3 点发一封邮件」这种一次性需求。",
        helpOutput: `Usage: at [-V] [-q queue] [-f file] [-mMlv] timespec ...
       at [-V] [-q queue] [-f file] [-mMkv] [-t time]
       at -c job [job...]
       atq [-V] [-q queue]
       atrm [-V] job [job...]
       batch

Options:
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
        simpleExplain: "查找正在运行程序的进程ID，就像在人群中找到某人的身份证号",
        detailExplain: "就像在一个人山人海的广场上，你想找到某个叫「张三」的人——pidof 能直接告诉你他的身份证号（PID），方便你后续对他进行操作，比如发送信号或查看详情。",
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
        simpleExplain: "列出被进程打开的文件，就像查看谁正在使用哪些房间",
        detailExplain: "就像酒店前台查看每个房间住了谁——lsof 能告诉你哪个进程打开了哪些文件、端口或目录。在排查「文件被谁占用无法删除」或「端口被谁占用」时特别有用，就像查房记录一样一目了然。",
        helpOutput: `lsof: illegal option character: -
lsof: -e not followed by a file system path: "lp"
lsof 4.95.0
 latest revision: https://github.com/lsof-org/lsof
 latest FAQ: https://github.com/lsof-org/lsof/blob/master/00FAQ
 latest (non-formatted) man page: https://github.com/lsof-org/lsof/blob/master/Lsof.8
 usage: [-?abhKlnNoOPRtUvVX] [+|-c c] [+|-d s] [+D D] [+|-E] [+|-e s] [+|-f[gG]]
 [-F [f]] [-g [s]] [-i [i]] [+|-L [l]] [+m [m]] [+|-M] [-o [o]] [-p s]
 [+|-r [t]] [-s [p:s]] [-S [t]] [-T [t]] [-u s] [+|-w] [-x [fl]] [--] [names]
Defaults in parentheses; comma-separated set (s) items; dash-separated ranges.
  -?|-h list help          -a AND selections (OR)     -b avoid kernel blocks
  -c c  cmd c ^c /c/[bix]  +c w  COMMAND width (9)    +d s  dir s files
  -d s  select by FD set   +D D  dir D tree *SLOW?*   +|-e s  exempt s *RISKY*
  -i select IPv[46] files  -K [i] list|(i)gn tasKs    -l list UID numbers
  -n no host names         -N select NFS files        -o list file offset
  -O no overhead *RISKY*   -P no port names           -Q allow failed search
  -R list paRent PID       -s list file size          -t terse listing
  -T disable TCP/TPI info  -U select Unix socket      -v list version info
  -V verbose search        +|-w  Warnings (+)         -X skip TCP&UDP* files
  -Z Z  context [Z]        -- end option scan       
  -E display endpoint info              +E display endpoint info and files
  +f|-f  +filesystem or -file names     +|-f[gG] flaGs 
  -F [f] select fields; -F? for help  
  +|-L [l] list (+) suppress (-) link counts < l (0 = all; default = 0)
                                        +m [m] use|create mount supplement
  +|-M   portMap registration (-)       -o o   o 0t offset digits (8)
  -p s   exclude(^)|select PIDs         -S [t] t second stat timeout (15)
  -T fqs TCP/TPI Fl,Q,St (s) info
  -g [s] exclude(^)|select and print process group IDs
  -i i   select by IPv[46] address: [46][proto][@host|addr][:svc_list|port_list]
  +|-r [t[m<fmt>]] repeat every t seconds (15);  + until no files, - forever.
       An optional suffix to t is m<fmt>; m must separate t from <fmt> and
      <fmt> is an strftime(3) format for the marker line.
  -s p:s  exclude(^)|select protocol (p = TCP|UDP) states by name(s).
  -u s   exclude(^)|select login|UID set s
  -x [fl] cross over +d|+D File systems or symbolic Links
  names  select named files or files on named file systems
Anyone can list all files; /dev warnings disabled; kernel ID check disabled.
`,
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
        simpleExplain: "跟踪程序的系统调用，就像给程序装上监控摄像头看它的一举一动",
        detailExplain: "就像给程序装了一套全方位监控摄像头——程序每次跟操作系统「对话」（系统调用），strace 都会记录下来。程序打开文件、读写数据、网络通信，全都被拍得一清二楚，是排查程序故障的利器。",
        helpOutput: `Usage: strace [-ACdffhikqqrtttTvVwxxyyzZ] [-I N] [-b execve] [-e EXPR]...
              [-a COLUMN] [-o FILE] [-s STRSIZE] [-X FORMAT] [-O OVERHEAD]
              [-S SORTBY] [-P PATH]... [-p PID]... [-U COLUMNS] [--seccomp-bpf]
              { -p PID | [-DDD] [-E VAR=VAL]... [-u USERNAME] PROG [ARGS] }
   or: strace -c[dfwzZ] [-I N] [-b execve] [-e EXPR]... [-O OVERHEAD]
              [-S SORTBY] [-P PATH]... [-p PID]... [-U COLUMNS] [--seccomp-bpf]
              { -p PID | [-DDD] [-E VAR=VAL]... [-u USERNAME] PROG [ARGS] }

General:
  -e EXPR        a qualifying expression: OPTION=[!]all or OPTION=[!]VAL1[,VAL2]...
     options:    trace, abbrev, verbose, raw, signal, read, write, fault,
                 inject, status, quiet, kvm, decode-fds

Startup:
  -E VAR=VAL, --env=VAR=VAL
                 put VAR=VAL in the environment for command
  -E VAR, --env=VAR
                 remove VAR from the environment for command
  -p PID, --attach=PID
                 trace process with process id PID, may be repeated
  -u USERNAME, --user=USERNAME
                 run command as USERNAME handling setuid and/or setgid
  --argv0=NAME   set PROG argv[0] to NAME

Tracing:
  -b execve, --detach-on=execve
                 detach on execve syscall
  -D, --daemonize[=grandchild]
                 run tracer process as a grandchild, not as a parent
  -DD, --daemonize=pgroup
                 run tracer process in a separate process group
  -DDD, --daemonize=session
                 run tracer process in a separate session
  -f, --follow-forks
                 follow forks
  -ff, --follow-forks --output-separately
                 follow forks with output into separate files
  -I INTERRUPTIBLE, --interruptible=INTERRUPTIBLE
     1, anywhere:   no signals are blocked
     2, waiting:    fatal signals are blocked while decoding syscall (default)
     3, never:      fatal signals are always blocked (default if '-o FILE PROG')
     4, never_tstp: fatal signals and SIGTSTP (^Z) are always blocked
                    (useful to make 'strace -o FILE PROG' not stop on ^Z)
  --kill-on-exit kill all tracees if strace is killed

Filtering:
  -e trace=[!][?]{{SYSCALL|GROUP|all|/REGEX}[@64|@32|@x32]|none},
   --trace=[!][?]{{SYSCALL|GROUP|all|/REGEX}[@64|@32|@x32]|none}
                 trace only specified syscalls.
     groups:     %clock, %creds, %desc, %file, %fstat, %fstatfs %ipc, %lstat,
                 %memory, %net, %process, %pure, %signal, %stat, %%stat,
                 %statfs, %%statfs
  -e signal=SET, --signal=SET
                 trace only the specified set of signals
                 print only the signals from SET
  -e status=SET, --status=SET
                 print only system calls with the return statuses in SET
     statuses:   successful, failed, unfinished, unavailable, detached
  -e trace-fds=SET, --trace-fds=SET
                 trace operations on file descriptors from SET
  -P PATH, --trace-path=PATH
                 trace accesses to PATH
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
        simpleExplain: "跟踪程序的库函数调用，就像监听程序和外部服务的电话记录",
        detailExplain: "就像监听程序打电话给各种外部服务（库函数）的通话记录——程序调用了 printf、malloc、fopen 这些库函数时，ltrace 都会记录下来。和 strace 不同，ltrace 关注的是程序和库的交互，而不是和操作系统的交互。",
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
        simpleExplain: "设置进程的IO调度优先级，就像给快递分配不同的配送等级",
        detailExplain: "就像快递公司给包裹分了「加急」「普通」「不着急」三个等级——ionice 让你决定某个程序读写磁盘时的优先级。重要的程序可以插队优先读写，不急的后台备份任务可以等别人用完磁盘再说，避免磁盘忙得团团转。",
        helpOutput: `
Usage:
 ionice [options] -p <pid>...
 ionice [options] -P <pgid>...
 ionice [options] -u <uid>...
 ionice [options] <command>

Show or change the I/O-scheduling class and priority of a process.

Options:
 -c, --class <class>    name or number of scheduling class,
                          0: none, 1: realtime, 2: best-effort, 3: idle
 -n, --classdata <num>  priority (0..7) in the specified scheduling class,
                          only for the realtime and best-effort classes
 -p, --pid <pid>...     act on these already running processes
 -P, --pgid <pgrp>...   act on already running processes in these groups
 -t, --ignore           ignore failures
 -u, --uid <uid>...     act on already running processes owned by these users

 -h, --help             display this help
 -V, --version          display version

For more details see ionice(1).
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
        simpleExplain: "将进程绑定到指定CPU核心，就像指定某个员工只在特定工位工作",
        detailExplain: "就像公司规定某个员工只能在 3 号工位办公——taskset 把进程「绑」到特定的 CPU 核心上运行。这样可以避免进程在不同核心之间跳来跳去，提高缓存命中率，适合对性能要求极高的场景。",
        helpOutput: `Usage: taskset [options] [mask | cpu-list] [pid|cmd [args...]]


Show or change the CPU affinity of a process.

Options:
 -a, --all-tasks         operate on all the tasks (threads) for a given pid
 -p, --pid               operate on existing given pid
 -c, --cpu-list          display and specify cpus in list format
 -h, --help              display this help
 -V, --version           display version

The default behavior is to run a new command:
    taskset 03 sshd -b 1024
You can retrieve the mask of an existing task:
    taskset -p 700
Or set it:
    taskset -p 03 700
List format uses a comma-separated list instead of a mask:
    taskset -pc 0,3,7-11 700
Ranges in list format can take a stride argument:
    e.g. 0-31:2 is equivalent to mask 0x55555555

For more details see taskset(1).
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
        simpleExplain: "查看或修改进程资源限制，就像给员工设置工作额度上限",
        detailExplain: "就像给员工规定每天最多能处理多少单、用多少材料——prlimit 可以查看或修改进程能使用的系统资源上限，比如最多打开多少文件、最多使用多少内存、最多能创建多少进程等，防止单个进程把系统资源吃光。",
        helpOutput: `
Usage:
 prlimit [options] [--<resource>=<limit>] [-p PID]
 prlimit [options] [--<resource>=<limit>] COMMAND

Show or change the resource limits of a process.

Options:
 -p, --pid <pid>        process id
 -o, --output <list>    define which output columns to use
     --noheadings       don't print headings
     --raw              use the raw output format
     --verbose          verbose output
 -h, --help             display this help
 -V, --version          display version

Resources:
 -c, --core             maximum size of core files created
 -d, --data             maximum size of a process's data segment
 -e, --nice             maximum nice priority allowed to raise
 -f, --fsize            maximum size of files written by the process
 -i, --sigpending       maximum number of pending signals
 -l, --memlock          maximum size a process may lock into memory
 -m, --rss              maximum resident set size
 -n, --nofile           maximum number of open files
 -q, --msgqueue         maximum bytes in POSIX message queues
 -r, --rtprio           maximum real-time scheduling priority
 -s, --stack            maximum stack size
 -t, --cpu              maximum amount of CPU time in seconds
 -u, --nproc            maximum number of user processes
 -v, --as               size of virtual memory
 -x, --locks            maximum number of file locks
 -y, --rttime           CPU time in microseconds a process scheduled
                        under real-time scheduling

Arguments:
 <limit> is defined as a range soft:hard, soft:, :hard or a value to
         define both limits (e.g. -e=0:10 -r=:10).

Available output columns:
 DESCRIPTION  resource description
    RESOURCE  resource name
        SOFT  soft limit
        HARD  hard limit (ceiling)
       UNITS  units

For more details see prlimit(1).
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
        simpleExplain: "修改进程的实时调度策略，就像给紧急任务开辟绿色通道",
        detailExplain: "就像医院给危重病人开辟绿色通道——chrt 可以让某些进程获得「实时调度」的特权，确保它们在任何情况下都能第一时间获得 CPU 时间。适合对响应时间要求极高的任务，比如音视频处理、工业控制等。",
        helpOutput: `Show or change the real-time scheduling attributes of a process.

Set policy:
 chrt [options] <priority> <command> [<arg>...]
 chrt [options] --pid <priority> <pid>

Get policy:
 chrt [options] -p <pid>

Policy options:
 -b, --batch          set policy to SCHED_BATCH
 -d, --deadline       set policy to SCHED_DEADLINE
 -f, --fifo           set policy to SCHED_FIFO
 -i, --idle           set policy to SCHED_IDLE
 -o, --other          set policy to SCHED_OTHER
 -r, --rr             set policy to SCHED_RR (default)

Scheduling options:
 -R, --reset-on-fork       set reset-on-fork flag
 -T, --sched-runtime <ns>  runtime parameter for DEADLINE
 -P, --sched-period <ns>   period parameter for DEADLINE
 -D, --sched-deadline <ns> deadline parameter for DEADLINE

Other options:
 -a, --all-tasks      operate on all the tasks (threads) for a given pid
 -m, --max            show min and max valid priorities
 -p, --pid            operate on existing given pid
 -v, --verbose        display status information

 -h, --help           display this help
 -V, --version        display version

For more details see chrt(1).
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
        simpleExplain: "查看进程的工作目录，就像查看某人当前在哪里办公",
        detailExplain: "就像想知道同事现在在哪个办公室——pwdx 能告诉你某个进程当前的工作目录是什么。这在排查「程序从哪里运行」或「相对路径为什么不对」时非常有用，直接定位进程的「办公地点」。",
        helpOutput: `
Usage:
 pwdx [options] pid...

Options:
 -h, --help     display this help and exit
 -V, --version  output version information and exit

For more details see pwdx(1).
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
        simpleExplain: "以树形结构显示进程关系，就像画一张家族族谱来看谁是谁的上级",
        detailExplain: "就像画一张家族族谱——pstree 把进程之间的父子关系用树状图展示出来，让你一眼看出哪个进程是「家长」，哪些是「孩子」。比 ps 的列表更直观，特别适合理解进程的层级关系。",
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
        simpleExplain: "捕获并处理Shell信号，就像设置一个陷阱来捕获特定事件",
        detailExplain: "就像在家里安装了烟雾报警器——当特定信号（比如 Ctrl+C 的中断信号）到来时，trap 会「捕获」它并执行你预设的命令，而不是让程序直接崩溃退出。常用于脚本退出时做清理工作，比如删除临时文件、释放资源。",
        helpOutput: `trap: trap [-lp] [[arg] signal_spec ...]
    Trap signals and other events.
    
    Defines and activates handlers to be run when the shell receives signals
    or other conditions.
    
    ARG is a command to be read and executed when the shell receives the
    signal(s) SIGNAL_SPEC.  If ARG is absent (and a single SIGNAL_SPEC
    is supplied) or \`-', each specified signal is reset to its original
    value.  If ARG is the null string each SIGNAL_SPEC is ignored by the
    shell and by the commands it invokes.
    
    If a SIGNAL_SPEC is EXIT (0) ARG is executed on exit from the shell.  If
    a SIGNAL_SPEC is DEBUG, ARG is executed before every simple command.  If
    a SIGNAL_SPEC is RETURN, ARG is executed each time a shell function or a
    script run by the . or source builtins finishes executing.  A SIGNAL_SPEC
    of ERR means to execute ARG each time a command's failure would cause the
    shell to exit when the -e option is enabled.
    
    If no arguments are supplied, trap prints the list of commands associated
    with each signal.
    
    Options:
      -l	print a list of signal names and their corresponding numbers
      -p	display the trap commands associated with each SIGNAL_SPEC
    
    Each SIGNAL_SPEC is either a signal name in <signal.h> or a signal number.
    Signal names are case insensitive and the SIG prefix is optional.  A
    signal may be sent to the shell with "kill -signal $$".
    
    Exit Status:
    Returns success unless a SIGSPEC is invalid or an invalid option is given.
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
        simpleExplain: "测试网络连通性，就像对着远处的人喊一声看他有没有回应",
        detailExplain: "就像你在山谷里大喊一声「喂——！」然后听有没有回声——如果有回声说明路是通的，没回声可能是对方不在或者路断了。ping 向目标主机发送 ICMP 数据包，通过一来一回的过程判断网络是否通畅以及延迟有多高。",
        helpOutput: `ping: invalid option -- '-'

Usage
  ping [options] <destination>

Options:
  <destination>      DNS name or IP address
  -a                 use audible ping
  -A                 use adaptive ping
  -B                 sticky source address
  -c <count>         stop after <count> replies
  -C                 call connect() syscall on socket creation
  -D                 print timestamps
  -d                 use SO_DEBUG socket option
  -e <identifier>    define identifier for ping session, default is random for
                     SOCK_RAW and kernel defined for SOCK_DGRAM
                     Imply using SOCK_RAW (for IPv4 only for identifier 0)
  -f                 flood ping
  -h                 print help and exit
  -H                 force reverse DNS name resolution (useful for numeric
                     destinations or for -f), override -n
  -I <interface>     either interface name or address
  -i <interval>      seconds between sending each packet
  -L                 suppress loopback of multicast packets
  -l <preload>       send <preload> number of packages while waiting replies
  -m <mark>          tag the packets going out
  -M <pmtud opt>     define path MTU discovery, can be one of <do|dont|want|probe>
  -n                 no reverse DNS name resolution, override -H
  -O                 report outstanding replies
  -p <pattern>       contents of padding byte
  -q                 quiet output
  -Q <tclass>        use quality of service <tclass> bits
  -s <size>          use <size> as number of data bytes to be sent
  -S <size>          use <size> as SO_SNDBUF socket option value
  -t <ttl>           define time to live
  -U                 print user-to-user latency
  -v                 verbose output
  -V                 print version and exit
  -w <deadline>      reply wait <deadline> in seconds
  -W <timeout>       time to wait for response

IPv4 options:
  -4                 use IPv4
  -b                 allow pinging broadcast
  -R                 record route
  -T <timestamp>     define timestamp, can be one of <tsonly|tsandaddr|tsprespec>

IPv6 options:
  -6                 use IPv6
  -F <flowlabel>     define flow label, default is random
  -N <nodeinfo opt>  use IPv6 node info query, try <help> as argument

For more details see ping(8).
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
        simpleExplain: "配置和查看网络接口，就像查看和设置网卡的「身份证」信息",
        detailExplain: "就像查看电脑网卡的名片——IP 地址是多少、MAC 地址是什么、收发了多少数据包、网络是开启还是关闭状态。虽然新系统推荐用 ip 命令替代，但 ifconfig 依然被广泛使用。",
        helpOutput: `Usage:
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

  <HW>=Hardware Type.
  List of possible hardware types:
  <AF>=Address family. Default: inet
  List of possible address families:
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
        simpleExplain: "强大的网络数据传输工具，就像万能的网络浏览器命令行版",
        detailExplain: "就像一个全能的网络浏览器——但没有图形界面。它可以下载文件、上传数据、访问 API 接口、测试网站响应、发送各种 HTTP 请求。curl 是开发者和运维人员最常用的网络工具之一。",
        helpOutput: `Usage: curl [options...] <url>
 -d, --data <data>          HTTP POST data
 -f, --fail                 Fail fast with no output on HTTP errors
 -h, --help <category>      Get help for commands
 -i, --include              Include protocol response headers in the output
 -o, --output <file>        Write to file instead of stdout
 -O, --remote-name          Write output to a file named as the remote file
 -s, --silent               Silent mode
 -T, --upload-file <file>   Transfer local FILE to destination
 -u, --user <user:password> Server user and password
 -A, --user-agent <name>    Send User-Agent <name> to server
 -v, --verbose              Make the operation more talkative
 -V, --version              Show version number and quit

This is not the full help, this menu is stripped into categories.
Use "--help category" to get an overview of all categories.
For all options use the manual or "--help all".
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
        simpleExplain: "网络文件下载工具，就像一个不知疲倦的下载机器人",
        detailExplain: "就像一个专门负责下载文件的机器人——你给它一个网址，它就会把文件下载到本地。wget 比 curl 更专注于「下载」这件事，支持断点续传、递归下载整个网站、限速等功能。",
        helpOutput: `GNU Wget 1.21.4, a non-interactive network retriever.
Usage: wget [OPTION]... [URL]...

Mandatory arguments to long options are mandatory for short options too.

Startup:
  -V,  --version                   display the version of Wget and exit
  -h,  --help                      print this help
  -b,  --background                go to background after startup
  -e,  --execute=COMMAND           execute a \`.wgetrc'-style command

Logging and input file:
  -o,  --output-file=FILE          log messages to FILE
  -a,  --append-output=FILE        append messages to FILE
  -d,  --debug                     print lots of debugging information
  -q,  --quiet                     quiet (no output)
  -v,  --verbose                   be verbose (this is the default)
  -nv, --no-verbose                turn off verboseness, without being quiet
       --report-speed=TYPE         output bandwidth as TYPE.  TYPE can be bits
  -i,  --input-file=FILE           download URLs found in local or external FILE
  -F,  --force-html                treat input file as HTML
  -B,  --base=URL                  resolves HTML input-file links (-i -F)
                                     relative to URL
       --config=FILE               specify config file to use
       --no-config                 do not read any config file
       --rejected-log=FILE         log reasons for URL rejection to FILE

Download:
  -t,  --tries=NUMBER              set number of retries to NUMBER (0 unlimits)
       --retry-connrefused         retry even if connection is refused
       --retry-on-host-error       consider host errors as non-fatal, transient errors
       --retry-on-http-error=ERRORS    comma-separated list of HTTP errors to retry
  -O,  --output-document=FILE      write documents to FILE
  -nc, --no-clobber                skip downloads that would download to
                                     existing files (overwriting them)
       --no-netrc                  don't try to obtain credentials from .netrc
  -c,  --continue                  resume getting a partially-downloaded file
       --start-pos=OFFSET          start downloading from zero-based position OFFSET
       --progress=TYPE             select progress gauge type
       --show-progress             display the progress bar in any verbosity mode
  -N,  --timestamping              don't re-retrieve files unless newer than
                                     local
       --no-if-modified-since      don't use conditional if-modified-since get
                                     requests in timestamping mode
       --no-use-server-timestamps  don't set the local file's timestamp by
                                     the one on the server
  -S,  --server-response           print server response
       --spider                    don't download anything
  -T,  --timeout=SECONDS           set all timeout values to SECONDS
       --dns-timeout=SECS          set the DNS lookup timeout to SECS
       --connect-timeout=SECS      set t`,
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
        simpleExplain: "安全远程登录，就像通过网络远程操控另一台电脑",
        detailExplain: "就像你坐在家里的电脑前，却能像坐在办公室一样操控公司的服务器——键盘敲什么，远端的电脑就执行什么，屏幕上显示的结果实时传回来。SSH 的所有传输都是加密安全的。",
        helpOutput: `unknown option -- -
usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface] [-b bind_address]
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
        simpleExplain: "安全远程文件拷贝，就像通过加密快递通道寄送文件",
        detailExplain: "就像通过一条加密的安全快递通道在两台电脑之间传送文件——基于 SSH 协议，传输过程全程加密。可以从本地传到远程、从远程传到本地。",
        helpOutput: `scp: unknown option -- -
usage: scp [-346ABCOpqRrsTv] [-c cipher] [-D sftp_server_path] [-F ssh_config]
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
        simpleExplain: "查看网络连接状态，就像查看电话交换机的通话记录",
        detailExplain: "就像电信局的通话记录显示器——谁在和谁通话、用的是哪个端口、处于什么状态。虽然逐渐被 ss 取代，但 netstat 依然是经典工具。",
        helpOutput: `usage: netstat [-vWeenNcCF] [<Af>] -r         netstat {-V|--version|-h|--help}
       netstat [-vWnNcaeol] [<Socket> ...]
       netstat { [-vWeenNac] -i | [-cnNe] -M | -s [-6tuw] }

        -r, --route              display routing table
        -i, --interfaces         display interface table
        -g, --groups             display multicast group memberships
        -s, --statistics         display networking statistics (like SNMP)
        -M, --masquerade         display masqueraded connections

        -v, --verbose            be verbose
        -W, --wide               don't truncate IP addresses
        -n, --numeric            don't resolve names
        --numeric-hosts          don't resolve host names
        --numeric-ports          don't resolve port names
        --numeric-users          don't resolve user names
        -N, --symbolic           resolve hardware names
        -e, --extend             display other/more information
        -p, --programs           display PID/Program name for sockets
        -o, --timers             display timers
        -c, --continuous         continuous listing

        -l, --listening          display listening server sockets
        -a, --all                display all sockets (default: connected)
        -F, --fib                display Forwarding Information Base (default)
        -C, --cache              display routing cache instead of FIB
        -Z, --context            display SELinux security context for sockets

  <Socket>={-t|--tcp} {-u|--udp} {-U|--udplite} {-S|--sctp} {-w|--raw}
           {-x|--unix} --ax25 --ipx --netrom
  <AF>=Use '-6|-4' or '-A <af>' or '--<af>'; default: inet
  List of possible address families (which support routing):
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
        simpleExplain: "新一代网络连接查看工具，就像 netstat 的升级高速版",
        detailExplain: "就像 netstat 的现代化升级版——更快、更强大、信息更丰富。ss 直接从内核获取网络连接信息，在连接数量很大的服务器上比 netstat 快得多。",
        helpOutput: `Usage: ss [ OPTIONS ]
       ss [ OPTIONS ] [ FILTER ]
   -h, --help          this message
   -V, --version       output version information
   -n, --numeric       don't resolve service names
   -r, --resolve       resolve host names
   -a, --all           display all sockets
   -l, --listening     display listening sockets
   -o, --options       show timer information
   -e, --extended      show detailed socket information
   -m, --memory        show socket memory usage
   -p, --processes     show process using socket
   -T, --threads       show thread using socket
   -i, --info          show internal TCP information
       --tipcinfo      show internal tipc socket information
   -s, --summary       show socket usage summary
       --tos           show tos and priority information
       --cgroup        show cgroup information
   -b, --bpf           show bpf filter socket information
   -E, --events        continually display sockets as they are destroyed
   -Z, --context       display task SELinux security contexts
   -z, --contexts      display task and socket SELinux security contexts
   -N, --net           switch to the specified network namespace name

   -4, --ipv4          display only IP version 4 sockets
   -6, --ipv6          display only IP version 6 sockets
   -0, --packet        display PACKET sockets
   -t, --tcp           display only TCP sockets
   -M, --mptcp         display only MPTCP sockets
   -S, --sctp          display only SCTP sockets
   -u, --udp           display only UDP sockets
   -d, --dccp          display only DCCP sockets
   -w, --raw           display only RAW sockets
   -x, --unix          display only Unix domain sockets
       --tipc          display only TIPC sockets
       --vsock         display only vsock sockets
       --xdp           display only XDP sockets
   -f, --family=FAMILY display sockets of type FAMILY
       FAMILY := {inet|inet6|link|unix|netlink|vsock|tipc|xdp|help}

   -K, --kill          forcibly close sockets, display what was closed
   -H, --no-header     Suppress header line
   -O, --oneline       socket's data printed on a single line
       --inet-sockopt  show various inet socket options

   -A, --query=QUERY, --socket=QUERY
       QUERY := {all|inet|tcp|mptcp|udp|raw|unix|unix_dgram|unix_stream|unix_seqpacket|packet|packet_raw|packet_dgram|netlink|dccp|sctp|vsock_stream|vsock_dgram|tipc|xdp}[,QUERY]

   -D, --diag=FILE     Dump raw information about TCP sockets to FILE
   -F, --filter=FILE   read filter information from FILE
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
        simpleExplain: "DNS 查询工具，就像查通讯录把人名翻译成电话号码",
        detailExplain: "就像你只知道朋友的名字（域名），想知道他的电话号码（IP 地址）——nslookup 帮你去 DNS 服务器上查这个映射关系。",
        helpOutput: `*** Invalid option: -help

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
        simpleExplain: "高级 DNS 查询工具，就像 nslookup 的专业增强版",
        detailExplain: "就像 nslookup 的专业版——输出的信息更加详细和专业，可以看到完整的 DNS 查询过程、响应时间等。深受网络管理员喜爱。",
        helpOutput: `Invalid option: --help
Usage:  dig [@global-server] [domain] [q-type] [q-class] {q-opt}
            {global-d-opt} host [@local-server] {local-d-opt}
            [ host [@local-server] {local-d-opt} [...]]

Use "dig -h" (or "dig -h | more") for complete list of options
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
        simpleExplain: "追踪网络路径，就像查看快递包裹经过了哪些中转站",
        detailExplain: "就像你寄出一个快递包裹，traceroute 帮你追踪这个包裹从你家出发，经过了哪些中转站（路由器），最终到达目的地。每一跳都会显示经过的路由器 IP 和耗时。",
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
        simpleExplain: "查看和修改路由表，就像查看和设置导航地图的路线规则",
        detailExplain: "就像 GPS 导航中的路由规划表——告诉数据包要去某个目的地应该走哪条路。route 可以查看当前的路由规则，也可以手动添加或删除路由条目。",
        helpOutput: `Usage: route [-nNvee] [-FC] [<AF>]           List kernel routing tables
       route [-v] [-FC] {add|del|flush} ...  Modify routing table for AF.

       route {-h|--help} [<AF>]              Detailed usage syntax for specified AF.
       route {-V|--version}                  Display version/author and exit.

        -v, --verbose            be verbose
        -n, --numeric            don't resolve names
        -e, --extend             display other/more information
        -F, --fib                display Forwarding Information Base (default)
        -C, --cache              display routing cache instead of FIB

  <AF>=Use -4, -6, '-A <af>' or '--<af>'; default: inet
  List of possible address families (which support routing):
`,
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
        simpleExplain: "多功能网络配置工具，就像瑞士军刀般的网络管理神器",
        detailExplain: "就像一套瑞士军刀——以前需要 ifconfig、route、arp、netstat 等多个命令做的事，ip 一个命令全部搞定。ip addr 管地址、ip route 管路由、ip link 管接口……是现代 Linux 网络管理的核心工具。",
        helpOutput: `Usage: ip [ OPTIONS ] OBJECT { COMMAND | help }
       ip [ -force ] -batch filename
where  OBJECT := { address | addrlabel | amt | fou | help | ila | ioam | l2tp |
                   link | macsec | maddress | monitor | mptcp | mroute | mrule |
                   neighbor | neighbour | netconf | netns | nexthop | ntable |
                   ntbl | route | rule | sr | tap | tcpmetrics |
                   token | tunnel | tuntap | vrf | xfrm }
       OPTIONS := { -V[ersion] | -s[tatistics] | -d[etails] | -r[esolve] |
                    -h[uman-readable] | -iec | -j[son] | -p[retty] |
                    -f[amily] { inet | inet6 | mpls | bridge | link } |
                    -4 | -6 | -M | -B | -0 |
                    -l[oops] { maximum-addr-flush-attempts } | -br[ief] |
                    -o[neline] | -t[imestamp] | -ts[hort] | -b[atch] [filename] |
                    -rc[vbuf] [size] | -n[etns] name | -N[umeric] | -a[ll] |
                    -c[olor]}
`,
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
        simpleExplain: "网络瑞士军刀，就像一把万能的网络工具刀",
        detailExplain: "就像一把真正的瑞士军刀——可以当客户端连接服务器、可以当服务器监听端口、可以在两台机器间传文件、可以扫描端口。nc（netcat）简单却极其强大。",
        helpOutput: `nc: invalid option -- '-'
usage: nc [-46CDdFhklNnrStUuvZz] [-I length] [-i interval] [-M ttl]
	  [-m minttl] [-O length] [-P proxy_username] [-p source_port]
	  [-q seconds] [-s sourceaddr] [-T keyword] [-V rtable] [-W recvlimit]
	  [-w timeout] [-X proxy_protocol] [-x proxy_address[:port]]
	  [destination] [port]
`,
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
        simpleExplain: "FTP 文件传输客户端，就像专用的文件快递服务",
        detailExplain: "就像一种专门在网络上传送文件的老牌快递服务——FTP 是最早的文件传输协议之一。虽然安全性不如 SFTP/SCP，但在一些老旧系统和内部网络中仍然在使用。",
        helpOutput: `Usage: ftp [options] [host[:port]]

Options:
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
        simpleExplain: "查看和管理 ARP 缓存表，就像查看局域网的「名片夹」",
        detailExplain: "就像你有一个名片夹，记录了身边同事的名字（IP 地址）和长相（MAC 地址）之间的对应关系。ARP 就是建立这种映射的工具。",
        helpOutput: `Usage:
  arp [-vn]  [<HW>] [-i <if>] [-a] [<hostname>]             <-Display ARP cache
  arp [-v]          [-i <if>] -d  <host> [pub]               <-Delete ARP entry
  arp [-vnD] [<HW>] [-i <if>] -f  [<filename>]            <-Add entry from file
  arp [-v]   [<HW>] [-i <if>] -s  <host> <hwaddr> [temp]            <-Add entry
  arp [-v]   [<HW>] [-i <if>] -Ds <host> <if> [netmask <nm>] pub          <-''-

        -a                       display (all) hosts in alternative (BSD) style
        -e                       display (all) hosts in default (Linux) style
        -s, --set                set a new ARP entry
        -d, --delete             delete a specified entry
        -v, --verbose            be verbose
        -n, --numeric            don't resolve names
        -i, --device             specify network interface (e.g. eth0)
        -D, --use-device         read <hwaddr> from given device
        -A, -p, --protocol       specify protocol family
        -f, --file               read new entries from file or from /etc/ethers

  <HW>=Use '-H <hw>' to specify hardware address type. Default: ether
  List of possible hardware types (which support ARP):
`,
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
        simpleExplain: "简单的 DNS 查询工具，就像快速的电话号码查询器",
        detailExplain: "就像一个轻量级的 DNS 查询工具——比 dig 简单，比 nslookup 输出更干净。输入域名返回 IP 地址，输入 IP 返回域名。",
        helpOutput: `host: illegal option -- -
Usage: host [-aCdilrTvVw] [-c class] [-N ndots] [-t type] [-W time]
            [-R number] [-m flag] [-p port] hostname [server]
       -a is equivalent to -v -t ANY
       -A is like -a but omits RRSIG, NSEC, NSEC3
       -c specifies query class for non-IN data
       -C compares SOA records on authoritative nameservers
       -d is equivalent to -v
       -l lists all hosts in a domain, using AXFR
       -m set memory debugging flag (trace|record|usage)
       -N changes the number of dots allowed before root lookup is done
       -p specifies the port on the server to query
       -r disables recursive processing
       -R specifies number of retries for UDP packets
       -s a SERVFAIL response should stop query
       -t specifies the query type
       -T enables TCP/IP mode
       -U enables UDP mode
       -v enables verbose output
       -V print version number and exit
       -w specifies to wait forever for a reply
       -W specifies how long to wait for a reply
       -4 use IPv4 query transport only
       -6 use IPv6 query transport only
`,
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
        simpleExplain: "查询域名注册信息，就像查房产证知道房主是谁",
        detailExplain: "就像去房地产登记中心查一套房子的产权信息——whois 可以查到域名是谁注册的、什么时候注册的、什么时候过期等信息。",
        helpOutput: `Usage: whois [OPTION]... OBJECT...

Options:
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
        simpleExplain: "网络探测和安全扫描器，就像给网络做一次全面的体检",
        detailExplain: "就像请了一位专业的网络安全体检医生——他会系统地检查目标主机开放了哪些端口、运行了什么服务、操作系统是什么类型。",
        helpOutput: `Usage: nmap [Scan Type(s)] [Options] {target specification}

Scan Types:
  -sL           列表扫描（仅列出目标）
  -sP/-sn       Ping 扫描（不端口扫描）
  -sS           TCP SYN 扫描（半开扫描）
  -sT           TCP 全连接扫描
  -sU           UDP 扫描
  -sV           探测服务版本
  -O            操作系统探测
  -A            全面扫描（OS+版本+脚本+traceroute）

Options:
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
        simpleExplain: "Linux 防火墙配置工具，就像给网络大门配保安和安检规则",
        detailExplain: "就像给你的网络大门配备了一套完整的安保系统——可以制定规则允许谁进（ACCEPT）、拒绝谁入（REJECT）、丢弃谁的请求（DROP）。iptables 是保护服务器安全的第一道防线。",
        helpOutput: `Usage: iptables [-t table] {-A|-C|-D} chain rule-specification
       iptables [-t table] -I chain [rulenum] rule-specification
       iptables [-t table] -R chain rulenum rule-specification
       iptables [-t table] -D chain rulenum
       iptables [-t table] -S [chain [rulenum]]
       iptables [-t table] {-F|-L|-Z} [chain [rulenum]] [options]
       iptables [-t table] -N chain
       iptables [-t table] -X [chain]
       iptables [-t table] -P chain target
       iptables [-t table] -E old-chain-name new-chain-name

Options:
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
        simpleExplain: "高效远程同步文件，就像一个聪明的搬运工只搬变化过的东西",
        detailExplain: "就像一个特别聪明的搬运工——他不会把所有东西都重新搬一遍，而是只搬上次之后有变化的部分。rsync 通过比较源和目标的差异，只传输变化的内容，大大节省了时间和带宽，是远程备份和同步的首选工具。",
        helpOutput: `rsync  version 3.2.7  protocol version 31
Copyright (C) 1996-2022 by Andrew Tridgell, Wayne Davison, and others.
Web site: https://rsync.samba.org/
Capabilities:
    64-bit files, 64-bit inums, 64-bit timestamps, 64-bit long ints,
    socketpairs, symlinks, symtimes, hardlinks, hardlink-specials,
    hardlink-symlinks, IPv6, atimes, batchfiles, inplace, append, ACLs,
    xattrs, optional secluded-args, iconv, prealloc, stop-at, no crtimes
Optimizations:
    SIMD-roll, no asm-roll, openssl-crypto, no asm-MD5
Checksum list:
    xxh128 xxh3 xxh64 (xxhash) md5 md4 sha1 none
Compress list:
    zstd lz4 zlibx zlib none
Daemon auth list:
    sha512 sha256 sha1 md5 md4

rsync comes with ABSOLUTELY NO WARRANTY.  This is free software, and you
are welcome to redistribute it under certain conditions.  See the GNU
General Public Licence for details.

rsync is a file transfer program capable of efficient remote update
via a fast differencing algorithm.

Usage: rsync [OPTION]... SRC [SRC]... DEST
  or   rsync [OPTION]... SRC [SRC]... [USER@]HOST:DEST
  or   rsync [OPTION]... SRC [SRC]... [USER@]HOST::DEST
  or   rsync [OPTION]... SRC [SRC]... rsync://[USER@]HOST[:PORT]/DEST
  or   rsync [OPTION]... [USER@]HOST:SRC [DEST]
  or   rsync [OPTION]... [USER@]HOST::SRC [DEST]
  or   rsync [OPTION]... rsync://[USER@]HOST[:PORT]/SRC [DEST]
The ':' usages connect via remote shell, while '::' & 'rsync://' usages connect
to an rsync daemon, and require SRC or DEST to start with a module name.

Options
--verbose, -v            increase verbosity
--info=FLAGS             fine-grained informational verbosity
--debug=FLAGS            fine-grained debug verbosity
--stderr=e|a|c           change stderr output mode (default: errors)
--quiet, -q              suppress non-error messages
--no-motd                suppress daemon-mode MOTD
--checksum, -c           skip based on checksum, not mod-time & size
--archive, -a            archive mode is -rlptgoD (no -A,-X,-U,-N,-H)
--no-OPTION              turn off an implied OPTION (e.g. --no-D)
--recursive, -r          recurse into directories
--relative, -R           use relative path names
--no-implied-dirs        don't send implied dirs with --relative
--backup, -b             make backups (see --suffix & --backup-dir)
--backup-dir=DIR         make backups into hierarchy based in DIR
--suffix=SUFFIX          backup suffix (default ~ w/o --backup-dir)
--update, -u             skip files that are newer on the receiver
--inplace                update destination files in-place
--append                 append data onto shorter files
--append-verify          --append w/old data in file checksum
--dirs, -d               transfer directories without recursing
--old-dirs, --old-d      works like --dirs when talking to old rsync
--mkpath                 create destination's missing path components
--links, -l              copy symlinks as symlinks
--copy-links, -L         transform symlink into referent file/dir
--copy-unsafe-links      only "`,
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
        simpleExplain: "支持断线重连的远程连接，就像手机信号不好也能继续通话",
        detailExplain: "就像手机信号不好时通话不会直接挂断——mosh 在网络不稳定、IP 地址变化、甚至短暂断网的情况下都能保持连接不断。比 SSH 更适合在移动网络或不稳定网络环境下使用，是远程办公的利器。",
        helpOutput: `Usage: mosh [options] [--] [user@]host [command...]
       mosh-server [options]

Options:
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
        simpleExplain: "安全的FTP文件传输，就像用装甲车运输贵重物品",
        detailExplain: "就像用装甲车运输贵重物品——sftp 基于 SSH 加密通道传输文件，比传统 FTP 安全得多。它既支持上传下载，也支持浏览远程目录，就像一个加密版的文件管理器，在传输敏感数据时是首选。",
        helpOutput: `unknown option -- -
usage: sftp [-46AaCfNpqrv] [-B buffer_size] [-b batchfile] [-c cipher]
          [-D sftp_server_command] [-F ssh_config] [-i identity_file]
          [-J destination] [-l limit] [-o ssh_option] [-P port]
          [-R num_requests] [-S program] [-s subsystem | sftp_server]
          [-X sftp_option] destination
`,
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
        simpleExplain: "增强版的netcat网络工具，就像瑞士军刀升级版",
        detailExplain: "就像把瑞士军刀升级成了多功能工具箱——ncat 是 netcat 的增强版，支持 SSL 加密、代理、代理链等高级功能。可以用来端口扫描、数据传输、搭建临时服务器，几乎能完成任何网络调试任务。",
        helpOutput: `Usage: ncat [OPTIONS...] [hostname] [port]

Options:
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
        simpleExplain: "高级网络数据转发工具，就像一个万能的数据中转站",
        detailExplain: "就像一个万能的数据中转站——socat 可以在任意两个数据通道之间建立桥梁，比如把 TCP 端口转发到串口、把 UNIX 套接字转发到网络端口等。比 ncat 更强大也更复杂，是网络工程师的终极工具。",
        helpOutput: `2026/06/17 05:12:31 socat[3300] E unknown option "--help"; use option "-h" for help
`,
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
        simpleExplain: "抓取网络数据包，就像在网络高速公路上设置监控摄像头",
        detailExplain: "就像在网络高速公路上安装了高清监控摄像头——tcpdump 能捕获流经网卡的所有数据包，让你看到网络里到底在传输什么。排查网络故障、分析协议、安全审计时都离不开它，是网络排障的「照妖镜」。",
        helpOutput: `Usage: tcpdump [-aAdDefhIJKlLnNOpqStuUvxX#] [ -B size ] [ -c count ]
       [ -C file_size ] [ -E algo:secret ] [ -F file ] [ -G seconds ]
       [ -i interface ] [ -j tstamptype ] [ -M secret ] [ --number ]
       [ -Q in|out|inout ] [ -r file ] [ -s snaplen ] [ --time-stamp-precision precision ]
       [ --immediate-mode ] [ -T type ] [ --version ] [ -V file ]
       [ -w file ] [ -W filecount ] [ -E spi@ipaddr algo:secret ]
       [ -y datalinktype ] [ -z postrotate-command ] [ -Z user ]
       [ expression ]

Options:
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
        simpleExplain: "按进程显示网络流量，就像查看每个App消耗了多少流量",
        detailExplain: "就像手机上查看每个 App 用了多少流量——nethogs 按进程维度显示网络带宽占用，让你一眼看出是哪个程序在疯狂吃带宽。比 iftop 更精确，能定位到具体的程序，是排查网络拥堵的好帮手。",
        helpOutput: `Usage: nethogs [-V] [-b] [-d seconds] [-t] [-p] [-a] [-C] [device [device [device ...]]]

Options:
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
        simpleExplain: "实时显示网络带宽使用，就像实时监控道路的车流量",
        detailExplain: "就像在高速公路旁竖了一块实时车流量显示屏——iftop 实时显示当前网络连接的带宽使用情况，哪个 IP 在和你通信、传了多少数据，一目了然。适合快速判断网络拥堵的来源。",
        helpOutput: `Usage: iftop [-hnbNBPblMJ] [-i interface] [-f filter code]
       [-F net/mask] [-G net/mask6] [-s seconds]

Options:
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
        simpleExplain: "查看和修改网卡参数，就像调整汽车发动机的参数",
        detailExplain: "就像汽车发烧友调整发动机的参数来优化性能——ethtool 让你查看和修改网卡的底层参数，比如速度、双工模式、唤醒功能等。排查网卡性能问题、调整链路速率时非常有用。",
        helpOutput: `Usage: ethtool [options] devname
       ethtool [options] -s devname [speed N] [duplex half|full] [port tp|aui|bnc|mii|fibre]
       [autoneg on|off] [phyad N] [xcvr internal|external] [wol p|u|m|b|a|g|s|d...]
       [sopass x:x:x:x:x:x] [msglvl N]

Options:
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
        simpleExplain: "结合ping和traceroute的网络诊断工具，就像同时用雷达和望远镜定位问题",
        detailExplain: "就像同时用了雷达和望远镜——mtr 把 ping 和 traceroute 合二为一，持续不断地探测到目标主机的每一跳网络节点，实时显示每一跳的延迟和丢包率。比单独用 traceroute 更直观，是网络排障的常用工具。",
        helpOutput: `Usage: mtr [-hvrwctglspniu46] [-m COUNT] [-s PACKETSIZE] [-t TIMEOUT]
      [-f FIRSTTTL] [-m MAXTTL] [--tcp] [--udp] [--sctp] [--port PORT]
      [--address ADDR] [--interface NAME] HOSTNAME

Options:
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
        simpleExplain: "配置无线网卡，就像调节收音机的频道",
        detailExplain: "就像调节收音机找到想听的频道——iwconfig 用来查看和配置无线网卡的参数，比如连接哪个 WiFi 网络、信号强度如何、工作模式是什么。是 Linux 下管理无线网络的基础工具。",
        helpOutput: `Usage: iwconfig [interface]
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

Options:
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
        simpleExplain: "Apache压力测试工具，就像模拟一大群人同时涌入商店",
        detailExplain: "就像模拟一大群人同时涌入商店看看店员能不能忙得过来——ab 能模拟大量并发请求访问你的网站，测试服务器在高负载下的表现。看看响应时间多长、有多少请求失败，帮你评估服务器的承受能力。",
        helpOutput: `Usage: ab [options] [http[s]://]hostname[:port]/path

Options:
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
        simpleExplain: "测试网络速度，就像用测速仪测试网络快慢",
        detailExplain: "就像用测速仪测试你家的网速——speedtest-cli 自动选择最近的测速服务器，测试你的下载速度、上传速度和网络延迟。命令行版本适合在没有图形界面的服务器上测试网络性能。",
        helpOutput: `Usage: speedtest-cli [options]

Options:
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
        simpleExplain: "修改文件权限，就像设置谁能读、谁能写、谁能执行这个文件",
        detailExplain: "就像给文件挂上一把锁，并且配了几把钥匙——读钥匙（r）、写钥匙（w）、执行钥匙（x），分别分配给文件的主人、同组成员和其他所有人。chmod 就是决定谁持有哪种钥匙的管理员。",
        helpOutput: `Usage: chmod [OPTION]... MODE[,MODE]... FILE...
  or:  chmod [OPTION]... OCTAL-MODE FILE...
  or:  chmod [OPTION]... --reference=RFILE FILE...
Change the mode of each FILE to MODE.
With --reference, change the mode of each FILE to that of RFILE.

  -c, --changes          like verbose but report only when a change is made
  -f, --silent, --quiet  suppress most error messages
  -v, --verbose          output a diagnostic for every file processed
      --no-preserve-root  do not treat '/' specially (the default)
      --preserve-root    fail to operate recursively on '/'
      --reference=RFILE  use RFILE's mode instead of specifying MODE values.
                         RFILE is always dereferenced if a symbolic link.
  -R, --recursive        change files and directories recursively
      --help        display this help and exit
      --version     output version information and exit

Each MODE is of the form '[ugoa]*([-+=]([rwxXst]*|[ugo]))+|[-+=][0-7]+'.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/chmod>
or available locally via: info '(coreutils) chmod invocation'
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
        simpleExplain: "更改文件所有者，就像把房产证上的户主名字改一下",
        detailExplain: "就像一套房子的产权变更——原来这套文件归张三所有，现在要过户给李四。chown 可以改变文件的主人和所属的用户组。只有 root 用户才有权把文件转给别人。",
        helpOutput: `Usage: chown [OPTION]... [OWNER][:[GROUP]] FILE...
  or:  chown [OPTION]... --reference=RFILE FILE...
Change the owner and/or group of each FILE to OWNER and/or GROUP.
With --reference, change the owner and group of each FILE to those of RFILE.

  -c, --changes          like verbose but report only when a change is made
  -f, --silent, --quiet  suppress most error messages
  -v, --verbose          output a diagnostic for every file processed
      --dereference      affect the referent of each symbolic link (this is
                         the default), rather than the symbolic link itself
  -h, --no-dereference   affect symbolic links instead of any referenced file
                         (useful only on systems that can change the
                         ownership of a symlink)
      --from=CURRENT_OWNER:CURRENT_GROUP
                         change the owner and/or group of each file only if
                         its current owner and/or group match those specified
                         here.  Either may be omitted, in which case a match
                         is not required for the omitted attribute
      --no-preserve-root  do not treat '/' specially (the default)
      --preserve-root    fail to operate recursively on '/'
      --reference=RFILE  use RFILE's owner and group rather than specifying
                         OWNER:GROUP values.  RFILE is always dereferenced.
  -R, --recursive        operate on files and directories recursively

The following options modify how a hierarchy is traversed when the -R
option is also specified.  If more than one is specified, only the final
one takes effect.

  -H                     if a command line argument is a symbolic link
                         to a directory, traverse it
  -L                     traverse every symbolic link to a directory
                         encountered
  -P                     do not traverse any symbolic links (default)

      --help        display this help and exit
      --version     output version information and exit

Owner is unchanged if missing.  Group is unchanged if missing, but changed
to login group if implied by a ':' following a symbolic OWNER.
OWNER and GROUP may be numeric as well as symbolic.

Examples:
  chown root /u        Change the owner of /u to "root".
  chown root:staff /u  Likewise, but also change its group to "staff".
  chown -hR root /u    Change the owner of /u and subfiles to "root".

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/chown>
or available locally via: info '(coreutils) chown invocation'
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
        simpleExplain: "更改文件所属组，就像把一个人从一个部门调到另一个部门",
        detailExplain: "就像公司里的人事调动——这个人本来属于研发组，现在把他调到市场组。chgrp 只改变文件的所属组，不改变所有者。",
        helpOutput: `Usage: chgrp [OPTION]... GROUP FILE...
  or:  chgrp [OPTION]... --reference=RFILE FILE...
Change the group of each FILE to GROUP.
With --reference, change the group of each FILE to that of RFILE.

  -c, --changes          like verbose but report only when a change is made
  -f, --silent, --quiet  suppress most error messages
  -v, --verbose          output a diagnostic for every file processed
      --dereference      affect the referent of each symbolic link (this is
                         the default), rather than the symbolic link itself
  -h, --no-dereference   affect symbolic links instead of any referenced file
                         (useful only on systems that can change the
                         ownership of a symlink)
      --no-preserve-root  do not treat '/' specially (the default)
      --preserve-root    fail to operate recursively on '/'
      --reference=RFILE  use RFILE's group rather than specifying a GROUP.
                         RFILE is always dereferenced if a symbolic link.
  -R, --recursive        operate on files and directories recursively

The following options modify how a hierarchy is traversed when the -R
option is also specified.  If more than one is specified, only the final
one takes effect.

  -H                     if a command line argument is a symbolic link
                         to a directory, traverse it
  -L                     traverse every symbolic link to a directory
                         encountered
  -P                     do not traverse any symbolic links (default)

      --help        display this help and exit
      --version     output version information and exit

Examples:
  chgrp staff /u      Change the group of /u to "staff".
  chgrp -hR staff /u  Change the group of /u and subfiles to "staff".

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/chgrp>
or available locally via: info '(coreutils) chgrp invocation'
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
        simpleExplain: "以超级管理员身份执行命令，就像出示证件获得临时特权",
        detailExplain: "就像你需要进入一个只有经理才能进的房间，于是向保安出示你的临时通行证——sudo 让普通用户暂时借用 root 的权限来执行一条命令。比直接用 root 登录更安全。",
        helpOutput: `sudo - execute a command as another user

usage: sudo -h | -K | -k | -V
usage: sudo -v [-ABkNnS] [-g group] [-h host] [-p prompt] [-u user]
usage: sudo -l [-ABkNnS] [-g group] [-h host] [-p prompt] [-U user]
            [-u user] [command [arg ...]]
usage: sudo [-ABbEHkNnPS] [-r role] [-t type] [-C num] [-D directory]
            [-g group] [-h host] [-p prompt] [-R directory] [-T timeout]
            [-u user] [VAR=value] [-i | -s] [command [arg ...]]
usage: sudo -e [-ABkNnS] [-r role] [-t type] [-C num] [-D directory]
            [-g group] [-h host] [-p prompt] [-R directory] [-T timeout]
            [-u user] file ...

Options:
  -A, --askpass                 use a helper program for password prompting
  -b, --background              run command in the background
  -B, --bell                    ring bell when prompting
  -C, --close-from=num          close all file descriptors >= num
  -D, --chdir=directory         change the working directory before running
                                command
  -E, --preserve-env            preserve user environment when running command
      --preserve-env=list       preserve specific environment variables
  -e, --edit                    edit files instead of running a command
  -g, --group=group             run command as the specified group name or ID
  -H, --set-home                set HOME variable to target user's home dir
  -h, --help                    display help message and exit
  -h, --host=host               run command on host (if supported by plugin)
  -i, --login                   run login shell as the target user; a command
                                may also be specified
  -K, --remove-timestamp        remove timestamp file completely
  -k, --reset-timestamp         invalidate timestamp file
  -l, --list                    list user's privileges or check a specific
                                command; use twice for longer format
  -n, --non-interactive         non-interactive mode, no prompts are used
  -P, --preserve-groups         preserve group vector instead of setting to
                                target's
  -p, --prompt=prompt           use the specified password prompt
  -R, --chroot=directory        change the root directory before running command
  -r, --role=role               create SELinux security context with specified
                                role
  -S, --stdin                   read password from standard input
  -s, --shell                   run shell as the target user; a command may
                                also be specified
  -t, --type=type               create SELinux security context with specified
                                type
  -T, --command-timeout=timeout terminate command after the specified time limit
  -U, --other-user=user         in list mode, display privileges for user
  -u, --user=user               run command (or edit file) as specified user
                                name or ID
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
        simpleExplain: "切换用户身份，就像换了一身衣服变成了另一个人",
        detailExplain: "就像你脱下自己的衣服换上了别人的全套装备——从这一刻起，你就是那个用户了，拥有他的所有权限和环境变量。和 sudo 不同，su 是真正「变成」那个人。",
        helpOutput: `
Usage:
 su [options] [-] [<user> [<argument>...]]

Change the effective user ID and group ID to that of <user>.
A mere - implies -l.  If <user> is not given, root is assumed.

Options:
 -m, -p, --preserve-environment      do not reset environment variables
 -w, --whitelist-environment <list>  don't reset specified variables

 -g, --group <group>             specify the primary group
 -G, --supp-group <group>        specify a supplemental group

 -, -l, --login                  make the shell a login shell
 -c, --command <command>         pass a single command to the shell with -c
 --session-command <command>     pass a single command to the shell with -c
                                   and do not create a new session
 -f, --fast                      pass -f to the shell (for csh or tcsh)
 -s, --shell <shell>             run <shell> if /etc/shells allows it
 -P, --pty                       create a new pseudo-terminal

 -h, --help                      display this help
 -V, --version                   display version

For more details see su(1).
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
        simpleExplain: "设置新建文件的默认权限掩码，就像规定新员工的初始权限级别",
        detailExplain: "就像公司规定新入职员工的初始权限级别——umask 决定了你创建新文件和新目录时，系统默认会给它们什么样的权限。它是一个「减法」机制，从最大权限中扣除掩码位。",
        helpOutput: `Usage: umask [-p] [-S] [mode]

umask 是 shell 内建命令，设置文件创建时的默认权限掩码。

Options:
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
        simpleExplain: "设置文件特殊属性，就像给文件加上防篡改封条",
        detailExplain: "就像给重要文件贴上一层特殊的防篡改封条——即使你是 root 用户也无法轻易修改或删除它。最常用的属性是 +i（immutable，不可变），加了之后连 root 都不能改、不能删。",
        helpOutput: `Usage: chattr [-RVf] [-+=aAcCdDeijPsStTuFx] [-p project] [-v version] files...
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
        simpleExplain: "查看文件的特殊属性，就像查看文件上的防伪标签",
        detailExplain: "就像查看文件上贴了哪些特殊标签——是不是被设成了不可变（i）、是否只能追加（a）等。lsattr 是 chattr 的配套查看工具。",
        helpOutput: `lsattr: invalid option -- '-'
Usage: lsattr [-RVadlpv] [files...]
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
        simpleExplain: "查看文件的 ACL 详细权限，就像查看精细化的访客权限清单",
        detailExplain: "就像传统的权限系统太粗糙了，ACL（访问控制列表）就像是更精细的权限管理系统——可以为任意指定的用户或用户组单独设置权限。getfacl 就是查看这份详细权限清单的工具。",
        helpOutput: `Usage: getfacl [-dRLPvh] file ...

Options:
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
        simpleExplain: "设置文件的 ACL 精细权限，就像为特定人员定制专属通行证",
        detailExplain: "就像传统的权限只有三把钥匙太粗放了，setfacl 可以为任意个人或小组单独配一把钥匙——比如「bob 这个用户可以读这个文件但不能写」。这就是 ACL 的威力，比传统权限灵活得多。",
        helpOutput: `Usage: setfacl [-bkndRLPvh] [{-m|-x} acl_spec] [{-M|-X} acl_file] file ...

Options:
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
        simpleExplain: "安全编辑sudoers配置文件，就像由专业人员来修改保险箱密码",
        detailExplain: "就像由专业人员来修改保险箱密码——visudo 是编辑 /etc/sudoers 文件的专用工具，它会在保存前自动检查语法，防止你写错导致 sudo 失效。千万别用普通编辑器直接改 sudoers 文件！",
        helpOutput: `visudo - safely edit the sudoers file

usage: visudo [-chqsV] [[-f] sudoers ]

Options:
  -c, --check              check-only mode
  -f, --file=sudoers       specify sudoers file location
  -h, --help               display help message and exit
  -I, --no-includes        do not edit include files
  -q, --quiet              less verbose (quiet) syntax error messages
  -s, --strict             strict syntax checking
  -V, --version            display version information and exit

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
        simpleExplain: "Linux能力机制管理，就像给不同员工发放不同级别的门禁卡",
        detailExplain: "就像给不同员工发放不同级别的门禁卡——Linux 能力（capabilities）机制把 root 权限拆分成几十种细粒度权限，capsh 可以查看和操作这些能力。比如只给一个程序网络权限，而不给它全部 root 权限。",
        helpOutput: `usage: capsh [args ...]
  --addamb=xxx   add xxx,... capabilities to ambient set
  --cap-uid=<n>  use libcap cap_setuid() to change uid
  --caps=xxx     set caps as per cap_from_text()
  --chroot=path  chroot(2) to this path
  --current      show current caps and IAB vectors
  --decode=xxx   decode a hex string to a list of caps
  --delamb=xxx   remove xxx,... capabilities from ambient
  --drop=xxx     drop xxx,... caps from bounding set
  --explain=xxx  explain what capability xxx permits
  --forkfor=<n>  fork and make child sleep for <n> sec
  --gid=<n>      set gid to <n> (hint: id <username>)
  --groups=g,... set the supplemental groups
  --has-a=xxx    exit 1 if capability xxx not ambient
  --has-b=xxx    exit 1 if capability xxx not dropped
  --has-ambient  exit 1 unless ambient vector supported
  --has-i=xxx    exit 1 if capability xxx not inheritable
  --has-p=xxx    exit 1 if capability xxx not permitted
  --has-no-new-privs  exit 1 if privs not limited
  --help, -h     this message (or try 'man capsh')
  --iab=...      use cap_iab_from_text() to set iab
  --inh=xxx      set xxx,.. inheritable set
  --inmode=<xxx> exit 1 if current mode is not <xxx>
  --is-uid=<n>   exit 1 if uid != <n>
  --is-gid=<n>   exit 1 if gid != <n>
  --keep=<n>     set keep-capability bit to <n>
  --killit=<n>   send signal(n) to child
  --license      display license info
  --mode         display current libcap mode
  --mode=<xxx>   set libcap mode to <xxx>
  --modes        list libcap named modes
  --no-new-privs set sticky process privilege limiter
  --noamb        reset (drop) all ambient capabilities
  --noenv        no fixup of env vars (for --user)
  --print        display capability relevant state
  --quiet        if first argument skip max cap check
  --secbits=<n>  write a new value for securebits
  --shell=/xx/yy use /xx/yy instead of /bin/bash for --
  --strict       toggle --caps, --drop and --inh fixups
  --suggest=text search cap descriptions for text
  --supports=xxx exit 1 if capability xxx unsupported
  --uid=<n>      set uid to <n> (hint: id <username>)
  --user=<name>  set uid,gid and groups to that of user
  ==             re-exec(capsh) with args as for --
  =+             cap_launch capsh with args as for -+
  --             remaining arguments are for /bin/bash
  -+             cap_launch /bin/bash with remaining args
                 (without -- [capsh] will simply exit(0))
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
        simpleExplain: "SELinux策略管理，就像管理一个严格安保系统的通行规则",
        detailExplain: "就像管理一个严格安保系统的通行规则——semanage 用来配置 SELinux 策略的细节，比如给文件设置安全上下文、管理端口标签、设置用户角色等。SELinux 开启后，很多服务访问被拒时就需要用 semanage 来放行。",
        helpOutput: `Usage: semanage {login|user|port|interface|fcontext|translation|boolean|...} ...

Subcommands:
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

Common options:
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
        simpleExplain: "显示系统基本信息，就像查看电脑的「身份证」",
        detailExplain: "就像查看电脑的出生证明和身份证——操作系统叫什么名字、内核版本是多少、主机名叫什么、CPU 架构是什么。uname 是了解「这台机器是什么」的最基本命令。",
        helpOutput: `Usage: uname [OPTION]...
Print certain system information.  With no OPTION, same as -s.

  -a, --all                print all information, in the following order,
                             except omit -p and -i if unknown:
  -s, --kernel-name        print the kernel name
  -n, --nodename           print the network node hostname
  -r, --kernel-release     print the kernel release
  -v, --kernel-version     print the kernel version
  -m, --machine            print the machine hardware name
  -p, --processor          print the processor type (non-portable)
  -i, --hardware-platform  print the hardware platform (non-portable)
  -o, --operating-system   print the operating system
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/uname>
or available locally via: info '(coreutils) uname invocation'
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
        simpleExplain: "查看或设置主机名，就像查看或修改电脑的昵称",
        detailExplain: "就像给电脑取个名字——方便在网络中称呼这台机器。hostname 显示或修改当前系统的主机名，让别的电脑可以通过这个名字找到它。",
        helpOutput: `Usage: hostname [-b] {hostname|-F file}         set host name (from file)
       hostname [-a|-A|-d|-f|-i|-I|-s|-y]       display formatted name
       hostname                                 display host name

       {yp,nis,}domainname {nisdomain|-F file}  set NIS domain name (from file)
       {yp,nis,}domainname                      display NIS domain name

       dnsdomainname                            display dns domain name

       hostname -V|--version|-h|--help          print info and exit

Program name:
       {yp,nis,}domainname=hostname -y
       dnsdomainname=hostname -d

Program options:
    -a, --alias            alias names
    -A, --all-fqdns        all long host names (FQDNs)
    -b, --boot             set default hostname if none available
    -d, --domain           DNS domain name
    -f, --fqdn, --long     long host name (FQDN)
    -F, --file             read host name or NIS domain name from given file
    -i, --ip-address       addresses for the host name
    -I, --all-ip-addresses all addresses for the host
    -s, --short            short host name
    -y, --yp, --nis        NIS/YP domain name

Description:
   This command can get or set the host name or the NIS domain name. You can
   also get the DNS domain or the FQDN (fully qualified domain name).
   Unless you are using bind or NIS for host lookups you can change the
   FQDN (Fully Qualified Domain Name) and the DNS domain name (which is
   part of the FQDN) in the /etc/hosts file.
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
        simpleExplain: "查看系统运行时间和负载，就像查看机器连续工作了多久累不累",
        detailExplain: "就像查看一台机器已经连续运转了多久、目前负载怎么样——uptime 告诉你系统从上次启动到现在过了多长时间、当前有多少用户登录、过去 1/5/15 分钟的平均负载是多少。",
        helpOutput: `
Usage:
 uptime [options]

Options:
 -p, --pretty   show uptime in pretty format
 -h, --help     display this help and exit
 -s, --since    system up since
 -V, --version  output version information and exit

For more details see uptime(1).
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
        simpleExplain: "查看内存使用情况，就像查看电脑还剩多少「脑容量」可用",
        detailExplain: "就像查看你的大脑（内存 RAM）用了多少、还剩多少——总共有多少 GB 内存、已用多少、空闲多少、有多少被缓存占用了。经常用 free 看看内存健康状况是个好习惯。",
        helpOutput: `
Usage:
 free [options]

Options:
 -b, --bytes         show output in bytes
     --kilo          show output in kilobytes
     --mega          show output in megabytes
     --giga          show output in gigabytes
     --tera          show output in terabytes
     --peta          show output in petabytes
 -k, --kibi          show output in kibibytes
 -m, --mebi          show output in mebibytes
 -g, --gibi          show output in gibibytes
     --tebi          show output in tebibytes
     --pebi          show output in pebibytes
 -h, --human         show human-readable output
     --si            use powers of 1000 not 1024
 -l, --lohi          show detailed low and high memory statistics
 -L, --line          show output on a single line
 -t, --total         show total for RAM + swap
 -v, --committed     show committed memory and commit limit
 -s N, --seconds N   repeat printing every N seconds
 -c N, --count N     repeat printing N times, then exit
 -w, --wide          wide output

     --help     display this help and exit
 -V, --version  output version information and exit

For more details see free(1).
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
        simpleExplain: "查看磁盘空间使用情况，就像查看仓库还剩多少货架空间",
        detailExplain: "就像仓库管理员查看每个库房的货架使用率——总空间多大、已经用了多少、还剩多少百分比。当磁盘快满的时候 df 会发出警告。",
        helpOutput: `Usage: df [OPTION]... [FILE]...
Show information about the file system on which each FILE resides,
or all file systems by default.

Mandatory arguments to long options are mandatory for short options too.
  -a, --all             include pseudo, duplicate, inaccessible file systems
  -B, --block-size=SIZE  scale sizes by SIZE before printing them; e.g.,
                           '-BM' prints sizes in units of 1,048,576 bytes;
                           see SIZE format below
  -h, --human-readable  print sizes in powers of 1024 (e.g., 1023M)
  -H, --si              print sizes in powers of 1000 (e.g., 1.1G)
  -i, --inodes          list inode information instead of block usage
  -k                    like --block-size=1K
  -l, --local           limit listing to local file systems
      --no-sync         do not invoke sync before getting usage info (default)
      --output[=FIELD_LIST]  use the output format defined by FIELD_LIST,
                               or print all fields if FIELD_LIST is omitted.
  -P, --portability     use the POSIX output format
      --sync            invoke sync before getting usage info
      --total           elide all entries insignificant to available space,
                          and produce a grand total
  -t, --type=TYPE       limit listing to file systems of type TYPE
  -T, --print-type      print file system type
  -x, --exclude-type=TYPE   limit listing to file systems not of type TYPE
  -v                    (ignored)
      --help        display this help and exit
      --version     output version information and exit

Display values are in units of the first available SIZE from --block-size,
and the DF_BLOCK_SIZE, BLOCK_SIZE and BLOCKSIZE environment variables.
Otherwise, units default to 1024 bytes (or 512 if POSIXLY_CORRECT is set).

The SIZE argument is an integer and optional unit (example: 10K is 10*1024).
Units are K,M,G,T,P,E,Z,Y,R,Q (powers of 1024) or KB,MB,... (powers of 1000).
Binary prefixes can be used, too: KiB=K, MiB=M, and so on.

FIELD_LIST is a comma-separated list of columns to be included.  Valid
field names are: 'source', 'fstype', 'itotal', 'iused', 'iavail', 'ipcent',
'size', 'used', 'avail', 'pcent', 'file' and 'target' (see info page).

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/df>
or available locally via: info '(coreutils) df invocation'
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
        simpleExplain: "查看目录或文件占用磁盘大小，就像用秤称每个文件夹有多重",
        detailExplain: "就像用电子秤一个个称量文件夹的重量——du 告诉你每个目录实际占用了多少磁盘空间。和 df 不同，du 看的是具体的文件和文件夹各自占了多少空间。",
        helpOutput: `Usage: du [OPTION]... [FILE]...
  or:  du [OPTION]... --files0-from=F
Summarize device usage of the set of FILEs, recursively for directories.

Mandatory arguments to long options are mandatory for short options too.
  -0, --null            end each output line with NUL, not newline
  -a, --all             write counts for all files, not just directories
      --apparent-size   print apparent sizes rather than device usage; although
                          the apparent size is usually smaller, it may be
                          larger due to holes in ('sparse') files, internal
                          fragmentation, indirect blocks, and the like
  -B, --block-size=SIZE  scale sizes by SIZE before printing them; e.g.,
                           '-BM' prints sizes in units of 1,048,576 bytes;
                           see SIZE format below
  -b, --bytes           equivalent to '--apparent-size --block-size=1'
  -c, --total           produce a grand total
  -D, --dereference-args  dereference only symlinks that are listed on the
                          command line
  -d, --max-depth=N     print the total for a directory (or file, with --all)
                          only if it is N or fewer levels below the command
                          line argument;  --max-depth=0 is the same as
                          --summarize
      --files0-from=F   summarize device usage of the
                          NUL-terminated file names specified in file F;
                          if F is -, then read names from standard input
  -H                    equivalent to --dereference-args (-D)
  -h, --human-readable  print sizes in human readable format (e.g., 1K 234M 2G)
      --inodes          list inode usage information instead of block usage
  -k                    like --block-size=1K
  -L, --dereference     dereference all symbolic links
  -l, --count-links     count sizes many times if hard linked
  -m                    like --block-size=1M
  -P, --no-dereference  don't follow any symbolic links (this is the default)
  -S, --separate-dirs   for directories do not include size of subdirectories
      --si              like -h, but use powers of 1000 not 1024
  -s, --summarize       display only a total for each argument
  -t, --threshold=SIZE  exclude entries smaller than SIZE if positive,
                          or entries greater than SIZE if negative
      --time            show time of the last modification of any file in the
                          directory, or any of its subdirectories
      --time=WORD       show time as WORD instead of modification time:
                          atime, access, use, ctime or status
      --time-style=STYLE  show times using STYLE, which can be:
                            full-iso, long-iso, iso, or +FORMAT;
                            FORMAT is interpreted like in 'date'
  -X, --exclude-from=FILE  exclude files that match any pattern in FILE
      --exclude=PATTERN    exclude files that match PATTERN
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
        simpleExplain: "查看当前登录的用户，就像查看办公室里都有谁在上班",
        detailExplain: "就像走到办公室门口看一眼签到表——现在都有谁登录在这台机器上、他们是从哪里登录的、登录时间是什么时候。",
        helpOutput: `Usage: who [OPTION]... [ FILE | ARG1 ARG2 ]
Print information about users who are currently logged in.

  -a, --all         same as -b -d --login -p -r -t -T -u
  -b, --boot        time of last system boot
  -d, --dead        print dead processes
  -H, --heading     print line of column headings
  -l, --login       print system login processes
      --lookup      attempt to canonicalize hostnames via DNS
  -m                only hostname and user associated with stdin
  -p, --process     print active processes spawned by init
  -q, --count       all login names and number of users logged on
  -r, --runlevel    print current runlevel
  -s, --short       print only name, line, and time (default)
  -t, --time        print last system clock change
  -T, -w, --mesg    add user's message status as +, - or ?
  -u, --users       list users logged in
      --message     same as -T
      --writable    same as -T
      --help        display this help and exit
      --version     output version information and exit

If FILE is not specified, use /var/run/utmp.  /var/log/wtmp as FILE is common.
If ARG1 ARG2 given, -m presumed: 'am i' or 'mom likes' are usual.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/who>
or available locally via: info '(coreutils) who invocation'
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
        simpleExplain: "增强版 who，查看谁在干什么",
        detailExplain: "就像 who 的增强版——不光告诉你谁登录了，还告诉你他们在干什么（正在执行什么命令）、系统负载如何、登录了多久。",
        helpOutput: `
Usage:
 w [options] [user]

Options:
 -h, --no-header     do not print header
 -u, --no-current    ignore current process username
 -s, --short         short format
 -f, --from          show remote hostname field
 -o, --old-style     old style output
 -i, --ip-addr       display IP address instead of hostname (if possible)
 -p, --pids          show the PID(s) of processes in WHAT

     --help     display this help and exit
 -V, --version  output version information and exit

For more details see w(1).
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
        simpleExplain: "查看 Linux 发行版详细信息，就像查看电脑的「品牌型号标签」",
        detailExplain: "就像查看电脑背面的品牌标签——这是 Ubuntu 还是 CentOS？版本号是多少？lsb_release 专门用来回答这些问题。",
        helpOutput: `Usage: lsb_release [options]

Options:
  -h, --help         show this help message and exit
  -v, --version      show LSB modules this system supports
  -i, --id           show distributor ID
  -d, --description  show description of this distribution
  -r, --release      show release number of this distribution
  -c, --codename     show code name of this distribution
  -a, --all          show all of the above information
  -s, --short        show requested information in short format
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
        simpleExplain: "查看 CPU 详细信息，就像查看电脑的「心脏体检报告」",
        detailExplain: "就像给 CPU 做了一次全面体检——型号是什么、有几颗核心、几个线程、主频多少、支持的指令集有哪些、缓存大小是多少。",
        helpOutput: `
Usage:
 lscpu [options]

Display information about the CPU architecture.

Options:
 -a, --all               print both online and offline CPUs (default for -e)
 -b, --online            print online CPUs only (default for -p)
 -B, --bytes             print sizes in bytes rather than in human readable format
 -C, --caches[=<list>]   info about caches in extended readable format
 -c, --offline           print offline CPUs only
 -J, --json              use JSON for default or extended format
 -e, --extended[=<list>] print out an extended readable format
 -p, --parse[=<list>]    print out a parsable format
 -s, --sysroot <dir>     use specified directory as system root
 -x, --hex               print hexadecimal masks rather than lists of CPUs
 -y, --physical          print physical instead of logical IDs
     --hierarchic[=when] use subsections in summary (auto, never, always)
     --output-all        print all available columns for -e, -p or -C

 -h, --help              display this help
 -V, --version           display version

Available output columns for -e or -p:
      BOGOMIPS  crude measurement of CPU speed
           CPU  logical CPU number
          CORE  logical core number
        SOCKET  logical socket number
       CLUSTER  logical cluster number
          NODE  logical NUMA node number
          BOOK  logical book number
        DRAWER  logical drawer number
         CACHE  shows how caches are shared between CPUs
  POLARIZATION  CPU dispatching mode on virtual hardware
       ADDRESS  physical address of a CPU
    CONFIGURED  shows if the hypervisor has allocated the CPU
        ONLINE  shows if Linux currently makes use of the CPU
           MHZ  shows the currently MHz of the CPU
      SCALMHZ%  shows scaling percentage of the CPU frequency
        MAXMHZ  shows the maximum MHz of the CPU
        MINMHZ  shows the minimum MHz of the CPU
     MODELNAME  shows CPU model name

Available output columns for -C:
      ALL-SIZE  size of all system caches
         LEVEL  cache level
          NAME  cache name
      ONE-SIZE  size of one cache
          TYPE  cache type
          WAYS  ways of associativity
  ALLOC-POLICY  allocation policy
  WRITE-POLICY  write policy
      PHY-LINE  number of physical cache line per cache tag
          SETS  number of sets in the cache; set lines has the same cache index
 COHERENCY-SIZE  minimum amount of data in bytes transferred from memory to cache

For more details see lscpu(1).
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
        simpleExplain: "查看系统虚拟内存统计，就像医院的各项生命体征监测仪",
        detailExplain: "就像医院的重症监护仪——实时监测系统的各项生命体征：进程状态、内存使用、swap 交换、IO 读写、系统中断、CPU 上下文切换等。",
        helpOutput: `
Usage:
 vmstat [options] [delay [count]]

Options:
 -a, --active           active/inactive memory
 -f, --forks            number of forks since boot
 -m, --slabs            slabinfo
 -n, --one-header       do not redisplay header
 -s, --stats            event counter statistics
 -d, --disk             disk statistics
 -D, --disk-sum         summarize disk statistics
 -p, --partition <dev>  partition specific statistics
 -S, --unit <char>      define display unit
 -w, --wide             wide output
 -t, --timestamp        show timestamp
 -y, --no-first         skips first line of output

 -h, --help     display this help and exit
 -V, --version  output version information and exit

For more details see vmstat(8).
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
        simpleExplain: "查看磁盘 I/O 统计信息，就像查看硬盘的「工作量报表」",
        detailExplain: "就像查看硬盘的工作日报——每秒读了多少数据、写了多少数据、IO 等待时间有多长。当系统变慢怀疑是磁盘瓶颈时，iostat 能帮你确认。",
        helpOutput: `Usage: iostat [ options ] [ <interval> [ <count> ] ]

Options:
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
        simpleExplain: "查看各 CPU 核心的使用情况，就像查看每个工人的工作效率",
        detailExplain: "就像工厂主管查看每个工人的工作状态——有的在忙碌、有的在做管理、有的在空闲。mpstat 可以分别显示每个 CPU 核心的利用率。",
        helpOutput: `Usage: mpstat [ options ] [ <interval> [ <count> ] ]

Options:
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
        simpleExplain: "查看内核消息日志，就像查看系统的「黑匣子飞行记录」",
        detailExplain: "就像飞机的黑匣子——记录了系统内核启动以来发生的所有大事：硬件检测到了什么设备、驱动加载成功与否、出了什么错误警告等。",
        helpOutput: `
Usage:
 dmesg [options]

Display or control the kernel ring buffer.

Options:
 -C, --clear                 clear the kernel ring buffer
 -c, --read-clear            read and clear all messages
 -D, --console-off           disable printing messages to console
 -E, --console-on            enable printing messages to console
 -F, --file <file>           use the file instead of the kernel log buffer
 -f, --facility <list>       restrict output to defined facilities
 -H, --human                 human readable output
 -J, --json                  use JSON output format
 -k, --kernel                display kernel messages
 -L, --color[=<when>]        colorize messages (auto, always or never)
                               colors are enabled by default
 -l, --level <list>          restrict output to defined levels
 -n, --console-level <level> set level of messages printed to console
 -P, --nopager               do not pipe output into a pager
 -p, --force-prefix          force timestamp output on each line of multi-line messages
 -r, --raw                   print the raw message buffer
     --noescape              don't escape unprintable character
 -S, --syslog                force to use syslog(2) rather than /dev/kmsg
 -s, --buffer-size <size>    buffer size to query the kernel ring buffer
 -u, --userspace             display userspace messages
 -w, --follow                wait for new messages
 -W, --follow-new            wait and print only new messages
 -x, --decode                decode facility and level to readable string
 -d, --show-delta            show time delta between printed messages
 -e, --reltime               show local time and time delta in readable format
 -T, --ctime                 show human-readable timestamp (may be inaccurate!)
 -t, --notime                don't show any timestamp with messages
     --time-format <format>  show timestamp using the given format:
                               [delta|reltime|ctime|notime|iso]
Suspending/resume will make ctime and iso timestamps inaccurate.
     --since <time>          display the lines since the specified time
     --until <time>          display the lines until the specified time

 -h, --help                  display this help
 -V, --version               display version

Supported log facilities:
    kern - kernel messages
    user - random user-level messages
    mail - mail system
  daemon - system daemons
    auth - security/authorization messages
  syslog - messages generated internally by syslogd
     lpr - line printer subsystem
    news - network news subsystem

Supported log levels (priorities):
   emerg - system is unusable
   alert - action must be taken immediately
    crit - critical conditions
     err - error conditions
    warn - warning conditions
  notice - normal but significant condition
    info - informational
   debug - debug-level messages

For more details see dmesg(1).
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
        simpleExplain: "查看系统日志，就像查看系统的完整日记本",
        detailExplain: "就像一本超级详细的系统日记——记录了系统从启动到现在的几乎所有事件。journalctl 是 systemd 的日志管理工具，支持按时间、服务、优先级等多种方式过滤日志。",
        helpOutput: `journalctl [OPTIONS...] [MATCHES...]

Query the journal.

[0mSource Options:
     --system                Show the system journal
     --user                  Show the user journal for the current user
  -M --machine=CONTAINER     Operate on local container
  -m --merge                 Show entries from all available journals
  -D --directory=PATH        Show journal files from directory
     --file=PATH             Show journal file
     --root=PATH             Operate on an alternate filesystem root
     --image=PATH            Operate on disk image as filesystem root
     --image-policy=POLICY   Specify disk image dissection policy
     --namespace=NAMESPACE   Show journal data from specified journal namespace

[0mFiltering Options:
  -S --since=DATE            Show entries not older than the specified date
  -U --until=DATE            Show entries not newer than the specified date
  -c --cursor=CURSOR         Show entries starting at the specified cursor
     --after-cursor=CURSOR   Show entries after the specified cursor
     --cursor-file=FILE      Show entries after cursor in FILE and update FILE
  -b --boot[=ID]             Show current boot or the specified boot
  -u --unit=UNIT             Show logs from the specified unit
     --user-unit=UNIT        Show logs from the specified user unit
  -t --identifier=STRING     Show entries with the specified syslog identifier
  -p --priority=RANGE        Show entries with the specified priority
     --facility=FACILITY...  Show entries with the specified facilities
  -g --grep=PATTERN          Show entries with MESSAGE matching PATTERN
     --case-sensitive[=BOOL] Force case sensitive or insensitive matching
  -k --dmesg                 Show kernel message log from the current boot

[0mOutput Control Options:
  -o --output=STRING         Change journal output mode (short, short-precise,
                               short-iso, short-iso-precise, short-full,
                               short-monotonic, short-unix, verbose, export,
                               json, json-pretty, json-sse, json-seq, cat,
                               with-unit)
     --output-fields=LIST    Select fields to print in verbose/export/json modes
  -n --lines[=[+]INTEGER]    Number of journal entries to show
  -r --reverse               Show the newest entries first
     --show-cursor           Print the cursor after all the entries
     --utc                   Express time in Coordinated Universal Time (UTC)
  -x --catalog               Add message explanations where available
     --no-hostname           Suppress output of hostname field
     --no-full               Ellipsize fields
  -a --all                   Show all fields, including long and unprintable
  -f --follow                Follow the journal
     --no-tail               Show all lines, even in follow mode
     --truncate-newline      Truncate entries by first newline character
  -q --quiet                 Do not show info messages and privilege `,
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
        simpleExplain: "显示或设置系统时间，就像看手表或调手表",
        detailExplain: "就像抬起手腕看一眼手表——现在是几点几分几秒、今天是星期几。date 不光能看时间，还能设置系统时间，还能按照你指定的格式输出时间字符串。",
        helpOutput: `Usage: date [OPTION]... [+FORMAT]
  or:  date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]
Display date and time in the given FORMAT.
With -s, or with [MMDDhhmm[[CC]YY][.ss]], set the date and time.

Mandatory arguments to long options are mandatory for short options too.
  -d, --date=STRING          display time described by STRING, not 'now'
      --debug                annotate the parsed date,
                              and warn about questionable usage to stderr
  -f, --file=DATEFILE        like --date; once for each line of DATEFILE
  -I[FMT], --iso-8601[=FMT]  output date/time in ISO 8601 format.
                               FMT='date' for date only (the default),
                               'hours', 'minutes', 'seconds', or 'ns'
                               for date and time to the indicated precision.
                               Example: 2006-08-14T02:34:56-06:00
  --resolution               output the available resolution of timestamps
                               Example: 0.000000001
  -R, --rfc-email            output date and time in RFC 5322 format.
                               Example: Mon, 14 Aug 2006 02:34:56 -0600
      --rfc-3339=FMT         output date/time in RFC 3339 format.
                               FMT='date', 'seconds', or 'ns'
                               for date and time to the indicated precision.
                               Example: 2006-08-14 02:34:56-06:00
  -r, --reference=FILE       display the last modification time of FILE
  -s, --set=STRING           set time described by STRING
  -u, --utc, --universal     print or set Coordinated Universal Time (UTC)
      --help        display this help and exit
      --version     output version information and exit

All options that specify the date to display are mutually exclusive.
I.e.: --date, --file, --reference, --resolution.

FORMAT controls the output.  Interpreted sequences are:

  %%   a literal %
  %a   locale's abbreviated weekday name (e.g., Sun)
  %A   locale's full weekday name (e.g., Sunday)
  %b   locale's abbreviated month name (e.g., Jan)
  %B   locale's full month name (e.g., January)
  %c   locale's date and time (e.g., Thu Mar  3 23:05:25 2005)
  %C   century; like %Y, except omit last two digits (e.g., 20)
  %d   day of month (e.g., 01)
  %D   date; same as %m/%d/%y
  %e   day of month, space padded; same as %_d
  %F   full date; like %+4Y-%m-%d
  %g   last two digits of year of ISO week number (see %G)
  %G   year of ISO week number (see %V); normally useful only with %V
  %h   same as %b
  %H   hour (00..23)
  %I   hour (01..12)
  %j   day of year (001..366)
  %k   hour, space padded ( 0..23); same as %_H
  %l   hour, space padded ( 1..12); same as %_I
  %m   month (01..12)
  %M   minute (00..59)
  %n   a newline
  %N   nanoseconds (000000000..999999999)
  %p   locale's equivalent of either AM or PM; blank if not known
  %P   like %p, but lower case
  %q   quarter of year (1..4)
  %r   locale's 12-hour clock time (e.g.`,
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
        simpleExplain: "显示日历，就像撕下来的一页月历",
        detailExplain: "就像随手撕下一页日历挂在墙上——显示某年某月的完整日历视图。可以看本月、看某个月、看一整年的日历。",
        helpOutput: `Usage: cal [options] [[[day] month] year]

Options:
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
        simpleExplain: "管理系统时间和时区，就像设置智能手表的时间和时区",
        detailExplain: "就像智能手表的时间设置界面——可以查看和修改系统时间、时区、是否自动同步网络时间（NTP）等。在现代 systemd 系统上，timedatectl 是管理时间的官方推荐工具。",
        helpOutput: `timedatectl [OPTIONS...] COMMAND ...

Query or change system time and date settings.

Commands:
  status                   Show current time settings
  show                     Show properties of systemd-timedated
  set-time TIME            Set system time
  set-timezone ZONE        Set system time zone
  list-timezones           Show known time zones
  set-local-rtc BOOL       Control whether RTC is in local time
  set-ntp BOOL             Enable or disable network time synchronization

systemd-timesyncd Commands:
  timesync-status          Show status of systemd-timesyncd
  show-timesync            Show properties of systemd-timesyncd
  ntp-servers INTERFACE SERVER…
                           Set the interface specific NTP servers
  revert INTERFACE         Revert the interface specific NTP servers

Options:
  -h --help                Show this help message
     --version             Show package version
     --no-pager            Do not pipe output into a pager
     --no-ask-password     Do not prompt for password
  -H --host=[USER@]HOST    Operate on remote host
  -M --machine=CONTAINER   Operate on local container
     --adjust-system-clock Adjust system clock when changing local RTC mode
     --monitor             Monitor status of systemd-timesyncd
  -p --property=NAME       Show only properties by this name
  -a --all                 Show all properties, including empty ones
     --value               When showing properties, only print the value

See the timedatectl(1) man page for details.
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
        simpleExplain: "查看和设置系统语言区域，就像设置系统的「语言偏好」",
        detailExplain: "就像操作系统的语言和地区设置——用中文还是英文？日期格式是什么？货币符号是 $ 还是 ¥？当你的终端出现乱码时，往往是 locale 设置不对导致的。",
        helpOutput: `Usage: locale [OPTION...] NAME
  or:  locale [OPTION...] [-a|-m]
Get locale-specific information.

 System information:
  -a, --all-locales          Write names of available locales
  -m, --charmaps             Write names of available charmaps

 Modify output format:
  -c, --category-name        Write names of selected categories
  -k, --keyword-name         Write names of selected keywords
  -v, --verbose              Print more information

  -?, --help                 Give this help list
      --usage                Give a short usage message
  -V, --version              Print program version

For bug reporting instructions, please see:
<https://bugs.launchpad.net/ubuntu/+source/glibc/+bugs>.
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
        simpleExplain: "列出内存信息，就像查看仓库里有多少货架和空间",
        detailExplain: "就像查看仓库里有多少货架和空间——lsmem 会显示系统内存的范围、大小、在线状态等信息，让你清楚知道电脑有多少内存可用，哪些内存条是插好的，哪些是空闲的。",
        helpOutput: `
Usage:
 lsmem [options]

List the ranges of available memory with their online status.

Options:
 -J, --json           use JSON output format
 -P, --pairs          use key="value" output format
 -a, --all            list each individual memory block
 -b, --bytes          print SIZE in bytes rather than in human readable format
 -n, --noheadings     don't print headings
 -o, --output <list>  output columns
     --output-all     output all columns
 -r, --raw            use raw output format
 -S, --split <list>   split ranges by specified columns
 -s, --sysroot <dir>  use the specified directory as system root
     --summary[=when] print summary information (never,always or only)

 -h, --help           display this help
 -V, --version        display version

Available output columns:
      RANGE  start and end address of the memory range
       SIZE  size of the memory range
      STATE  online status of the memory range
  REMOVABLE  memory is removable
      BLOCK  memory block number or blocks range
       NODE  numa node of memory
      ZONES  valid zones for the memory range

For more details see lsmem(1).
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
        simpleExplain: "列出USB设备，就像查看电脑上插了哪些外设",
        detailExplain: "就像查看电脑上插了哪些外设——lsusb 会列出所有连接到 USB 总线的设备，包括鼠标、键盘、U盘、摄像头等。当你插了个设备却没反应时，先用 lsusb 看看系统认没认出来。",
        helpOutput: `Usage: lsusb [options]

Options:
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
        simpleExplain: "列出PCI设备，就像查看主板上插了哪些扩展卡",
        detailExplain: "就像查看主板上插了哪些扩展卡——lspci 会列出所有 PCI 总线上的设备，包括显卡、网卡、声卡等。当你需要安装驱动或排查硬件问题时，lspci 是第一步。",
        helpOutput: `Usage: lspci [<switches>]

Options:
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
        simpleExplain: "读取硬件信息，就像查看电脑的出生证明和体检报告",
        detailExplain: "就像查看电脑的出生证明和体检报告——dmidecode 从 BIOS/DMI 中读取硬件详细信息，包括主板型号、CPU 规格、内存条品牌和序列号、BIOS 版本等。是硬件信息查询的终极武器。",
        helpOutput: `Usage: dmidecode [OPTIONS]

Options:
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
        simpleExplain: "读取硬件温度传感器，就像给电脑量体温",
        detailExplain: "就像给电脑量体温——sensors 读取主板、CPU、显卡等硬件上的温度传感器数据，显示当前温度、风扇转速、电压等信息。当电脑经常死机或重启时，先用 sensors 看看是不是过热了。",
        helpOutput: `Usage: sensors [options] [chips]

Options:
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
        simpleExplain: "显示可用的CPU核心数，就像数一下有多少个工人可以同时干活",
        detailExplain: "就像数一下有多少个工人可以同时干活——nproc 显示当前进程可用的 CPU 核心数。编译软件时常用它来决定并行任务数，比如 make -j$(nproc) 就能让所有核心一起开工。",
        helpOutput: `Usage: nproc [OPTION]...
Print the number of processing units available to the current process,
which may be less than the number of online processors

      --all      print the number of installed processors
      --ignore=N  if possible, exclude N processing units
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/nproc>
or available locally via: info '(coreutils) nproc invocation'
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
        simpleExplain: "显示系统架构，就像查看大楼的建筑结构类型",
        detailExplain: "就像查看大楼的建筑结构类型——arch 显示系统的硬件架构名称，比如 x86_64 表示 64 位 Intel/AMD 处理器，aarch64 表示 ARM 64 位。下载软件时需要选对架构版本。",
        helpOutput: `Usage: arch [OPTION]...
Print machine architecture.

      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/arch>
or available locally via: info '(coreutils) arch invocation'
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
        simpleExplain: "显示环境变量，就像查看系统公告栏上的所有通知",
        detailExplain: "就像查看系统公告栏上的所有通知——printenv 会把所有环境变量都列出来，包括 PATH、HOME、USER 等。如果你只想看某一条通知，就加上变量名做参数。",
        helpOutput: `Usage: printenv [OPTION]... [VARIABLE]...
Print the values of the specified environment VARIABLE(s).
If no VARIABLE is specified, print name and value pairs for them all.

  -0, --null     end each output line with NUL, not newline
      --help        display this help and exit
      --version     output version information and exit

NOTE: your shell may have its own version of printenv, which usually supersedes
the version described here.  Please refer to your shell's documentation
for details about the options it supports.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/printenv>
or available locally via: info '(coreutils) printenv invocation'
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
        simpleExplain: "在指定环境下运行命令，就像在特定的工作环境中执行任务",
        detailExplain: "就像在特定的工作环境中执行任务——env 可以显示所有环境变量，也可以在修改了某些环境变量后运行指定命令。比如你想临时用中文环境运行某个程序，但不影响全局设置。",
        helpOutput: `Usage: env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...]
Set each NAME to VALUE in the environment and run COMMAND.

Mandatory arguments to long options are mandatory for short options too.
  -i, --ignore-environment  start with an empty environment
  -0, --null           end each output line with NUL, not newline
  -u, --unset=NAME     remove variable from the environment
  -C, --chdir=DIR      change working directory to DIR
  -S, --split-string=S  process and split S into separate arguments;
                        used to pass multiple arguments on shebang lines
      --block-signal[=SIG]    block delivery of SIG signal(s) to COMMAND
      --default-signal[=SIG]  reset handling of SIG signal(s) to the default
      --ignore-signal[=SIG]   set handling of SIG signal(s) to do nothing
      --list-signal-handling  list non default signal handling to stderr
  -v, --debug          print verbose information for each processing step
      --help        display this help and exit
      --version     output version information and exit

A mere - implies -i.  If no COMMAND, print the resulting environment.

SIG may be a signal name like 'PIPE', or a signal number like '13'.
Without SIG, all known signals are included.  Multiple signals can be
comma-separated.  An empty SIG argument is a no-op.

Exit status:
  125  if the env command itself fails
  126  if COMMAND is found but cannot be invoked
  127  if COMMAND cannot be found
  -    the exit status of COMMAND otherwise

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/env>
or available locally via: info '(coreutils) env invocation'
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
        simpleExplain: "设置环境变量，就像在公告栏上发布一条新通知",
        detailExplain: "就像在公告栏上发布一条新通知——export 设置的环境变量不仅当前 Shell 能看到，子进程也能继承。比如你设置了一个 JAVA_HOME，之后启动的 Java 程序都能找到它。",
        helpOutput: `export: export [-fn] [name[=value] ...] or export -p
    Set export attribute for shell variables.
    
    Marks each NAME for automatic export to the environment of subsequently
    executed commands.  If VALUE is supplied, assign VALUE before exporting.
    
    Options:
      -f	refer to shell functions
      -n	remove the export property from each NAME
      -p	display a list of all exported variables and functions
    
    An argument of \`--' disables further option processing.
    
    Exit Status:
    Returns success unless an invalid option is given or NAME is invalid.
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
        simpleExplain: "显示或设置Shell变量，就像查看和调整系统的所有设置项",
        detailExplain: "就像查看和调整系统的所有设置项——set 不带参数时会显示所有 Shell 变量和函数，带参数时可以控制 Shell 的行为模式，比如开启调试模式、设置出错即退出等。",
        helpOutput: `set: set [-abefhkmnptuvxBCEHPT] [-o option-name] [--] [-] [arg ...]
    Set or unset values of shell options and positional parameters.
    
    Change the value of shell attributes and positional parameters, or
    display the names and values of shell variables.
    
    Options:
      -a  Mark variables which are modified or created for export.
      -b  Notify of job termination immediately.
      -e  Exit immediately if a command exits with a non-zero status.
      -f  Disable file name generation (globbing).
      -h  Remember the location of commands as they are looked up.
      -k  All assignment arguments are placed in the environment for a
          command, not just those that precede the command name.
      -m  Job control is enabled.
      -n  Read commands but do not execute them.
      -o option-name
          Set the variable corresponding to option-name:
              allexport    same as -a
              braceexpand  same as -B
              emacs        use an emacs-style line editing interface
              errexit      same as -e
              errtrace     same as -E
              functrace    same as -T
              hashall      same as -h
              histexpand   same as -H
              history      enable command history
              ignoreeof    the shell will not exit upon reading EOF
              interactive-comments
                           allow comments to appear in interactive commands
              keyword      same as -k
              monitor      same as -m
              noclobber    same as -C
              noexec       same as -n
              noglob       same as -f
              nolog        currently accepted but ignored
              notify       same as -b
              nounset      same as -u
              onecmd       same as -t
              physical     same as -P
              pipefail     the return value of a pipeline is the status of
                           the last command to exit with a non-zero status,
                           or zero if no command exited with a non-zero status
              posix        change the behavior of bash where the default
                           operation differs from the Posix standard to
                           match the standard
              privileged   same as -p
              verbose      same as -v
              vi           use a vi-style line editing interface
              xtrace       same as -x
      -p  Turned on whenever the real and effective user ids do not match.
          Disables processing of the $ENV file and importing of shell
          functions.  Turning this option off causes the effective uid and
          gid to be set to the real uid and gid.
      -t  Exit after reading and executing one command.
      -u  Treat unset variables as an error when substituting.
      -v  Print shell input lines as they are read.
      -x  Print commands and their arguments as they are executed.
      -B  the shell will perform brace expans`,
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
        simpleExplain: "删除环境变量，就像从公告栏上撕掉一条通知",
        detailExplain: "就像从公告栏上撕掉一条通知——unset 用来删除已经设置的环境变量或 Shell 变量。删掉之后，当前 Shell 和后续子进程就再也看不到这个变量了。",
        helpOutput: `unset: unset [-f] [-v] [-n] [name ...]
    Unset values and attributes of shell variables and functions.
    
    For each NAME, remove the corresponding variable or function.
    
    Options:
      -f	treat each NAME as a shell function
      -v	treat each NAME as a shell variable
      -n	treat each NAME as a name reference and unset the variable itself
    		rather than the variable it references
    
    Without options, unset first tries to unset a variable, and if that fails,
    tries to unset a function.
    
    Some variables cannot be unset; also see \`readonly'.
    
    Exit Status:
    Returns success unless an invalid option is given or a NAME is read-only.
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
        simpleExplain: "给命令设置别名，就像给朋友起个昵称方便叫",
        detailExplain: "就像给朋友起个昵称方便叫——alias 可以给常用命令起个短名字，这样每次输入更省事。比如把 ll 当作 ls -l 的别名，输入两个字母就能看到详细列表。",
        helpOutput: `alias: alias [-p] [name[=value] ... ]
    Define or display aliases.
    
    Without arguments, \`alias' prints the list of aliases in the reusable
    form \`alias NAME=VALUE' on standard output.
    
    Otherwise, an alias is defined for each NAME whose VALUE is given.
    A trailing space in VALUE causes the next word to be checked for
    alias substitution when the alias is expanded.
    
    Options:
      -p	print all defined aliases in a reusable format
    
    Exit Status:
    alias returns true unless a NAME is supplied for which no alias has been
    defined.
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
        simpleExplain: "取消命令别名，就像不再用昵称呼叫朋友",
        detailExplain: "就像不再用昵称呼叫朋友——unalias 用来删除之前用 alias 设置的命令别名。删掉之后，那个短名字就不再有效了，必须用命令的全名。",
        helpOutput: `unalias: unalias [-a] name [name ...]
    Remove each NAME from the list of defined aliases.
    
    Options:
      -a	remove all alias definitions
    
    Return success unless a NAME is not an existing alias.
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
        simpleExplain: "显示命令历史记录，就像查看你的操作日记",
        detailExplain: "就像查看你的操作日记——history 列出你在终端里输入过的所有命令。忘了之前怎么操作的？翻翻历史记录就知道了。还可以用 !编号 快速重新执行某条命令。",
        helpOutput: `history: history [-c] [-d offset] [n] or history -anrw [filename] or history -ps arg [arg...]
    Display or manipulate the history list.
    
    Display the history list with line numbers, prefixing each modified
    entry with a \`*'.  An argument of N lists only the last N entries.
    
    Options:
      -c	clear the history list by deleting all of the entries
      -d offset	delete the history entry at position OFFSET. Negative
    		offsets count back from the end of the history list
    
      -a	append history lines from this session to the history file
      -n	read all history lines not already read from the history file
    		and append them to the history list
      -r	read the history file and append the contents to the history
    		list
      -w	write the current history to the history file
    
      -p	perform history expansion on each ARG and display the result
    		without storing it in the history list
      -s	append the ARGs to the history list as a single entry
    
    If FILENAME is given, it is used as the history file.  Otherwise,
    if HISTFILE has a value, that is used, else ~/.bash_history.
    
    If the HISTTIMEFORMAT variable is set and not null, its value is used
    as a format string for strftime(3) to print the time stamp associated
    with each displayed history entry.  No time stamps are printed otherwise.
    
    Exit Status:
    Returns success unless an invalid option is given or an error occurs.
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
        simpleExplain: "查看和修改内核参数，就像调整汽车发动机的底层参数",
        detailExplain: "就像调整汽车发动机的底层参数——sysctl 可以读取和修改 Linux 内核的运行时参数，比如网络转发、文件描述符上限、内存策略等。调错可能让系统不稳定，所以修改前一定要搞清楚参数含义。",
        helpOutput: `
Usage:
 sysctl [options] [variable[=value] ...]

Options:
  -a, --all            display all variables
  -A                   alias of -a
  -X                   alias of -a
      --deprecated     include deprecated parameters to listing
      --dry-run        Print the key and values but do not write
  -b, --binary         print value without new line
  -e, --ignore         ignore unknown variables errors
  -N, --names          print variable names without values
  -n, --values         print only values of the given variable(s)
  -p, --load[=<file>]  read values from file
  -f                   alias of -p
      --system         read values from all system directories
  -r, --pattern <expression>
                       select setting that match expression
  -q, --quiet          do not echo variable set
  -w, --write          enable writing a value to variable
  -o                   does nothing
  -x                   does nothing
  -d                   alias of -h

 -h, --help     display this help and exit
 -V, --version  output version information and exit

For more details see sysctl(8).
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
        simpleExplain: "磁盘分区工具，就像给硬盘划分不同的储物柜格子",
        detailExplain: "就像一间大仓库（硬盘），fdisk 帮你把它隔成若干个小房间（分区）——每个分区可以独立格式化和挂载，存放不同用途的数据。",
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
        simpleExplain: "格式化分区，就像给空白的储物柜贴上标签和编号",
        detailExplain: "就像你买了一块空地，要在上面建楼房前要先做好地基规划——mkfs 在分区上创建文件系统，让操作系统能够在上面存储和组织文件。",
        helpOutput: `
Usage:
 mkfs [options] [-t <type>] [fs-options] <device> [<size>]

Make a Linux filesystem.

Options:
 -t, --type=<type>  filesystem type; when unspecified, ext2 is used
     fs-options     parameters for the real filesystem builder
     <device>       path to the device to be used
     <size>         number of blocks to be used on the device
 -V, --verbose      explain what is being done;
                      specifying -V more than once will cause a dry-run
 -h, --help         display this help
 -V, --version      display version

For more details see mkfs(8).
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
        simpleExplain: "挂载文件系统，就像把 U 盘插上去让系统能访问里面的文件",
        detailExplain: "就像你把 U 盘插入电脑——操作系统需要把设备「挂载」到某个目录下，你才能通过那个目录访问 U 盘里的文件。硬盘分区、光盘、网络共享目录都需要 mount 才能使用。",
        helpOutput: `
Usage:
 mount [-lhV]
 mount -a [options]
 mount [options] [--source] <source> | [--target] <directory>
 mount [options] <source> <directory>
 mount <operation> <mountpoint> [<target>]

Mount a filesystem.

Options:
 -a, --all               mount all filesystems mentioned in fstab
 -c, --no-canonicalize   don't canonicalize paths
 -f, --fake              dry run; skip the mount(2) syscall
 -F, --fork              fork off for each device (use with -a)
 -T, --fstab <path>      alternative file to /etc/fstab
 -i, --internal-only     don't call the mount.<type> helpers
 -l, --show-labels       show also filesystem labels
 -m, --mkdir[=<mode>]    alias to '-o X-mount.mkdir[=<mode>]'
 -n, --no-mtab           don't write to /etc/mtab
     --options-mode <mode>
                         what to do with options loaded from fstab
     --options-source <source>
                         mount options source
     --options-source-force
                         force use of options from fstab/mtab
     --onlyonce          check if filesystem is already mounted
 -o, --options <list>    comma-separated list of mount options
 -O, --test-opts <list>  limit the set of filesystems (use with -a)
 -r, --read-only         mount the filesystem read-only (same as -o ro)
 -t, --types <list>      limit the set of filesystem types
     --source <src>      explicitly specifies source (path, label, uuid)
     --target <target>   explicitly specifies mountpoint
     --target-prefix <path>
                         specifies path used for all mountpoints
 -v, --verbose           say what is being done
 -w, --rw, --read-write  mount the filesystem read-write (default)
 -N, --namespace <ns>    perform mount in another namespace

 -h, --help              display this help
 -V, --version           display version

Source:
 -L, --label <label>     synonym for LABEL=<label>
 -U, --uuid <uuid>       synonym for UUID=<uuid>
 LABEL=<label>           specifies device by filesystem label
 UUID=<uuid>             specifies device by filesystem UUID
 PARTLABEL=<label>       specifies device by partition label
 PARTUUID=<uuid>         specifies device by partition UUID
 ID=<id>                 specifies device by udev hardware ID
 <device>                specifies device by path
 <directory>             mountpoint for bind mounts (see --bind/rbind)
 <file>                  regular file for loopdev setup

Operations:
 -B, --bind              mount a subtree somewhere else (same as -o bind)
 -M, --move              move a subtree to some other place
 -R, --rbind             mount a subtree and all submounts somewhere else
 --make-shared           mark a subtree as shared
 --make-slave            mark a subtree as slave
 --make-private          mark a subtree as private
 --make-unbindable       mark a subtree as unbindable
 --make-rshared          recursively mark a whole subtree as shared
 --make-rslave           recursively mark a whole subtree as slave
 --make-rprivate         recursively mar`,
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
        simpleExplain: "卸载文件系统，就像安全弹出 U 盘",
        detailExplain: "就像你点击「安全弹出硬件」按钮拔出 U 盘——umount 在断开设备和系统的关联前，确保所有数据都已经写入完毕，避免数据丢失。",
        helpOutput: `
Usage:
 umount [-hV]
 umount -a [options]
 umount [options] <source> | <directory>

Unmount filesystems.

Options:
 -a, --all               unmount all filesystems
 -A, --all-targets       unmount all mountpoints for the given device in the
                           current namespace
 -c, --no-canonicalize   don't canonicalize paths
 -d, --detach-loop       if mounted loop device, also free this loop device
     --fake              dry run; skip the umount(2) syscall
 -f, --force             force unmount (in case of an unreachable NFS system)
 -i, --internal-only     don't call the umount.<type> helpers
 -n, --no-mtab           don't write to /etc/mtab
 -l, --lazy              detach the filesystem now, clean up things later
 -O, --test-opts <list>  limit the set of filesystems (use with -a)
 -R, --recursive         recursively unmount a target with all its children
 -r, --read-only         in case unmounting fails, try to remount read-only
 -t, --types <list>      limit the set of filesystem types
 -v, --verbose           say what is being done
 -q, --quiet             suppress 'not mounted' error messages
 -N, --namespace <ns>    perform umount in another namespace

 -h, --help              display this help
 -V, --version           display version

For more details see umount(8).
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
        simpleExplain: "检查和修复文件系统，就像请医生给硬盘做体检和治病",
        detailExplain: "就像定期去医院做身体检查——fsck 扫描文件系统是否有损坏的数据、丢失的节点等「病症」，发现问题还会尝试修复。通常在系统异常关机后启动时自动运行。",
        helpOutput: `
Usage:
 fsck [options] -- [fs-options] [<filesystem> ...]

Check and repair a Linux filesystem.

Options:
 -A         check all filesystems
 -C [<fd>]  display progress bar; file descriptor is for GUIs
 -l         lock the device to guarantee exclusive access
 -M         do not check mounted filesystems
 -N         do not execute, just show what would be done
 -P         check filesystems in parallel, including root
 -R         skip root filesystem; useful only with '-A'
 -r [<fd>]  report statistics for each device checked;
            file descriptor is for GUIs
 -s         serialize the checking operations
 -T         do not show the title on startup
 -t <type>  specify filesystem types to be checked;
            <type> is allowed to be a comma-separated list
 -V         explain what is being done

 -?, --help     display this help
     --version  display version

See the specific fsck.* commands for available fs-options.
For more details see fsck(8).
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
        simpleExplain: "查看块设备的 UUID 和类型，就像查看硬盘的「身份证号」",
        detailExplain: "就像查看每块硬盘/分区的身份证——UUID（全局唯一标识符）、文件系统类型、卷标等。UUID 在配置 /etc/fstab 时特别有用，因为它不随设备名称变化。",
        helpOutput: `
Usage:
 blkid --label <label> | --uuid <uuid>

 blkid [--cache-file <file>] [-ghlLv] [--output <format>] [--match-tag <tag>] 
       [--match-token <token>] [<dev> ...]

 blkid -p [--match-tag <tag>] [--offset <offset>] [--size <size>] 
       [--output <format>] <dev> ...

 blkid -i [--match-tag <tag>] [--output <format>] <dev> ...

Options:
 -c, --cache-file <file>    read from <file> instead of reading from the default
                              cache file (-c /dev/null means no cache)
 -d, --no-encoding          don't encode non-printing characters
 -g, --garbage-collect      garbage collect the blkid cache
 -o, --output <format>      output format; can be one of:
                              value, device, export or full; (default: full)
 -k, --list-filesystems     list all known filesystems/RAIDs and exit
 -s, --match-tag <tag>      show specified tag(s) (default show all tags)
 -t, --match-token <token>  find device with a specific token (NAME=value pair)
 -l, --list-one             look up only first device with token specified by -t
 -L, --label <label>        convert LABEL to device name
 -U, --uuid <uuid>          convert UUID to device name

Low-level probing options:
 -p, --probe                low-level superblocks probing (bypass cache)
 -i, --info                 gather information about I/O limits
 -H, --hint <value>         set hint for probing function
 -S, --size <size>          overwrite device size
 -O, --offset <offset>      probe at the given offset
 -u, --usages <list>        filter by "usage" (e.g. -u filesystem,raid)
 -n, --match-types <list>   filter by filesystem type (e.g. -n vfat,ext3)
 -D, --no-part-details      don't print info from partition table

 -h, --help                 display this help
 -V, --version              display version

Arguments:
 <size> and <offset> arguments may be followed by the suffixes for
   GiB, TiB, PiB, EiB, ZiB, and YiB (the "iB" is optional)

 <dev> specify device(s) to probe (default: all devices)

For more details see blkid(8).
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
        simpleExplain: "列出块设备信息，就像查看电脑的「硬盘全家福」",
        detailExplain: "就像给所有硬盘和分区拍了一张全家福照片——以树形结构展示每个磁盘设备、上面的分区、每个分区的大小、挂载点等。比 fdisk -l 更直观。",
        helpOutput: `
Usage:
 lsblk [options] [<device> ...]

List information about block devices.

Options:
 -A, --noempty        don't print empty devices
 -D, --discard        print discard capabilities
 -E, --dedup <column> de-duplicate output by <column>
 -I, --include <list> show only devices with specified major numbers
 -J, --json           use JSON output format
 -M, --merge          group parents of sub-trees (usable for RAIDs, Multi-path)
 -O, --output-all     output all columns
 -P, --pairs          use key="value" output format
 -S, --scsi           output info about SCSI devices
 -N, --nvme           output info about NVMe devices
 -v, --virtio         output info about virtio devices
 -T, --tree[=<column>] use tree format output
 -a, --all            print all devices
 -b, --bytes          print SIZE in bytes rather than in human readable format
 -d, --nodeps         don't print slaves or holders
 -e, --exclude <list> exclude devices by major number (default: RAM disks)
 -f, --fs             output info about filesystems
 -i, --ascii          use ascii characters only
 -l, --list           use list format output
 -m, --perms          output info about permissions
 -n, --noheadings     don't print headings
 -o, --output <list>  output columns
 -p, --paths          print complete device path
 -r, --raw            use raw output format
 -s, --inverse        inverse dependencies
 -t, --topology       output info about topology
 -w, --width <num>    specifies output width as number of characters
 -x, --sort <column>  sort output by <column>
 -y, --shell          use column names to be usable as shell variable identifiers
 -z, --zoned          print zone related information
     --sysroot <dir>  use specified directory as system root

 -h, --help           display this help
 -V, --version        display version

Available output columns:
    ALIGNMENT  alignment offset
      ID-LINK  the shortest udev /dev/disk/by-id link name
           ID  udev ID (based on ID-LINK)
     DISC-ALN  discard alignment offset
          DAX  dax-capable device
    DISC-GRAN  discard granularity
     DISK-SEQ  disk sequence number
     DISC-MAX  discard max bytes
    DISC-ZERO  discard zeroes data
      FSAVAIL  filesystem size available
      FSROOTS  mounted filesystem roots
       FSSIZE  filesystem size
       FSTYPE  filesystem type
       FSUSED  filesystem size used
       FSUSE%  filesystem use percentage
        FSVER  filesystem version
        GROUP  group name
         HCTL  Host:Channel:Target:Lun for SCSI
      HOTPLUG  removable or hotplug device (usb, pcmcia, ...)
        KNAME  internal kernel device name
        LABEL  filesystem LABEL
      LOG-SEC  logical sector size
      MAJ:MIN  major:minor device number
       MIN-IO  minimum I/O size
         MODE  device node permissions
        MODEL  device identifier
           MQ  device queues
         NAME  device name
       OPT-IO  optimal I/O size
        OWNER  user name
    PARTFLAGS  partition flags
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
        simpleExplain: "底层磁盘拷贝工具，就像一台精密的磁盘复印机",
        detailExplain: "就像一台超级精密的磁盘复印机——可以逐字节地复制整个磁盘、制作启动 U 盘、备份分区表。dd 功能强大但也很危险，一个参数写错就可能把整个硬盘数据抹掉，所以有「dd = Disk Destroyer」的戏称。",
        helpOutput: `Usage: dd [OPERAND]...
  or:  dd OPTION
Copy a file, converting and formatting according to the operands.

  bs=BYTES        read and write up to BYTES bytes at a time (default: 512);
                  overrides ibs and obs
  cbs=BYTES       convert BYTES bytes at a time
  conv=CONVS      convert the file as per the comma separated symbol list
  count=N         copy only N input blocks
  ibs=BYTES       read up to BYTES bytes at a time (default: 512)
  if=FILE         read from FILE instead of stdin
  iflag=FLAGS     read as per the comma separated symbol list
  obs=BYTES       write BYTES bytes at a time (default: 512)
  of=FILE         write to FILE instead of stdout
  oflag=FLAGS     write as per the comma separated symbol list
  seek=N          (or oseek=N) skip N obs-sized output blocks
  skip=N          (or iseek=N) skip N ibs-sized input blocks
  status=LEVEL    The LEVEL of information to print to stderr;
                  'none' suppresses everything but error messages,
                  'noxfer' suppresses the final transfer statistics,
                  'progress' shows periodic transfer statistics

N and BYTES may be followed by the following multiplicative suffixes:
c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, xM=M,
GB=1000*1000*1000, G=1024*1024*1024, and so on for T, P, E, Z, Y, R, Q.
Binary prefixes can be used, too: KiB=K, MiB=M, and so on.
If N ends in 'B', it counts bytes not blocks.

Each CONV symbol may be:

  ascii     from EBCDIC to ASCII
  ebcdic    from ASCII to EBCDIC
  ibm       from ASCII to alternate EBCDIC
  block     pad newline-terminated records with spaces to cbs-size
  unblock   replace trailing spaces in cbs-size records with newline
  lcase     change upper case to lower case
  ucase     change lower case to upper case
  sparse    try to seek rather than write all-NUL output blocks
  swab      swap every pair of input bytes
  sync      pad every input block with NULs to ibs-size; when used
            with block or unblock, pad with spaces rather than NULs
  excl      fail if the output file already exists
  nocreat   do not create the output file
  notrunc   do not truncate the output file
  noerror   continue after read errors
  fdatasync  physically write output file data before finishing
  fsync     likewise, but also write metadata

Each FLAG symbol may be:

  append    append mode (makes sense only for output; conv=notrunc suggested)
  direct    use direct I/O for data
  directory  fail unless a directory
  dsync     use synchronized I/O for data
  sync      likewise, but also for metadata
  fullblock  accumulate full blocks of input (iflag only)
  nonblock  use non-blocking I/O
  noatime   do not update access time
  nocache   Request to drop cache.  See also oflag=sync
  noctty    do not assign controlling terminal from file
  nofollow  do not follow symlinks

Sending a USR1 signal to a running 'dd' process makes it
print I/O statistics to standard error and then resume copying.

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
        simpleExplain: "高级磁盘分区工具，就像 fdisk 的升级版能处理更大的硬盘",
        detailExplain: "就像 fdisk 的升级版——支持 GPT 分区表、支持超过 2TB 的大硬盘、可以调整分区大小而不丢失数据。parted 是现代大容量硬盘分区的首选工具。",
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
        simpleExplain: "创建交换分区，就像给电脑准备一张「应急内存卡」",
        detailExplain: "就像给电脑准备了一张应急备用内存卡——当真实内存（RAM）不够用时，系统会把一部分数据临时存到 swap 分区里。mkswap 就是把一个分区格式化为 swap 格式。",
        helpOutput: `
Usage:
 mkswap [options] device [size]

Set up a Linux swap area.

Options:
 -c, --check               check bad blocks before creating the swap area
 -f, --force               allow swap size area be larger than device
 -q, --quiet               suppress output and warning messages
 -p, --pagesize SIZE       specify page size in bytes
 -L, --label LABEL         specify label
 -v, --swapversion NUM     specify swap-space version number
 -U, --uuid UUID           specify the uuid to use
 -e, --endianness=<value>  specify the endianness to use (native, little or big)
     --verbose             verbose output
     --lock[=<mode>]       use exclusive device lock (yes, no or nonblock)
 -h, --help                display this help
 -V, --version             display version

For more details see mkswap(8).
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
        simpleExplain: "启用交换分区，就像激活那张「应急内存卡」让它随时待命",
        detailExplain: "就像把你准备好的应急内存卡插进卡槽激活——swapon 让系统开始使用指定的 swap 分区或 swap 文件。启用后，当物理内存不足时，系统就会自动使用 swap 空间。",
        helpOutput: `
Usage:
 swapon [options] [<spec>]

Enable devices and files for paging and swapping.

Options:
 -a, --all                enable all swaps from /etc/fstab
 -d, --discard[=<policy>] enable swap discards, if supported by device
 -e, --ifexists           silently skip devices that do not exist
 -f, --fixpgsz            reinitialize the swap space if necessary
 -o, --options <list>     comma-separated list of swap options
 -p, --priority <prio>    specify the priority of the swap device
 -s, --summary            display summary about used swap devices (DEPRECATED)
 -T, --fstab <path>       alternative file to /etc/fstab
     --show[=<columns>]   display summary in definable table
     --noheadings         don't print table heading (with --show)
     --raw                use the raw output format (with --show)
     --bytes              display swap size in bytes in --show output
 -v, --verbose            verbose mode

 -h, --help               display this help
 -V, --version            display version

The <spec> parameter:
 -L <label>             synonym for LABEL=<label>
 -U <uuid>              synonym for UUID=<uuid>
 LABEL=<label>          specifies device by swap area label
 UUID=<uuid>            specifies device by swap area UUID
 PARTLABEL=<label>      specifies device by partition label
 PARTUUID=<uuid>        specifies device by partition UUID
 <device>               name of device to be used
 <file>                 name of file to be used

Available discard policy types (for --discard):
 once    : only single-time area discards are issued
 pages   : freed pages are discarded before they are reused
If no policy is selected, both discard types are enabled (default).

Available output columns:
 NAME   device file or partition path
 TYPE   type of the device
 SIZE   size of the swap area
 USED   bytes in use
 PRIO   swap priority
 UUID   swap uuid
 LABEL  swap label

For more details see swapon(8).
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
        simpleExplain: "禁用交换分区，就像拔掉那张「应急内存卡」",
        detailExplain: "就像把应急内存卡从卡槽里拔出来——swapoff 让系统停止使用指定的 swap 分区或文件。禁用前系统会先把 swap 里的数据搬回内存。",
        helpOutput: `
Usage:
 swapoff [options] [<spec>]

Disable devices and files for paging and swapping.

Options:
 -a, --all              disable all swaps from /proc/swaps
 -v, --verbose          verbose mode

 -h, --help             display this help
 -V, --version          display version

The <spec> parameter:
 -L <label>             LABEL of device to be used
 -U <uuid>              UUID of device to be used
 LABEL=<label>          LABEL of device to be used
 UUID=<uuid>            UUID of device to be used
 <device>               name of device to be used
 <file>                 name of file to be used

For more details see swapoff(8).
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
        simpleExplain: "查看 ext 文件系统的详细信息，就像查看 ext 硬盘的「体检报告」",
        detailExplain: "就像给 ext2/ext3/ext4 文件系统做一次详细的体检报告——显示超级块信息、块组描述、inode 数量等。这些信息对于诊断文件系统问题和优化性能非常有用。",
        helpOutput: `dumpe2fs 1.47.0 (5-Feb-2023)
dumpe2fs: invalid option -- '-'
Usage: dumpe2fs [-bfghimxV] [-o superblock=<num>] [-o blocksize=<num>] device
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
        simpleExplain: "交互式磁盘使用分析工具，就像一个可视化的仓库盘点员",
        detailExplain: "就像一个可视化的仓库盘点员——ncdu 会扫描指定目录，然后用交互式界面按大小排序显示各文件和文件夹的占用情况。你可以用方向键上下浏览，快速找到吃空间的「大户」。",
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
        simpleExplain: "查看和设置硬盘参数，就像给硬盘做性能调校",
        detailExplain: "就像给硬盘做性能调校——hdparm 可以查看硬盘的型号、序列号、缓存大小，还能测试读取速度、开启或关闭 DMA 模式等。不过设置参数有风险，调错可能导致数据丢失。",
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
        simpleExplain: "查看硬盘SMART健康信息，就像给硬盘做健康体检",
        detailExplain: "就像给硬盘做健康体检——smartctl 读取硬盘的 SMART（自监测分析报告技术）数据，包括温度、通电时间、坏扇区计数等。提前发现硬盘健康隐患，避免数据突然丢失。",
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
        simpleExplain: "设置循环设备，就像把一个文件虚拟成一块硬盘",
        detailExplain: "就像把一个文件虚拟成一块硬盘——losetup 可以把一个普通文件（比如 ISO 镜像）关联到一个循环设备（/dev/loopX），然后就可以像操作真实硬盘一样挂载和访问它。",
        helpOutput: `
Usage:
 losetup [options] [<loopdev>]
 losetup [options] -f | <loopdev> <file>

Set up and control loop devices.

Options:
 -a, --all                     list all used devices
 -d, --detach <loopdev>...     detach one or more devices
 -D, --detach-all              detach all used devices
 -f, --find                    find first unused device
 -c, --set-capacity <loopdev>  resize the device
 -j, --associated <file>       list all devices associated with <file>
 -L, --nooverlap               avoid possible conflict between devices

 -o, --offset <num>            start at offset <num> into file
     --sizelimit <num>         device is limited to <num> bytes of the file
 -b, --sector-size <num>       set the logical sector size to <num>
 -P, --partscan                create a partitioned loop device
 -r, --read-only               set up a read-only loop device
     --direct-io[=<on|off>]    open backing file with O_DIRECT
     --show                    print device name after setup (with -f)
 -v, --verbose                 verbose mode

 -J, --json                    use JSON --list output format
 -l, --list                    list info about all or specified (default)
 -n, --noheadings              don't print headings for --list output
 -O, --output <cols>           specify columns to output for --list
     --output-all              output all columns
     --raw                     use raw --list output format

 -h, --help                    display this help
 -V, --version                 display version

Available output columns:
         NAME  loop device name
    AUTOCLEAR  autoclear flag set
    BACK-FILE  device backing file
     BACK-INO  backing file inode number
 BACK-MAJ:MIN  backing file major:minor device number
      MAJ:MIN  loop device major:minor number
       OFFSET  offset from the beginning
     PARTSCAN  partscan flag set
           RO  read-only device
    SIZELIMIT  size limit of the file in bytes
          DIO  access backing file with direct-io
      LOG-SEC  logical sector size in bytes

For more details see losetup(8).
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
        simpleExplain: "调整ext文件系统参数，就像给文件系统做微调手术",
        detailExplain: "就像给文件系统做微调手术——tune2fs 可以调整 ext2/ext3/ext4 文件系统的各种参数，比如保留空间比例、文件系统标签、自检间隔等。操作不当可能损坏文件系统，务必谨慎。",
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
        simpleExplain: "调整ext文件系统大小，就像给房间扩容或缩小",
        detailExplain: "就像给房间扩容或缩小——resize2fs 可以扩大或缩小 ext2/ext3/ext4 文件系统的大小。通常在调整了分区大小后使用，让文件系统填满新的分区空间。",
        helpOutput: `resize2fs 1.47.0 (5-Feb-2023)
resize2fs: invalid option -- '-'
Usage: resize2fs [-d debug_flags] [-f] [-F] [-M] [-P] [-p] device [-b|-s|new_size] [-S RAID-stride] [-z undo_file]

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
        simpleExplain: "检查磁盘坏道，就像给硬盘做坏点检测",
        detailExplain: "就像给硬盘做坏点检测——badblocks 扫描磁盘上的每个扇区，找出无法正常读写的坏道。发现坏道意味着硬盘可能快坏了，要及时备份数据。",
        helpOutput: `badblocks: invalid option -- '-'
Usage: badblocks [-b block_size] [-i input_file] [-o output_file] [-svwnfBX]
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
        simpleExplain: "将缓存数据写入磁盘，就像把草稿本上的内容正式抄写到笔记本上",
        detailExplain: "就像把草稿本上的内容正式抄写到笔记本上——Linux 为了提高性能，会把数据先放在内存缓存中，稍后再写入磁盘。sync 命令强制把所有缓存数据立即写入磁盘，确保数据安全。",
        helpOutput: `Usage: sync [OPTION] [FILE]...
Synchronize cached writes to persistent storage

If one or more files are specified, sync only them,
or their containing file systems.

  -d, --data             sync only file data, no unneeded metadata
  -f, --file-system      sync the file systems that contain the files
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/sync>
or available locally via: info '(coreutils) sync invocation'
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
        simpleExplain: "打包和解包文件，就像用纸箱把一堆东西装箱打包",
        detailExplain: "就像搬家时用纸箱把一堆零散的东西打包在一起——tar 本身只负责「打包」，不压缩。但通常配合 gzip 或 bzip2 一起使用，边打包边压缩，就像把东西装箱后再用真空袋抽气压缩。",
        helpOutput: `Usage: tar [OPTION...] [FILE]...
GNU 'tar' saves many files together into a single tape or disk archive, and can
restore individual files from the archive.

Examples:
  tar -cf archive.tar foo bar  # Create archive.tar from files foo and bar.
  tar -tvf archive.tar         # List all files in archive.tar verbosely.
  tar -xf archive.tar          # Extract all files from archive.tar.

 Main operation mode:
  -A, --catenate, --concatenate   append tar files to an archive
  -c, --create               create a new archive
      --delete               delete from the archive (not on mag tapes!)
  -d, --diff, --compare      find differences between archive and file system
  -r, --append               append files to the end of an archive
      --test-label           test the archive volume label and exit
  -t, --list                 list the contents of an archive
  -u, --update               only append files newer than copy in archive
  -x, --extract, --get       extract files from an archive

 Operation modifiers:

      --check-device         check device numbers when creating incremental
                             archives (default)
  -g, --listed-incremental=FILE   handle new GNU-format incremental backup
  -G, --incremental          handle old GNU-format incremental backup
      --hole-detection=TYPE  technique to detect holes
      --ignore-failed-read   do not exit with nonzero on unreadable files
      --level=NUMBER         dump level for created listed-incremental archive
      --no-check-device      do not check device numbers when creating
                             incremental archives
      --no-seek              archive is not seekable
  -n, --seek                 archive is seekable
      --occurrence[=NUMBER]  process only the NUMBERth occurrence of each file
                             in the archive; this option is valid only in
                             conjunction with one of the subcommands --delete,
                             --diff, --extract or --list and when a list of
                             files is given either on the command line or via
                             the -T option; NUMBER defaults to 1
      --sparse-version=MAJOR[.MINOR]
                             set version of the sparse format to use (implies
                             --sparse)
  -S, --sparse               handle sparse files efficiently

 Local file name selection:
      --add-file=FILE        add given FILE to the archive (useful if its name
                             starts with a dash)
  -C, --directory=DIR        change to directory DIR
      --exclude=PATTERN      exclude files, given as a PATTERN
      --exclude-backups      exclude backup and lock files
      --exclude-caches       exclude contents of directories containing
                             CACHEDIR.TAG, except for the tag file itself
      --exclude-caches-all   exclude directories containing CACHEDIR.TAG
      --exclude-caches-under exclude everything under d`,
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
        simpleExplain: "压缩文件，就像用真空袋把衣服压缩变小",
        detailExplain: "就像用真空压缩袋把蓬松的冬衣压扁——gzip 把文件压缩变小，节省磁盘空间和网络传输时间。压缩后原文件会被替换为 .gz 文件。gzip 是 Linux 上最常用的压缩格式。",
        helpOutput: `Usage: gzip [OPTION]... [FILE]...
Compress or uncompress FILEs (by default, compress FILES in-place).

Mandatory arguments to long options are mandatory for short options too.

  -c, --stdout      write on standard output, keep original files unchanged
  -d, --decompress  decompress
  -f, --force       force overwrite of output file and compress links
  -h, --help        give this help
  -k, --keep        keep (don't delete) input files
  -l, --list        list compressed file contents
  -L, --license     display software license
  -n, --no-name     do not save or restore the original name and timestamp
  -N, --name        save or restore the original name and timestamp
  -q, --quiet       suppress all warnings
  -r, --recursive   operate recursively on directories
      --rsyncable   make rsync-friendly archive
  -S, --suffix=SUF  use suffix SUF on compressed files
      --synchronous synchronous output (safer if system crashes, but slower)
  -t, --test        test compressed file integrity
  -v, --verbose     verbose mode
  -V, --version     display version number
  -1, --fast        compress faster
  -9, --best        compress better

With no FILE, or when FILE is -, read standard input.

Report bugs to <bug-gzip@gnu.org>.
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
        simpleExplain: "解压 gzip 文件，就像打开真空袋让衣服恢复原状",
        detailExplain: "就像打开真空压缩袋，让被压扁的衣服恢复蓬松——gunzip 把 .gz 文件解压还原成原始文件。gunzip 其实就是 gzip -d。",
        helpOutput: `Usage: /usr/bin/gunzip [OPTION]... [FILE]...
Uncompress FILEs (by default, in-place).

Mandatory arguments to long options are mandatory for short options too.

  -c, --stdout      write on standard output, keep original files unchanged
  -f, --force       force overwrite of output file and compress links
  -k, --keep        keep (don't delete) input files
  -l, --list        list compressed file contents
  -n, --no-name     do not save or restore the original name and timestamp
  -N, --name        save or restore the original name and timestamp
  -q, --quiet       suppress all warnings
  -r, --recursive   operate recursively on directories
  -S, --suffix=SUF  use suffix SUF on compressed files
      --synchronous synchronous output (safer if system crashes, but slower)
  -t, --test        test compressed file integrity
  -v, --verbose     verbose mode
      --help        display this help and exit
      --version     display version information and exit

With no FILE, or when FILE is -, read standard input.

Report bugs to <bug-gzip@gnu.org>.
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
        simpleExplain: "高压缩比压缩工具，就像一台更厉害的真空压缩机",
        detailExplain: "就像比 gzip 更强力的高级真空压缩机——压缩率比 gzip 更高，但压缩速度更慢。适合对文件大小敏感、不太在乎压缩时间的场景。",
        helpOutput: `bzip2, a block-sorting file compressor.  Version 1.0.8, 13-Jul-2019.

   usage: bzip2 [flags and input files in any order]

   -h --help           print this message
   -d --decompress     force decompression
   -z --compress       force compression
   -k --keep           keep (don't delete) input files
   -f --force          overwrite existing output files
   -t --test           test compressed file integrity
   -c --stdout         output to standard out
   -q --quiet          suppress noncritical error messages
   -v --verbose        be verbose (a 2nd -v gives more)
   -L --license        display software version & license
   -V --version        display software version & license
   -s --small          use less memory (at most 2500k)
   -1 .. -9            set block size to 100k .. 900k
   --fast              alias for -1
   --best              alias for -9

   If invoked as \`bzip2', default action is to compress.
              as \`bunzip2',  default action is to decompress.
              as \`bzcat', default action is to decompress to stdout.

   If no file names are given, bzip2 compresses or decompresses
   from standard input to standard output.  You can combine
   short flags, so \`-v -4' means the same as -v4 or -4v, &c.

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
        simpleExplain: "解压 bzip2 文件，就像打开高级真空袋恢复原状",
        detailExplain: "就像打开 bzip2 这个高级真空压缩袋——把 .bz2 文件解压还原成原始文件。bunzip2 其实就是 bzip2 -d。",
        helpOutput: `bzip2, a block-sorting file compressor.  Version 1.0.8, 13-Jul-2019.

   usage: bunzip2 [flags and input files in any order]

   -h --help           print this message
   -d --decompress     force decompression
   -z --compress       force compression
   -k --keep           keep (don't delete) input files
   -f --force          overwrite existing output files
   -t --test           test compressed file integrity
   -c --stdout         output to standard out
   -q --quiet          suppress noncritical error messages
   -v --verbose        be verbose (a 2nd -v gives more)
   -L --license        display software version & license
   -V --version        display software version & license
   -s --small          use less memory (at most 2500k)
   -1 .. -9            set block size to 100k .. 900k
   --fast              alias for -1
   --best              alias for -9

   If invoked as \`bzip2', default action is to compress.
              as \`bunzip2',  default action is to decompress.
              as \`bzcat', default action is to decompress to stdout.

   If no file names are given, bzip2 compresses or decompresses
   from standard input to standard output.  You can combine
   short flags, so \`-v -4' means the same as -v4 or -4v, &c.

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
        simpleExplain: "创建 ZIP 压缩包，就像 Windows 用户最熟悉的那个压缩工具",
        detailExplain: "就像 Windows 上大家最常用的那个压缩工具——zip 格式是跨平台的压缩标准，Windows、Mac、Linux 都能直接打开。zip 压缩时会保留原文件，非常适合和 Windows 用户交换文件。",
        helpOutput: `Copyright (c) 1990-2008 Info-ZIP - Type 'zip "-L"' for software license.
Zip 3.0 (July 5th 2008). Usage:
zip [-options] [-b path] [-t mmddyyyy] [-n suffixes] [zipfile list] [-xi list]
  The default action is to add or replace zipfile entries from list, which
  can include the special name - to compress standard input.
  If zipfile and list are omitted, zip compresses stdin to stdout.
  -f   freshen: only changed files  -u   update: only changed or new files
  -d   delete entries in zipfile    -m   move into zipfile (delete OS files)
  -r   recurse into directories     -j   junk (don't record) directory names
  -0   store only                   -l   convert LF to CR LF (-ll CR LF to LF)
  -1   compress faster              -9   compress better
  -q   quiet operation              -v   verbose operation/print version info
  -c   add one-line comments        -z   add zipfile comment
  -@   read names from stdin        -o   make zipfile as old as latest entry
  -x   exclude the following names  -i   include only the following names
  -F   fix zipfile (-FF try harder) -D   do not add directory entries
  -A   adjust self-extracting exe   -J   junk zipfile prefix (unzipsfx)
  -T   test zipfile integrity       -X   eXclude eXtra file attributes
  -y   store symbolic links as the link instead of the referenced file
  -e   encrypt                      -n   don't compress these suffixes
  -h2  show more help
  
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
        simpleExplain: "解压 ZIP 文件，就像打开一个拉链袋取出里面的东西",
        detailExplain: "就像拉开一个拉链袋取出里面的东西——unzip 把 .zip 压缩包里的文件解压出来。可以解压到当前目录，也可以指定目标目录。",
        helpOutput: `UnZip 6.00 of 20 April 2009, by Debian. Original by Info-ZIP.

Usage: unzip [-Z] [-opts[modifiers]] file[.zip] [list] [-x xlist] [-d exdir]
  Default action is to extract files in list, except those in xlist, to exdir;
  file[.zip] may be a wildcard.  -Z => ZipInfo mode ("unzip -Z" for usage).

  -p  extract files to pipe, no messages     -l  list files (short format)
  -f  freshen existing files, create none    -t  test compressed archive data
  -u  update files, create if necessary      -z  display archive comment only
  -v  list verbosely/show version info       -T  timestamp archive to latest
  -x  exclude files that follow (in xlist)   -d  extract files into exdir
modifiers:
  -n  never overwrite existing files         -q  quiet mode (-qq => quieter)
  -o  overwrite files WITHOUT prompting      -a  auto-convert any text files
  -j  junk paths (do not make directories)   -aa treat ALL files as text
  -U  use escapes for all non-ASCII Unicode  -UU ignore any Unicode fields
  -C  match filenames case-insensitively     -L  make (some) names lowercase
  -X  restore UID/GID info                   -V  retain VMS version numbers
  -K  keep setuid/setgid/tacky permissions   -M  pipe through "more" pager
  -O CHARSET  specify a character encoding for DOS, Windows and OS/2 archives
  -I CHARSET  specify a character encoding for UNIX and other archives

See "unzip -hh" or unzip.txt for more help.  Examples:
  unzip data1 -x joe   => extract all files except joe from zipfile data1.zip
  unzip -p foo | more  => send contents of foo.zip via pipe into program more
  unzip -fo foo ReadMe => quietly replace existing ReadMe if archive file newer
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
        simpleExplain: "超高压缩比工具，就像一台终极真空压缩机",
        detailExplain: "就像比 bzip2 还要厉害的终极真空压缩机——压缩率最高，但压缩速度也最慢。适合需要极致压缩的场景，比如发布大型软件源码包。",
        helpOutput: `Usage: xz [OPTION]... [FILE]...
Compress or decompress FILEs in the .xz format.

  -z, --compress      force compression
  -d, --decompress    force decompression
  -t, --test          test compressed file integrity
  -l, --list          list information about .xz files
  -k, --keep          keep (don't delete) input files
  -f, --force         force overwrite of output file and (de)compress links
  -c, --stdout        write to standard output and don't delete input files
  -0 ... -9           compression preset; default is 6; take compressor *and*
                      decompressor memory usage into account before using 7-9!
  -e, --extreme       try to improve compression ratio by using more CPU time;
                      does not affect decompressor memory requirements
  -T, --threads=NUM   use at most NUM threads; the default is 1; set to 0
                      to use as many threads as there are processor cores
  -q, --quiet         suppress warnings; specify twice to suppress errors too
  -v, --verbose       be verbose; specify twice for even more verbose
  -h, --help          display this short help and exit
  -H, --long-help     display the long help (lists also the advanced options)
  -V, --version       display the version number and exit

With no FILE, or when FILE is -, read standard input.

Report bugs to <xz@tukaani.org> (in English or Finnish).
XZ Utils home page: <https://tukaani.org/xz/>
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
        simpleExplain: "解压 xz 文件，就像打开终极真空袋恢复原状",
        detailExplain: "就像打开 xz 这个终极真空压缩袋——把 .xz 文件解压还原成原始文件。unxz 其实就是 xz -d。",
        helpOutput: `Usage: unxz [OPTION]... [FILE]...
Compress or decompress FILEs in the .xz format.

  -z, --compress      force compression
  -d, --decompress    force decompression
  -t, --test          test compressed file integrity
  -l, --list          list information about .xz files
  -k, --keep          keep (don't delete) input files
  -f, --force         force overwrite of output file and (de)compress links
  -c, --stdout        write to standard output and don't delete input files
  -0 ... -9           compression preset; default is 6; take compressor *and*
                      decompressor memory usage into account before using 7-9!
  -e, --extreme       try to improve compression ratio by using more CPU time;
                      does not affect decompressor memory requirements
  -T, --threads=NUM   use at most NUM threads; the default is 1; set to 0
                      to use as many threads as there are processor cores
  -q, --quiet         suppress warnings; specify twice to suppress errors too
  -v, --verbose       be verbose; specify twice for even more verbose
  -h, --help          display this short help and exit
  -H, --long-help     display the long help (lists also the advanced options)
  -V, --version       display the version number and exit

With no FILE, or when FILE is -, read standard input.

Report bugs to <xz@tukaani.org> (in English or Finnish).
XZ Utils home page: <https://tukaani.org/xz/>
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
        simpleExplain: "7-Zip 压缩工具，就像压缩界的全能冠军",
        detailExplain: "就像压缩界的全能冠军——支持 7z、zip、rar、tar、gzip 等几乎所有常见压缩格式，而且 7z 格式的压缩率极高。如果你只想装一个压缩工具，7z 几乎能搞定所有格式。",
        helpOutput: `Usage: 7z <command> [<switches>...] <archive_name> [<file_names>...]
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
        simpleExplain: "不解压直接查看 gzip 压缩文件内容，就像隔着透明袋看里面的东西",
        detailExplain: "就像真空袋是透明的，你不用打开袋子就能看到里面装了什么——zcat 不需要先解压 .gz 文件，就能直接把压缩文件的内容输出到屏幕上。",
        helpOutput: `Usage: /usr/bin/zcat [OPTION]... [FILE]...
Uncompress FILEs to standard output.

  -f, --force       force; read compressed data even from a terminal
  -l, --list        list compressed file contents
  -q, --quiet       suppress all warnings
  -r, --recursive   operate recursively on directories
  -S, --suffix=SUF  use suffix SUF on compressed files
      --synchronous synchronous output (safer if system crashes, but slower)
  -t, --test        test compressed file integrity
  -v, --verbose     verbose mode
      --help        display this help and exit
      --version     display version information and exit

With no FILE, or when FILE is -, read standard input.

Report bugs to <bug-gzip@gnu.org>.
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
        simpleExplain: "不解压直接查看 bzip2 压缩文件内容",
        detailExplain: "就像 zcat 的 bzip2 版本——不需要先解压 .bz2 文件，就能直接把压缩文件的内容输出到屏幕上。",
        helpOutput: `bzip2, a block-sorting file compressor.  Version 1.0.8, 13-Jul-2019.

   usage: bzcat [flags and input files in any order]

   -h --help           print this message
   -d --decompress     force decompression
   -z --compress       force compression
   -k --keep           keep (don't delete) input files
   -f --force          overwrite existing output files
   -t --test           test compressed file integrity
   -c --stdout         output to standard out
   -q --quiet          suppress noncritical error messages
   -v --verbose        be verbose (a 2nd -v gives more)
   -L --license        display software version & license
   -V --version        display software version & license
   -s --small          use less memory (at most 2500k)
   -1 .. -9            set block size to 100k .. 900k
   --fast              alias for -1
   --best              alias for -9

   If invoked as \`bzip2', default action is to compress.
              as \`bunzip2',  default action is to decompress.
              as \`bzcat', default action is to decompress to stdout.

   If no file names are given, bzip2 compresses or decompresses
   from standard input to standard output.  You can combine
   short flags, so \`-v -4' means the same as -v4 or -4v, &c.

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
        simpleExplain: "老式 Unix 压缩工具，就像压缩界的「老爷爷」",
        detailExplain: "就像压缩界的「老爷爷」——是 Unix 系统上最早的压缩工具之一，压缩后文件后缀为 .Z。压缩率不如 gzip，现在基本已经被淘汰了。",
        helpOutput: `Usage: compress [ -f ] [ -v ] [ -c ] [ -V ] [ -r ] [ -b bits ] [ name ... ]

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
        simpleExplain: "解压 .Z 格式文件，就像帮老爷爷打开他的老式压缩袋",
        detailExplain: "就像帮老爷爷打开他那老式的压缩袋——uncompress 专门用来解压 compress 命令生成的 .Z 格式文件。",
        helpOutput: `Usage: /usr/bin/uncompress [OPTION]... [FILE]...
Uncompress FILEs (by default, in-place).

Mandatory arguments to long options are mandatory for short options too.

  -c, --stdout      write on standard output, keep original files unchanged
  -f, --force       force overwrite of output file and compress links
  -k, --keep        keep (don't delete) input files
  -l, --list        list compressed file contents
  -n, --no-name     do not save or restore the original name and timestamp
  -N, --name        save or restore the original name and timestamp
  -q, --quiet       suppress all warnings
  -r, --recursive   operate recursively on directories
  -S, --suffix=SUF  use suffix SUF on compressed files
      --synchronous synchronous output (safer if system crashes, but slower)
  -t, --test        test compressed file integrity
  -v, --verbose     verbose mode
      --help        display this help and exit
      --version     display version information and exit

With no FILE, or when FILE is -, read standard input.

Report bugs to <bug-gzip@gnu.org>.
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
        simpleExplain: "RAR 格式压缩工具，就像压缩界的「专业选手」",
        detailExplain: "就像压缩界的专业选手——RAR 格式压缩率高、支持分卷压缩、支持恢复记录。不过 rar 是商业软件，Linux 上通常用 7z 或 unrar 来处理 rar 文件。",
        helpOutput: `Usage: rar <command> [-<switches>] <archive> [<files>]

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
        simpleExplain: "极速压缩工具，就像一个动作飞快的打包员",
        detailExplain: "就像一个动作飞快的打包员——lz4 的压缩和解压速度极快，远超 gzip 和 bzip2，虽然压缩比不是最高，但在需要速度的场景下是首选。常用于实时数据传输和日志压缩。",
        helpOutput: `Usage: lz4 [arg] [input] [output]

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
        simpleExplain: "高压缩比的新型压缩工具，就像一个既快又省空间的收纳大师",
        detailExplain: "就像一个既快又省空间的收纳大师——zstd（Zstandard）由 Facebook 开发，兼顾了压缩速度和压缩比，比 gzip 更快更小，正在成为 Linux 生态的新标准。很多现代软件已开始默认使用 zstd。",
        helpOutput: `Usage: zstd [args] [FILE(s)] [-o file]

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
        simpleExplain: "高压缩比压缩工具，就像把行李箱压缩到极致",
        detailExplain: "就像把行李箱压缩到极致——lzma 使用 LZMA 算法，压缩比非常高，但速度较慢。适合对体积敏感而对时间不敏感的场景，比如发布软件源码包。xz 是 lzma 的继任者，功能更强大。",
        helpOutput: `Usage: lzma [OPTION]... [FILE]...
Compress or decompress FILEs in the .xz format.

  -z, --compress      force compression
  -d, --decompress    force decompression
  -t, --test          test compressed file integrity
  -l, --list          list information about .xz files
  -k, --keep          keep (don't delete) input files
  -f, --force         force overwrite of output file and (de)compress links
  -c, --stdout        write to standard output and don't delete input files
  -0 ... -9           compression preset; default is 6; take compressor *and*
                      decompressor memory usage into account before using 7-9!
  -e, --extreme       try to improve compression ratio by using more CPU time;
                      does not affect decompressor memory requirements
  -T, --threads=NUM   use at most NUM threads; the default is 1; set to 0
                      to use as many threads as there are processor cores
  -q, --quiet         suppress warnings; specify twice to suppress errors too
  -v, --verbose       be verbose; specify twice for even more verbose
  -h, --help          display this short help and exit
  -H, --long-help     display the long help (lists also the advanced options)
  -V, --version       display the version number and exit

With no FILE, or when FILE is -, read standard input.

Report bugs to <xz@tukaani.org> (in English or Finnish).
XZ Utils home page: <https://tukaani.org/xz/>
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
        simpleExplain: "文件归档工具，就像把文件按顺序打包进集装箱",
        detailExplain: "就像把文件按顺序打包进集装箱——cpio 从标准输入读取文件列表，将它们打包成一个归档文件。常与 find 命令配合使用，也用于处理 RPM 包和内核镜像文件。",
        helpOutput: `Usage: cpio [-o|-i|-p] [options]

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
        simpleExplain: "创建Shell自解压包，就像把东西装进一个能自己打开的箱子",
        detailExplain: "就像把东西装进一个能自己打开的箱子——shar 把多个文件打包成一个 Shell 脚本，运行这个脚本就能自动解出所有文件。不需要额外工具，只要有 Shell 就能解包，但注意安全性——不要运行来源不明的 shar 包。",
        helpOutput: `Usage: shar [OPTION]... FILE ...

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
        simpleExplain: "创建或管理归档文件，就像图书馆管理员整理和查找档案",
        detailExplain: "就像图书馆管理员整理和查找档案——ar 主要用于创建和管理静态库（.a 文件），是 C/C++ 编译工具链的一部分。也可以用来打包 Debian 软件包（.deb 文件本质就是 ar 归档）。",
        helpOutput: `Usage: ar [emulation options] [-]{dmpqrstx}[abcDfilMNoOPsSTuvV] [--plugin <name>] [member-name] [count] archive-file file...
       ar -M [<mri-script]
 commands:
  d            - delete file(s) from the archive
  m[ab]        - move file(s) in the archive
  p            - print file(s) found in the archive
  q[f]         - quick append file(s) to the archive
  r[ab][f][u]  - replace existing or insert new file(s) into the archive
  s            - act as ranlib
  t[O][v]      - display contents of the archive
  x[o]         - extract file(s) from the archive
 command specific modifiers:
  [a]          - put file(s) after [member-name]
  [b]          - put file(s) before [member-name] (same as [i])
  [D]          - use zero for timestamps and uids/gids (default)
  [U]          - use actual timestamps and uids/gids
  [N]          - use instance [count] of name
  [f]          - truncate inserted file names
  [P]          - use full path names when matching
  [o]          - preserve original dates
  [O]          - display offsets of files in the archive
  [u]          - only replace files that are newer than current archive contents
 generic modifiers:
  [c]          - do not warn if the library had to be created
  [s]          - create an archive index (cf. ranlib)
  [l <text> ]  - specify the dependencies of this library
  [S]          - do not build a symbol table
  [T]          - deprecated, use --thin instead
  [v]          - be verbose
  [V]          - display the version number
  @<file>      - read options from <file>
  --target=BFDNAME - specify the target object format as BFDNAME
  --output=DIRNAME - specify the output directory for extraction operations
  --record-libdeps=<text> - specify the dependencies of this library
  --thin       - make a thin archive
 optional:
  --plugin <p> - load the specified plugin
 emulation options: 
  No emulation specific options
ar: supported targets: elf64-x86-64 elf32-i386 elf32-iamcu elf32-x86-64 pei-i386 pe-x86-64 pei-x86-64 elf64-little elf64-big elf32-little elf32-big pe-bigobj-x86-64 pe-i386 pdb srec symbolsrec verilog tekhex binary ihex plugin
Report bugs to <https://sourceware.org/bugzilla/>
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
        simpleExplain: "创建新用户，就像给新员工办入职手续发工牌",
        detailExplain: "就像 HR 给新入职的员工办理入职手续——创建用户账号、分配用户 ID、设置家目录、指定默认 shell。",
        helpOutput: `Usage: useradd [options] LOGIN
       useradd -D
       useradd -D [options]

Options:
      --badname                 do not check for bad names
  -b, --base-dir BASE_DIR       base directory for the home directory of the
                                new account
      --btrfs-subvolume-home    use BTRFS subvolume for home directory
  -c, --comment COMMENT         GECOS field of the new account
  -d, --home-dir HOME_DIR       home directory of the new account
  -D, --defaults                print or change default useradd configuration
  -e, --expiredate EXPIRE_DATE  expiration date of the new account
  -f, --inactive INACTIVE       password inactivity period of the new account
  -F, --add-subids-for-system   add entries to sub[ud]id even when adding a system user
  -g, --gid GROUP               name or ID of the primary group of the new
                                account
  -G, --groups GROUPS           list of supplementary groups of the new
                                account
  -h, --help                    display this help message and exit
  -k, --skel SKEL_DIR           use this alternative skeleton directory
  -K, --key KEY=VALUE           override /etc/login.defs defaults
  -l, --no-log-init             do not add the user to the lastlog and
                                faillog databases
  -m, --create-home             create the user's home directory
  -M, --no-create-home          do not create the user's home directory
  -N, --no-user-group           do not create a group with the same name as
                                the user
  -o, --non-unique              allow to create users with duplicate
                                (non-unique) UID
  -p, --password PASSWORD       encrypted password of the new account
  -r, --system                  create a system account
  -R, --root CHROOT_DIR         directory to chroot into
  -P, --prefix PREFIX_DIR       prefix directory where are located the /etc/* files
  -s, --shell SHELL             login shell of the new account
  -u, --uid UID                 user ID of the new account
  -U, --user-group              create a group with the same name as the user
  -Z, --selinux-user SEUSER     use a specific SEUSER for the SELinux user mapping
      --extrausers              Use the extra users database

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
        simpleExplain: "删除用户，就像给离职员工办理退工手续",
        detailExplain: "就像 HR 给离职员工办理退工手续——删除用户账号。默认只删除账号信息，不删除家目录。加 -r 参数会连同家目录一起删除。",
        helpOutput: `Usage: userdel [options] LOGIN

Options:
  -f, --force                   force some actions that would fail otherwise
                                e.g. removal of user still logged in
                                or files, even if not owned by the user
  -h, --help                    display this help message and exit
  -r, --remove                  remove home directory and mail spool
  -R, --root CHROOT_DIR         directory to chroot into
  -P, --prefix PREFIX_DIR       prefix directory where are located the /etc/* files
      --extrausers              Use the extra users database
  -Z, --selinux-user            remove any SELinux user mapping for the user

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
        simpleExplain: "修改用户信息，就像修改员工的档案信息",
        detailExplain: "就像 HR 修改员工的人事档案——可以改用户名、改家目录、改默认 shell、加组减组、设账号过期时间等。usermod 是用户管理的「万能修改器」。",
        helpOutput: `Usage: usermod [options] LOGIN

Options:
  -a, --append                  append the user to the supplemental GROUPS
                                mentioned by the -G option without removing
                                the user from other groups
  -b, --badname                 allow bad names
  -c, --comment COMMENT         new value of the GECOS field
  -d, --home HOME_DIR           new home directory for the user account
  -e, --expiredate EXPIRE_DATE  set account expiration date to EXPIRE_DATE
  -f, --inactive INACTIVE       set password inactive after expiration
                                to INACTIVE
  -g, --gid GROUP               force use GROUP as new primary group
  -G, --groups GROUPS           new list of supplementary GROUPS
  -h, --help                    display this help message and exit
  -l, --login NEW_LOGIN         new value of the login name
  -L, --lock                    lock the user account
  -m, --move-home               move contents of the home directory to the
                                new location (use only with -d)
  -o, --non-unique              allow using duplicate (non-unique) UID
  -p, --password PASSWORD       use encrypted password for the new password
  -P, --prefix PREFIX_DIR       prefix directory where are located the /etc/* files
  -r, --remove                  remove the user from only the supplemental GROUPS
                                mentioned by the -G option without removing
                                the user from other groups
  -R, --root CHROOT_DIR         directory to chroot into
  -s, --shell SHELL             new login shell for the user account
  -u, --uid UID                 new UID for the user account
  -U, --unlock                  unlock the user account
  -v, --add-subuids FIRST-LAST  add range of subordinate uids
  -V, --del-subuids FIRST-LAST  remove range of subordinate uids
  -w, --add-subgids FIRST-LAST  add range of subordinate gids
  -W, --del-subgids FIRST-LAST  remove range of subordinate gids
  -Z, --selinux-user SEUSER     new SELinux user mapping for the user account

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
        simpleExplain: "修改用户密码，就像重置门禁卡的密码",
        detailExplain: "就像重置门禁卡的密码——passwd 用来设置或修改用户密码。普通用户只能改自己的密码，root 可以改任何人的密码。",
        helpOutput: `Usage: passwd [options] [LOGIN]

Options:
  -a, --all                     report password status on all accounts
  -d, --delete                  delete the password for the named account
  -e, --expire                  force expire the password for the named account
  -h, --help                    display this help message and exit
  -k, --keep-tokens             change password only if expired
  -i, --inactive INACTIVE       set password inactive after expiration
                                to INACTIVE
  -l, --lock                    lock the password of the named account
  -n, --mindays MIN_DAYS        set minimum number of days before password
                                change to MIN_DAYS
  -q, --quiet                   quiet mode
  -r, --repository REPOSITORY   change password in REPOSITORY repository
  -R, --root CHROOT_DIR         directory to chroot into
  -S, --status                  report password status on the named account
  -u, --unlock                  unlock the password of the named account
  -w, --warndays WARN_DAYS      set expiration warning days to WARN_DAYS
  -x, --maxdays MAX_DAYS        set maximum number of days before password
                                change to MAX_DAYS

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
        simpleExplain: "创建新用户组，就像公司里新建一个部门",
        detailExplain: "就像公司里新成立了一个部门——groupadd 创建一个新的用户组。用户组的作用是把多个用户归到一起，方便统一管理权限。",
        helpOutput: `Usage: groupadd [options] GROUP

Options:
  -f, --force                   exit successfully if the group already exists,
                                and cancel -g if the GID is already used
  -g, --gid GID                 use GID for the new group
  -h, --help                    display this help message and exit
  -K, --key KEY=VALUE           override /etc/login.defs defaults
  -o, --non-unique              allow to create groups with duplicate
                                (non-unique) GID
  -p, --password PASSWORD       use this encrypted password for the new group
  -r, --system                  create a system account
  -R, --root CHROOT_DIR         directory to chroot into
  -P, --prefix PREFIX_DI        directory prefix
  -U, --users USERS             list of user members of this group
      --extrausers              Use the extra users database

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
        simpleExplain: "删除用户组，就像撤销一个部门",
        detailExplain: "就像公司撤销了一个部门——groupdel 删除指定的用户组。注意：不能删除某个用户的主组，就像不能撤销一个还有人上班的部门。",
        helpOutput: `Usage: groupdel [options] GROUP

Options:
  -h, --help                    display this help message and exit
  -R, --root CHROOT_DIR         directory to chroot into
  -P, --prefix PREFIX_DIR       prefix directory where are located the /etc/* files
  -f, --force                   delete group even if it is the primary group of a user
      --extrausers              Use the extra users database

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
        simpleExplain: "查看用户的 ID 信息，就像查看员工的工号和所属部门",
        detailExplain: "就像查看员工的工号（UID）和所属部门（GID）——id 显示用户的用户 ID、主组 ID、以及所属的所有附加组。",
        helpOutput: `Usage: id [OPTION]... [USER]...
Print user and group information for each specified USER,
or (when USER omitted) for the current process.

  -a             ignore, for compatibility with other versions
  -Z, --context  print only the security context of the process
  -g, --group    print only the effective group ID
  -G, --groups   print all group IDs
  -n, --name     print a name instead of a number, for -ugG
  -r, --real     print the real ID instead of the effective ID, with -ugG
  -u, --user     print only the effective user ID
  -z, --zero     delimit entries with NUL characters, not whitespace;
                   not permitted in default format
      --help        display this help and exit
      --version     output version information and exit

Without any OPTION, print some useful set of identified information.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/id>
or available locally via: info '(coreutils) id invocation'
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
        simpleExplain: "显示当前用户名，就像问自己「我是谁」",
        detailExplain: "就像你突然失忆了，问自己「我是谁？」——whoami 告诉你当前登录的用户名是什么。在用 sudo su 切换了一堆用户后，确认自己当前身份时非常有用。",
        helpOutput: `Usage: whoami [OPTION]...
Print the user name associated with the current effective user ID.
Same as id -un.

      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/whoami>
or available locally via: info '(coreutils) whoami invocation'
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
        simpleExplain: "查看用户所属的组，就像查看员工属于哪些部门",
        detailExplain: "就像查看一个员工同时属于哪些部门——groups 列出指定用户所属的所有用户组。了解用户所属组对于理解权限很重要。",
        helpOutput: `Usage: groups [OPTION]... [USERNAME]...
Print group memberships for each USERNAME or, if no USERNAME is specified, for
the current process (which may differ if the groups database has changed).
      --help        display this help and exit
      --version     output version information and exit

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Report any translation bugs to <https://translationproject.org/team/>
Full documentation <https://www.gnu.org/software/coreutils/groups>
or available locally via: info '(coreutils) groups invocation'
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
        simpleExplain: "查看用户详细信息，就像查看员工的详细档案",
        detailExplain: "就像查看员工的详细人事档案——finger 显示用户的登录名、真实姓名、家目录、默认 shell、最近登录时间等信息。",
        helpOutput: `Usage: finger [-lmsp] [user ...] [user@host ...]

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
        simpleExplain: "查看用户登录历史，就像查看考勤打卡记录",
        detailExplain: "就像查看公司的考勤打卡记录——last 显示所有用户（或指定用户）的最近登录历史：谁登录了、从哪里登录的、登录了多久。对于安全审计和排查问题非常有用。",
        helpOutput: `
Usage:
 last [options] [<username>...] [<tty>...]

Show a listing of last logged in users.

Options:
 -<number>            how many lines to show
 -a, --hostlast       display hostnames in the last column
 -d, --dns            translate the IP number back into a hostname
 -f, --file <file>    use a specific file instead of /var/log/wtmp
 -F, --fulltimes      print full login and logout times and dates
 -i, --ip             display IP numbers in numbers-and-dots notation
 -n, --limit <number> how many lines to show
 -R, --nohostname     don't display the hostname field
 -s, --since <time>   display the lines since the specified time
 -t, --until <time>   display the lines until the specified time
 -p, --present <time> display who were present at the specified time
 -w, --fullnames      display full user and domain names
 -x, --system         display system shutdown entries and run level changes
     --time-format <format>  show timestamps in the specified <format>:
                               notime|short|full|iso

 -h, --help           display this help
 -V, --version        display version

For more details see last(1).
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
        simpleExplain: "切换当前用户的主组，就像临时换一个部门身份",
        detailExplain: "就像你临时换了一个部门身份去办事——newgrp 让你切换当前会话的主组（GID），这样你新创建的文件就属于新的组了。注意这会启动一个新的 shell。",
        helpOutput: `Usage: newgrp [-] [group]
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
        simpleExplain: "管理用户密码过期策略，就像设置员工密码的有效期",
        detailExplain: "就像公司规定员工必须每 90 天改一次密码——chage 用来设置用户密码的过期时间、最短使用期限、最长使用期限、过期前警告天数等。这是安全合规的重要工具。",
        helpOutput: `Usage: chage [options] LOGIN

Options:
  -d, --lastday LAST_DAY        set date of last password change to LAST_DAY
  -E, --expiredate EXPIRE_DATE  set account expiration date to EXPIRE_DATE
  -h, --help                    display this help message and exit
  -i, --iso8601                 use YYYY-MM-DD when printing dates
  -I, --inactive INACTIVE       set password inactive after expiration
                                to INACTIVE
  -l, --list                    show account aging information
  -m, --mindays MIN_DAYS        set minimum number of days before password
                                change to MIN_DAYS
  -M, --maxdays MAX_DAYS        set maximum number of days before password
                                change to MAX_DAYS
  -R, --root CHROOT_DIR         directory to chroot into
  -W, --warndays WARN_DAYS      set expiration warning days to WARN_DAYS

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
        simpleExplain: "登录系统，就像刷卡进入办公大楼",
        detailExplain: "就像刷卡进入办公大楼——login 命令用于登录系统，输入用户名和密码后进入你的工作环境。通常由系统在终端启动时自动调用，一般不需要手动执行。",
        helpOutput: `Usage: login [-p] [name]
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
        simpleExplain: "退出登录，就像下班刷卡离开办公大楼",
        detailExplain: "就像下班刷卡离开办公大楼——logout 命令用于退出当前登录的 Shell 会话。在图形界面的终端里通常用 exit 代替，但在真正的登录终端上 logout 更合适。",
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
        simpleExplain: "阻止用户登录，就像在门口挂上「谢绝入内」的牌子",
        detailExplain: "就像在门口挂上「谢绝入内」的牌子——nologin 是一个特殊的 Shell 程序，当用户的登录 Shell 被设为 /sbin/nologin 时，该用户就无法登录系统了。常用于系统服务账户，防止它们被用来登录。",
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
        simpleExplain: "检查密码文件完整性，就像审计员检查账本有没有错误",
        detailExplain: "就像审计员检查账本有没有错误——pwck 检查 /etc/passwd 和 /etc/shadow 文件的完整性和一致性，比如有没有重复的用户名、无效的 UID、缺失的家目录等。是系统维护的好帮手。",
        helpOutput: `Usage: pwck [options] [passwd [shadow]]

Options:
  -b, --badname                 allow bad names
  -h, --help                    display this help message and exit
  -q, --quiet                   report errors only
  -r, --read-only               display errors and warnings
                                but do not change files
  -R, --root CHROOT_DIR         directory to chroot into
  -s, --sort                    sort entries by UID

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
        simpleExplain: "检查组文件完整性，就像审计员检查团队名册有没有问题",
        detailExplain: "就像审计员检查团队名册有没有问题——grpck 检查 /etc/group 和 /etc/gshadow 文件的完整性和一致性，比如有没有重复的组名、不存在的组成员等。和 pwck 是一对好搭档。",
        helpOutput: `Usage: grpck [options] [group [gshadow]]

Options:
  -h, --help                    display this help message and exit
  -r, --read-only               display errors and warnings
                                but do not change files
  -R, --root CHROOT_DIR         directory to chroot into
  -s, --sort                    sort entries by UID
  -S, --silence-warnings        silence controversial/paranoid warnings

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
        simpleExplain: "修改用户的登录Shell，就像给员工换一个工作台",
        detailExplain: "就像给员工换一个工作台——chsh 可以修改用户的默认登录 Shell，比如从 bash 换成 zsh 或 fish。不同的 Shell 有不同的操作习惯和功能，选一个用着顺手的很重要。",
        helpOutput: `Usage: chsh [options] [LOGIN]

Options:
  -h, --help                    display this help message and exit
  -R, --root CHROOT_DIR         directory to chroot into
  -s, --shell SHELL             new login shell for the user account

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
        simpleExplain: "修改用户的个人信息，就像更新通讯录里的联系人资料",
        detailExplain: "就像更新通讯录里的联系人资料——chfn 修改用户的全名、办公室房间号、工作电话、家庭电话等个人信息（finger information）。这些信息存在 /etc/passwd 中，用 finger 命令可以查看。",
        helpOutput: `Usage: chfn [options] [LOGIN]

Options:
  -f, --full-name FULL_NAME     change user's full name
  -h, --home-phone HOME_PHONE   change user's home phone number
  -o, --other OTHER_INFO        change user's other GECOS information
  -r, --room ROOM_NUMBER        change user's room number
  -R, --root CHROOT_DIR         directory to chroot into
  -u, --help                    display this help message and exit
  -w, --work-phone WORK_PHONE   change user's office phone number
      --extrausers              Use the extra users database

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
        simpleExplain: "Ubuntu/Debian 的软件包管理器，就像手机上的应用商店",
        detailExplain: "就像手机上的应用商店——apt 是 Ubuntu/Debian 系统上的软件包管理工具，可以搜索、安装、更新、卸载软件。一条命令就能自动下载安装软件及其所有依赖，比手动下载安装方便太多了。",
        helpOutput: `apt 2.8.3 (amd64)
Usage: apt [options] command

apt is a commandline package manager and provides commands for
searching and managing as well as querying information about packages.
It provides the same functionality as the specialized APT tools,
like apt-get and apt-cache, but enables options more suitable for
interactive use by default.

Most used commands:
  list - list packages based on package names
  search - search in package descriptions
  show - show package details
  install - install packages
  reinstall - reinstall packages
  remove - remove packages
  autoremove - automatically remove all unused packages
  update - update list of available packages
  upgrade - upgrade the system by installing/upgrading packages
  full-upgrade - upgrade the system by removing/installing/upgrading packages
  edit-sources - edit the source information file
  satisfy - satisfy dependency strings

See apt(8) for more information about the available commands.
Configuration options and syntax is detailed in apt.conf(5).
Information about how to configure sources can be found in sources.list(5).
Package and version choices can be expressed via apt_preferences(5).
Security details are available in apt-secure(8).
                                        This APT has Super Cow Powers.
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
        simpleExplain: "Debian 系底层包管理工具，就像 apt 的老版本",
        detailExplain: "就像 apt 的老版本——apt-get 是 Debian 系的底层包管理工具，功能比 apt 更丰富但语法更复杂。在脚本中推荐用 apt-get（输出更稳定），交互使用推荐用 apt（更友好）。",
        helpOutput: `apt 2.8.3 (amd64)
Usage: apt-get [options] command
       apt-get [options] install|remove pkg1 [pkg2 ...]
       apt-get [options] source pkg1 [pkg2 ...]

apt-get is a command line interface for retrieval of packages
and information about them from authenticated sources and
for installation, upgrade and removal of packages together
with their dependencies.

Most used commands:
  update - Retrieve new lists of packages
  upgrade - Perform an upgrade
  install - Install new packages (pkg is libc6 not libc6.deb)
  reinstall - Reinstall packages (pkg is libc6 not libc6.deb)
  remove - Remove packages
  purge - Remove packages and config files
  autoremove - Remove automatically all unused packages
  dist-upgrade - Distribution upgrade, see apt-get(8)
  dselect-upgrade - Follow dselect selections
  build-dep - Configure build-dependencies for source packages
  satisfy - Satisfy dependency strings
  clean - Erase downloaded archive files
  autoclean - Erase old downloaded archive files
  check - Verify that there are no broken dependencies
  source - Download source archives
  download - Download the binary package into the current directory
  changelog - Download and display the changelog for the given package

See apt-get(8) for more information about the available commands.
Configuration options and syntax is detailed in apt.conf(5).
Information about how to configure sources can be found in sources.list(5).
Package and version choices can be expressed via apt_preferences(5).
Security details are available in apt-secure(8).
                                        This APT has Super Cow Powers.
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
        simpleExplain: "CentOS/RHEL 的软件包管理器，就像 RedHat 系的应用商店",
        detailExplain: "就像 RedHat/CentOS 系统上的应用商店——yum 是这些系统上的软件包管理工具，功能类似 apt。自动解决依赖关系，一条命令安装软件。在 CentOS 8+ 上已被 dnf 取代。",
        helpOutput: `Usage: yum [options] COMMAND

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
        simpleExplain: "新一代 RedHat 包管理器，就像 yum 的升级版",
        detailExplain: "就像 yum 的升级版——dnf 解决了 yum 的一些性能问题和设计缺陷，速度更快、内存占用更少。从 Fedora 18 和 CentOS 8 开始替代 yum 成为默认包管理器。",
        helpOutput: `Usage: dnf [options] COMMAND

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
        simpleExplain: "Arch Linux 的包管理器，就像极客专属的应用商店",
        detailExplain: "就像 Arch Linux 极客专属的应用商店——pacman 以速度快、设计简洁著称，是 Arch Linux 的核心包管理工具。它同时处理包的下载、安装和依赖解决，一个命令搞定一切。",
        helpOutput: `Usage: pacman <operation> [options] [targets]

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
        simpleExplain: "Python 包管理器，就像 Python 世界的应用商店",
        detailExplain: "就像 Python 世界的应用商店——pip 用来安装和管理 Python 的第三方库和工具。从 PyPI（Python Package Index）下载安装包，一条命令就能装好各种 Python 库。",
        helpOutput: `
Usage:   
  pip <command> [options]

Commands:
  install                     Install packages.
  lock                        Generate a lock file.
  download                    Download packages.
  uninstall                   Uninstall packages.
  freeze                      Output installed packages in requirements format.
  inspect                     Inspect the python environment.
  list                        List installed packages.
  show                        Show information about installed packages.
  check                       Verify installed packages have compatible 
dependencies.
  config                      Manage local and global configuration.
  search                      Search PyPI for packages.
  cache                       Inspect and manage pip's wheel cache.
  index                       Inspect information available from package 
indexes.
  wheel                       Build wheels from your requirements.
  hash                        Compute hashes of package archives.
  completion                  A helper command used for command completion.
  debug                       Show information useful for debugging.
  help                        Show help for commands.

General Options:
  -h, --help                  Show help.
  --debug                     Let unhandled exceptions propagate outside the
                              main subroutine, instead of logging them to
                              stderr.
  --isolated                  Run pip in an isolated mode, ignoring
                              environment variables and user configuration.
  --require-virtualenv        Allow pip to only run in a virtual environment;
                              exit with an error otherwise.
  --python <python>           Run pip with the specified Python interpreter.
  -v, --verbose               Give more output. Option is additive, and can be
                              used up to 3 times.
  -V, --version               Show version and exit.
  -q, --quiet                 Give less output. Option is additive, and can be
                              used up to 3 times (corresponding to WARNING,
                              ERROR, and CRITICAL logging levels).
  --log <path>                Path to a verbose appending log.
  --no-input                  Disable prompting for input.
  --keyring-provider <keyring_provider>
                              Enable the credential lookup via the keyring
                              library if user input is allowed. Specify which
                              mechanism to use [auto, disabled, import,
                              subprocess]. (default: auto)
  --proxy <proxy>             Specify a proxy in the form
                              scheme://[user:passwd@]proxy.server:port.
  --retries <retries>         Maximum attempts to establish a new HTTP
                              connection. (default: 5)
  --timeout <sec>             Set the socket timeout (default 15 seconds).
`,
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
        simpleExplain: "Node.js 包管理器，就像 JavaScript 世界的应用商店",
        detailExplain: "就像 JavaScript/Node.js 世界的应用商店——npm 用来安装和管理 JavaScript 的第三方包。从 npmjs.com 下载安装包，是前端和 Node.js 开发者最常用的工具。",
        helpOutput: `npm <command>

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term>
npm help npm       more involved overview

All commands:

    access, adduser, audit, bugs, cache, ci, completion,
    config, dedupe, deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore, find-dupes, fund, get, help,
    help-search, init, install, install-ci-test, install-test,
    link, ll, login, logout, ls, org, outdated, owner, pack,
    ping, pkg, prefix, profile, prune, publish, query, rebuild,
    repo, restart, root, run, sbom, search, set, shrinkwrap,
    star, stars, start, stop, team, test, token, undeprecate,
    uninstall, unpublish, unstar, update, version, view, whoami

Specify configs in the ini-formatted file:
    /root/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

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
        simpleExplain: "Snap 通用包管理器，就像跨发行版的应用商店",
        detailExplain: "就像一个跨 Linux 发行版的通用应用商店——Snap 包自带所有依赖，在任何支持 Snap 的 Linux 上都能运行，不用担心兼容性问题。缺点是启动稍慢、占用空间稍大。",
        helpOutput: `Usage: snap [OPTIONS] COMMAND

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
        simpleExplain: "Flatpak 沙箱化包管理器，就像在沙箱里运行的应用商店",
        detailExplain: "就像一个在沙箱里运行的应用商店——Flatpak 把应用放在沙箱中运行，限制其权限，提高安全性。和 Snap 类似，Flatpak 也是跨发行版的通用包格式，在桌面 Linux 上很流行。",
        helpOutput: `Usage: flatpak [OPTION...] COMMAND

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
        simpleExplain: "Debian 底层包操作工具，就像手动安装应用的底层工具",
        detailExplain: "就像手动安装应用的底层工具——dpkg 直接操作 .deb 包文件，安装、卸载、查询。它不自动解决依赖关系（那是 apt 的工作），所以通常配合 apt 一起使用。",
        helpOutput: `Usage: dpkg [<option>...] <command>

Commands:
  -i|--install       <.deb file name>... | -R|--recursive <directory>...
  --unpack           <.deb file name>... | -R|--recursive <directory>...
  -A|--record-avail  <.deb file name>... | -R|--recursive <directory>...
  --configure        <package>... | -a|--pending
  --triggers-only    <package>... | -a|--pending
  -r|--remove        <package>... | -a|--pending
  -P|--purge         <package>... | -a|--pending
  -V|--verify [<package>...]       Verify the integrity of package(s).
  --get-selections [<pattern>...]  Get list of selections to stdout.
  --set-selections                 Set package selections from stdin.
  --clear-selections               Deselect every non-essential package.
  --update-avail [<Packages-file>] Replace available packages info.
  --merge-avail [<Packages-file>]  Merge with info from file.
  --clear-avail                    Erase existing available info.
  --forget-old-unavail             Forget uninstalled unavailable pkgs.
  -s|--status [<package>...]       Display package status details.
  -p|--print-avail [<package>...]  Display available version details.
  -L|--listfiles <package>...      List files 'owned' by package(s).
  -l|--list [<pattern>...]         List packages concisely.
  -S|--search <pattern>...         Find package(s) owning file(s).
  -C|--audit [<package>...]        Check for broken package(s).
  --yet-to-unpack                  Print packages selected for installation.
  --predep-package                 Print pre-dependencies to unpack.
  --add-architecture <arch>        Add <arch> to the list of architectures.
  --remove-architecture <arch>     Remove <arch> from the list of architectures.
  --print-architecture             Print dpkg architecture.
  --print-foreign-architectures    Print allowed foreign architectures.
  --assert-help                    Show help on assertions.
  --assert-<feature>               Assert support for the specified feature.
  --validate-<thing> <string>      Validate a <thing>'s <string>.
  --compare-versions <a> <op> <b>  Compare version numbers - see below.
  --force-help                     Show help on forcing.
  -Dh|--debug=help                 Show help on debugging.

  -?, --help                       Show this help message.
      --version                    Show the version.

Validatable things: pkgname, archname, trigname, version.

Use dpkg with -b, --build, -c, --contents, -e, --control, -I, --info,
  -f, --field, -x, --extract, -X, --vextract, --ctrl-tarfile, --fsys-tarfile
on archives (type dpkg-deb --help).

Options:
  --admindir=<directory>     Use <directory> instead of /var/lib/dpkg.
  --root=<directory>         Install on a different root directory.
  --instdir=<directory>      Change installation dir without changing admin dir.
  --pre-invoke=<command>     Set a pre-invoke hook.
  --post-invoke=<command>    Set a post-invoke hook.
  --path-exclude=<pattern>   Do not install paths which match a shell pat`,
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
        simpleExplain: "RedHat 底层包操作工具，就像 dpkg 的 RedHat 版",
        detailExplain: "就像 dpkg 的 RedHat 版——rpm 直接操作 .rpm 包文件，安装、卸载、查询。它不自动解决依赖关系（那是 yum/dnf 的工作），所以通常配合 yum/dnf 一起使用。",
        helpOutput: `Usage: rpm [OPTION...]

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
        simpleExplain: "Homebrew 包管理器，就像 macOS/Linux 上的第三方应用商店",
        detailExplain: "就像 macOS（也支持 Linux）上的第三方应用商店——Homebrew 让你轻松安装系统自带包管理器中没有的软件。语法简洁，社区活跃，是 macOS 开发者的必备工具，Linux 上叫 Linuxbrew。",
        helpOutput: `Usage: brew [command] [options] [formula ...]

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
        simpleExplain: "Rust 包管理器和构建工具，就像 Rust 世界的全能助手",
        detailExplain: "就像 Rust 世界的全能助手——cargo 不仅是包管理器，还是构建工具、测试运行器、文档生成器。Rust 开发者几乎不需要其他工具，cargo 一把梭。",
        helpOutput: `Rust's package manager

[92m[1mUsage:[39m[22m [96m[1mcargo[39m[22m [36m[+toolchain] [OPTIONS] [COMMAND][39m
       [96m[1mcargo[39m[22m [36m[+toolchain] [OPTIONS][39m [96m[1m-Zscript[39m[22m [36m<MANIFEST_RS> [ARGS]...[39m

[92m[1mOptions:[39m[22m
  [1m[96m-V[0m, [1m[96m--version[0m                  Print version info and exit
      [1m[96m--list[0m                     List installed commands
      [1m[96m--explain[0m[36m [0m[36m<CODE>[0m           Provide a detailed explanation of a rustc error message
  [1m[96m-v[0m, [1m[96m--verbose[0m[36m...[0m               Use verbose output (-vv very verbose/build.rs output)
  [1m[96m-q[0m, [1m[96m--quiet[0m                    Do not print cargo log messages
      [1m[96m--color[0m[36m [0m[36m<WHEN>[0m             Coloring [possible values: auto, always, never]
  [1m[96m-C[0m[36m [0m[36m<DIRECTORY>[0m                 Change to DIRECTORY before doing anything (nightly-only)
      [1m[96m--locked[0m                   Assert that \`Cargo.lock\` will remain unchanged
      [1m[96m--offline[0m                  Run without accessing the network
      [1m[96m--frozen[0m                   Equivalent to specifying both --locked and --offline
      [1m[96m--config[0m[36m [0m[36m<KEY=VALUE|PATH>[0m  Override a configuration value
  [1m[96m-Z[0m[36m [0m[36m<FLAG>[0m                      Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for
                                 details
  [1m[96m-h[0m, [1m[96m--help[0m                     Print help

[92m[1mCommands:[39m[22m
    [96m[1mbuild[39m[22m, [96m[1mb[39m[22m    Compile the current package
    [96m[1mcheck[39m[22m, [96m[1mc[39m[22m    Analyze the current package and report errors, but don't build object files
    [96m[1mclean[39m[22m       Remove the target directory
    [96m[1mdoc[39m[22m, [96m[1md[39m[22m      Build this package's and its dependencies' documentation
    [96m[1mnew[39m[22m         Create a new cargo package
    [96m[1minit[39m[22m        Create a new cargo package in an existing directory
    [96m[1madd[39m[22m         Add dependencies to a manifest file
    [96m[1mremove[39m[22m      Remove dependencies from a manifest file
    [96m[1mrun[39m[22m, [96m[1mr[39m[22m      Run a binary or example of the local package
    [96m[1mtest[39m[22m, [96m[1mt[39m[22m     Run the tests
    [96m[1mbench[39m[22m       Run the benchmarks
    [96m[1mupdate[39m[22m      Update dependencies listed in Cargo.lock
    [96m[1msearch[39m[22m      Search registry for crates
    [96m[1mpublish[39m[22m     Package and upload this package to the registry
    [96m[1minstall[39m[22m     Install a Rust binary
    [96m[1muninstall[39m[22m   Uninstall a Rust binary
    [36m...[39m         See all commands with [96m[1m--list[39m[22m

See '[96m[1mcargo help[39m[22m [36m<command>[3`,
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
        simpleExplain: "Ruby 包管理器，就像 Ruby 世界的应用商店",
        detailExplain: "就像 Ruby 世界的应用商店——gem 用来安装和管理 Ruby 的第三方库（称为 gem）。从 rubygems.org 下载安装包，是 Ruby 开发者最常用的工具。",
        helpOutput: `RubyGems is a package manager for Ruby.

  Usage:
    gem -h/--help
    gem -v/--version
    gem [global options...] command [arguments...] [options...]

  Global options:
    -C PATH                      run as if gem was started in <PATH>
                                 instead of the current working directory

  Examples:
    gem install rake
    gem list --local
    gem build package.gemspec
    gem push package-0.0.1.gem
    gem help install

  Further help:
    gem help commands            list all 'gem' commands
    gem help examples            show some examples of usage
    gem help gem_dependencies    gem dependencies file guide
    gem help platforms           gem platforms guide
    gem help <COMMAND>           show help on COMMAND
                                   (e.g. 'gem help install')
  Further information:
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
        simpleExplain: "Conda 包和环境管理器，就像 Python 的虚拟环境管家",
        detailExplain: "就像 Python 的虚拟环境管家——conda 不但能安装包，还能创建隔离的虚拟环境，让不同项目使用不同版本的 Python 和库互不干扰。是数据科学和机器学习领域的标配工具。",
        helpOutput: `Usage: conda [COMMAND] [OPTIONS]

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
        simpleExplain: "编译构建工具，就像一个工头按照图纸指挥工人施工",
        detailExplain: "就像一个工头按照图纸指挥工人施工——make 根据 Makefile 中定义的规则，自动判断哪些文件需要重新编译，然后只编译必要的部分。是 C/C++ 项目编译的标准工具，也广泛用于其他语言的构建流程。",
        helpOutput: `Usage: make [options] [target] ...
Options:
  -b, -m                      Ignored for compatibility.
  -B, --always-make           Unconditionally make all targets.
  -C DIRECTORY, --directory=DIRECTORY
                              Change to DIRECTORY before doing anything.
  -d                          Print lots of debugging information.
  --debug[=FLAGS]             Print various types of debugging information.
  -e, --environment-overrides
                              Environment variables override makefiles.
  -E STRING, --eval=STRING    Evaluate STRING as a makefile statement.
  -f FILE, --file=FILE, --makefile=FILE
                              Read FILE as a makefile.
  -h, --help                  Print this message and exit.
  -i, --ignore-errors         Ignore errors from recipes.
  -I DIRECTORY, --include-dir=DIRECTORY
                              Search DIRECTORY for included makefiles.
  -j [N], --jobs[=N]          Allow N jobs at once; infinite jobs with no arg.
  -k, --keep-going            Keep going when some targets can't be made.
  -l [N], --load-average[=N], --max-load[=N]
                              Don't start multiple jobs unless load is below N.
  -L, --check-symlink-times   Use the latest mtime between symlinks and target.
  -n, --just-print, --dry-run, --recon
                              Don't actually run any recipe; just print them.
  -o FILE, --old-file=FILE, --assume-old=FILE
                              Consider FILE to be very old and don't remake it.
  -O[TYPE], --output-sync[=TYPE]
                              Synchronize output of parallel jobs by TYPE.
  -p, --print-data-base       Print make's internal database.
  -q, --question              Run no recipe; exit status says if up to date.
  -r, --no-builtin-rules      Disable the built-in implicit rules.
  -R, --no-builtin-variables  Disable the built-in variable settings.
  -s, --silent, --quiet       Don't echo recipes.
  --no-silent                 Echo recipes (disable --silent mode).
  -S, --no-keep-going, --stop
                              Turns off -k.
  -t, --touch                 Touch targets instead of remaking them.
  --trace                     Print tracing information.
  -v, --version               Print the version number of make and exit.
  -w, --print-directory       Print the current directory.
  --no-print-directory        Turn off -w, even if it was turned on implicitly.
  -W FILE, --what-if=FILE, --new-file=FILE, --assume-new=FILE
                              Consider FILE to be infinitely new.
  --warn-undefined-variables  Warn when an undefined variable is referenced.

This program built for x86_64-pc-linux-gnu
Report bugs to <bug-make@gnu.org>
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
        simpleExplain: "跨平台构建系统生成器，就像一个能根据不同工地生成不同施工图的建筑师",
        detailExplain: "就像一个能根据不同工地生成不同施工图的建筑师——cmake 不直接编译代码，而是根据 CMakeLists.txt 配置文件生成 Makefile 或其他构建文件。它跨平台支持，是大型 C/C++ 项目的标配。",
        helpOutput: `Usage

  cmake [options] <path-to-source>
  cmake [options] <path-to-existing-build>
  cmake [options] -S <path-to-source> -B <path-to-build>

Specify a source directory to (re-)generate a build system for it in the
current working directory.  Specify an existing build directory to
re-generate its build system.

Options
  -S <path-to-source>          = Explicitly specify a source directory.
  -B <path-to-build>           = Explicitly specify a build directory.
  -C <initial-cache>           = Pre-load a script to populate the cache.
  -D <var>[:<type>]=<value>    = Create or update a cmake cache entry.
  -U <globbing_expr>           = Remove matching entries from CMake cache.
  -G <generator-name>          = Specify a build system generator.
  -T <toolset-name>            = Specify toolset name if supported by
                                 generator.
  -A <platform-name>           = Specify platform name if supported by
                                 generator.
  --toolchain <file>           = Specify toolchain file
                                 [CMAKE_TOOLCHAIN_FILE].
  --install-prefix <directory> = Specify install directory
                                 [CMAKE_INSTALL_PREFIX].
  -Wdev                        = Enable developer warnings.
  -Wno-dev                     = Suppress developer warnings.
  -Werror=dev                  = Make developer warnings errors.
  -Wno-error=dev               = Make developer warnings not errors.
  -Wdeprecated                 = Enable deprecation warnings.
  -Wno-deprecated              = Suppress deprecation warnings.
  -Werror=deprecated           = Make deprecated macro and function warnings
                                 errors.
  -Wno-error=deprecated        = Make deprecated macro and function warnings
                                 not errors.
  --preset <preset>,--preset=<preset>
                               = Specify a configure preset.
  --list-presets[=<type>]      = List available presets.
  -E                           = CMake command mode.
  -L[A][H]                     = List non-advanced cached variables.
  --fresh                      = Configure a fresh build tree, removing any
                                 existing cache file.
  --build <dir>                = Build a CMake-generated project binary tree.
  --install <dir>              = Install a CMake-generated project binary
                                 tree.
  --open <dir>                 = Open generated project in the associated
                                 application.
  -N                           = View mode only.
  -P <file>                    = Process script mode.
  --find-package               = Legacy pkg-config like mode.  Do not use.
  --graphviz=<file>            = Generate graphviz of dependencies, see
                                 CMakeGraphVizOptions.cmake for more.
  --system-information [file]  = Dump information about this system.
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
        simpleExplain: "Nix包管理器，就像一个时光机可以随时回滚到任何版本",
        detailExplain: "就像一个时光机可以随时回滚到任何版本——Nix 包管理器采用函数式思路，每次安装都创建新的系统快照，互不干扰。安装出错？一键回滚到之前的版本。多个版本的软件可以共存，彻底告别依赖地狱。",
        helpOutput: `Usage: nix [OPTIONS] COMMAND

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
        simpleExplain: "Guix包管理器，就像一个极其严谨的图书管理员",
        detailExplain: "就像一个极其严谨的图书管理员——Guix 是 GNU 项目推出的包管理器，和 Nix 类似但用 Guile Scheme 编写配置。它追求完全自由和可复现的构建，每个包的构建过程都是确定性的。",
        helpOutput: `Usage: guix [OPTION] COMMAND [ARGS...]

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
        simpleExplain: "快速可靠的JavaScript包管理器，就像npm的升级版快递服务",
        detailExplain: "就像 npm 的升级版快递服务——yarn 是 Facebook 开发的 JavaScript 包管理器，安装速度比 npm 快，有锁文件保证依赖一致性，支持离线安装和工作区（monorepo）。现在和 npm 互为替代。",
        helpOutput: `Yarn Package Manager - 4.14.1

  $ yarn <command>

General commands

  yarn add [--json] [-F,--fixed] [-E,--exact] [-T,--tilde] [-C,--caret] [-D,--dev] [-P,--peer] [-O,--optional] [--prefer-dev] [-i,--interactive] [--cached] [--mode #0] ...
    add dependencies to the project

  yarn bin [-v,--verbose] [--json] [name]
    get the path to a binary script

  yarn cache clean [--mirror] [--all]
    remove the shared cache files

  yarn config [--no-defaults] [--json] ...
    display the current configuration

  yarn config get [--why] [--json] [--no-redacted] <name>
    read a configuration settings

  yarn config set [--json] [-H,--home] <name> <value>
    change a configuration settings

  yarn config unset [-H,--home] <name>
    unset a configuration setting

  yarn dedupe [-s,--strategy #0] [-c,--check] [--json] [--mode #0] ...
    deduplicate dependencies with overlapping ranges

  yarn dlx [-p,--package #0] [-q,--quiet] <command> ...
    run a package in a temporary environment

  yarn exec <commandName> ...
    execute a shell script

  yarn explain [--json] [code]
    explain an error code

  yarn explain peer-requirements [hash]
    explain a set of peer requirements

  yarn info [-A,--all] [-R,--recursive] [-X,--extra #0] [--cache] [--dependents] [--manifest] [--name-only] [--virtuals] [--json] ...
    see information related to packages

  yarn init [-p,--private] [-w,--workspace] [-i,--install] [-n,--name #0]
    create a new package

  yarn init [-p,--private] [-w,--workspace] [-i,--install] [-n,--name #0] <initializer> ...
    create a new package

  yarn install [--json] [--immutable] [--immutable-cache] [--refresh-lockfile] [--check-cache] [--check-resolutions] [--inline-builds] [--mode #0]
    install the project dependencies

  yarn link [-A,--all] [-p,--private] [-r,--relative] ...
    connect the local project to another one

  yarn node ...
    run node with the hook already setup

  yarn npm audit [-A,--all] [-R,--recursive] [--environment #0] [--json] [--no-deprecations] [--severity #0] [--exclude #0] [--ignore #0]
    perform a vulnerability audit against the installed packages

  yarn pack [--install-if-needed] [-n,--dry-run] [--json] [-o,--out #0]
    generate a tarball from the active workspace

  yarn patch [-u,--update] [--json] <package>
    prepare a package for patching

  yarn patch-commit [-s,--save] <patchFolder>
    generate a patch out of a directory

  yarn rebuild ...
    rebuild the project's native packages

  yarn remove [-A,--all] [--mode #0] ...
    remove dependencies from the project

  yarn run [--inspect] [--inspect-brk] [-T,--top-level] [-B,--binaries-only] [--require #0] <scriptName> ...
    run a script defined in the package.json

  yarn set resolution <descriptor> <resolution>
    enforce a package resolution

  yarn set version [--yarn-path] [--only-if-needed] <version>
    lock the Yarn version used by the project

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
        simpleExplain: "高效的Node包管理器，就像一个会共享工具的聪明仓库管理员",
        detailExplain: "就像一个会共享工具的聪明仓库管理员——pnpm 用硬链接和符号链接的方式存储包，多个项目共享同一份依赖，大大节省磁盘空间。安装速度也很快，还严格隔离依赖，避免幽灵依赖问题。",
        helpOutput: `Version 10.28.1 (compiled to binary; bundled Node.js v24.15.0)
Usage: pnpm [command] [flags]
       pnpm [ -h | --help | -v | --version ]

These are common pnpm commands used in various situations, use 'pnpm help -a' to list all commands

Manage your dependencies:
      add                  Installs a package and any packages that it depends
                           on. By default, any new package is installed as a
                           prod dependency
   i, install              Install all dependencies for a project
  ln, link                 Connect the local project to another one
  rm, remove               Removes packages from node_modules and from the
                           project's package.json
      unlink               Unlinks a package. Like yarn unlink but pnpm
                           re-installs the dependency after removing the
                           external link
  up, update               Updates packages to their latest version based on the
                           specified range

Review your dependencies:
      audit                Checks for known security issues with the installed
                           packages
  ls, list                 Print all the versions of packages that are
                           installed, as well as their dependencies, in a
                           tree-structure
      outdated             Check for outdated packages
      why                  Shows all packages that depend on the specified
                           package

Run your scripts:
      create               Create a project from a "create-*" or "@foo/create-*"
                           starter kit
      dlx                  Fetches a package from the registry without
                           installing it as a dependency, hot loads it, and runs
                           whatever default command binary it exposes
      exec                 Executes a shell command in scope of a project
      run                  Runs a defined package script

Other:
   c, config               Manage the pnpm configuration files
      init                 Create a package.json file
      publish              Publishes a package to the registry
      self-update          Updates pnpm to the latest version

Options:
  -r, --recursive          Run the command for each project in the workspace.
`,
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
        simpleExplain: "PHP依赖管理工具，就像PHP项目的采购员",
        detailExplain: "就像 PHP 项目的采购员——composer 是 PHP 的标准包管理工具，根据 composer.json 声明项目依赖，自动下载和安装所需的 PHP 库。Laravel、Symfony 等主流框架都依赖它。",
        helpOutput: `Description:
  List commands

Usage:
  list [options] [--] [<namespace>]

Arguments:
  namespace                      The namespace name

Options:
      --raw                      To output raw command list
      --format=FORMAT            The output format (txt, xml, json, or md) [default: "txt"]
      --short                    To skip describing commands' arguments
  -h, --help                     Display help for the given command. When no command is given display help for the list command
  -q, --quiet                    Do not output any message
  -V, --version                  Display this application version
      --ansi|--no-ansi           Force (or disable --no-ansi) ANSI output
  -n, --no-interaction           Do not ask any interactive question
      --profile                  Display timing and memory usage information
      --no-plugins               Whether to disable plugins.
      --no-scripts               Skips the execution of all scripts defined in composer.json file.
  -d, --working-dir=WORKING-DIR  If specified, use the given directory as working directory.
      --no-cache                 Prevent use of the cache
  -v|vv|vvv, --verbose           Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

Help:
  The list command lists all commands:
  
    /root/.phpenv/versions/8.5snapshot/bin/composer list
  
  You can also display the commands for a specific namespace:
  
    /root/.phpenv/versions/8.5snapshot/bin/composer list test
  
  You can also output the information in other formats by using the --format option:
  
    /root/.phpenv/versions/8.5snapshot/bin/composer list --format=xml
  
  It's also possible to get raw list of commands (useful for embedding command runner):
  
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
        simpleExplain: "Java构建自动化工具，就像Java世界的施工队长",
        detailExplain: "就像 Java 世界的施工队长——gradle 用 Groovy 或 Kotlin DSL 编写构建脚本，比 Maven 更灵活、比 Ant 更规范。Android 项目默认使用 Gradle 构建，是 Java/Kotlin 生态的主流构建工具。",
        helpOutput: `
To see help contextual to the project, use gradle help

To see more detail about a task, run gradle help --task <task>

To see a list of available tasks, run gradle tasks

USAGE: gradle [option...] [task...]

-?, -h, --help                     Shows this help message.
-a, --no-rebuild                   Do not rebuild project dependencies.
-b, --build-file                   Specify the build file. [deprecated]
--build-cache                      Enables the Gradle build cache. Gradle will try to reuse outputs from previous builds.
--no-build-cache                   Disables the Gradle build cache.
-c, --settings-file                Specify the settings file. [deprecated]
--configuration-cache              Enables the configuration cache. Gradle will try to reuse the build configuration from previous builds.
--no-configuration-cache           Disables the configuration cache.
--configuration-cache-problems     Configures how the configuration cache handles problems (fail or warn). Defaults to fail.
--configure-on-demand              Configure necessary projects only. Gradle will attempt to reduce configuration time for large multi-project builds. [incubating]
--no-configure-on-demand           Disables the use of configuration on demand. [incubating]
--console                          Specifies which type of console output to generate. Values are 'plain', 'auto' (default), 'rich' or 'verbose'.
--continue                         Continue task execution after a task failure.
--no-continue                      Stop task execution after a task failure.
-D, --system-prop                  Set system property of the JVM (e.g. -Dmyprop=myvalue).
-d, --debug                        Log in debug mode (includes normal stacktrace).
--daemon                           Uses the Gradle daemon to run the build. Starts the daemon if not running.
--no-daemon                        Do not use the Gradle daemon to run the build. Useful occasionally if you have configured Gradle to always run with the daemon by default.
--export-keys                      Exports the public keys used for dependency verification.
-F, --dependency-verification      Configures the dependency verification mode. Values are 'strict', 'lenient' or 'off'.
--foreground                       Starts the Gradle daemon in the foreground.
-g, --gradle-user-home             Specifies the Gradle user home directory. Defaults to ~/.gradle
-I, --init-script                  Specify an initialization script.
-i, --info                         Set log level to info.
--include-build                    Include the specified build in the composite.
-M, --write-verification-metadata  Generates checksums for dependencies used in the project (comma-separated list)
-m, --dry-run                      Run the builds with all task actions disabled.
--max-workers                      Configure the number of concurrent workers Gradle is allowed to use.
--offline                          Execute the build without accessi`,
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
