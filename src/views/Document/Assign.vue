<template>
  <div>
    <h2 class="text-2xl mb-8">Renseigner un signataire</h2>

    <n-card>
      <n-form :label-width="80" :model="form" :rules="rules" ref="formRef">
        <n-form-item label="Nom" path="name">
          <n-input v-model:value="form.name" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="Adresse E-mail" path="email">
          <n-input type="email" placeholder="Input Age" v-model:value="form.email" />
        </n-form-item>
        <n-form-item>
          <n-button @click="validateForm">Ajouter</n-button>
        </n-form-item>
      </n-form>

      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>Nom du signataire</th>
            <th>Email du signataire</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="signee in signees" :key="signee.key">
            <td>{{ signee.name }}</td>
            <td>{{ signee.email }}</td>
            <td>
              <n-button @click="removeSignee(signee)">
                <n-icon color="red">
                  <trash />
                </n-icon>
              </n-button>
            </td>
          </tr>
        </tbody>
      </n-table>

      <n-button type="primary" class="mt-8" @click="prepare">Continuer</n-button>
    </n-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import { useSignatureStore } from '@/stores/signature'
import { validateEmail } from '@/utils/validators'

import { NButton, NFormItem, NForm, NTable, NCard, NInput, NIcon } from 'naive-ui'
import { Trash } from '@vicons/carbon'

export default defineComponent({
  name: 'Assign',

  components: {
    NButton,
    NFormItem,
    NForm,
    NTable,
    NCard,
    NInput,
    NIcon,
    Trash,
  },

  setup() {
    const signStore = useSignatureStore()
    const signees = computed(() => signStore.signees)
    const router = useRouter()

    const formRef = ref(null)
    const form = ref({
      email: null,
      name: null,
    })

    const rules = {
      email: [
        {
          required: true,
          message: 'Veuillez entrer une adresse E-mail',
          trigger: ['blur', 'input'],
        },
        {
          validator: validateEmail,
          message: 'Veuillez entrer une adresse E-mail valide',
          trigger: ['blur'],
        },
      ],
      name: {
        required: true,
        message: 'Veuillez entrer le nom du destinataire',
        trigger: ['blur', 'input'],
      },
    }

    const prepare = () => {
      if (signStore.signees.length > 0) {
        router.push({ name: 'prepare_document' })
      } else {
        window.$message.error('Vous devez renseigner au moins un signataire')
      }
    }

    const addSignee = () => {
      const key = `${new Date().getTime()}${form.value.email}`
      signStore.addSignee({ key, name: form.value.name, email: form.value.email })
      form.value = { email: null, name: null }
    }

    const removeSignee = (signee:any) => {
      signStore.removeSignee(signee)
    }

    const validateForm = (event:any) => {
      event.preventDefault()
      formRef.value.validate((errors:any) => {
        if (!errors) {
          addSignee()
        } else {
          window.$message.error('Invalid')
        }
      })
    }

    return {
      form,
      rules,
      formRef,
      prepare,
      validateForm,
      signees,
      removeSignee,
    }
  },
})
</script>
