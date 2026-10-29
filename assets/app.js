/* 观澜AI · AI 知识工作台 渲染逻辑 */
(function () {
  "use strict";
  const D = window.WORKBENCH_DATA;
  if (!D) return;

  // 状态
  let selectedCat = "全部";

  // 分类列表：在数据 categories 前面加一个"全部"
  const CATS = ["全部"].concat(D.categories);

  // 工具
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }

  // 计数：某分类下有多少条
  function countByCat(cat) {
    if (cat === "全部") return D.items.length;
    return D.items.filter(function (it) { return it.cat === cat; }).length;
  }
  // 按当前分类筛选
  function filterAll() {
    if (selectedCat === "全部") return D.items.slice();
    return D.items.filter(function (it) { return it.cat === selectedCat; });
  }

  // 渲染分类导航
  function renderNav() {
    const html = CATS.map(function (c) {
      const n = countByCat(c);
      const active = c === selectedCat ? " active" : "";
      return '<button class="nav-tab' + active + '" data-cat="' + esc(c) + '">'
        + esc(c) + '<span class="count">' + n + '</span></button>';
    }).join("");
    $("mainNav").innerHTML = html;
  }

  // 标签维度：把 item.tags 展平成 [{dim, val}]
  function flatTags(it) {
    const out = [];
    if (!it.tags) return out;
    Object.keys(it.tags).forEach(function (dim) {
      (it.tags[dim] || []).forEach(function (v) {
        out.push({ dim: dim, val: v });
      });
    });
    return out;
  }

  // 优先级 → 颜色
  function prioClass(it) {
    if (!it.tags || !it.tags["优先级"]) return "";
    const p = it.tags["优先级"][0];
    return p ? " prio-" + p : "";
  }

  // 渲染卡片
  function cardHTML(it) {
    const tags = flatTags(it);
    const tagHTML = tags.map(function (t) {
      return '<span class="tag tag-' + esc(t.dim) + '">' + esc(t.val) + '</span>';
    }).join("");
    const url = it.url
      ? '<a class="trace-btn" href="' + esc(it.url) + '" target="_blank" rel="noopener">溯源 ↗</a>'
      : '<a class="trace-btn" href="https://www.baidu.com/s?wd='
        + encodeURIComponent(it.title + " " + it.source)
        + '" target="_blank" rel="noopener">溯源 ↗</a>';
    return ''
      + '<article class="card' + prioClass(it) + '" tabindex="0">'
      +   '<div class="c-head">'
      +     '<span class="sub-tag">' + esc(it.sub || it.cat) + '</span>'
      +     '<h3 class="c-title">' + esc(it.title) + '</h3>'
      +   '</div>'
      +   '<p class="c-summary">' + esc(it.summary) + '</p>'
      +   (tagHTML ? '<div class="c-tags">' + tagHTML + '</div>' : '')
      +   '<div class="c-foot">'
      +     '<span class="c-source">' + esc(it.source) + ' · ' + esc(it.date) + '</span>'
      +     '<button class="expand-btn" type="button">展开详情 ▾</button>'
      +   '</div>'
      +   '<div class="c-detail" hidden>' + esc(it.detail || it.summary) + '</div>'
      +   '<div class="c-actions" hidden>' + url + '</div>'
      + '</article>';
  }

  // 渲染内容
  function renderContent() {
    const list = filterAll();
    const c = $("content");
    if (!list.length) {
      c.innerHTML = '<div class="empty">这个分类下还没有内容</div>';
    } else {
      c.innerHTML = list.map(cardHTML).join("");
    }
    $("footCount").textContent = "共 " + list.length + " 条";
  }

  function render() {
    renderNav();
    renderContent();
  }

  // 展开/收起详情
  $("content").addEventListener("click", function (e) {
    const btn = e.target.closest(".expand-btn");
    if (!btn) return;
    const card = btn.closest(".card");
    const detail = card.querySelector(".c-detail");
    const actions = card.querySelector(".c-actions");
    const open = detail.hasAttribute("hidden");
    if (open) {
      detail.removeAttribute("hidden");
      actions.removeAttribute("hidden");
      btn.textContent = "收起 ▴";
      card.classList.add("open");
    } else {
      detail.setAttribute("hidden", "");
      actions.setAttribute("hidden", "");
      btn.textContent = "展开详情 ▾";
      card.classList.remove("open");
    }
  });

  // 键盘展开（回车/空格）
  $("content").addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".card");
    if (!card || e.target.tagName === "A") return;
    e.preventDefault();
    const btn = card.querySelector(".expand-btn");
    if (btn) btn.click();
  });

  // 分类导航点击
  $("mainNav").addEventListener("click", function (e) {
    const tab = e.target.closest(".nav-tab");
    if (!tab) return;
    selectedCat = tab.dataset.cat;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 顶部信息
  $("greeting").textContent = D.greeting || "观澜AI";
  $("slogan").textContent = D.slogan || "AI 知识工作台";
  $("datePill").textContent = D.updated || "";
  $("refreshBtn").title = "数据更新于 " + (D.updated || "");

  // 启动
  render();
})();
