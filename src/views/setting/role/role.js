// 引入依赖API
import { reactive, ref } from 'vue'
import { roleList, roleAdd, roleDetail, roleEdit, getRoutes, roleDelete } from "@/api/setting/role";
import router from '@/router'

export function role() {
    const formRef = ref();
    const state = reactive({
        columns: [
            {
                title: '角色名称',
                dataIndex: 'role_name',
                key: 'role_name',
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
            role_name: "",
        },
        data: [],

        form: {
            id: "",
            role_name: "",
            permission: [],
            status: "1",
            adminId:"",
            username: "",
            password: "",
            adminStatus: "1",
        },
        rules: {
            id: [{ required: false, message: 'id 必填', trigger: 'blur' }],
            role_name: [{ required: true, message: 'role_name 必填', trigger: 'blur' }],
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
        roleList(state.params).then(res => {
            state.data = res.data.data
            state.params.total = res.data.total
        })
    }

    // 新增
    function addView(e) {
        router.push({
            path: '/setting/role/roleAdd',

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
                roleAdd(state.form).then(res => {
                    router.push({
                        path: '/setting/role/roleList',
                    })
                })
            })

    }
    //编辑
    function editView(row) {
        roleDetail(row).then(res => {
            router.push({
                path: '/setting/role/roleEdit',
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
                roleEdit(state.form).then(res => {
                    router.push({
                        path: '/setting/role/roleList',
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

