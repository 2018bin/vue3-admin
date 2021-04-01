// 引入依赖API
import { reactive, ref } from 'vue'
import { adminList, adminAdd, adminEdit, getAllRoles, adminDelete } from "@/api/setting/admin";
import router from '@/router'
// export {state}
export function admin() {
    const formRef = ref();
    const state = reactive({
        columns: [
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '密码',
                dataIndex: 'password',
                key: 'password',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: '角色',
                dataIndex: 'roles',
                key: 'roles',
            },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                slots: { customRender: 'operation' }
            },
        ],
        data: [],
        params: {
            current: 1,
            total: 0,
            pageSize: 10,
            username: "",
        },
        form: {
            id: "",
            username: "",
            password: "",
            status: "1",
            roles: [],

        },
        roleList: [],

        rules: {
            id: [{ required: false, message: 'id 必填', trigger: 'blur' }],
            username: [{ required: true, message: ' 名称 必填', trigger: 'blur' }],
            password: [{ required: true, message: 'password 必填', trigger: 'blur' }],
            // parent_id: [{ required: true, message: '上级路由 必填', trigger: 'blur' }],
            // roles: [{ required: true, message: 'roles 必填', trigger: 'blur' }],
            status: [{ required: true, message: '状态 必填', trigger: 'blur' }],
        },

    });

    // 获取列表
    function getList() {
        adminList(state.params).then(res => {
            state.data = res.data.data
            state.params.total = res.data.total
        })

    }
    //可选角色
    function getAllRolesList() {
        getAllRoles().then(res => {
            state.roleList = res.data
        })
    }

    // 新增
    function addView(e) {
        router.push({
            path: '/setting/admin/adminAdd',

        })
    }
    // 新增
    function add() {
        formRef.value
            .validate()
            .then(() => {
                adminAdd(state.form).then(res => {
                    router.push({
                        path: '/setting/admin/adminList',
                    })
                })
            })

    }
    //编辑
    function editView(row) {

        let form = {
            id: row.id,
            username: row.username,
            status: row.status,
            roles: row.roles,

        }
        router.push({
            path: '/setting/admin/adminEdit',
            query: { form: JSON.stringify(form) }
        })

    }
    //编辑
    function edit() {
        formRef.value
            .validate()
            .then(() => {
                adminEdit(state.form).then(res => {
                    router.push({
                        path: '/setting/admin/adminList',
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
        editView,
        edit,
        del,
        getAllRolesList,
        formRef,
        state
    }
}

