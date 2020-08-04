import dark_theme from 'antd/dist/dark-theme';

const custom = {
'@primary-color': '#1890ff',
'@secondary-color': '#40a9ff',
'@menu-bg': '#1f1f1f',
'@header_toolbar': '#1f1f1f',
'@divider-color': "rgba(124, 124, 124, 1)",
'@border-color-base': '#7c7c7c',
'@cascader-item-selected-bg': '#e6f7ff',
'@logo-color': 'invert(100%) sepia(100%) saturate(0%) hue-rotate(192deg) brightness(105%) contrast(96%)',
'@logo-br': '#1f1f1f',
}


const dark = Object.assign(dark_theme, custom);

export default dark;