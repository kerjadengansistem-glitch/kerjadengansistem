#!/usr/bin/env python3
import argparse
import json
import re
import sys
import urllib.request
from pathlib import Path
from xml.etree import ElementTree as ET

REPO_ROOT = Path(__file__).resolve().parents[1]
ARTICLE_BASE = "https://artikel.kerjadengansistem.web.id/artikel"
SITEMAP_URL = "https://artikel.kerjadengansistem.web.id/sitemap.xml"

TRACKS = {
    "ai": {
        "homepage_panel": "ai-education",
        "homepage_note_class": "text-primary",
        "page": REPO_ROOT / "belajar" / "ai.html",
        "page_note_class": "text-primary",
        "page_total": 4,
        "lessons": {
            1: {"slug": "revolusi-ai-generatif-2026", "title": "Revolusi AI Generatif 2026"},
            2: {"slug": "apa-itu-ai-agent-dan-kenapa-bisnis-mulai-memakainya", "title": "Apa Itu AI Agent dan Kenapa Bisnis Memakainya"},
            3: {"slug": "cara-memilih-tool-ai-yang-tepat", "title": "Cara Memilih Tool AI yang Tepat"},
            4: {"slug": "prompt-workflow-dan-kebiasaan-kerja", "title": "Prompt, Workflow, dan Kebiasaan Kerja"},
            5: {"slug": "rekomendasi-ai-untuk-konten-riset-dan-ide-awal", "title": "Rekomendasi AI untuk Konten, Riset, dan Ide Awal"},
            6: {"slug": "perbedaan-tool-ai-dalam-kecepatan-akurasi-dan-gaya-jawaban", "title": "Perbedaan Tool AI dalam Kecepatan, Akurasi, dan Gaya Jawaban"},
            7: {"slug": "kapan-ai-cocok-untuk-kerja-harian-dan-kapan-tetap-perlu-cek-manual", "title": "Kapan AI Cocok untuk Kerja Harian dan Kapan Tetap Perlu Cek Manual"},
            8: {"slug": "cara-memakai-ai-untuk-email-laporan-caption-dan-presentasi", "title": "Cara Memakai AI untuk Email, Laporan, Caption, dan Presentasi"},
            9: {"slug": "privasi-dan-keamanan-data-saat-menggunakan-ai", "title": "Privasi dan Keamanan Data Saat Menggunakan AI"},
            10: {"slug": "langkah-belajar-ai-untuk-pemula-agar-tidak-bingung", "title": "Langkah Belajar AI untuk Pemula agar Tidak Bingung"},
        },
    },
    "openclaw": {
        "homepage_panel": "openclaw",
        "homepage_note_class": "text-accent-light",
        "page": REPO_ROOT / "belajar" / "openclaw.html",
        "page_note_class": "text-primary",
        "lessons": {
            1: {"slug": "apa-itu-ai-agent-dan-kenapa-bisnis-mulai-memakainya", "title": "Apa Itu AI Agent dan Kenapa Bisnis Memakainya"},
            2: {"slug": "apa-bedanya-openclaw-dengan-chatbot-ai-biasa", "title": "Apa Bedanya OpenClaw dengan Chatbot AI Biasa"},
            3: {"slug": "cara-install-openclaw-dan-kebutuhan-dasarnya", "title": "Cara Install OpenClaw dan Kebutuhan Dasarnya"},
            4: {"slug": "cara-menghubungkan-openclaw-dengan-telegram-atau-web", "title": "Cara Menghubungkan OpenClaw dengan Telegram atau Web"},
            5: {"slug": "fungsi-tools-memory-dan-session-di-openclaw", "title": "Fungsi Tools, Memory, dan Session di OpenClaw"},
            6: {"slug": "use-case-openclaw-untuk-assistant-monitoring-dan-automasi-kerja", "title": "Use Case OpenClaw untuk Assistant, Monitoring, dan Automasi Kerja"},
            7: {"slug": "cara-memberi-instruksi-yang-jelas-agar-agent-bekerja-lebih-tepat", "title": "Cara Memberi Instruksi yang Jelas agar Agent Bekerja Lebih Tepat"},
            8: {"slug": "cara-menyimpan-konteks-dan-membangun-kebiasaan-kerja-agent", "title": "Cara Menyimpan Konteks dan Membangun Kebiasaan Kerja Agent"},
            9: {"slug": "batas-aman-agent-dan-kapan-tetap-perlu-persetujuan-manusia", "title": "Batas Aman Agent dan Kapan Tetap Perlu Persetujuan Manusia"},
            10: {"slug": "contoh-alur-sederhana-agent-dari-permintaan-sampai-hasil", "title": "Contoh Alur Sederhana Agent dari Permintaan sampai Hasil"},
        },
    },
    "n8n": {
        "homepage_panel": "n8n",
        "homepage_note_class": "text-emerald-300",
        "page": REPO_ROOT / "belajar" / "n8n.html",
        "page_note_class": "text-primary",
        "lessons": {
            1: {"slug": "tools-automation-yang-wajib-dikuasai-2026", "title": "Tools Automation yang Wajib Dikuasai 2026"},
            2: {"slug": "cara-install-n8n-dan-memilih-cloud-atau-self-hosted", "title": "Cara Install n8n dan Memilih Cloud atau Self-Hosted"},
            3: {"slug": "apa-itu-workflow-node-trigger-dan-execution-di-n8n", "title": "Apa Itu Workflow, Node, Trigger, dan Execution di n8n"},
            4: {"slug": "fitur-dasar-n8n-dan-fungsi-bagian-utamanya", "title": "Fitur Dasar n8n dan Fungsi Bagian Utamanya"},
            5: {"slug": "use-case-n8n-untuk-operasional-konten-dan-administrasi", "title": "Use Case n8n untuk Operasional, Konten, dan Administrasi"},
            6: {"slug": "cara-menghubungkan-n8n-dengan-google-sheets-whatsapp-email-dan-api", "title": "Cara Menghubungkan n8n dengan Google Sheets, WhatsApp, Email, dan API"},
            7: {"slug": "cara-membaca-data-masuk-dan-mengolahnya-di-n8n", "title": "Cara Membaca Data Masuk dan Mengolahnya di n8n"},
            8: {"slug": "perbedaan-automation-sederhana-multi-step-workflow-dan-ai-workflow-di-n8n", "title": "Perbedaan Automation Sederhana, Multi-Step Workflow, dan AI Workflow di n8n"},
            9: {"slug": "kesalahan-umum-pemula-saat-membuat-workflow-n8n", "title": "Kesalahan Umum Pemula saat Membuat Workflow n8n"},
            10: {"slug": "contoh-use-case-dasar-n8n-untuk-rekap-notifikasi-dan-sinkronisasi", "title": "Contoh Use Case Dasar n8n untuk Rekap, Notifikasi, dan Sinkronisasi"},
        },
    },
}


