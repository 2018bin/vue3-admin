// 引入依赖API
import { reactive } from 'vue'

// export {state}
export function tableFunction() {
    const state = reactive({
        option: {
            rowSelection: {
                selectedRowKeys: [],
                // onChange: onSelectChange(),
            },
            columns: [{
                title: "name",
                dataIndex: "name",
                key: "name",
                slots: { customRender: "name" },
            },
            {
                title: "description",
                dataIndex: "description",
            },
            {
                title: "author",
                dataIndex: "author",
            },
            {
                title: "datetime",
                dataIndex: "datetime",
            },
            {
                title: "operation",
                dataIndex: "operation",
                slots: { customRender: "operation" },
            }],
            pagination: {
                showLessItems: true,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSize: 10,
                current: 1,
                total: 0,
                keywords: "",
                searchInput: null,
                searchedColumn: "",
            },
            query: {},
            loading: false,
        },
        isFormShow:false,

        data: [],
    });
    const List = []
    for (let i = 0; i < 100; i++) {
        List.push({
            id: i + 1,
            name: i + 1 + "a",
            description: '@csentence',
            author: '@cname',
            datetime: '@datetime',
        })
    }

    // 获取列表
    function getList(e) {
        state.option.loading = true;
        let arr = []
        if (e.keywords) {
            for (let i = 0; i < List.length; i++) {
                if (List[i].indexOf(e.keywords) >= 0) {
                    arr.push(List[i]);
                }
            }
        } else {
            arr = List
        }
        let data = arr.slice((e.current - 1) * e.pageSize, e.current * e.pageSize)

        state.option.pagination.total = arr.length;
        state.data = data;
        state.option.loading = false;
        // return {
        //     current: e.current,
        //     data: data,
        //     total: arr.length,
        // }
    }

    // 新增
    function add(e) {

    }
    //编辑
    function edit(row,index) {

    }
    // 删除
    function deleteList(e) {

    }
    // 分页、排序、筛选变化时触发
    function handleTableChange(pagination, filters, sorter, { currentDataSource }) {
        state.option.pagination = pagination
        getList(pagination)
    }
    function onSelectChange(selectedRowKeys) {
        state.option.rowSelection.selectedRowKeys = selectedRowKeys;
    }

    return {
        getList,
        add,
        edit,
        deleteList,
        handleTableChange,
        onSelectChange,
        state
    }
}
// export default tableFunction
