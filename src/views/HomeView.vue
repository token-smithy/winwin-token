<template>
	<div class="container">
		<section id="about" ref="about">
			<about2></about2>
		</section>
		<!-- <section id="socials" ref="socials">
                <socials></socials>
			</section> -->
		<section id="key-features" refs="key-features">
			<key-features></key-features>
		</section>
		<section id="tokenomics" ref="tokenomics">
			<tokenomics3></tokenomics3>
		</section>
		<section id="features" ref="features">
			<features></features>
		</section>
		<section id="team" ref="team">
			<team></team>
		</section>
	</div>
</template>


<script setup>
import Tokenomics from "@/components/Tokenomics.vue";
import Tokenomics3 from "@/components/Tokenomics3.vue";
import KeyFeatures from "@/components/KeyFeatures.vue";
import Features from "@/components/Features.vue";
import Socials from "@/components/Socials.vue";
import HowToBuy from "@/components/HowToBuy.vue";
import About2 from "@/components/About2.vue";
import Team from "@/components/Team.vue";
import {inject, getCurrentInstance} from "vue"

// const instance = getCurrentInstance();

// instance.refs[payLoad].scrollIntoView({ behavior: "smooth" });
</script>