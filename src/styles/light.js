import compact from 'antd/dist/compact-theme';

const custom = {
'@primary-color': '#1da57a',
'@secondary-color': 'rgba(0, 0, 0, 0.65)',
'@layout-header-background': '#fafafa',
'@menu-bg': '#fafafa',
'@layout-slider-background': '#f0f0f0',
'@layout-body-background': '#ffffff',
'@layout-trigger-background': '#7c7c7c',
'@border-color-base': 'rgba(0, 0, 0, 0.06)',
'@cascader-item-selected-bg': '#d8e6df',
'@logo-color': 'invert(50%) sepia(0%) saturate(0%) hue-rotate(182deg) brightness(97%) contrast(91%)',
'@login-bg': '#f0f0f5',
}

const light = Object.assign(compact, custom);

export default light;