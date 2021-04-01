/**
 * @author chuzhixin 1204505056@qq.com
 * @description 所有全局配置的状态管理，如无必要请勿修改
 */




const state = () => ({

  //布局种类 horizontal vertical gallery comprehensive common
  layout: 'horizontal',
  //主题名称 default ocean green glory white
  themeName: 'default',
  //是否固定头部
  fixedHeader: true,
  //是否显示顶部进度条
  showProgressBar: true,
  //是否显示多标签页
  showTabsBar: true,
  //是否显示语言选择组件
  showLanguage: true,
  //是否显示刷新组件
  showRefresh: true,
  //是否显示搜索组件
  showSearch: true,
  //是否显示主题组件
  showTheme: true,
  //是否显示通知组件
  showNotice: true,
  //是否显示全屏组件
  showFullScreen: true,
  showTagsBar: true,
  logo: 'vuejs-fill',
  title: '后台',
  collapse: false,
  header: "",
  device: 'desktop',
  language: 'zh',
})
const getters = {
  collapse: (state) => state.collapse,
  device: (state) => state.device,
  header: (state) => state.header,
  language: (state) => state.language,
  layout: (state) => state.layout,
  logo: (state) => state.logo,
  title: (state) => state.title,
  showLanguage: (state) => state.showLanguage,
  showProgressBar: (state) => state.showProgressBar,
  showRefresh: (state) => state.showRefresh,
  showSearch: (state) => state.showSearch,
  showTheme: (state) => state.showTheme,
  showTagsBar: (state) => state.showTagsBar,
  showNotice: (state) => state.showNotice,
  showFullScreen: (state) => state.showFullScreen,
  themeName: (state) => state.themeName,
}
const mutations = {
  toggleCollapse(state) {
    state.collapse = !state.collapse
    localStorage.setItem(
      'vue-admin-beautiful-pro-collapse',
      `{"collapse":${state.collapse}}`
    )
  },
  toggleDevice(state, device) {
    state.device = device
  },
  changeHeader(state, header) {
    state.header = header
  },
  changeLayout(state, layout) {
    state.layout = layout
  },
  handleShowLanguage(state, showLanguage) {
    state.showLanguage = showLanguage
  },
  handleShowProgressBar(state, showProgressBar) {
    state.showProgressBar = showProgressBar
  },
  handleShowRefresh(state, showRefresh) {
    state.showRefresh = showRefresh
  },
  handleShowSearch(state, showSearch) {
    state.showSearch = showSearch
  },
  handleShowTheme(state, showTheme) {
    state.showTheme = showTheme
  },
  handleShowTagsBar(state, showTagsBar) {
    state.showTagsBar = showTagsBar
  },
  handleShowNotice(state, showNotice) {
    state.showNotice = showNotice
  },
  handleShowFullScreen(state, showFullScreen) {
    state.showFullScreen = showFullScreen
  },
  openSideBar(state) {
    state.collapse = false
  },
  foldSideBar(state) {
    state.collapse = true
  },
  changeLanguage(state, language) {
    localStorage.setItem(
      'vue-admin-beautiful-pro-language',
      `{"language":"${language}"}`
    )
    state.language = language
  },
}
const actions = {
  toggleCollapse({ commit }) {
    commit('toggleCollapse')
  },
  toggleDevice({ commit }, device) {
    commit('toggleDevice', device)
  },
  changeHeader({ commit }, header) {
    commit('changeHeader', header)
  },
  changeLayout({ commit }, layout) {
    commit('changeLayout', layout)
  },
  handleShowLanguage: ({ commit }, showLanguage) => {
    commit('handleShowLanguage', showLanguage)
  },
  handleShowProgressBar: ({ commit }, showProgressBar) => {
    commit('handleShowProgressBar', showProgressBar)
  },
  handleShowRefresh: ({ commit }, showRefresh) => {
    commit('handleShowRefresh', showRefresh)
  },
  handleShowSearch: ({ commit }, showSearch) => {
    commit('handleShowSearch', showSearch)
  },
  handleShowTheme: ({ commit }, showTheme) => {
    commit('handleShowTheme', showTheme)
  },
  handleShowTagsBar({ commit }, showTagsBar) {
    commit('handleShowTagsBar', showTagsBar)
  },
  handleShowNotice: ({ commit }, showNotice) => {
    commit('handleShowNotice', showNotice)
  },
  handleShowFullScreen: ({ commit }, showFullScreen) => {
    commit('handleShowFullScreen', showFullScreen)
  },
  openSideBar({ commit }) {
    commit('openSideBar')
  },
  foldSideBar({ commit }) {
    commit('foldSideBar')
  },
  changeLanguage: ({ commit }, language) => {
    commit('changeLanguage', language)
  },
}
export default { state, getters, mutations, actions }
