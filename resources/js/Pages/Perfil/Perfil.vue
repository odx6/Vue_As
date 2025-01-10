<template lang="">
    
<Template>
    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                        class="max-w-xl"
                    />

                    <UpdatePasswordForm class="max-w-xl" />
                    <DeleteUserForm class="max-w-xl" />

</Template>

</template>
<script setup>
import Template from '@/Layouts/Template.vue';
import UpdatePasswordForm from './migajas/UpdatePasswordForm.vue';
import DeleteUserForm from './migajas/DeleteUserForm.vue';
import UpdateProfileInformationForm from './migajas/UpdateProfileInformationForm.vue';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

</script>
<style lang="">

</style>