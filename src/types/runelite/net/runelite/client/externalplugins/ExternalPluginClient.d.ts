/// <reference path="../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2019 Abex
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.externalplugins {
export class ExternalPluginClient
{
	downloadManifestLite(): PluginHubManifest.ManifestLite;
	downloadManifestFull(): PluginHubManifest.ManifestFull;
	private downloadManifest(name: string, clazz: any): T;
	downloadIcon(plugin: PluginHubManifest.DisplayData): BufferedImage;
			// We don't stream so the lock doesn't block the edt trying to load something at the same time
	getJarURL(plugin: PluginHubManifest.JarData): HttpUrl;
	private static loadCertificate(): Certificate;
	submitPlugins(plugins: Array<string>): void;
	getPluginCounts(): Record<string, number>;
			// CHECKSTYLE:OFF
			// CHECKSTYLE:ON
}
}