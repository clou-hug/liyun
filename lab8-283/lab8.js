// 学生名单
const students = [
    "白林涵", "陈昊妍", "董萌萌", "范昱涵", "高一涵", 
    "郭超", "侯宪坤", "黄博", "姜子超", "鞠忠宏", 
    "李茂川", "李永乐", "李云", "林佳祺", "吕君蕊", 
    "秦金龙", "秦士淞", "孙家豪", "孙若冰", "孙义凯", 
    "孙子凌", "索京奥", "王朝闻", "王俊豪", "王梦月", 
    "王文昌", "王运旺", "王祉盛", "卫学振", "武启航", 
    "徐浩文", "许广洋", "许源赫", "薛景文", "张丁文", 
    "张静", "张俊飞", "张艳可", "张云翔", "张志恒", 
    "赵宝华", "赵家豪", "周政涟", "邹谦慧"
];

// 获取DOM元素
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const selectedList = document.getElementById('selectedList');

let timer = null;
let currentStudent = '';
let selectedStudents = [];

// 开始随机点名
startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    // 快速切换显示的学生名字
    timer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * students.length);
        currentStudent = students[randomIndex];
        display.textContent = currentStudent;
    }, 100);
});

// 停止随机点名
stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    // 确保当前学生不是undefined
    if (currentStudent) {
        // 添加到已选学生列表
        if (!selectedStudents.includes(currentStudent)) {
            selectedStudents.push(currentStudent);
            selectedList.textContent = currentStudent;
        } else {
            // 如果已经选中过，显示提示信息
            display.textContent = `${currentStudent} 已经被选中过`;
        }
    }
});

// 初始化显示
display.textContent = "点击开始按钮开始随机点名";