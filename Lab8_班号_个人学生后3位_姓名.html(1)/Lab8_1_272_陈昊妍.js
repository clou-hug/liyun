document.addEventListener('DOMContentLoaded', function() {
    // 更新后的学生数据
    const students = [
        '白林涵', '陈昊妍', '董萌萌', '范昱涵', '高一涵',
        '郭超', '侯宪坤', '黄博', '姜子超', '鞠忠宏',
        '李茂川', '李永乐', '李云', '林佳祺', '吕君蕊',
        '秦金龙', '秦士淞', '孙家豪', '孙若冰', '孙义凯',
        '孙子凌', '索京奥', '王朝闻', '王俊豪', '王梦月',
        '王文昌', '王运旺', '王祉盛', '卫学振', '武启航',
        '徐浩文', '许广洋', '许源赫', '薛景文', '张丁文',
        '张静', '张俊飞', '张艳可', '张云翔', '张志恒',
        '赵宝华', '赵家豪', '周政涟', '邹谦慧'
    ];
    
    // DOM元素
    const studentsList = document.getElementById('students');
    const selectedStudent = document.getElementById('selected-student');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    
    // 变量
    let timer = null;
    let isSelecting = false;
    let lastSelectedIndex = -1;
    
    // 初始化学生列表
    function initStudentsList() {
        studentsList.innerHTML = '';
        students.forEach((student, index) => {
            const li = document.createElement('li');
            li.textContent = student;
            li.dataset.index = index;
            studentsList.appendChild(li);
        });
    }
    
    // 随机选择学生
    function randomSelect() {
        // 移除之前的高亮
        if (lastSelectedIndex !== -1) {
            const prevSelected = studentsList.querySelector(`li[data-index="${lastSelectedIndex}"]`);
            if (prevSelected) prevSelected.classList.remove('highlight');
        }
        
        // 随机选择新学生
        const randomIndex = Math.floor(Math.random() * students.length);
        const student = students[randomIndex];
        const studentElement = studentsList.querySelector(`li[data-index="${randomIndex}"]`);
        
        // 高亮显示
        studentElement.classList.add('highlight');
        
        // 更新选中显示
        selectedStudent.textContent = student;
        
        // 记录最后选中的索引
        lastSelectedIndex = randomIndex;
    }
    
    // 开始选择
    function startSelection() {
        if (isSelecting) return;
        
        isSelecting = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        
        // 使用setInterval实现快速切换选择
        timer = setInterval(randomSelect, 100);
    }
    
    // 停止选择
    function stopSelection() {
        if (!isSelecting) return;
        
        clearInterval(timer);
        isSelecting = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        
        // 最终选中的学生
        const finalStudent = students[lastSelectedIndex];
        selectedStudent.textContent = `选中学生: ${finalStudent}`;
    }
    
    // 事件监听
    startBtn.addEventListener('click', startSelection);
    stopBtn.addEventListener('click', stopSelection);
    
    // 初始化
    initStudentsList();
});