def get_published_slugs(articles_json: str | None) -> set[str]:
    if articles_json:
        data = json.loads(Path(articles_json).read_text())
        return {item["slug"] for item in data if item.get("slug")}

    with urllib.request.urlopen(SITEMAP_URL, timeout=30) as response:
        xml_data = response.read()
    root = ET.fromstring(xml_data)
    namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    slugs = set()
    for loc in root.findall("sm:url/sm:loc", namespace):
        text = (loc.text or "").strip()
        if "/artikel/" in text:
            slug = text.split("/artikel/")[-1].removesuffix(".html")
            if slug:
                slugs.add(slug)
    return slugs


def article_url(slug: str) -> str:
    return f"{ARTICLE_BASE}/{slug}.html"


def replace_disabled_page_card(html: str, lesson_num: int, title: str, slug: str, note_class: str) -> tuple[str, bool]:
    pattern = re.compile(
        rf'''<div class="learning-card is-disabled">\s*<div class="learning-card-topline">\s*(?P<label><div class="text-xs[^\"]+">Pelajaran {lesson_num:02d} .*?</div>)\s*<span class="learning-badge soon">Segera hadir</span>\s*</div>\s*<div class="learning-card-title">\s*<div>\s*<h3 class="font-display text-xl font-bold text-white">{re.escape(title)}</h3>\s*</div>\s*</div>\s*<p class="text-sm text-gray-400 leading-relaxed">(?P<desc>.*?)</p>\s*<div class="learning-chip-row">\s*(?P<chips>.*?)\s*</div>\s*</div>''',
        re.S,
    )

    def repl(match: re.Match) -> str:
        label = match.group("label")
        desc = match.group("desc")
        chips = match.group("chips").replace(" muted", "")
        return (
            f'<a href="{article_url(slug)}" target="_blank" rel="noopener" class="learning-card">\n'
            f'          <div class="learning-card-topline">\n'
            f'            {label}\n'
            f'            <span class="learning-badge live">Tersedia</span>\n'
            f'          </div>\n'
            f'          <div class="learning-card-title">\n'
            f'            <div>\n'
            f'              <h3 class="font-display text-xl font-bold text-white">{title}</h3>\n'
            f'            </div>\n'
            f'          </div>\n'
            f'          <p class="text-sm text-gray-400 leading-relaxed">{desc}</p>\n'
            f'          <div class="learning-chip-row">\n'
            f'            {chips}\n'
            f'          </div>\n'
            f'          <div class="learning-link-note {note_class}">Baca sekarang →</div>\n'
            f'        </a>'
        )

    new_html, count = pattern.subn(repl, html, count=1)
    return new_html, bool(count)


