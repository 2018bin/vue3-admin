// 引入依赖API
import { reactive, ref } from 'vue'
import { orgList, orgAdd, orgDetail, orgEdit, getRoutes, orgDelete } from "@/api/setting/org";
import router from '@/router'

export function org() {
    const formRef = ref();
    const state = reactive({
        columns: [
            {
                title: '机构名称',
                dataIndex: 'org_name',
                key: 'org_name',
            },
            {
                title: '父机构名称',
                dataIndex: 'parent_org_name',
                key: 'parent_org_name',
            },

            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                slots: { customRender: 'operation' }
            },
        ],
        params: {
            current: 1,
            total: 0,
            pageSize: 10,
            org_name: "",
        },
        data: [],

        form: {
            id: "",
            org_name: "",
            permission: [],
            status: "1",
            adminId:"",
            username: "",
            password: "",
            adminStatus: "1",
        },
        rules: {
            id: [{ required: false, message: 'id 必填', trigger: 'blur' }],
            org_name: [{ required: true, message: 'org_name 必填', trigger: 'blur' }],
            // permission: [{ required: true, message: 'permission 必填', trigger: 'blur' }],
            // parent_id: [{ required: true, message: '上级路由 必填', trigger: 'blur' }],
            username: [{ required: true, message: 'username 必填', trigger: 'blur' }],
            password: [{ required: true, message: 'password 必填', trigger: 'blur' }],
        },

        expandedKeys: [], //默认展开的节点的 key 的数组
        checkedKeys: [], //默认勾选的节点的 key 的数组
        selectedKeys: [],
        tree_data: [],
        defaultProps: {
            children: "children",
            title: "title",
            key: "id",
        },

    });

    // 获取列表
    function getList(e) {
        orgList(state.params).then(res => {
            state.data = res.data.data
            state.params.total = res.data.total
        })
    }

    // 新增
    function addView(e) {
        router.push({
            path: '/setting/org/orgAdd',

        })

    }
    // 权限
    function getRoutesPermission() {

        getRoutes().then((res) => {
            state.tree_data = res.data;

        });
    }
    // 新增
    function add() {

        state.form.permission = state.checkedKeys; //只记录全选的
        formRef.value
            .validate()
            .then(() => {
                orgAdd(state.form).then(res => {
                    router.push({
                        path: '/setting/org/orgList',
                    })
                })
            })

    }
    //编辑
    function editView(row) {
        orgDetail(row).then(res => {
            router.push({
                path: '/setting/org/orgEdit',
                query: { form: JSON.stringify(res.data) }
            })
        })
    }
    //编辑
    function edit() {
        state.form.permission = state.checkedKeys; //只记录全选的
        formRef.value
            .validate()
            .then(() => {
                orgEdit(state.form).then(res => {
                    router.push({
                        path: '/setting/org/orgList',
                    })
                })
            })

    }
    // 删除
    function del(row) {

    }
    return {
        getList,
        addView,
        add,
        getRoutesPermission,
        editView,
        edit,
        del,
        formRef,
        state
    }
}

