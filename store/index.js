export const state = () => ({
    taskList: []
})

export const mutations = {
    add(state, taskContent) {
        state.taskList.push({
            taskContent,
            isDone: false,
            encode: btoa(taskContent)
        })
    },
    toggle(state, task) {
        task.isDone = !task.isDone;
    }
}