def replace_disabled_homepage_card(panel_html: str, lesson_num: int, slug: str, note_class: str, note_title: str) -> tuple[str, bool]:
    pattern = re.compile(
        rf'''<div class="learning-card is-disabled">\s*<div class="learning-card-title">\s*(?P<label><div class="text-xs[^\"]+">Pelajaran {lesson_num:02d}</div>)\s*<span class="learning-badge soon">Segera hadir</span>\s*</div>\s*<p class="text-sm text-gray-300 leading-relaxed">(?P<desc>.*?)</p>\s*</div>''',
        re.S,
    )

    def repl(match: re.Match) -> str:
        label = match.group("label")
        desc = match.group("desc")
        return (
            f'<a class="learning-card" href="{article_url(slug)}" target="_blank" rel="noopener noreferrer">\n'
            f'                <div class="learning-card-title">{label}<span class="learning-badge live">Baca sekarang</span></div>\n'
            f'                <p class="text-sm text-gray-300 leading-relaxed">{desc}</p>\n'
            f'                <div class="learning-link-note {note_class}">Materi terkait: {note_title}</div>\n'
            f'              </a>'
        )

    new_html, count = pattern.subn(repl, panel_html, count=1)
    return new_html, bool(count)


def sync_homepage(homepage_path: Path, published_slugs: set[str]) -> bool:
    html = homepage_path.read_text()
    changed = False

    for track in TRACKS.values():
        panel = track["homepage_panel"]
        pattern = re.compile(
            rf'(<div class="learning-panel(?: hidden)?" data-learning-panel="{re.escape(panel)}">.*?<div class="grid grid-cols-1 md:grid-cols-2 gap-3">)(?P<cards>.*?)(\s*</div>\s*</div>\s*</div>)',
            re.S,
        )
        match = pattern.search(html)
        if not match:
            continue
        cards = match.group("cards")
        original_cards = cards
        for lesson_num, meta in track["lessons"].items():
            if meta["slug"] in published_slugs:
                cards, _ = replace_disabled_homepage_card(cards, lesson_num, meta["slug"], track["homepage_note_class"], meta["title"])
        if cards != original_cards:
            html = html[: match.start("cards")] + cards + html[match.end("cards") :]
            changed = True

    if changed:
        homepage_path.write_text(html)
    return changed


def sync_track_page(track_key: str, published_slugs: set[str]) -> bool:
    track = TRACKS[track_key]
    page_path = track["page"]
    html = page_path.read_text()
    changed = False

    for lesson_num, meta in track["lessons"].items():
        if meta["slug"] in published_slugs:
            html, lesson_changed = replace_disabled_page_card(html, lesson_num, meta["title"], meta["slug"], track["page_note_class"])
            changed = changed or lesson_changed

    if track_key == "ai":
        available = sum(1 for lesson_num in range(1, track["page_total"] + 1) if track["lessons"][lesson_num]["slug"] in published_slugs)
        percent = int(round((available / track["page_total"]) * 100))
        estimate = {1: "± 15–25 menit", 2: "± 30–45 menit", 3: "± 40–55 menit", 4: "± 50–70 menit"}.get(available, "± 30–45 menit")

        new_html = re.sub(r'>\d+ dari 4 pelajaran<', f'>{available} dari 4 pelajaran<', html)
        new_html = re.sub(r'>\d+% tersedia sekarang<', f'>{percent}% tersedia sekarang<', new_html)
        new_html = re.sub(r'style="width: \d+%"', f'style="width: {percent}%"', new_html, count=1)
        new_html = re.sub(r'<div class="value">± [^<]+</div>', f'<div class="value">{estimate}</div>', new_html, count=1)
        if new_html != html:
            html = new_html
            changed = True

    if changed:
        page_path.write_text(html)
    return changed


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--articles-json", help="Path to artikel-web/content/articles.json")
    args = parser.parse_args()

    published_slugs = get_published_slugs(args.articles_json)
    if not published_slugs:
        print("No published slugs found.", file=sys.stderr)
        return 1

    changed = False
    changed = sync_homepage(REPO_ROOT / "index.html", published_slugs) or changed
    for track_key in TRACKS:
        changed = sync_track_page(track_key, published_slugs) or changed

    print("Updated learning pages." if changed else "Learning pages already in sync.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
