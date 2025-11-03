import React from 'react';
import { Users, Heart, Truck, MessageSquare, DollarSign, Briefcase, Target, Zap, TrendingUp } from 'lucide-react';

const BusinessModelCanvas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">ChainShield.MA - Business Model Canvas</h1>
          <p className="text-lg text-gray-600">Huawei Cloud ICT Competition 2025 | Version 1.0</p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {/* Row 1 */}
          <div className="col-span-1 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4 border-b-4 border-purple-500 pb-2">
              <Users className="w-6 h-6 text-purple-600" />
              <h2 className="font-bold text-lg">Partenaires Clés</h2>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="bg-purple-50 p-2 rounded">
                <p className="font-bold text-purple-700">🔴 Huawei Cloud</p>
                <p className="text-xs text-gray-600">Infrastructure, ModelArts, support tech</p>
              </li>
              <li className="bg-purple-50 p-2 rounded">
                <p className="font-bold text-purple-700">🔍 Shodan</p>
                <p className="text-xs text-gray-600">Données OSINT, scans</p>
              </li>
              <li className="bg-purple-50 p-2 rounded">
                <p className="font-bold text-purple-700">🏦 OCP / INWI</p>
                <p className="text-xs text-gray-600">Clients pilotes, validation</p>
              </li>
              <li className="bg-purple-50 p-2 rounded">
                <p className="font-bold text-purple-700">🎓 Universités</p>
                <p className="text-xs text-gray-600">Recherche IA, stages</p>
              </li>
              <li className="bg-purple-50 p-2 rounded">
                <p className="font-bold text-purple-700">🔐 Cabinets audit</p>
                <p className="text-xs text-gray-600">Partenaires revente</p>
              </li>
            </ul>
          </div>

          <div className="col-span-2 space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4 border-b-4 border-blue-500 pb-2">
                <Zap className="w-6 h-6 text-blue-600" />
                <h2 className="font-bold text-lg">Activités Clés</h2>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Développement plateforme SaaS (Next.js, FastAPI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>R&D algorithme scoring IA (ModelArts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Collecte données OSINT (Shodan, CVE, VirusTotal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Support client & formation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Marketing contenu (blog cybersécurité)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4 border-b-4 border-green-500 pb-2">
                <Heart className="w-6 h-6 text-green-600" />
                <h2 className="font-bold text-lg">Proposition de Valeur</h2>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                  <p className="font-bold text-lg mb-2">🛡️ Sécurité Supply Chain Simplifiée</p>
                  <p className="text-sm">Cartographie 3D + Scoring IA + Monitoring 24/7</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="bg-green-50 p-2 rounded">✅ Visualisation 3D unique (Three.js)</li>
                  <li className="bg-green-50 p-2 rounded">✅ IA explicable (pas de boîte noire)</li>
                  <li className="bg-green-50 p-2 rounded">✅ 3x moins cher que concurrents</li>
                  <li className="bg-green-50 p-2 rounded">✅ Souveraineté données (Huawei Cloud Maroc)</li>
                  <li className="bg-green-50 p-2 rounded">✅ OSINT adapté Afrique du Nord</li>
                  <li className="bg-green-50 p-2 rounded">✅ Résultats en 1h (vs semaines)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-2 space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4 border-b-4 border-orange-500 pb-2">
                <MessageSquare className="w-6 h-6 text-orange-600" />
                <h2 className="font-bold text-lg">Relations Clients</h2>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="bg-orange-50 p-3 rounded">
                  <p className="font-bold text-orange-700">👤 Account Manager Dédié</p>
                  <p className="text-xs text-gray-600">Pour clients Enterprise (banques, gov)</p>
                </li>
                <li className="bg-orange-50 p-3 rounded">
                  <p className="font-bold text-orange-700">💬 Support Chat 24/7</p>
                  <p className="text-xs text-gray-600">Pour clients Pro et Basic</p>
                </li>
                <li className="bg-orange-50 p-3 rounded">
                  <p className="font-bold text-orange-700">🎓 Formations</p>
                  <p className="text-xs text-gray-600">Webinars mensuels sur cybersécurité</p>
                </li>
                <li className="bg-orange-50 p-3 rounded">
                  <p className="font-bold text-orange-700">📧 Newsletter</p>
                  <p className="text-xs text-gray-600">Alertes menaces hebdomadaires</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4 border-b-4 border-red-500 pb-2">
                <Target className="w-6 h-6 text-red-600" />
                <h2 className="font-bold text-lg">Segments Clients</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-700 mb-1">🏦 Banques</p>
                  <p className="text-xs text-gray-600">AttijariWafa, BMCE, CIH</p>
                  <p className="text-xs font-bold text-red-600 mt-1">Plan: Enterprise</p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-700 mb-1">📡 Télécoms</p>
                  <p className="text-xs text-gray-600">INWI, Maroc Telecom</p>
                  <p className="text-xs font-bold text-red-600 mt-1">Plan: Enterprise</p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-700 mb-1">⚡ Industrie</p>
                  <p className="text-xs text-gray-600">OCP, Renault, Pharma</p>
                  <p className="text-xs font-bold text-red-600 mt-1">Plan: Pro</p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-700 mb-1">🏛️ Gouvernement</p>
                  <p className="text-xs text-gray-600">Ministères, agences</p>
                  <p className="text-xs font-bold text-red-600 mt-1">Plan: Enterprise</p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-700 mb-1">🏢 PME Tech</p>
                  <p className="text-xs text-gray-600">Startups, ESN</p>
                  <p className="text-xs font-bold text-red-600 mt-1">Plan: Basic</p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-700 mb-1">🛒 E-commerce</p>
                  <p className="text-xs text-gray-600">Jumia, Marjane Online</p>
                  <p className="text-xs font-bold text-red-600 mt-1">Plan: Pro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-1 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4 border-b-4 border-yellow-500 pb-2">
              <Briefcase className="w-6 h-6 text-yellow-600" />
              <h2 className="font-bold text-lg">Ressources Clés</h2>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="bg-yellow-50 p-2 rounded">
                <p className="font-bold text-yellow-700">👥 Équipe</p>
                <p className="text-xs">5 fondateurs experts</p>
              </li>
              <li className="bg-yellow-50 p-2 rounded">
                <p className="font-bold text-yellow-700">🔴 Huawei Cloud</p>
                <p className="text-xs">ECS, RDS, ModelArts, OBS</p>
              </li>
              <li className="bg-yellow-50 p-2 rounded">
                <p className="font-bold text-yellow-700">🧠 Algorithme IA</p>
                <p className="text-xs">Propriété intellectuelle</p>
              </li>
              <li className="bg-yellow-50 p-2 rounded">
                <p className="font-bold text-yellow-700">📊 Base OSINT</p>
                <p className="text-xs">CVE, Shodan, VT data</p>
              </li>
              <li className="bg-yellow-50 p-2 rounded">
                <p className="font-bold text-yellow-700">💻 Plateforme SaaS</p>
                <p className="text-xs">Next.js + FastAPI</p>
              </li>
            </ul>
          </div>

          <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4 border-b-4 border-pink-500 pb-2">
              <Truck className="w-6 h-6 text-pink-600" />
              <h2 className="font-bold text-lg">Canaux de Distribution</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-pink-50 p-3 rounded">
                <p className="font-bold text-pink-700 mb-1">🌐 Site Web</p>
                <p className="text-xs text-gray-600">chainshield.ma - Inscription directe</p>
              </div>
              <div className="bg-pink-50 p-3 rounded">
                <p className="font-bold text-pink-700 mb-1">🤝 Vente Directe</p>
                <p className="text-xs text-gray-600">Kaouthar + 1 commercial (M6)</p>
              </div>
              <div className="bg-pink-50 p-3 rounded">
                <p className="font-bold text-pink-700 mb-1">📱 LinkedIn</p>
                <p className="text-xs text-gray-600">Contenu cybersécurité + webinars</p>
              </div>
              <div className="bg-pink-50 p-3 rounded">
                <p className="font-bold text-pink-700 mb-1">🎤 Événements</p>
                <p className="text-xs text-gray-600">GITEX, Forum Cybersec Maroc</p>
              </div>
              <div className="bg-pink-50 p-3 rounded">
                <p className="font-bold text-pink-700 mb-1">🔐 Partenaires</p>
                <p className="text-xs text-gray-600">Cabinets audit, ESN</p>
              </div>
              <div className="bg-pink-50 p-3 rounded">
                <p className="font-bold text-pink-700 mb-1">📧 Email Marketing</p>
                <p className="text-xs text-gray-600">Campagnes RSSI cibles</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4 border-b-4 border-indigo-500 pb-2">
                <DollarSign className="w-6 h-6 text-indigo-600" />
                <h2 className="font-bold text-lg">Structure des Coûts</h2>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="font-bold text-indigo-700">💻 Développement</p>
                  <p className="text-xs text-gray-600">Salaires équipe: 15K€/mois</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="font-bold text-indigo-700">🔴 Huawei Cloud</p>
                  <p className="text-xs text-gray-600">Infrastructure: 300€/mois</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="font-bold text-indigo-700">🔍 APIs externes</p>
                  <p className="text-xs text-gray-600">Shodan, VT: 100€/mois</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="font-bold text-indigo-700">📢 Marketing</p>
                  <p className="text-xs text-gray-600">Ads, events: 2K€/mois</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="font-bold text-indigo-700">🏢 Bureau</p>
                  <p className="text-xs text-gray-600">Loyer Casa: 500€/mois</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="font-bold text-indigo-700">⚖️ Légal & Admin</p>
                  <p className="text-xs text-gray-600">Compta, avocat: 300€/mois</p>
                </div>
              </div>
              <div className="mt-4 bg-indigo-100 p-3 rounded text-center">
                <p className="text-sm text-gray-600">Coûts mensuels totaux (M1-6)</p>
                <p className="text-2xl font-bold text-indigo-700">~18.2K€/mois</p>
                <p className="text-xs text-gray-500">Runway 8 mois avec seed 150K€</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4 border-b-4 border-green-500 pb-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <h2 className="font-bold text-lg">Sources de Revenus</h2>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="bg-green-50 p-3 rounded text-center">
                    <p className="font-bold text-green-700">BASIC</p>
                    <p className="text-2xl font-bold text-green-600">99€</p>
                    <p className="text-xs text-gray-600">/mois</p>
                    <p className="text-xs mt-1">50 fournisseurs max</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded text-center border-2 border-green-500">
                    <p className="font-bold text-green-700">PRO ⭐</p>
                    <p className="text-2xl font-bold text-green-600">499€</p>
                    <p className="text-xs text-gray-600">/mois</p>
                    <p className="text-xs mt-1">500 fournisseurs</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded text-center">
                    <p className="font-bold text-green-700">ENTERPRISE</p>
                    <p className="text-2xl font-bold text-green-600">2000€+</p>
                    <p className="text-xs text-gray-600">/mois</p>
                    <p className="text-xs mt-1">Illimité</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                  <p className="text-sm mb-2">💰 Revenus Projetés Année 1:</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="opacity-80">15 clients Basic</p>
                      <p className="font-bold">17.8K€</p>
                    </div>
                    <div>
                      <p className="opacity-80">8 clients Pro</p>
                      <p className="font-bold">47.9K€</p>
                    </div>
                    <div>
                      <p className="opacity-80">3 clients Enterprise</p>
                      <p className="font-bold">72K€</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-green-400 text-center">
                    <p className="text-xs opacity-80">ARR Total</p>
                    <p className="text-3xl font-bold">137.7K€</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-bold text-blue-700 text-sm mb-1">💡 Revenus Additionnels:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Audits ponctuels: 5K€/audit</li>
                    <li>• Formations entreprise: 2K€/jour</li>
                    <li>• API premium pour intégrateurs: 200€/mois</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center">
          <p className="text-2xl font-bold mb-2">🎯 Objectif 2025: Devenir le leader cybersécurité supply chain en Afrique</p>
          <p className="text-sm opacity-90">ChainShield.MA × Huawei Cloud | Casablanca, Morocco</p>
          <p className="text-xs opacity-75 mt-2">kaouthar@chainshield.ma | Novembre 2024</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelCanvas;