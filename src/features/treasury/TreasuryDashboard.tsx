"use client";

import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  CreditCard, 
  Coins, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  Copy, 
  Lock, 
  Zap,
  TrendingUp,
  Cpu,
  Layers
} from "lucide-react";

interface Plan {
  id: string;
  name: string;
  tier: string;
  price_cents: number;
  currency: string;
  interval: string;
  entitlements: string[];
  max_seats: number;
}

interface Transaction {
  id: string;
  customer_id: string;
  subscription_id?: string;
  amount_cents: number;
  currency: string;
  provider: string;
  status: string;
  description: string;
  idempotency_key: string;
  created_at: string;
}

const DEFAULT_PLANS: Plan[] = [
  {
    id: "plan_adept_monthly",
    name: "Adept",
    tier: "adept",
    price_cents: 2900,
    currency: "USD",
    interval: "monthly",
    entitlements: [
      "Real-time Planetary Ephemeris",
      "Full Nakshatra & Dasha Cycles",
      "Mercury Mahadasha Timelines",
      "Single Seat License",
      "Standard REST API Access"
    ],
    max_seats: 1
  },
  {
    id: "plan_magus_monthly",
    name: "Magus",
    tier: "magus",
    price_cents: 8900,
    currency: "USD",
    interval: "monthly",
    entitlements: [
      "Real-time Planetary Ephemeris",
      "Hermetic & Alchemical Models",
      "Automated Voice & Keep Triage",
      "BoltDB Document & YAML Persistence",
      "5 Team Seats & Sub-Accounts",
      "Priority Webhook & Event Dispatch"
    ],
    max_seats: 5
  },
  {
    id: "plan_enterprise",
    name: "Enterprise Sovereign",
    tier: "enterprise",
    price_cents: 29900,
    currency: "USD",
    interval: "monthly",
    entitlements: [
      "All Magus & Hermetic Features",
      "Dedicated Cloud Run Gen2 Compute",
      "99.99% Availability SLA Guarantee",
      "Real-time Financial Audit Streaming",
      "50 Team Seats & Custom Roles",
      "Custom Payment Provider Routing"
    ],
    max_seats: 50
  }
];

function generateSimulatedCheckout(planId: string) {
  return {
    session_id: "sess_sim_" + Math.random().toString(36).substring(2, 12),
    plan_id: planId,
    status: "simulated_success",
    provider: "in-memory-sandbox",
    checkout_url: typeof window !== "undefined" ? window.location.origin + "/treasury?checkout=simulated" : "/treasury?checkout=simulated",
    timestamp: new Date().toISOString(),
    message: "Client-side sandbox receipt generated cleanly (Pure Static Mode)."
  };
}

