// 引入依赖API
import { reactive, ref } from 'vue'
import { permissionList, permissionAdd, permissionEdit, permissionDelete, permissionRoutes } from "@/api/setting/permission";
import router from '@/router'
// export {state}
export function permission() {
    const formRef = ref();
    const state = reactive({
        columns: [
            {
                title: 'title',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'path',
                dataIndex: 'path',
                key: 'path',
            },
            {
                title: 'component',
                dataIndex: 'component',
                key: 'component',
            },
            {
                title: 'redirect',
                dataIndex: 'redirect',
                key: 'redirect',
            },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                slots: { customRender: 'operation' }
            },
        ],
        data: [],

        form: {
            id: "",
            title: "",
            name: "",
            parent_id: 0,
            path: "",
            component: "",
            redirect: "",
            hidden: "0",
            icon: "",
            display_order: 0,
        },
        option: [
            {
                title: "请选择",
                id: "",
            },
            {
                title: "顶级路由",
                id: 0,
            },
        ],
        rules: {
            id: [{ required: false, message: 'id 必填', trigger: 'blur' }],
            title: [{ required: true, message: '菜单名称 必填', trigger: 'blur' }],
            name: [{ required: true, message: '路由名称 必填', trigger: 'blur' }],
            // parent_id: [{ required: true, message: '上级路由 必填', trigger: 'blur' }],
            path: [{ required: true, message: '路由地址 必填', trigger: 'blur' }],
            component: [{ required: true, message: '映射组件名称 必填', trigger: 'blur' }],
        },

    });

    // 获取列表
    function getList(e) {
        permissionList().then(res => {
            state.data = changeId(res.data)

        })

    }

    // 新增
    function addView(e) {
        router.push({
            path: '/setting/permission/permissionAdd',

        })
    }
    // 新增
    function add() {
        formRef.value
            .validate()
            .then(() => {
                permissionAdd(state.form).then(res => {
                    router.push({
                        path: '/setting/permission/permissionList',
                    })
                })
            })

    }
    //编辑
    function editView(row) {

        let form = {
            id: row.id,
            title: row.title,
            name: row.name,
            parent_id: row.parent_id,
            path: row.path,
            component: row.component,
            redirect: row.redirect,
            hidden: row.hidden,
            icon: row.icon,
            display_order: row.display_order,
        }
        router.push({
            path: '/setting/permission/permissionEdit',
            query: { form: JSON.stringify(form) }
        })

    }
    //编辑
    function edit() {
        formRef.value
            .validate()
            .then(() => {
                permissionEdit(state.form).then(res => {
                    router.push({
                        path: '/setting/permission/permissionList',
                    })
                })
            })

    }
    // 删除
    function del(row) {

    }
    function getParentIds() {
        permissionRoutes().then((res) => {
            state.option = state.option.concat(res.data);
        });
    }

    function changeId(List) {
        for (let i = 0; i < List.length; i++) {
            List[i].key = List[i].id
            if (List[i].children && List[i].children.length) {
                List[i].children = changeId(List[i].children)
            }
        }
        return List
    }

    return {
        getList,
        addView,
        add,
        editView,
        edit,
        del,
        getParentIds,
        formRef,
        state
    }
}

