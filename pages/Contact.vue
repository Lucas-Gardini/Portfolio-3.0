<script setup lang="ts">
import { DateTime } from "luxon";
import axios from "axios";
import { AtIcon, BrandWhatsappIcon } from "vue-tabler-icons";

const rules = {
	required: (v: string) => !!v || "Preencha este campo!",
	isEmail: (v: string) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Preencha este campo!",
};

const loading = ref(false);

const data = reactive({
	name: "",
	email: "",
	phone: "",
	message: "",
});

async function onSubmit(isValid: boolean) {
	if (!isValid) return;

	if (canSend()) {
		loading.value = true;
		try {
			// action="https://formsubmit.co/lucasgardini.dias@hotmail.com"
			const sent = await axios.post("https://formsubmit.co/ajax/lucasgardini.dias@hotmail.com", {
				name: data.name,
				email: data.email,
				phone: data.phone,
				message: data.message,
			});

			if (sent.status === 200) {
				localStorage.setItem("lastSent", DateTime.now().toISO());
				alert("Mensagem enviada com sucesso!");
				data.name = "";
				data.email = "";
				data.phone = "";
				data.message = "";
			} else {
				alert("Erro ao enviar mensagem!");
			}
		} catch (error) {
		} finally {
			loading.value = false;
		}
	} else {
		alert(
			`Você deve esperar 20 minutos para enviar outra mensagem!\nVocê pode enviar manualmente para: ${personalData.email}`,
		);
	}
}

function canSend() {
	const lastSent = DateTime.fromISO(localStorage.getItem("lastSent") || "2016-05-25T09:08:34.123");
	return lastSent.plus({ minutes: 20 }).toMillis() < DateTime.now().toMillis();
}
</script>

<template>
	<div class="main app-bg pl-4 pr-4">
		<ClientOnly>
			<Loader v-if="loading" />
			<IlContainer class="app-bg-secondary pb-10 w-full">
				<!-- <div class="animate__animated animate__fadeIn mb-10">
					<h1 class="text-2xl md:text-3xl ml-3 flex flex-row items-center mt-5 mb-5">
						<AtIcon />&nbsp;&nbsp;Minhas redes sociais
					</h1>

					<div class="flex flex-row mt-auto mb-auto">
						<ContactSocialMediaLink tooltip="WhatsApp">
							<template #icon>
								<BrandWhatsappIcon color="#42e35f" />
							</template>
						</ContactSocialMediaLink>
					</div>
				</div> -->

				<div class="animate__animated animate__fadeIn">
					<h1 class="text-2xl md:text-3xl ml-3 flex flex-row items-center mt-5 mb-5">
						<MailIcon />&nbsp;&nbsp;Entre em Contato
					</h1>

					<div class="flex flex-col mt-auto mb-auto">
						<IlForm class="w-full" @submit="onSubmit">
							<div class="grid grid-cols-2 gap-4">
								<IlInput
									v-model="data.name"
									name="name"
									label="Nome"
									class="w-full"
									color="#41f0d1"
									:rules="[rules.required]"
									required
								/>
								<IlInput
									v-model="data.email"
									name="email"
									type="email"
									label="Email"
									class="w-full"
									color="#41f0d1"
									:rules="[rules.isEmail]"
									required
								/>
							</div>

							<div class="grid grid-cols-2 gap-4">
								<IlInput
									v-model="data.phone"
									name="phone"
									label="Telefone"
									class="w-full"
									color="#41f0d1"
									v-maska="'(##) #####-####'"
								/>
								<IlTextarea
									v-model="data.message"
									name="message"
									label="Mensagem"
									:adjust-to-text="true"
									:rules="[rules.required]"
									required
								/>
							</div>
							<IlButton class="mt-5" block color="#41f0d1" type="submit">Enviar</IlButton>
						</IlForm>
					</div>
				</div>
			</IlContainer>
		</ClientOnly>
	</div>
</template>