export function TreasuryDashboard() {
  const [plans, setPlans] = useState<Plan[]>(DEFAULT_PLANS);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [ledger, setLedger] = useState<Transaction[]>([]);
  const [loadingLedger, setLoadingLedger] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("plan_magus_monthly");
  const [checkoutResult, setCheckoutResult] = useState<any | null>(null);
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Fetch Plans and Ledger
  const refreshFinancialData = async () => {
    setLoadingLedger(true);
    try {
      // 1. Fetch Plans
      const plansRes = await fetch("/api/v1/amra/plans");
      if (plansRes.ok) {
        const data = await plansRes.json();
        if (data.plans && data.plans.length > 0) {
          setPlans(data.plans);
        }
      }
    } catch (e) {
      console.warn("Using fallback local plans", e);
    }

    try {
      // 2. Fetch Ledger
      const ledgerRes = await fetch("/api/v1/amra/ledger?limit=15");
      if (ledgerRes.ok) {
        const data = await ledgerRes.json();
        if (data.ledger) {
          setLedger(data.ledger);
        }
      }
    } catch (e) {
      console.warn("Using fallback ledger telemetry", e);
    } finally {
      setLoadingLedger(false);
    }
  };

  useEffect(() => {
    refreshFinancialData();
  }, []);

  const handleSimulateCheckout = async (planId: string) => {
    setIsProcessingCheckout(true);
    setCheckoutResult(null);

    try {
      const res = await fetch("/api/v1/amra/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan_id: planId,
          customer_id: "cust_demo_" + Math.random().toString(36).substring(7),
          customer_email: "operator@echosh-labs.com",
          success_url: window.location.origin + "/treasury?checkout=success",
          cancel_url: window.location.origin + "/treasury?checkout=cancelled",
          provider: "mock"
        })
      });

      if (res.ok) {
        const data = await res.json();
        setCheckoutResult(data);
      } else {
        setCheckoutResult(generateSimulatedCheckout(planId));
      }
    } catch {
      setCheckoutResult(generateSimulatedCheckout(planId));
    } finally {
      setIsProcessingCheckout(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 via-black/60 to-black p-8 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-xs font-mono text-emerald-400">
              <Coins className="w-3.5 h-3.5" />
              TREASURY & FISCAL TELEMETRY
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono">
              Financial Structure & System Ledger
            </h1>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Real-time audit log, recurring subscription engine, and autonomous payment orchestration layer integrated directly into the core service infrastructure.
            </p>
          </div>

          <button
            onClick={refreshFinancialData}
            disabled={loadingLedger}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-300 font-mono text-xs transition-colors self-start md:self-auto"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loadingLedger ? "animate-spin" : ""}`} />
            Refresh Telemetry
          </button>
        </div>

        {/* Global Fiscal Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-zinc-800/80">
          <div className="space-y-1">
            <span className="text-xs font-mono text-zinc-500">SETTLEMENT ENGINE</span>
            <div className="text-lg font-bold font-mono text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% ACID
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-zinc-500">IDEMPOTENCY CHECK</span>
            <div className="text-lg font-bold font-mono text-zinc-200 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-cyan-400" />
              SHA-256 Verified
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-zinc-500">PAYMENT ADAPTERS</span>
            <div className="text-lg font-bold font-mono text-zinc-200 flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-amber-400" />
              Multi-Gateway
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-zinc-500">IDLE RUNTIME COST</span>
            <div className="text-lg font-bold font-mono text-emerald-400 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              $0.00 / Scale-0
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Plans Matrix */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              Subscription Tiers & Entitlements
            </h2>
            <p className="text-xs text-zinc-400">
              Select a tier to inspect seat limits, compute entitlements, and simulate session checkout.
            </p>
          </div>

          {/* Monthly / Yearly Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start sm:self-auto">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                billingCycle === "monthly"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                billingCycle === "yearly"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Annual (2 Mo. Free)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => {
            const isSelected = selectedPlan === p.id;
            const price = billingCycle === "yearly" 
              ? Math.round((p.price_cents * 10) / 100) 
              : Math.round(p.price_cents / 100);
            const periodLabel = billingCycle === "yearly" ? "/ yr" : "/ mo";

            return (
              <div
                key={p.id}
                onClick={() => setSelectedPlan(p.id)}
                className={`relative flex flex-col justify-between p-6 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "border-emerald-500/80 bg-emerald-950/20 ring-1 ring-emerald-500/50 shadow-lg shadow-emerald-950/40"
                    : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/60"
                }`}
              >
                {p.tier === "magus" && (
                  <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-emerald-500 text-[10px] font-bold font-mono text-black uppercase tracking-wider">
                    Recommended
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white font-mono">{p.name}</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {p.max_seats} {p.max_seats === 1 ? "Seat" : "Seats"}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-mono text-white">${price}</span>
                    <span className="text-xs text-zinc-400 font-mono">{periodLabel}</span>
                  </div>

                  <div className="h-px bg-zinc-800/80 my-4" />

                  <ul className="space-y-2.5">
                    {p.entitlements.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSimulateCheckout(p.id);
                    }}
                    disabled={isProcessingCheckout}
                    className={`w-full py-2 px-4 rounded-lg font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      isSelected
                        ? "bg-emerald-500 hover:bg-emerald-400 text-black shadow"
                        : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
                    }`}
                  >
                    {isProcessingCheckout && selectedPlan === p.id ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Initializing Session...
                      </>
                    ) : (
                      <>
                        <span>Simulate Checkout</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Checkout Session Result Modal / Preview */}
        {checkoutResult && (
          <div className="p-4 rounded-xl border border-emerald-500/40 bg-zinc-950 p-4 font-mono text-xs space-y-2">
            <div className="flex items-center justify-between text-emerald-400 font-bold">
              <span>✔ Checkout Session Initialized</span>
              <button onClick={() => setCheckoutResult(null)} className="text-zinc-500 hover:text-zinc-300">✕</button>
            </div>
            <pre className="p-3 rounded bg-black border border-zinc-800 text-emerald-300 overflow-x-auto">
              {JSON.stringify(checkoutResult, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* Immutable Financial Ledger Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              Immutable Financial Audit Ledger
            </h2>
            <p className="text-xs text-zinc-400">
              ACID transaction ledger tracking all verified revenue events, cryptographic hashes, and provider settlements.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="border-b border-zinc-800 bg-zinc-900/50 text-zinc-400">
                <tr>
                  <th className="py-3 px-4">TRANSACTION ID</th>
                  <th className="py-3 px-4">CUSTOMER</th>
                  <th className="py-3 px-4">AMOUNT</th>
                  <th className="py-3 px-4">GATEWAY</th>
                  <th className="py-3 px-4">IDEMPOTENCY HASH</th>
                  <th className="py-3 px-4">STATUS</th>
                  <th className="py-3 px-4">TIMESTAMP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                {ledger.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-zinc-500">
                      No transactions recorded in ledger yet. Trigger a simulated checkout to record.
                    </td>
                  </tr>
                ) : (
                  ledger.map((tx) => (
                    <tr key={tx.id} className="hover:bg-zinc-900/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-white flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-amber-400" />
                        {tx.id.substring(0, 16)}...
                      </td>
                      <td className="py-3 px-4 text-zinc-400">{tx.customer_id}</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">
                        ${(tx.amount_cents / 100).toFixed(2)} {tx.currency}
                      </td>
                      <td className="py-3 px-4 uppercase text-zinc-400">{tx.provider}</td>
                      <td className="py-3 px-4 font-mono text-[11px] text-zinc-500">
                        <button
                          onClick={() => copyToClipboard(tx.idempotency_key, tx.id)}
                          className="hover:text-emerald-300 inline-flex items-center gap-1"
                        >
                          {tx.idempotency_key.substring(0, 18)}...
                          <Copy className="w-2.5 h-2.5" />
                        </button>
                        {copiedKey === tx.id && <span className="ml-1 text-emerald-400 text-[10px]">Copied!</span>}
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                          {tx.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-zinc-500">
                        {new Date(tx.created_at).toLocaleTimeString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
