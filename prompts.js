module.exports = [
  {
    type: 'list',
    name: 'multiple',
    message: '是否与多系统交互？',
    choices: [
      { name: '多系统', value: 'muti' },
      { name: '单系统', value: 'sing' },
    ],
    default: 'muti',
  },
  
]